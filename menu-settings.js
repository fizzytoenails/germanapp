
(function(){
  const NAV_LINKS = [
    ['index.html', 'Home'],
    ['german_matching_game.html', 'Vocabulary'],
    ['german_grammar_game.html', 'Sentence Match'],
    ['typing_practice.html', 'Typing'],
    ['dictionary.html', 'Dictionary'],
    ['fundamentals.html', 'Time & Alphabet'],
    ['number_time_match.html', 'Number/Time Match'],
    ['grammar_guide.html', 'Grammar Guide'],
    ['verb_forms.html', 'Verb Forms'],
    ['article_prefix_practice.html', 'Articles'],
    ['prefix_suffix_builder.html', 'Prefixes & Suffixes'],
    ['case_overview.html', 'Case Overview'],
    ['category_match.html', 'Category Match'],
    ['falling_match.html', 'Falling Match'],
    ['german_2048.html', '2048'],
    ['translate_parse.html', 'Translate']
  ];

  function injectGlobalUiStyles() {
    if (document.getElementById('dt-global-ui')) return;
    const style = document.createElement('style');
    style.id = 'dt-global-ui';
    style.textContent = `
      html, body { overflow-x: hidden !important; }
      .brand { text-decoration: none !important; }
      .nav { z-index: 5000 !important; }
      .nav-links { z-index: 5002 !important; }
      .settings-fab { z-index: 1300 !important; }
      .settings-panel { z-index: 1301 !important; }
      body.theme-dark .nav {
        background: rgba(10, 17, 32, 0.9) !important;
        border-color: rgba(148, 163, 184, 0.25) !important;
      }
    `;
    document.head.appendChild(style);
  }

  const MATCH_PAGES = new Set([
    'german_matching_game.html',
    'german_grammar_game.html',
    'number_time_match.html',
    'category_match.html',
    'article_prefix_practice.html',
    'verb_forms.html',
    'case_overview.html'
  ]);

  function injectMatchUiStyles() {
    if (document.getElementById('dt-match-ui')) return;
    const style = document.createElement('style');
    style.id = 'dt-match-ui';
    style.textContent = `
      body.dt-match-unified {
        background: radial-gradient(1100px 480px at 20% -10%, rgba(95, 104, 255, 0.28), transparent 60%),
                    radial-gradient(1000px 420px at 90% -20%, rgba(0, 190, 255, 0.18), transparent 60%),
                    #070f22 !important;
        color: #e8eefc !important;
      }
      body.dt-match-unified .hero,
      body.dt-match-unified .panel,
      body.dt-match-unified .card {
        background: rgba(11, 22, 47, 0.88) !important;
        border: 1px solid rgba(119, 142, 196, 0.24) !important;
        border-radius: 24px !important;
        box-shadow: 0 18px 45px rgba(0, 6, 20, 0.45) !important;
      }
      body.dt-match-unified .lead,
      body.dt-match-unified p,
      body.dt-match-unified .message,
      body.dt-match-unified .hint,
      body.dt-match-unified .note {
        color: #a9b8da !important;
      }
      body.dt-match-unified .stats .stat,
      body.dt-match-unified .stat {
        background: rgba(40, 55, 92, 0.62) !important;
        border: 1px solid rgba(119, 142, 196, 0.2) !important;
      }
      body.dt-match-unified .board {
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 16px !important;
      }
      body.dt-match-unified .column,
      body.dt-match-unified .col {
        background: rgba(33, 47, 78, 0.74) !important;
        border: 1px solid rgba(119, 142, 196, 0.2) !important;
        border-radius: 20px !important;
      }
      body.dt-match-unified .word-card,
      body.dt-match-unified .phrase-card,
      body.dt-match-unified .item {
        background: rgba(10, 24, 49, 0.96) !important;
        border: 1px solid rgba(116, 136, 185, 0.2) !important;
        border-radius: 18px !important;
        color: #e8eefc !important;
      }
      body.dt-match-unified .word-card.selected,
      body.dt-match-unified .phrase-card.selected,
      body.dt-match-unified .item.selected {
        border-color: #7f87ff !important;
        background: rgba(89, 93, 173, 0.34) !important;
      }
      body.dt-match-unified .word-card.matched,
      body.dt-match-unified .phrase-card.matched,
      body.dt-match-unified .item.matched {
        border-color: #17b66b !important;
        background: rgba(23, 182, 107, 0.18) !important;
      }
      body.dt-match-unified .word-card.wrong,
      body.dt-match-unified .phrase-card.wrong,
      body.dt-match-unified .item.wrong {
        border-color: #ef5656 !important;
        background: rgba(239, 86, 86, 0.16) !important;
      }
      body.dt-match-unified .btn,
      body.dt-match-unified .secondary-btn,
      body.dt-match-unified .primary-btn,
      body.dt-match-unified .controls button,
      body.dt-match-unified #listenBtn,
      body.dt-match-unified #matchListenBtn,
      body.dt-match-unified #hintBtn,
      body.dt-match-unified #matchHintBtn,
      body.dt-match-unified #nextBtn,
      body.dt-match-unified #nextMatchBtn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        border-radius: 14px !important;
        border: 1px solid rgba(133, 158, 226, 0.26) !important;
        background: linear-gradient(135deg, #7f6cff 0%, #39b8ff 100%) !important;
        color: #ffffff !important;
        font-weight: 800 !important;
        min-height: 42px !important;
        padding: 10px 16px !important;
      }
      body.dt-match-unified .dt-match-actionbar {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 10px !important;
        align-items: center !important;
        margin-top: 8px !important;
      }
      body.dt-match-unified .controls,
      body.dt-match-unified .actions,
      body.dt-match-unified .btns {
        gap: 10px !important;
      }
      body.dt-match-unified .toggle,
      body.dt-match-unified .controls label {
        background: rgba(40, 55, 92, 0.56) !important;
        border: 1px solid rgba(119, 142, 196, 0.2) !important;
        border-radius: 12px !important;
      }
      body.dt-match-unified #left,
      body.dt-match-unified #right,
      body.dt-match-unified #germanWords,
      body.dt-match-unified #englishWords,
      body.dt-match-unified #germanPhrases,
      body.dt-match-unified #englishPhrases {
        display: grid !important;
        gap: 10px !important;
      }
      @media (max-width: 860px) {
        body.dt-match-unified .board {
          grid-template-columns: repeat(2, minmax(160px, 1fr)) !important;
          gap: 10px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function normalizeMatchButtons(page) {
    if (!MATCH_PAGES.has(page)) return;
    const soundBtn = document.getElementById('matchListenBtn') || document.getElementById('listenBtn');
    const hintBtn = document.getElementById('matchHintBtn') || document.getElementById('hintBtn');
    const nextBtn = document.getElementById('nextMatchBtn') || document.getElementById('nextBtn');
    const skipBtn = document.getElementById('skipBtn');
    const homeBtn = document.getElementById('homeBtnFooter');
    if (soundBtn) soundBtn.textContent = 'Sound';
    if (hintBtn) hintBtn.textContent = 'Hint';
    if (nextBtn) {
      nextBtn.textContent = 'Next Round';
      nextBtn.style.display = 'inline-flex';
    }
    if (skipBtn) skipBtn.style.display = 'none';
    if (homeBtn) homeBtn.style.display = 'none';
    if (soundBtn && hintBtn && nextBtn) {
      const holder = soundBtn.parentElement;
      if (holder && hintBtn.parentElement === holder && nextBtn.parentElement === holder) {
        holder.classList.add('dt-match-actionbar');
      }
    }
  }

  function normalizeMatchIcons(page) {
    if (!MATCH_PAGES.has(page)) return;
    document.querySelectorAll('.icon-btn').forEach((icon) => {
      const t = (icon.getAttribute('title') || '').toLowerCase();
      if (t.includes('listen') || t.includes('sound')) {
        icon.setAttribute('title', 'Sound');
      } else if (t.includes('hint') || t.includes('answer')) {
        icon.setAttribute('title', 'Hint');
      }
    });
  }

  function startMatchUiObserver(page) {
    if (!MATCH_PAGES.has(page)) return;
    const run = () => {
      normalizeMatchButtons(page);
      normalizeMatchIcons(page);
    };
    run();
    // Bounded follow-up passes catch dynamic render updates without long-lived observers.
    setTimeout(run, 150);
    setTimeout(run, 500);
    setTimeout(run, 1200);
  }

  function currentPage() {
    const path = window.location.pathname || '';
    return path.split('/').pop() || 'index.html';
  }

  function ensureNavLinks(navLinks) {
    const existingByHref = new Map();
    navLinks.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href') || '';
      existingByHref.set(href, a);
    });
    NAV_LINKS.forEach(([href, label]) => {
      if (!existingByHref.has(href)) {
        const a = document.createElement('a');
        a.href = href;
        a.textContent = label;
        navLinks.appendChild(a);
      }
    });
    const page = currentPage();
    navLinks.querySelectorAll('a').forEach((a) => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href === page);
    });
  }

  function positionFloatingMenu(menuToggle, navLinks) {
    const rect = menuToggle.getBoundingClientRect();
    const menuWidth = Math.min(300, Math.max(210, Math.floor(window.innerWidth * 0.78)));
    navLinks.style.position = 'fixed';
    navLinks.style.zIndex = '5002';
    navLinks.style.width = `${menuWidth}px`;
    navLinks.style.maxHeight = '70vh';
    navLinks.style.overflowY = 'auto';
    navLinks.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - 20)}px`;
    navLinks.style.left = `${Math.max(8, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8))}px`;
  }

  function applyThemeLocal(theme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = theme === 'dark' || (theme === 'system' && prefersDark);
    document.body.classList.toggle('theme-dark', useDark);
  }
  if (typeof window.applyTheme !== 'function') {
    window.applyTheme = applyThemeLocal;
  }

  
  function initTimer() {
    const timerToggle = document.getElementById('timerToggle');
    const sessionTimeEl = document.getElementById('sessionTime');
    const todayTimeEl = document.getElementById('todayTime');
    const streakEl = document.getElementById('streakCount');
    const timerNote = document.getElementById('timerNote');

    let sessionSeconds = 0;
    let timerInterval = null;

    function formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
      const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    function dateKey(date = new Date()) {
      return date.toISOString().slice(0, 10);
    }

    function getTodaySeconds() {
      const storedDate = localStorage.getItem('dt-last-date');
      const today = dateKey();
      if (storedDate !== today) {
        localStorage.setItem('dt-last-date', today);
        localStorage.setItem('dt-today-seconds', '0');
        return 0;
      }
      return Number(localStorage.getItem('dt-today-seconds') || 0);
    }

    function setTodaySeconds(value) {
      localStorage.setItem('dt-today-seconds', String(value));
    }

    function updateStreakOnStart() {
      const lastSessionDate = localStorage.getItem('dt-last-session-date');
      const today = dateKey();
      const yesterday = dateKey(new Date(Date.now() - 86400000));
      let streak = Number(localStorage.getItem('dt-streak') || 0);
      if (lastSessionDate === today) return streak;
      if (lastSessionDate === yesterday) {
        streak += 1;
      } else {
        streak = 1;
      }
      localStorage.setItem('dt-streak', String(streak));
      return streak;
    }

    function updateStreakDisplay() {
      const streak = Number(localStorage.getItem('dt-streak') || 0);
      if (streakEl) streakEl.textContent = `${streak} day${streak === 1 ? '' : 's'}`;
    }

    function updateTimerUI() {
      if (sessionTimeEl) sessionTimeEl.textContent = formatTime(sessionSeconds);
      if (todayTimeEl) todayTimeEl.textContent = formatTime(getTodaySeconds());
      updateStreakDisplay();
    }

    function checkBreakNotice() {
      const today = dateKey();
      if (sessionSeconds >= 1800) {
        const lastNotice = localStorage.getItem('dt-break-notice');
        if (lastNotice !== today && timerNote) {
          timerNote.textContent = '30 minutes reached. Consider a break and switch tools.';
          localStorage.setItem('dt-break-notice', today);
        }
      }
    }

    function startTimer() {
      if (timerInterval) return;
      updateStreakOnStart();
      if (timerToggle) timerToggle.textContent = 'Pause';
      timerInterval = setInterval(() => {
        sessionSeconds += 1;
        const todaySeconds = getTodaySeconds() + 1;
        setTodaySeconds(todaySeconds);
        updateTimerUI();
        checkBreakNotice();
      }, 1000);
    }

    function stopTimer() {
      if (!timerInterval) return;
      clearInterval(timerInterval);
      timerInterval = null;
      if (timerToggle) timerToggle.textContent = 'Start';
      localStorage.setItem('dt-last-session-date', dateKey());
    }

    if (timerToggle) {
      timerToggle.addEventListener('click', () => {
        if (timerInterval) {
          stopTimer();
        } else {
          startTimer();
        }
      });
    }

    updateTimerUI();
  }

  function initMenuAndSettings() {
    injectGlobalUiStyles();
    const page = currentPage();
    if (MATCH_PAGES.has(page)) {
      document.body.classList.add('dt-match-unified');
      injectMatchUiStyles();
      startMatchUiObserver(page);
    }
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      ensureNavLinks(navLinks);
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        positionFloatingMenu(menuToggle, navLinks);
        navLinks.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
          navLinks.classList.remove('open');
        }
      });
      window.addEventListener('resize', () => {
        if (navLinks.classList.contains('open')) {
          positionFloatingMenu(menuToggle, navLinks);
        }
      });
    }

    const settingsFab = document.getElementById('settingsFab');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsTheme = document.getElementById('settingsTheme');
    const debugBox = document.getElementById('deeplDebug');
    const debugTestBtn = document.getElementById('debugTestBtn');
    const debugClearBtn = document.getElementById('debugClearBtn');

    if (settingsFab && settingsPanel) {
      settingsFab.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsPanel.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!settingsPanel.contains(e.target) && !settingsFab.contains(e.target)) {
          settingsPanel.classList.remove('open');
        }
      });
    }

    if (settingsTheme) {
      const storedTheme = localStorage.getItem('dt-theme') || 'system';
      settingsTheme.value = storedTheme;
      if (typeof window.applyTheme === 'function') {
        window.applyTheme(storedTheme);
      }
      settingsTheme.addEventListener('change', (e) => {
        localStorage.setItem('dt-theme', e.target.value);
        if (typeof window.applyTheme === 'function') {
          window.applyTheme(e.target.value);
        }
      });
    }

    function updateDebugBox(text) {
      if (!debugBox) return;
      debugBox.textContent = text;
    }

    if (debugBox) {
      const lastError = localStorage.getItem('dt-deepl-last-error');
      updateDebugBox(lastError ? `DeepL status: ${lastError}` : 'DeepL status: open Translate page.');
    }

    if (debugClearBtn) {
      debugClearBtn.addEventListener('click', () => {
        localStorage.removeItem('dt-translate-cache');
        localStorage.removeItem('dt-deepl-last-error');
        updateDebugBox('DeepL status: cache cleared.');
      });
    }

    if (debugTestBtn) {
      debugTestBtn.addEventListener('click', () => {
        if (typeof window.callDeepL === 'function' && typeof window.DEEPL_KEY === 'string') {
          const input = document.getElementById('sourceInput');
          if (!input || !input.value.trim()) {
            updateDebugBox('DeepL status: paste text first.');
            return;
          }
          updateDebugBox('DeepL status: testing...');
          window.callDeepL([input.value.trim()], window.DEEPL_KEY).then(() => {
            updateDebugBox('DeepL status: OK.');
          }).catch((err) => {
            updateDebugBox('DeepL status: error - ' + (err?.message || 'unknown'));
          });
        } else {
          updateDebugBox('DeepL status: open Translate page to test.');
        }
      });
    }
  }

  initTimer();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenuAndSettings);
  } else {
    initMenuAndSettings();
  }
})();
