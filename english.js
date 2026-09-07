// english.js
// The structured English strands: vocabulary, spelling, sentence structure,
// grammar, the comprehension frame and the paragraph scaffold.
//
// Why these live on a weekly ROTATION rather than all appearing daily: the
// English half of a 45-minute session is 20 minutes. Six strands at three
// minutes each teaches nothing. Reading keeps its 10 minutes every single day
// because volume of real reading outranks everything else; the remaining 10
// rotates so each strand gets a proper block once a week.
//
//   Mon  vocabulary — meet the words
//   Tue  spelling — the pattern, then practice
//   Wed  sentence structure
//   Thu  vocabulary — use the words, plus the roots that build more
//   Fri  grammar
//   Sat  writing studio (paragraph structure)
//   Sun  spelling dictation + vocabulary retrieval

/* ================================================================== */
/*  VOCABULARY — 8 words a week, themed so they stick together        */
/* ================================================================== */
// The child writes their OWN definition, sentence, synonym and antonym first.
// What is stored here is the reference to check against afterwards — comparing
// your own wording to a good one teaches far more than copying it down.

const VOCAB = [
  { wk:1, theme:"Describing precisely", words:[
    { w:"vivid",     d:"very bright, clear and easy to picture",     s:"bright",    a:"dull" },
    { w:"drab",      d:"dull and without colour or interest",        s:"dreary",    a:"colourful" },
    { w:"immense",   d:"extremely large",                            s:"enormous",  a:"tiny" },
    { w:"minute",    d:"extremely small (say it my-NEWT)",           s:"tiny",      a:"huge" },
    { w:"sturdy",    d:"strong and not easily broken",               s:"solid",     a:"flimsy" },
    { w:"fragile",   d:"easily broken or damaged",                   s:"delicate",  a:"tough" },
    { w:"ancient",   d:"very old, from long ago",                    s:"aged",      a:"modern" },
    { w:"gleaming",  d:"shining brightly, usually because it is clean", s:"polished", a:"dull" },
  ]},
  { wk:2, theme:"How things happen", words:[
    { w:"gradual",   d:"happening slowly, a little at a time",       s:"steady",    a:"sudden" },
    { w:"sudden",    d:"happening quickly and without warning",      s:"abrupt",    a:"gradual" },
    { w:"frequent",  d:"happening often",                            s:"regular",   a:"rare" },
    { w:"rare",      d:"not happening often; unusual",               s:"uncommon",  a:"frequent" },
    { w:"constant",  d:"going on all the time without stopping",     s:"continuous",a:"occasional" },
    { w:"temporary", d:"lasting only for a short time",              s:"brief",     a:"permanent" },
    { w:"instant",   d:"happening immediately",                      s:"immediate", a:"delayed" },
    { w:"eventual",  d:"happening in the end, after some time",      s:"final",     a:"immediate" },
  ]},
  { wk:3, theme:"Thinking words", words:[
    { w:"observe",   d:"to watch carefully and notice things",       s:"examine",   a:"ignore" },
    { w:"predict",   d:"to say what you think will happen next",     s:"forecast",  a:"recall" },
    { w:"conclude",  d:"to decide something after thinking it through", s:"determine", a:"guess" },
    { w:"examine",   d:"to look at something closely and in detail", s:"inspect",   a:"glance" },
    { w:"consider",  d:"to think carefully about something",         s:"ponder",    a:"dismiss" },
    { w:"assume",    d:"to believe something is true without checking", s:"suppose", a:"verify" },
    { w:"verify",    d:"to check that something is really true",     s:"confirm",   a:"assume" },
    { w:"reflect",   d:"to think back carefully about something",    s:"contemplate", a:"forget" },
  ]},
  { wk:4, theme:"Feelings, precisely", words:[
    { w:"anxious",   d:"worried and uneasy about what might happen", s:"nervous",   a:"calm" },
    { w:"content",   d:"quietly happy with how things are",          s:"satisfied", a:"discontented" },
    { w:"furious",   d:"extremely angry",                            s:"enraged",   a:"pleased" },
    { w:"curious",   d:"wanting to know or learn about something",   s:"inquisitive", a:"indifferent" },
    { w:"reluctant", d:"not wanting to do something",                s:"unwilling", a:"eager" },
    { w:"eager",     d:"very keen and wanting to do something",      s:"enthusiastic", a:"reluctant" },
    { w:"weary",     d:"very tired, often after a long effort",      s:"exhausted", a:"refreshed" },
    { w:"delighted", d:"very pleased and happy",                     s:"thrilled",  a:"dismayed" },
  ]},
  { wk:5, theme:"Talking and telling", words:[
    { w:"declare",   d:"to say something firmly and openly",         s:"announce",  a:"conceal" },
    { w:"mutter",    d:"to speak quietly so you are hard to hear",   s:"mumble",    a:"shout" },
    { w:"insist",    d:"to say something firmly and refuse to change", s:"demand",  a:"yield" },
    { w:"reply",     d:"to answer",                                  s:"respond",  a:"ask" },
    { w:"announce",  d:"to tell people something officially",        s:"proclaim",  a:"whisper" },
    { w:"argue",     d:"to give reasons for or against something",   s:"debate",    a:"agree" },
    { w:"explain",   d:"to make something clear so others understand", s:"clarify", a:"confuse" },
    { w:"boast",     d:"to talk proudly about yourself",             s:"brag",      a:"downplay" },
  ]},
  { wk:6, theme:"Size and amount", words:[
    { w:"abundant",  d:"there is plenty of it; more than enough",    s:"plentiful", a:"scarce" },
    { w:"scarce",    d:"there is very little of it",                 s:"limited",   a:"abundant" },
    { w:"numerous",  d:"very many",                                  s:"countless", a:"few" },
    { w:"entire",    d:"the whole of something, with nothing missing", s:"complete", a:"partial" },
    { w:"partial",   d:"only a part, not all",                       s:"incomplete",a:"entire" },
    { w:"vast",      d:"extremely large in size or amount",          s:"immense",   a:"small" },
    { w:"slight",    d:"very small in amount or degree",             s:"minor",     a:"considerable" },
    { w:"sufficient",d:"enough for what is needed",                  s:"adequate",  a:"insufficient" },
  ]},
  { wk:7, theme:"Cause and effect", words:[
    { w:"cause",     d:"the thing that makes something else happen", s:"reason",    a:"result" },
    { w:"consequence",d:"what happens as a result of something",     s:"outcome",   a:"cause" },
    { w:"result",    d:"what happens because of something else",     s:"outcome",   a:"cause" },
    { w:"affect",    d:"to change or influence something (a verb)",  s:"influence", a:"ignore" },
    { w:"effect",    d:"the change that happens (a noun)",           s:"result",    a:"cause" },
    { w:"trigger",   d:"to start something happening",               s:"spark",     a:"prevent" },
    { w:"impact",    d:"a strong effect on something",               s:"influence", a:"insignificance" },
    { w:"prevent",   d:"to stop something from happening",           s:"avert",     a:"cause" },
  ]},
  { wk:8, theme:"Comparing", words:[
    { w:"similar",   d:"alike in some way, but not identical",       s:"comparable",a:"different" },
    { w:"resemble",  d:"to look or seem like something else",        s:"mirror",    a:"differ" },
    { w:"contrast",  d:"a clear difference between two things",      s:"difference",a:"similarity" },
    { w:"distinct",  d:"clearly different and easy to tell apart",   s:"separate",  a:"identical" },
    { w:"identical", d:"exactly the same",                           s:"matching",  a:"different" },
    { w:"opposite",  d:"as different as it is possible to be",       s:"contrary",  a:"same" },
    { w:"equivalent",d:"equal in value or meaning",                  s:"equal",     a:"unequal" },
    { w:"vary",      d:"to be different from one another or change", s:"differ",    a:"match" },
  ]},
  { wk:9, theme:"Story words", words:[
    { w:"character", d:"a person or animal in a story",              s:"figure",    a:"—" },
    { w:"setting",   d:"where and when a story takes place",         s:"backdrop",  a:"—" },
    { w:"plot",      d:"the events that make up a story",            s:"storyline", a:"—" },
    { w:"conflict",  d:"the problem or struggle in a story",         s:"struggle",  a:"resolution" },
    { w:"resolve",   d:"to settle or fix a problem",                 s:"settle",    a:"complicate" },
    { w:"narrator",  d:"the voice telling the story",                s:"storyteller", a:"—" },
    { w:"theme",     d:"the big idea or message a story is about",   s:"message",   a:"—" },
    { w:"motive",    d:"the reason a character does something",      s:"reason",    a:"—" },
  ]},
  { wk:10, theme:"Strong and weak", words:[
    { w:"powerful",  d:"having great strength or influence",         s:"mighty",    a:"weak" },
    { w:"feeble",    d:"very weak, without strength",                s:"frail",     a:"strong" },
    { w:"flimsy",    d:"thin and easily broken or torn",             s:"fragile",   a:"sturdy" },
    { w:"mighty",    d:"very strong and impressive",                 s:"powerful",  a:"feeble" },
    { w:"delicate",  d:"easily damaged and needing care",            s:"fragile",   a:"robust" },
    { w:"robust",    d:"strong and healthy; not easily broken",      s:"tough",     a:"delicate" },
    { w:"vulnerable",d:"easily hurt or harmed",                      s:"exposed",   a:"protected" },
    { w:"resilient", d:"able to recover quickly after difficulty",   s:"tough",     a:"fragile" },
  ]},
  { wk:11, theme:"Time words", words:[
    { w:"previous",  d:"coming before this one",                     s:"earlier",   a:"following" },
    { w:"recent",    d:"happening a short time ago",                 s:"latest",    a:"ancient" },
    { w:"eventually",d:"in the end, after a while",                  s:"finally",   a:"immediately" },
    { w:"meanwhile", d:"at the same time as something else",         s:"simultaneously", a:"afterward" },
    { w:"prior",     d:"before something else",                      s:"preceding", a:"subsequent" },
    { w:"afterward", d:"later, following an event",                  s:"subsequently", a:"beforehand" },
    { w:"immediate", d:"happening at once, with no delay",           s:"instant",   a:"delayed" },
    { w:"permanent", d:"lasting forever or for a very long time",    s:"lasting",   a:"temporary" },
  ]},
  { wk:12, theme:"Persuading", words:[
    { w:"convince",  d:"to make someone believe or agree",           s:"persuade",  a:"dissuade" },
    { w:"opinion",   d:"what someone thinks, which others may disagree with", s:"view", a:"fact" },
    { w:"evidence",  d:"facts that show something is true",          s:"proof",     a:"guesswork" },
    { w:"claim",     d:"something you say is true and must support", s:"assertion", a:"proof" },
    { w:"support",   d:"to give reasons or evidence for an idea",    s:"back up",   a:"undermine" },
    { w:"disagree",  d:"to have a different opinion",                s:"differ",    a:"agree" },
    { w:"justify",   d:"to show that something is fair or reasonable", s:"defend",  a:"condemn" },
    { w:"persuade",  d:"to talk someone into believing or doing something", s:"convince", a:"deter" },
  ]},
  { wk:13, theme:"Movement", words:[
    { w:"dash",      d:"to run somewhere very quickly",              s:"sprint",    a:"amble" },
    { w:"stroll",    d:"to walk slowly and in a relaxed way",        s:"amble",     a:"dash" },
    { w:"tumble",    d:"to fall while rolling over",                 s:"topple",    a:"steady" },
    { w:"soar",      d:"to fly or rise high in the air",             s:"climb",     a:"plunge" },
    { w:"creep",     d:"to move slowly and quietly",                 s:"crawl",     a:"charge" },
    { w:"plunge",    d:"to fall or dive downward suddenly",          s:"dive",      a:"soar" },
    { w:"drift",     d:"to move slowly, carried by water or air",    s:"float",     a:"steer" },
    { w:"scurry",    d:"to move quickly with short steps",           s:"scamper",   a:"plod" },
  ]},
  { wk:14, theme:"Information", words:[
    { w:"research",  d:"to look carefully for information",          s:"investigate", a:"assume" },
    { w:"source",    d:"where a piece of information came from",     s:"origin",    a:"—" },
    { w:"fact",      d:"something that can be proved true",          s:"truth",     a:"opinion" },
    { w:"detail",    d:"a small piece of information",               s:"specific",  a:"overview" },
    { w:"summary",   d:"a short account of the main points",         s:"overview",  a:"detail" },
    { w:"specific",  d:"exact and clearly stated",                   s:"precise",   a:"general" },
    { w:"accurate",  d:"correct and free from mistakes",             s:"exact",     a:"inaccurate" },
    { w:"reliable",  d:"able to be trusted to be correct",           s:"dependable",a:"unreliable" },
  ]},
  { wk:15, theme:"Character traits", words:[
    { w:"generous",  d:"willing to give and share freely",           s:"giving",    a:"selfish" },
    { w:"stubborn",  d:"refusing to change your mind",               s:"obstinate", a:"flexible" },
    { w:"honest",    d:"truthful and not deceiving",                 s:"truthful",  a:"dishonest" },
    { w:"loyal",     d:"faithful and standing by someone",           s:"faithful",  a:"disloyal" },
    { w:"cautious",  d:"careful to avoid danger or mistakes",        s:"careful",   a:"reckless" },
    { w:"bold",      d:"brave and willing to take risks",            s:"daring",    a:"timid" },
    { w:"humble",    d:"not proud or boastful about yourself",       s:"modest",    a:"arrogant" },
    { w:"patient",   d:"able to wait calmly without getting annoyed",s:"tolerant",  a:"impatient" },
  ]},
];

