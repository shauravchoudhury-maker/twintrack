// make-icons.js — regenerates the app icons from code, so the artwork is
// versioned as source rather than as opaque binaries. Run: node make-icons.js
//
// The mark: a graph-paper ground with two rounded rules of different lengths —
// two children on one grid. Palette matches the app's own tokens.
const fs = require("fs");
const zlib = require("zlib");

const INK = [0x1b, 0x20, 0x27];
const RULE = [0xcb, 0xd8, 0xdf];
const MATH = [0x3e, 0x9d, 0xac];
const ENG = [0xc9, 0x7a, 0x93];

function icon(S) {
  const px = Buffer.alloc(S * S * 4);
  const set = (x, y, [r, g, b], a = 1) => {
    if (x < 0 || y < 0 || x >= S || y >= S) return;
    const i = (y * S + x) * 4;
    px[i]     = Math.round(px[i]     * (1 - a) + r * a);
    px[i + 1] = Math.round(px[i + 1] * (1 - a) + g * a);
    px[i + 2] = Math.round(px[i + 2] * (1 - a) + b * a);
    px[i + 3] = 255;
  };

  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) set(x, y, INK);

  // graph paper
  const step = S / 8, lw = Math.max(1, Math.round(S * 0.005));
  for (let i = 1; i < 8; i++) {
    const p = Math.round(i * step);
    for (let k = 0; k < lw; k++) for (let t = 0; t < S; t++) {
      set(p + k, t, RULE, 0.16);
      set(t, p + k, RULE, 0.16);
    }
  }

  // two rounded bars, antialiased by sampling the rounded-rect distance
  function bar(yTop, w, col) {
    const x0 = S * 0.22, h = S * 0.105, r = h / 2;
    const x1 = x0 + w, y1 = yTop + h;
    const cxa = x0 + r, cxb = x1 - r, cy = yTop + r;
    for (let y = Math.floor(yTop) - 2; y <= Math.ceil(y1) + 2; y++) {
      for (let x = Math.floor(x0) - 2; x <= Math.ceil(x1) + 2; x++) {
        const sx = x + 0.5, sy = y + 0.5;
        let d;                                   // signed distance outside the shape
        if (sx < cxa)      d = Math.hypot(sx - cxa, sy - cy) - r;
        else if (sx > cxb) d = Math.hypot(sx - cxb, sy - cy) - r;
        else               d = Math.abs(sy - cy) - r;
        const a = Math.max(0, Math.min(1, 0.5 - d));   // 1px feather
        if (a > 0) set(x, y, col, a);
      }
    }
  }
  bar(S * 0.36, S * 0.56, MATH);
  bar(S * 0.545, S * 0.40, ENG);

  // PNG: filter byte 0 per scanline, then one zlib stream
  const raw = Buffer.alloc(S * (S * 4 + 1));
  for (let y = 0; y < S; y++) {
    raw[y * (S * 4 + 1)] = 0;
    px.copy(raw, y * (S * 4 + 1) + 1, y * S * 4, (y + 1) * S * 4);
  }
  const chunk = (type, data) => {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td) >>> 0);
    return Buffer.concat([len, td, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(S, 0); ihdr.writeUInt32BE(S, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const T = (() => { const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) { let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c; }
  return t; })();
function crc32(buf) { let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = T[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return c ^ 0xffffffff; }

fs.mkdirSync("icons", { recursive: true });
for (const s of [180, 192, 512]) {
  const f = "icons/icon-" + s + ".png";
  fs.writeFileSync(f, icon(s));
  console.log("wrote", f, fs.statSync(f).size, "bytes");
}
