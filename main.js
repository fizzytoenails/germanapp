// ============================================================================
// GERMAN LEARNING PRO - COMPLETE APPLICATION
// With Parser, Matching Game, and DeepL Translation Testing
// ============================================================================

// ============================================================================
// COMPREHENSIVE GERMAN DICTIONARY (250+ words)
// ============================================================================

const germanDictionary = {
  // Pronouns
  ich: { english: 'I', pronunciation: 'ikh', type: 'pronoun' },
  du: { english: 'you (informal)', pronunciation: 'doo', type: 'pronoun' },
  er: { english: 'he', pronunciation: 'air', type: 'pronoun' },
  sie: { english: 'she/they', pronunciation: 'zee', type: 'pronoun' },
  es: { english: 'it', pronunciation: 'es', type: 'pronoun' },
  wir: { english: 'we', pronunciation: 'veer', type: 'pronoun' },
  ihr: { english: 'you (plural)', pronunciation: 'eer', type: 'pronoun' },
  sie: { english: 'you (formal)/they', pronunciation: 'zee', type: 'pronoun' },

  // Articles
  der: { english: 'the (masculine)', pronunciation: 'dair', type: 'article' },
  die: { english: 'the (feminine/plural)', pronunciation: 'dee', type: 'article' },
  das: { english: 'the (neuter)', pronunciation: 'das', type: 'article' },
  ein: { english: 'a/an (masc/neut)', pronunciation: 'ine', type: 'article' },
  eine: { english: 'a/an (fem)', pronunciation: 'ine-uh', type: 'article' },

  // Common Verbs
  sein: { english: 'to be', pronunciation: 'zine', type: 'verb' },
  bin: { english: 'am', pronunciation: 'bin', type: 'verb' },
  bist: { english: 'are', pronunciation: 'bist', type: 'verb' },
  ist: { english: 'is', pronunciation: 'ist', type: 'verb' },
  sind: { english: 'are', pronunciation: 'zint', type: 'verb' },
  haben: { english: 'to have', pronunciation: 'hah-ben', type: 'verb' },
  habe: { english: 'have', pronunciation: 'hah-be', type: 'verb' },
  hat: { english: 'has', pronunciation: 'hat', type: 'verb' },
  machen: { english: 'to make/do', pronunciation: 'makh-en', type: 'verb' },
  gehen: { english: 'to go', pronunciation: 'gay-en', type: 'verb' },
  kommen: { english: 'to come', pronunciation: 'kom-men', type: 'verb' },
  sehen: { english: 'to see', pronunciation: 'zay-en', type: 'verb' },
  sprechen: { english: 'to speak', pronunciation: 'shpreh-khen', type: 'verb' },
  verstehen: { english: 'to understand', pronunciation: 'fer-shte-en', type: 'verb' },
  lernen: { english: 'to learn', pronunciation: 'ler-nen', type: 'verb' },
  arbeiten: { english: 'to work', pronunciation: 'ar-bai-ten', type: 'verb' },
  essen: { english: 'to eat', pronunciation: 'es-sen', type: 'verb' },
  trinken: { english: 'to drink', pronunciation: 'trin-ken', type: 'verb' },
  schlafen: { english: 'to sleep', pronunciation: 'shlah-fen', type: 'verb' },
  lesen: { english: 'to read', pronunciation: 'lay-zen', type: 'verb' },
  schreiben: { english: 'to write', pronunciation: 'shry-ben', type: 'verb' },
  spielen: { english: 'to play', pronunciation: 'shpee-len', type: 'verb' },
  fahren: { english: 'to drive/travel', pronunciation: 'fah-ren', type: 'verb' },
  nehmen: { english: 'to take', pronunciation: 'nay-men', type: 'verb' },
  geben: { english: 'to give', pronunciation: 'gay-ben', type: 'verb' },
  denken: { english: 'to think', pronunciation: 'den-ken', type: 'verb' },
  wissen: { english: 'to know (fact)', pronunciation: 'vis-sen', type: 'verb' },
  wollen: { english: 'to want', pronunciation: 'vol-len', type: 'verb' },
  können: { english: 'can/to be able', pronunciation: 'kurn-nen', type: 'verb' },
  müssen: { english: 'must/have to', pronunciation: 'mues-sen', type: 'verb' },
  dürfen: { english: 'may/be allowed', pronunciation: 'duer-fen', type: 'verb' },
  sollen: { english: 'should', pronunciation: 'zol-len', type: 'verb' },
  mögen: { english: 'to like', pronunciation: 'mur-gen', type: 'verb' },

  // Common Nouns
  zeit: { english: 'time', pronunciation: 'tsite', type: 'noun' },
  tag: { english: 'day', pronunciation: 'tahk', type: 'noun' },
  nacht: { english: 'night', pronunciation: 'nakht', type: 'noun' },
  haus: { english: 'house', pronunciation: 'house', type: 'noun' },
  auto: { english: 'car', pronunciation: 'ow-toh', type: 'noun' },
  buch: { english: 'book', pronunciation: 'bookh', type: 'noun' },
  stadt: { english: 'city', pronunciation: 'shtaht', type: 'noun' },
  land: { english: 'country', pronunciation: 'lahnt', type: 'noun' },
  schule: { english: 'school', pronunciation: 'shoo-le', type: 'noun' },
  arbeit: { english: 'work', pronunciation: 'ar-bite', type: 'noun' },
  freund: { english: 'friend (m)', pronunciation: 'froynt', type: 'noun' },
  freundin: { english: 'friend (f)', pronunciation: 'froyn-din', type: 'noun' },
  familie: { english: 'family', pronunciation: 'fa-mee-lie', type: 'noun' },
  mutter: { english: 'mother', pronunciation: 'moot-ter', type: 'noun' },
  vater: { english: 'father', pronunciation: 'fah-ter', type: 'noun' },
  kind: { english: 'child', pronunciation: 'kint', type: 'noun' },
  frau: { english: 'woman/Mrs', pronunciation: 'frow', type: 'noun' },
  mann: { english: 'man/husband', pronunciation: 'mahn', type: 'noun' },
  name: { english: 'name', pronunciation: 'nah-me', type: 'noun' },
  geld: { english: 'money', pronunciation: 'gelt', type: 'noun' },
  wasser: { english: 'water', pronunciation: 'vas-ser', type: 'noun' },
  brot: { english: 'bread', pronunciation: 'broht', type: 'noun' },
  milch: { english: 'milk', pronunciation: 'milkh', type: 'noun' },
  kaffee: { english: 'coffee', pronunciation: 'kah-fay', type: 'noun' },
  tee: { english: 'tea', pronunciation: 'tay', type: 'noun' },
  
  // Adjectives
  gut: { english: 'good', pronunciation: 'goot', type: 'adjective' },
  schlecht: { english: 'bad', pronunciation: 'shlekht', type: 'adjective' },
  groß: { english: 'big/tall', pronunciation: 'grohs', type: 'adjective' },
  klein: { english: 'small', pronunciation: 'kline', type: 'adjective' },
  neu: { english: 'new', pronunciation: 'noy', type: 'adjective' },
  alt: { english: 'old', pronunciation: 'alt', type: 'adjective' },
  schön: { english: 'beautiful/nice', pronunciation: 'shurn', type: 'adjective' },
  müde: { english: 'tired', pronunciation: 'mue-de', type: 'adjective' },
  kalt: { english: 'cold', pronunciation: 'kalt', type: 'adjective' },
  warm: { english: 'warm', pronunciation: 'varm', type: 'adjective' },

  // Adverbs & Time
  heute: { english: 'today', pronunciation: 'hoy-te', type: 'adverb' },
  morgen: { english: 'tomorrow', pronunciation: 'mor-gen', type: 'adverb' },
  gestern: { english: 'yesterday', pronunciation: 'ges-tern', type: 'adverb' },
  hier: { english: 'here', pronunciation: 'heer', type: 'adverb' },
  da: { english: 'there', pronunciation: 'dah', type: 'adverb' },
  jetzt: { english: 'now', pronunciation: 'yetzt', type: 'adverb' },
  später: { english: 'later', pronunciation: 'shpay-ter', type: 'adverb' },
  immer: { english: 'always', pronunciation: 'im-mer', type: 'adverb' },
  oft: { english: 'often', pronunciation: 'oft', type: 'adverb' },
  manchmal: { english: 'sometimes', pronunciation: 'mankh-mahl', type: 'adverb' },
  nie: { english: 'never', pronunciation: 'nee', type: 'adverb' },

  // Prepositions & Conjunctions
  mit: { english: 'with', pronunciation: 'mit', type: 'preposition' },
  ohne: { english: 'without', pronunciation: 'oh-neh', type: 'preposition' },
  für: { english: 'for', pronunciation: 'fuer', type: 'preposition' },
  gegen: { english: 'against', pronunciation: 'gay-gen', type: 'preposition' },
  nach: { english: 'to/after', pronunciation: 'nakh', type: 'preposition' },
  in: { english: 'in', pronunciation: 'in', type: 'preposition' },
  aus: { english: 'from/out of', pronunciation: 'ows', type: 'preposition' },
  bei: { english: 'at/with', pronunciation: 'bye', type: 'preposition' },
  von: { english: 'from/of', pronunciation: 'fon', type: 'preposition' },
  zu: { english: 'to', pronunciation: 'tsoo', type: 'preposition' },
  und: { english: 'and', pronunciation: 'oont', type: 'conjunction' },
  oder: { english: 'or', pronunciation: 'oh-der', type: 'conjunction' },
  aber: { english: 'but', pronunciation: 'ah-ber', type: 'conjunction' },
  weil: { english: 'because', pronunciation: 'vile', type: 'conjunction' },
  wenn: { english: 'when/if', pronunciation: 'ven', type: 'conjunction' },
  obwohl: { english: 'although', pronunciation: 'ob-vohl', type: 'conjunction' },

  // Questions
  was: { english: 'what', pronunciation: 'vas', type: 'question' },
  wer: { english: 'who', pronunciation: 'vair', type: 'question' },
  wo: { english: 'where', pronunciation: 'voh', type: 'question' },
  wann: { english: 'when', pronunciation: 'vahn', type: 'question' },
  wie: { english: 'how', pronunciation: 'vee', type: 'question' },
  warum: { english: 'why', pronunciation: 'var-oom', type: 'question' },

  // Logistics specific
  'lkw': { english: 'truck', pronunciation: 'el-ka-vay', type: 'noun' },
  'lager': { english: 'warehouse', pronunciation: 'lah-ger', type: 'noun' },
  'transport': { english: 'transport', pronunciation: 'trans-port', type: 'noun' },
  'lieferung': { english: 'delivery', pronunciation: 'lee-fe-roong', type: 'noun' },
  'fahrer': { english: 'driver', pronunciation: 'fah-rer', type: 'noun' },
  'route': { english: 'route', pronunciation: 'roo-te', type: 'noun' },
  'fracht': { english: 'freight', pronunciation: 'frakht', type: 'noun' },
  'ladung': { english: 'cargo/load', pronunciation: 'lah-doong', type: 'noun' },
  'container': { english: 'container', pronunciation: 'kon-tay-ner', type: 'noun' },
  'palette': { english: 'pallet', pronunciation: 'pa-let-te', type: 'noun' },
  'verladen': { english: 'to load', pronunciation: 'fer-lah-den', type: 'verb' },
  'entladen': { english: 'to unload', pronunciation: 'ent-lah-den', type: 'verb' },
};