/* ================================================================== */
/*  SPELLING — one pattern a week, then Sunday dictation              */
/* ================================================================== */
const SPELLING = [
  { wk:1, pat:"Silent letters: kn, wr, mb",
    rule:"Some letters are written but not said. <b>kn</b> at the start says /n/, <b>wr</b> says /r/, and <b>mb</b> at the end says /m/ — the b stays silent.",
    words:["knee","knife","knot","knowledge","wrist","wrong","wrench","wrinkle","thumb","climb","comb","crumb"] },
  { wk:2, pat:"Long a: ai, ay, a–e",
    rule:"The long <b>a</b> sound is spelled <b>ai</b> in the middle of a word, <b>ay</b> at the end, and <b>a–e</b> when a silent e follows a consonant.",
    words:["rain","plain","afraid","explain","complain","delay","display","betray","escape","mistake","parade","estimate"] },
  { wk:3, pat:"Long e: ea, ee, ie",
    rule:"The long <b>e</b> sound has three common spellings. <b>ie</b> usually follows the rule <i>i before e except after c</i>.",
    words:["reach","season","beneath","appear","between","freedom","succeed","achieve","believe","relief","receive","ceiling"] },
  { wk:4, pat:"Long o: oa, ow, o–e",
    rule:"<b>oa</b> sits in the middle, <b>ow</b> often at the end, and <b>o–e</b> uses a silent e.",
    words:["approach","coast","throat","groan","shadow","borrow","tomorrow","narrow","suppose","explode","remote","envelope"] },
  { wk:5, pat:"Short vowel traps",
    rule:"These words look as though they should have a long vowel, but the sound is short. They simply have to be learned.",
    words:["breath","health","sweat","thread","weather","friend","guess","again","said","measure","pleasant","treasure"] },
  { wk:6, pat:"Commonly misspelled, part one",
    rule:"The most-misspelled words in Grade 5 writing. There is no pattern here — only practice.",
    words:["because","beautiful","believe","different","favourite","finally","February","friend","probably","really","which","would"] },
  { wk:7, pat:"Homophones: their / there / they're",
    rule:"<b>their</b> shows belonging · <b>there</b> is a place · <b>they're</b> is short for <i>they are</i>. Read the sentence aloud with <i>they are</i> to test it.",
    words:["their","there","they're","your","you're","its","it's","whose","who's","to","too","two"] },
  { wk:8, pat:"More homophones",
    rule:"Same sound, different spelling, different meaning. The only test that works is the meaning of the sentence.",
    words:["hear","here","weather","whether","principal","principle","piece","peace","right","write","threw","through"] },
  { wk:9, pat:"Prefixes: un-, re-, dis-, pre-, mis-",
    rule:"A prefix goes on the front and changes the meaning. The base word does <b>not</b> change its spelling — that is why <i>misspell</i> has two s's.",
    words:["unhappy","unusual","rewrite","rebuild","disagree","disappear","preview","prepare","misspell","mistake","unable","recover"] },
  { wk:10, pat:"Adding -ed and -ing (doubling)",
    rule:"With a short vowel and one final consonant, <b>double the consonant</b> before -ed or -ing. Compare <i>hoping</i> (long o) with <i>hopping</i> (short o).",
    words:["stopped","running","planned","swimming","hoping","hopping","beginning","travelled","dropped","shining","winning","clapped"] },
  { wk:11, pat:"Suffixes: -ly, -ful, -less",
    rule:"<b>-ful</b> has only one l. <b>-ly</b> is added to the whole word, so <i>careful</i> + <i>ly</i> = <i>carefully</i>, with two l's.",
    words:["carefully","quickly","finally","suddenly","hopeful","beautiful","wonderful","powerful","careless","helpless","harmless","endless"] },
  { wk:12, pat:"Plurals: -s, -es, -ies and irregulars",
    rule:"Add <b>-es</b> after s, x, ch, sh. A consonant + y becomes <b>-ies</b>. Some words change completely.",
    words:["boxes","wishes","branches","dishes","babies","cities","stories","families","leaves","knives","children","mice"] },
  { wk:13, pat:"-tion and -sion",
    rule:"Both say /shun/. <b>-tion</b> is far more common; <b>-sion</b> often follows an l or an s sound.",
    words:["question","action","direction","attention","invitation","celebration","decision","division","confusion","explosion","tension","mansion"] },
  { wk:14, pat:"Dropping the silent e",
    rule:"When a suffix starts with a vowel, <b>drop the silent e</b>. When it starts with a consonant, keep it.",
    words:["writing","coming","making","having","hoped","judging","arriving","deciding","careful","hopeless","lovely","useful"] },
  { wk:15, pat:"Commonly misspelled, part two",
    rule:"The second set. Look for the part that catches you out and underline just that bit.",
    words:["probably","separate","surprise","tomorrow","until","weird","receive","necessary","definitely","business","interesting","especially"] },
];

