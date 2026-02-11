
(function(){
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
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
          navLinks.classList.remove('open');
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