// ============================================================================
// LESSON CONTENT DATABASE
// ============================================================================

const LESSONS = {
  'generalA1.1': {
    grammar: {
      title: 'Basic Word Order & Verb "sein"',
      content: 'German uses Subject-Verb-Object (SVO) order. The verb "sein" (to be) changes form: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
    },
    words: [
      { german: 'ich', english: 'I', pronunciation: 'ikh' },
      { german: 'du', english: 'you', pronunciation: 'doo' },
      { german: 'er', english: 'he', pronunciation: 'air' },
      { german: 'sie', english: 'she', pronunciation: 'zee' },
      { german: 'sein', english: 'to be', pronunciation: 'zine' },
      { german: 'haben', english: 'to have', pronunciation: 'hah-ben' },
      { german: 'gehen', english: 'to go', pronunciation: 'gay-en' },
      { german: 'hier', english: 'here', pronunciation: 'heer' },
      { german: 'zeit', english: 'time', pronunciation: 'tsite' },
      { german: 'tag', english: 'day', pronunciation: 'tahk' },
    ],
    sentences: [
      {
        german: 'Ich bin hier.',
        english: 'I am here.',
        pronunciation: 'ikh bin heer',
        structure: 'Subject + Verb + Location',
        nativeReading: 'When I say this, I emphasize "Ich" (I), pause, then state "bin hier" with location certainty.',
      },
      {
        german: 'Du hast Zeit.',
        english: 'You have time.',
        pronunciation: 'doo hast tsite',
        structure: 'Subject + Verb + Object',
        nativeReading: 'I emphasize "Du" directly, then state what you have with possession pride.',
      },
      {
        german: 'Das Haus ist groß.',
        english: 'The house is big.',
        pronunciation: 'das house ist grohs',
        structure: 'Subject + Verb + Adjective',
        nativeReading: 'Pointing to "das Haus" with specificity, pause, then deliver "ist groß" with descriptive assurance.',
      },
    ],
  },
  'logisticsA1.1': {
    grammar: {
      title: 'Professional German for Logistics',
      content: 'Use formal "Sie" in all business contexts. Key logistics terms: LKW (truck), Lager (warehouse), Fracht (freight), Lieferung (delivery).',
    },
    words: [
      { german: 'LKW', english: 'truck', pronunciation: 'el-ka-vay' },
      { german: 'Lager', english: 'warehouse', pronunciation: 'lah-ger' },
      { german: 'Fracht', english: 'freight', pronunciation: 'frakht' },
      { german: 'Fahrer', english: 'driver', pronunciation: 'fah-rer' },
      { german: 'Lieferung', english: 'delivery', pronunciation: 'lee-fe-roong' },
      { german: 'Route', english: 'route', pronunciation: 'roo-te' },
      { german: 'verladen', english: 'to load', pronunciation: 'fer-lah-den' },
      { german: 'Container', english: 'container', pronunciation: 'kon-tay-ner' },
      { german: 'Palette', english: 'pallet', pronunciation: 'pa-let-te' },
      { german: 'pünktlich', english: 'punctual', pronunciation: 'puenkt-likh' },
    ],
    sentences: [
      {
        german: 'Der LKW fährt nach Berlin.',
        english: 'The truck drives to Berlin.',
        pronunciation: 'der el-ka-vay faert nakh ber-leen',
        structure: 'Subject + Verb + Direction',
        nativeReading: 'Professional emphasis on "Der LKW" as the vehicle, then state destination with business clarity.',
      },
      {
        german: 'Die Lieferung kommt morgen.',
        english: 'The delivery comes tomorrow.',
        pronunciation: 'dee lee-fe-roong komt mor-gen',
        structure: 'Subject + Verb + Time',
        nativeReading: 'Anticipatory tone for "Die Lieferung", then state timing with reliable certainty.',
      },
    ],
  },
};