/* ================================================================== */
/*  SENTENCE STRUCTURE — Wednesdays                                   */
/* ================================================================== */
const SENTENCE = [
  { wk:1, t:"Complete and incomplete sentences",
    rule:"A sentence needs a <b>subject</b> (who or what) and a <b>verb</b> (what they do), and it must express a whole thought. If it leaves you waiting for more, it is a fragment.",
    items:[["Ran all the way home.","fragment — who ran?"],["The dog ran all the way home.","complete"],["Because it started raining.","fragment — because what?"]] },
  { wk:2, t:"Subject and predicate",
    rule:"The <b>subject</b> is who or what the sentence is about. The <b>predicate</b> is everything said about them, and it always contains the verb.",
    items:[["My younger sister collects stamps. — name the subject","My younger sister"],["The old bridge finally collapsed. — name the predicate","finally collapsed"],["Three noisy crows sat on the fence. — name the subject","Three noisy crows"]] },
  { wk:3, t:"Nouns and verbs",
    rule:"A <b>noun</b> names a person, place, thing or idea. A <b>verb</b> shows an action or a state of being.",
    items:[["The teacher opened the window. — find the verb","opened"],["Courage helped her speak. — find the two nouns","Courage, her (speak is the verb)"],["Rain flooded the narrow street. — find the verb","flooded"]] },
  { wk:4, t:"Adjectives",
    rule:"An <b>adjective</b> describes a noun. A good adjective adds information the reader could not already guess.",
    items:[["The ___ wind rattled the windows. — add an adjective","bitter / howling / freezing"],["She wore a ___ coat. — add one that tells us something","threadbare / borrowed / scarlet"],["Improve: 'It was a nice day.'","warm, still, cloudless — 'nice' says almost nothing"]] },
  { wk:5, t:"Adverbs",
    rule:"An <b>adverb</b> describes a verb — how, when or where something happened. Many end in -ly, but not all.",
    items:[["He closed the door ___. — add an adverb","quietly / slowly / firmly"],["Find the adverb: She answered immediately.","immediately"],["Replace 'walked slowly' with one strong verb","trudged / ambled / shuffled"]] },
  { wk:6, t:"Combining with and, but",
    rule:"Two short sentences that belong together can join with a comma plus <b>and</b> (adding) or <b>but</b> (contrasting).",
    items:[["I finished my homework. I went outside.","I finished my homework, and I went outside."],["The film was long. It was worth it.","The film was long, but it was worth it."],["She practised daily. She still felt nervous.","She practised daily, but she still felt nervous."]] },
  { wk:7, t:"Combining with because, so",
    rule:"<b>because</b> gives the reason and comes before the cause. <b>so</b> gives the result and comes before the effect.",
    items:[["It rained. The match was cancelled. (use 'so')","It rained, so the match was cancelled."],["The match was cancelled. It rained. (use 'because')","The match was cancelled because it rained."],["He was exhausted. He had run ten miles. (use 'because')","He was exhausted because he had run ten miles."]] },
  { wk:8, t:"Combining with although, while",
    rule:"<b>although</b> and <b>while</b> show a contrast inside one sentence. The part they introduce cannot stand alone.",
    items:[["It rained. We still played. (use 'although')","Although it rained, we still played."],["Mia read. Her brother slept. (use 'while')","While Mia read, her brother slept."],["He is young. He is very skilled. (use 'although')","Although he is young, he is very skilled."]] },
  { wk:9, t:"Expanding a sentence",
    rule:"Take a plain sentence and add detail: <b>which one, what kind, how, when, where, why</b>. Add two, not six.",
    items:[["Expand: 'The dog barked.'","The neighbour's old dog barked furiously at the postman."],["Expand: 'She won.'","After months of training, she won the county final by a single point."],["Expand: 'It was cold.'","By late afternoon it was cold enough to see our breath."]] },
  { wk:10, t:"Run-on sentences",
    rule:"A run-on crams two complete thoughts together with no proper join. Fix it with a full stop, a semicolon, or a comma plus a conjunction.",
    items:[["I was tired I went to bed.","I was tired, so I went to bed."],["The bell rang everyone stood up.","The bell rang, and everyone stood up."],["She loves reading she finished three books.","She loves reading; she finished three books."]] },
  { wk:11, t:"Comma splices",
    rule:"A comma alone is <b>not strong enough</b> to join two complete sentences. It needs a conjunction with it, or a stronger mark.",
    items:[["It was late, we went home.","It was late, so we went home."],["He tried hard, he did not win.","He tried hard, but he did not win."],["The room was silent, nobody moved.","The room was silent; nobody moved."]] },
  { wk:12, t:"Compound subjects and predicates",
    rule:"Two subjects can share one verb, and one subject can have two verbs. Both stop you repeating yourself.",
    items:[["Ravi went to the park. Sam went to the park.","Ravi and Sam went to the park."],["She opened the box. She looked inside.","She opened the box and looked inside."],["The cat slept. The dog slept.","The cat and the dog slept."]] },
  { wk:13, t:"Varying sentence length",
    rule:"All-long is exhausting; all-short is choppy. A <b>short sentence after two long ones</b> lands hard. Use it on purpose.",
    items:[["Why does a short sentence stand out most after long ones?","the contrast — the reader's eye has been travelling far, then stops"],["Rewrite as three short sentences: 'He opened the door and saw the snow and it was deeper than he had expected.'","He opened the door. Snow. Deeper than he had expected."],["When is a very short sentence a bad idea?","when everything around it is short too — then nothing stands out"]] },
  { wk:14, t:"Starting sentences differently",
    rule:"If four sentences in a row begin with <i>The</i> or <i>I</i>, the writing drags. Start with an adverb, a phrase or a time.",
    items:[["Rewrite starting with an adverb: 'She slowly opened the letter.'","Slowly, she opened the letter."],["Rewrite starting with a time: 'We left after the storm passed.'","After the storm passed, we left."],["Rewrite starting with a place: 'A fox sat at the end of the garden.'","At the end of the garden sat a fox."]] },
  { wk:15, t:"Editing your own sentences",
    rule:"Read your work <b>aloud</b>. Your ear catches run-ons, repeated openings and missing words that your eye reads straight past.",
    items:[["What does reading aloud catch that reading silently misses?","run-ons, repetition, missing words — the ear notices what the eye fills in"],["Fix: 'Me and him went to the store and we got snacks and then we went home.'","He and I went to the store for snacks, then went home."],["Fix: 'The book was good. The book was long. The book was interesting.'","The book was long but good, and more interesting than I expected."]] },
];

/* ================================================================== */
/*  GRAMMAR — Fridays. Capitalisation through subject-verb agreement. */
/* ================================================================== */
const GRAMMAR = [
  { wk:1, t:"Capital letters",
    rule:"Capitals go on: the first word of a sentence, the word <b>I</b>, and every proper noun — names of people, places, days, months, and titles.",
    items:[["my friend anya moved to new jersey in august.","My friend Anya moved to New Jersey in August."],["on tuesday we read charlotte's web.","On Tuesday we read Charlotte's Web."],["i asked dr. patel about the mississippi river.","I asked Dr. Patel about the Mississippi River."]] },
  { wk:2, t:"End punctuation",
    rule:"A statement ends in a full stop, a question in a question mark, and a strong exclamation in an exclamation mark — used sparingly, or it stops meaning anything.",
    items:[["Where did you put my bag","Where did you put my bag?"],["Watch out","Watch out!"],["She finished the book last night","She finished the book last night."]] },
  { wk:3, t:"Commas in a series",
    rule:"Separate three or more items with commas, and keep the one before <i>and</i> — it stops the last two reading as a pair.",
    items:[["We packed sandwiches apples and juice.","We packed sandwiches, apples, and juice."],["He is quick clever and kind.","He is quick, clever, and kind."],["I invited Mum Dad and my aunt.","I invited Mum, Dad, and my aunt."]] },
  { wk:4, t:"Commas after introductory words",
    rule:"When a sentence opens with an extra word or phrase before the main idea, put a comma after it.",
    items:[["After the storm passed we went outside.","After the storm passed, we went outside."],["However she refused to leave.","However, she refused to leave."],["In the middle of the night the phone rang.","In the middle of the night, the phone rang."]] },
  { wk:5, t:"Apostrophes in contractions",
    rule:"The apostrophe stands where letters have been removed. <i>do not</i> → <i>don't</i>; the apostrophe replaces the o.",
    items:[["they are → ?","they're"],["should not → ?","shouldn't"],["it is → ?","it's (and 'its' with no apostrophe means belonging to it)"]] },
  { wk:6, t:"Apostrophes for belonging",
    rule:"Singular: add <b>'s</b>. Plural already ending in s: add just the <b>apostrophe</b>. Never use an apostrophe simply to make a plural.",
    items:[["the bike belonging to Sam","Sam's bike"],["the coats belonging to the boys","the boys' coats"],["Is 'three apple's' correct?","No — apples. An apostrophe never makes a plural."]] },
  { wk:7, t:"Singular possessive nouns",
    rule:"One owner takes <b>'s</b>, even when the name already ends in s — <i>James's book</i> is correct.",
    items:[["the collar belonging to the dog","the dog's collar"],["the office belonging to Mr. Ross","Mr. Ross's office"],["the roof belonging to the house","the house's roof"]] },
  { wk:8, t:"Plural possessive nouns",
    rule:"Make the noun plural <b>first</b>, then add the apostrophe. Irregular plurals that do not end in s still take <b>'s</b>.",
    items:[["the bags belonging to the students","the students' bags"],["the toys belonging to the children","the children's toys"],["the nests belonging to the birds","the birds' nests"]] },
  { wk:9, t:"Subject pronouns",
    rule:"<b>I, he, she, we, they</b> do the action. Test a pair by removing the other person: <i>Anya and I went</i> → <i>I went</i>. ✓",
    items:[["Anya and (me / I) went to the shop.","I"],["(Him / He) and Sam are cousins.","He"],["(Us / We) students finished early.","We"]] },
  { wk:10, t:"Object pronouns",
    rule:"<b>me, him, her, us, them</b> receive the action. Same test: <i>gave it to me</i> → so <i>gave it to Sam and me</i>.",
    items:[["She gave the tickets to Ravi and (I / me).","me"],["Come with Dad and (I / me).","me"],["The teacher thanked (we / us).","us"]] },
  { wk:11, t:"Pronoun agreement",
    rule:"A pronoun must match what it replaces in number, and it must be obvious <b>which</b> noun it replaces.",
    items:[["Each student must bring (their / his or her) own pen.","his or her — 'each' is singular"],["Why is this unclear: 'Sam told Ravi that he had won.'","'he' could be either boy — name him"],["The team played (its / their) best game.","its — a team is one thing"]] },
  { wk:12, t:"Present, past and future",
    rule:"Do not switch tense mid-paragraph without a reason. Start in the past, stay in the past.",
    items:[["She walked in and sits down.","She walked in and sat down."],["Tomorrow we visited the museum.","Tomorrow we will visit the museum."],["He runs fast and won the race.","He ran fast and won the race."]] },
  { wk:13, t:"Irregular past tense",
    rule:"Most verbs add -ed. A stubborn group changes shape instead, and they are the ones people get wrong.",
    items:[["We (seen / saw) the film yesterday.","saw"],["She has (went / gone) home.","gone"],["I (brang / brought) my lunch.","brought"]] },
  { wk:14, t:"Regular plural nouns",
    rule:"Add <b>-s</b>. Add <b>-es</b> after s, x, ch or sh. A consonant + y becomes <b>-ies</b>.",
    items:[["one box → two ?","boxes"],["one story → three ?","stories"],["one brush → four ?","brushes"]] },
  { wk:15, t:"Subject-verb agreement",
    rule:"A singular subject takes a singular verb. Ignore any phrase sitting between them: <i>The box of markers <b>is</b> on the shelf.</i>",
    items:[["The team of players (is / are) ready.","is"],["My cousins (was / were) late.","were"],["Each of the girls (bring / brings) a snack.","brings"]] },
];