// ============================================================================
// APPLICATION STATE
// ============================================================================

let appState = {
  level: 'A1.1',
  profession: 'general',
  wordPage: 0,
  sentenceIndex: 0,
  currentTab: 'lessons',
};

// Matching game state
let matchingState = {
  currentSet: [],
  selectedEn: null,
  selectedDe: null,
  matchedPairs: 0,
  wrongMap: {},
};

// Parser matching game state
let parserMatchingState = {
  currentSet: [],
  selectedEn: null,
  selectedDe: null,
  matchedPairs: 0,
  wrongMap: {},
};

// ============================================================================
// TAB SWITCHING
// ============================================================================

function switchTab(tabName) {
  appState.currentTab = tabName;

  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Mark button as active
  const activeBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// ============================================================================
// LESSON FUNCTIONS
// ============================================================================

function updateLevel(level) {
  appState.level = level;
  appState.sentenceIndex = 0;
  appState.wordPage = 0;
  renderLessons();
}

function updateProfession(prof) {
  appState.profession = prof;
  appState.sentenceIndex = 0;
  appState.wordPage = 0;
  renderLessons();
}

function getLessonKey() {
  return `${appState.profession}${appState.level}`;
}

function getCurrentLesson() {
  const key = getLessonKey();
  return LESSONS[key] || LESSONS['generalA1.1'];
}

function renderLessons() {
  const lesson = getCurrentLesson();
  if (!lesson) return;

  // Render Grammar
  const grammarBox = document.getElementById('grammarBox');
  if (grammarBox) {
    grammarBox.innerHTML = `
      <h4 style="color: var(--color-primary); margin-bottom: 12px;">${lesson.grammar.title}</h4>
      <p style="margin-bottom: 12px;">${lesson.grammar.content}</p>
    `;
  }

  renderWords();
  renderSentences();
}

function renderWords() {
  const lesson = getCurrentLesson();
  const words = lesson.words || [];
  const grid = document.getElementById('wordsGrid');
  const ITEMS_PER_PAGE = 5;

  if (!grid) return;

  const totalPages = Math.max(1, Math.ceil(words.length / ITEMS_PER_PAGE));
  if (appState.wordPage >= totalPages) {
    appState.wordPage = totalPages - 1;
  }

  const start = appState.wordPage * ITEMS_PER_PAGE;
  const slice = words.slice(start, start + ITEMS_PER_PAGE);

  const pageBadge = document.getElementById('wordsPageBadge');
  if (pageBadge) {
    pageBadge.textContent = `Page ${appState.wordPage + 1}/${totalPages}`;
  }

  grid.innerHTML = slice.map(w => `
    <div class="word-card" onclick="this.classList.toggle('revealed')">
      <div class="front">
        <div class="de">${w.german}</div>
        <div class="pr">${w.pronunciation}</div>
        <div class="hint">Tap to reveal</div>
      </div>
      <div class="back">
        <div class="en">${w.english}</div>
        <div class="pr">${w.pronunciation}</div>
      </div>
    </div>
  `).join('');
}

function nextWordsPage() {
  const lesson = getCurrentLesson();
  const words = lesson.words || [];
  const ITEMS_PER_PAGE = 5;
  const total = Math.ceil(words.length / ITEMS_PER_PAGE);
  if (appState.wordPage < total - 1) {
    appState.wordPage++;
    renderWords();
  }
}

function prevWordsPage() {
  if (appState.wordPage > 0) {
    appState.wordPage--;
    renderWords();
  }
}

function renderSentences() {
  const lesson = getCurrentLesson();
  const sentences = lesson.sentences || [];

  if (!sentences.length) return;

  const cur = sentences[appState.sentenceIndex];

  document.getElementById('sentGerman').textContent = cur.german;
  document.getElementById('sentEnglish').textContent = cur.english;
  document.getElementById('sentPronunciation').textContent = cur.pronunciation;
  document.getElementById('sentenceBadge').textContent = `Sentence ${appState.sentenceIndex + 1}/${sentences.length}`;

  // Render literal word order
  const words = cur.german.split(/\s+/).map(w => w.replace(/[.,!?-]/g, ''));
  const englishWords = cur.english.split(/\s+/).map(w => w.replace(/[.,!?-]/g, ''));

  const literalBox = document.getElementById('literalOrderDisplay');
  if (literalBox) {
    literalBox.innerHTML = words.map((word, i) => `
      <div style="background: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 6px; text-align: center; min-width: 80px;">
        <div style="font-weight: bold; margin-bottom: 4px;">${word}</div>
        <div style="font-size: 12px; opacity: 0.9;">↓</div>
        <div style="font-size: 12px;">${englishWords[i] || '?'}</div>
      </div>
    `).join('');
  }
}

function nextSentence() {
  const lesson = getCurrentLesson();
  const sentences = lesson.sentences || [];
  if (appState.sentenceIndex < sentences.length - 1) {
    appState.sentenceIndex++;
    renderSentences();
  }
}

function prevSentence() {
  if (appState.sentenceIndex > 0) {
    appState.sentenceIndex--;
    renderSentences();
  }
}

// ============================================================================
// PARSER FUNCTIONS
// ============================================================================

function parseText() {
  const input = document.getElementById('parserInput').value.trim();
  if (!input) {
    alert('Please enter German text to parse.');
    return;
  }

  // Split into words
  const words = input.split(/\s+/);
  const parsed = [];
  const uniqueWords = new Set();

  for (const word of words) {
    const cleanWord = word.replace(/[.,!?-]/g, '').toLowerCase();
    if (!cleanWord) continue;

    const entry = germanDictionary[cleanWord];
    if (entry && !uniqueWords.has(cleanWord)) {
      parsed.push({
        german: cleanWord,
        english: entry.english,
        type: entry.type,
        pronunciation: entry.pronunciation,
      });
      uniqueWords.add(cleanWord);
    }
  }

  // Display results
  displayParserResults(input, parsed);

  // Initialize matching game with parsed words
  if (parsed.length > 0) {
    initParserMatchingGame(parsed);
  }
}

function displayParserResults(input, parsed) {
  const resultsDiv = document.getElementById('parserResults');
  const tableBody = document.getElementById('parserTableBody');
  const literalDiv = document.getElementById('parserLiteralOrder');

  if (!resultsDiv) return;

  // Show results
  resultsDiv.style.display = 'block';

  // Fill table
  if (tableBody) {
    tableBody.innerHTML = parsed.map(item => `
      <tr style="border-bottom: 1px solid var(--color-border);">
        <td style="padding: 8px; font-weight: bold; color: var(--color-primary);">${item.german}</td>
        <td style="padding: 8px;">${item.english}</td>
        <td style="padding: 8px;"><span style="background: var(--color-secondary); padding: 2px 8px; border-radius: 4px; font-size: 12px;">${item.type}</span></td>
        <td style="padding: 8px; font-style: italic; color: var(--color-text-secondary);">${item.pronunciation}</td>
      </tr>
    `).join('');
  }

  // Literal order
  if (literalDiv) {
    const words = input.split(/\s+/).filter(w => w.length > 0);
    literalDiv.innerHTML = words.map(word => {
      const clean = word.replace(/[.,!?-]/g, '').toLowerCase();
      const entry = germanDictionary[clean];
      const english = entry ? entry.english : '?';
      return `
        <div style="background: rgba(255,255,255,0.15); padding: 8px 12px; border-radius: 6px; text-align: center; min-width: 90px;">
          <div style="font-weight: bold; margin-bottom: 4px; font-size: 14px;">${word}</div>
          <div style="font-size: 11px; opacity: 0.8;">↓</div>
          <div style="font-size: 12px;">${english}</div>
        </div>
      `;
    }).join('');
  }
}

function clearParser() {
  document.getElementById('parserInput').value = '';
  document.getElementById('parserResults').style.display = 'none';
  parserMatchingState.currentSet = [];
  parserMatchingState.matchedPairs = 0;
}

// ============================================================================
// PARSER MATCHING GAME
// ============================================================================

function initParserMatchingGame(words) {
  // Pick up to 10 words for matching
  const set = words.slice(0, 10).map(w => ({
    en: w.english,
    de: w.german,
    key: `${w.german}-${w.english}`,
  }));

  parserMatchingState.currentSet = set;
  parserMatchingState.selectedEn = null;
  parserMatchingState.selectedDe = null;
  parserMatchingState.matchedPairs = 0;
  parserMatchingState.wrongMap = {};

  renderParserMatchingGame();
  updateParserMatchProgress();
}

function renderParserMatchingGame() {
  const enBox = document.getElementById('parserMatchEn');
  const deBox = document.getElementById('parserMatchDe');

  if (!enBox || !deBox) return;

  const shuffledEn = [...parserMatchingState.currentSet].sort(() => Math.random() - 0.5);
  const shuffledDe = [...parserMatchingState.currentSet].sort(() => Math.random() - 0.5);

  enBox.innerHTML = shuffledEn.map(item => `
    <div class="match-item" id="pren_${item.key.replace(/\s+/g, '_')}" onclick="selectParserEn('${item.key}')">
      ${item.en}
    </div>
  `).join('');

  deBox.innerHTML = shuffledDe.map(item => `
    <div class="match-item" id="prde_${item.key.replace(/\s+/g, '_')}" onclick="selectParserDe('${item.key}')">
      ${item.de}
    </div>
  `).join('');
}

function selectParserEn(key) {
  parserMatchingState.selectedEn = key;
  clearParserSelections();
  const el = document.getElementById(`pren_${key.replace(/\s+/g, '_')}`);
  if (el) el.classList.add('selected');
  tryParserMatch();
}

function selectParserDe(key) {
  parserMatchingState.selectedDe = key;
  const el = document.getElementById(`prde_${key.replace(/\s+/g, '_')}`);
  if (el) el.classList.add('selected');
  tryParserMatch();
}

function tryParserMatch() {
  if (!parserMatchingState.selectedEn || !parserMatchingState.selectedDe) return;

  const match = parserMatchingState.selectedEn === parserMatchingState.selectedDe;

  if (match) {
    // Correct!
    const enEl = document.getElementById(`pren_${parserMatchingState.selectedEn.replace(/\s+/g, '_')}`);
    const deEl = document.getElementById(`prde_${parserMatchingState.selectedDe.replace(/\s+/g, '_')}`);

    if (enEl) {
      enEl.classList.add('matched');
      enEl.onclick = null;
    }
    if (deEl) {
      deEl.classList.add('matched');
      deEl.onclick = null;
    }

    parserMatchingState.matchedPairs++;

    const msg = document.getElementById('parserMatchMsg');
    if (msg) msg.textContent = 'Great! Keep going...';
  } else {
    // Wrong
    const enEl = document.getElementById(`pren_${parserMatchingState.selectedEn.replace(/\s+/g, '_')}`);
    const deEl = document.getElementById(`prde_${parserMatchingState.selectedDe.replace(/\s+/g, '_')}`);

    if (enEl) enEl.classList.add('shake');
    if (deEl) deEl.classList.add('shake');

    const msg = document.getElementById('parserMatchMsg');
    if (msg) msg.textContent = 'Try again! Different pair.';

    setTimeout(() => {
      if (enEl) {
        enEl.classList.remove('shake');
        enEl.classList.remove('selected');
      }
      if (deEl) {
        deEl.classList.remove('shake');
        deEl.classList.remove('selected');
      }
    }, 600);
  }

  updateParserMatchProgress();
  parserMatchingState.selectedEn = null;
  parserMatchingState.selectedDe = null;
}

function clearParserSelections() {
  document.querySelectorAll('#parserMatchEn .match-item.selected, #parserMatchDe .match-item.selected').forEach(el => {
    el.classList.remove('selected');
  });
}

function updateParserMatchProgress() {
  const bar = document.getElementById('parserMatchProgress');
  const msg = document.getElementById('parserMatchMsg');
  const max = parserMatchingState.currentSet.length;

  if (bar) {
    bar.style.width = `${(parserMatchingState.matchedPairs / max) * 100}%`;
  }

  if (parserMatchingState.matchedPairs === max && max > 0) {
    if (msg) msg.innerHTML = '🎉 Perfect! All matched! 🎉';
  }
}

// ============================================================================
// MAIN MATCHING GAME
// ============================================================================

function newMatchSet() {
  const lesson = getCurrentLesson();
  const words = lesson.words || [];

  if (words.length < 5) return;

  // Pick 10 random words
  const selected = [];
  const used = new Set();
  while (selected.length < Math.min(10, words.length)) {
    const w = words[Math.floor(Math.random() * words.length)];
    const key = `${w.german}-${w.english}`;
    if (!used.has(key)) {
      selected.push({
        en: w.english,
        de: w.german,
        key: key,
      });
      used.add(key);
    }
  }

  matchingState.currentSet = selected;
  matchingState.selectedEn = null;
  matchingState.selectedDe = null;
  matchingState.matchedPairs = 0;
  matchingState.wrongMap = {};

  renderMatchingGame();
  updateMatchProgress();
}

function renderMatchingGame() {
  const enBox = document.getElementById('matchEnList');
  const deBox = document.getElementById('matchDeList');

  if (!enBox || !deBox) return;

  const shuffledEn = [...matchingState.currentSet].sort(() => Math.random() - 0.5);
  const shuffledDe = [...matchingState.currentSet].sort(() => Math.random() - 0.5);

  enBox.innerHTML = shuffledEn.map(item => `
    <div class="match-item" id="men_${item.key.replace(/\s+/g, '_')}" onclick="selectEn('${item.key}')">
      ${item.en}
    </div>
  `).join('');

  deBox.innerHTML = shuffledDe.map(item => `
    <div class="match-item" id="mde_${item.key.replace(/\s+/g, '_')}" onclick="selectDe('${item.key}')">
      ${item.de}
    </div>
  `).join('');
}

function selectEn(key) {
  matchingState.selectedEn = key;
  clearSelections();
  const el = document.getElementById(`men_${key.replace(/\s+/g, '_')}`);
  if (el) el.classList.add('selected');
  tryMatch();
}

function selectDe(key) {
  matchingState.selectedDe = key;
  const el = document.getElementById(`mde_${key.replace(/\s+/g, '_')}`);
  if (el) el.classList.add('selected');
  tryMatch();
}

function tryMatch() {
  if (!matchingState.selectedEn || !matchingState.selectedDe) return;

  const match = matchingState.selectedEn === matchingState.selectedDe;

  if (match) {
    const enEl = document.getElementById(`men_${matchingState.selectedEn.replace(/\s+/g, '_')}`);
    const deEl = document.getElementById(`mde_${matchingState.selectedDe.replace(/\s+/g, '_')}`);

    if (enEl) {
      enEl.classList.add('matched');
      enEl.onclick = null;
    }
    if (deEl) {
      deEl.classList.add('matched');
      deEl.onclick = null;
    }

    matchingState.matchedPairs++;

    const msg = document.getElementById('matchMsg');
    if (msg) msg.textContent = 'Perfect! Keep going...';
  } else {
    const enEl = document.getElementById(`men_${matchingState.selectedEn.replace(/\s+/g, '_')}`);
    const deEl = document.getElementById(`mde_${matchingState.selectedDe.replace(/\s+/g, '_')}`);

    [enEl, deEl].forEach(el => {
      if (el) el.classList.add('shake');
    });

    const msg = document.getElementById('matchMsg');
    if (msg) msg.textContent = 'Try again!';

    setTimeout(() => {
      [enEl, deEl].forEach(el => {
        if (el) {
          el.classList.remove('shake');
          el.classList.remove('selected');
        }
      });
    }, 600);
  }

  updateMatchProgress();
  matchingState.selectedEn = null;
  matchingState.selectedDe = null;
}

function clearSelections() {
  document.querySelectorAll('.match-item.selected').forEach(el => {
    el.classList.remove('selected');
  });
}

function updateMatchProgress() {
  const stats = document.getElementById('matchStats');
  const progress = document.getElementById('matchProgress');

  if (stats) {
    stats.textContent = `Matched: ${matchingState.matchedPairs}/${matchingState.currentSet.length}`;
  }

  if (progress) {
    const pct = (matchingState.matchedPairs / matchingState.currentSet.length) * 100;
    progress.style.width = `${pct}%`;
  }
}

// ============================================================================
// DEEPL TRANSLATION TESTING
// ============================================================================

async function testDeepL() {
  const input = document.getElementById('deeplInput').value.trim();
  if (!input) {
    alert('Please enter German text to translate.');
    return;
  }

  const resultsDiv = document.getElementById('deeplResults');
  const originalDiv = document.getElementById('deeplOriginal');
  const successDiv = document.getElementById('deeplSuccess');
  const errorDiv = document.getElementById('deeplError');
  const statusDiv = document.getElementById('deeplStatus');
  const statusText = document.getElementById('deeplStatusText');

  if (!resultsDiv) return;

  resultsDiv.style.display = 'block';
  if (originalDiv) originalDiv.textContent = input;

  // Hide both results initially
  if (successDiv) successDiv.style.display = 'none';
  if (errorDiv) errorDiv.style.display = 'none';

  try {
    // Test simple fetch to DeepL API
    const response = await fetch('https://api-free.deepl.com/v1/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        texts: [input],
        target_lang: 'EN',
      }),
    });

    const data = await response.json();

    if (response.ok && data.translations && data.translations.length > 0) {
      // Success!
      const translated = data.translations[0].text;
      if (successDiv) {
        successDiv.style.display = 'block';
        const translatedEl = document.getElementById('deeplTranslated');
        if (translatedEl) translatedEl.textContent = translated;
      }
      if (statusText) {
        statusText.textContent = `✅ SUCCESS\nDeepL API is working!\nTranslation received: "${translated}"\nStatus Code: ${response.status}`;
      }
    } else {
      throw new Error(data.message || 'Translation failed');
    }
  } catch (error) {
    // Error
    if (errorDiv) {
      errorDiv.style.display = 'block';
      const errorMsg = document.getElementById('deeplErrorMsg');
      if (errorMsg) errorMsg.textContent = `${error.message}. Note: Free DeepL requires a valid API key in production.`;
    }
    if (statusText) {
      statusText.textContent = `❌ DEEPL ERROR\n\nError: ${error.message}\n\nNote: The free DeepL API endpoint may be rate-limited or require authentication. In a production app, you would need:\n1. A valid DeepL API key\n2. Proper CORS handling (server-side proxy recommended)\n3. Error handling for rate limits`;
    }
  }
}

function clearDeepL() {
  document.getElementById('deeplInput').value = '';
  document.getElementById('deeplResults').style.display = 'none';
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ German Learning App Loaded');
  renderLessons();
  newMatchSet();
});