/* ================================================================== */
/*  READING COMPREHENSION FRAME                                       */
/* ================================================================== */
// Applied to every reading block — the week's passage and their own book alike.
const COMPREHENSION = [
  { k:"who",   q:"Who is this about?",              h:"Name the people or characters who matter here." },
  { k:"what",  q:"What happened?",                  h:"The main events, in the order they occurred." },
  { k:"when",  q:"When did it happen?",             h:"A time, a season, a period — or say if the text never tells you." },
  { k:"where", q:"Where did it happen?",            h:"The place, and whether it matters to the story." },
  { k:"why",   q:"Why did it happen?",              h:"The cause, or the reason a character acted." },
  { k:"how",   q:"How did it happen?",              h:"The way it came about, step by step." },
  { k:"main",  q:"What is the main idea?",          h:"One sentence. Not everything that happened — the point of it." },
  { k:"evid",  q:"What in the text proves your answer?", h:"Copy the actual words. This is the habit that matters most." },
  { k:"infer", q:"What can you work out that it never says?", h:"An inference: something true that the writer left for you to notice." },
];

/* ================================================================== */
/*  PARAGRAPH SCAFFOLD                                                */
/* ================================================================== */
const PARAGRAPH = [
  { k:"topic",   t:"Topic sentence",   h:"One sentence saying what this whole paragraph is about. A reader should know where you are going." },
  { k:"detail",  t:"Details",          h:"Two or three sentences that explain or develop the topic sentence." },
  { k:"example", t:"Examples",         h:"Proof. A quotation, a fact, or something that actually happened." },
  { k:"closing", t:"Closing sentence", h:"Round it off — do not simply repeat the topic sentence. Say what it means." },
];

const vocabWeek    = (w) => VOCAB[Math.min(VOCAB.length, Math.max(1, w)) - 1];
const spellingWeek = (w) => SPELLING[Math.min(SPELLING.length, Math.max(1, w)) - 1];
const sentenceWeek = (w) => SENTENCE[Math.min(SENTENCE.length, Math.max(1, w)) - 1];
const grammarWeek  = (w) => GRAMMAR[Math.min(GRAMMAR.length, Math.max(1, w)) - 1];
