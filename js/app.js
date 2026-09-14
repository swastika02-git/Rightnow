(function () {
  'use strict';

  // ==========================================================================
  // DOM Elements
  // ==========================================================================
  const screens = document.querySelectorAll('.screen');

  // Topbar Navigation & Jurisdiction
  const navBrandHome = document.getElementById('nav-brand-home');
  const btnOpenQuickcheck = document.getElementById('btn-open-quickcheck');
  const btnOpenVault = document.getElementById('btn-open-vault');
  const btnTriggerSos = document.getElementById('btn-trigger-sos');
  const navVaultCount = document.getElementById('nav-vault-count');
  const countrySelect = document.getElementById('country-select');
  const regionSelect = document.getElementById('region-select');

  // Home Screen
  const btnHomeQuickcheck = document.getElementById('btn-home-quickcheck');
  const homeContactCard = document.getElementById('home-contact-card');
  const contactStatusTitle = document.getElementById('contact-status-title');
  const contactStatusSub = document.getElementById('contact-status-sub');
  const contactStatusBtnText = document.getElementById('contact-status-btn-text');
  const btnOpenContacts = document.getElementById('btn-open-contacts');
  const btnHomeOpenVault = document.getElementById('btn-home-open-vault');

  // Encounter Screen
  const encounterHeadline = document.getElementById('encounter-headline');
  const encounterJurisdictionChip = document.getElementById('encounter-jurisdiction-chip');
  const encounterConfidenceBadge = document.getElementById('encounter-confidence-badge');
  const encounterSummarySteps = document.getElementById('encounter-summary-steps');
  const btnEndEncounter = document.getElementById('btn-end-encounter');
  const btnStickyEnd = document.getElementById('btn-sticky-end');
  const btnEncounterAlert = document.getElementById('btn-encounter-alert');
  const btnEncounterRecord = document.getElementById('btn-encounter-record');
  const recordBtnTitle = document.getElementById('record-btn-title');
  const recordBtnSub = document.getElementById('record-btn-sub');
  const recordTimer = document.getElementById('record-timer');
  const recordingSubcontrols = document.getElementById('recording-subcontrols');
  const btnRecordPause = document.getElementById('btn-record-pause');
  const pauseBtnLabel = document.getElementById('pause-btn-label');
  const btnRecordStop = document.getElementById('btn-record-stop');
  const emergencyStatusMsg = document.getElementById('emergency-status-msg');

  // Script (SAY THIS)
  const phraseSwitcherList = document.getElementById('phrase-switcher-list');
  const scriptMainText = document.getElementById('script-main-text');
  const scriptContext = document.getElementById('script-context');
  const btnCopyScript = document.getElementById('btn-copy-script');
  const copyBtnLabel = document.getElementById('copy-btn-label');
  const btnSpeakScript = document.getElementById('btn-speak-script');
  const speakBtnLabel = document.getElementById('speak-btn-label');
  const btnPrevPhrase = document.getElementById('btn-prev-phrase');
  const btnNextPhrase = document.getElementById('btn-next-phrase');
  const phraseIndexIndicator = document.getElementById('phrase-index-indicator');
  const scriptToast = document.getElementById('script-toast');

  // DO, AVOID, KNOW, AFTER
  const encounterDoList = document.getElementById('encounter-do-list');
  const encounterAvoidList = document.getElementById('encounter-avoid-list');
  const stateRuleBadge = document.getElementById('state-rule-badge');
  const stateRuleConfidenceText = document.getElementById('state-rule-confidence-text');
  const encounterStateNote = document.getElementById('encounter-state-note');
  const encounterRightsList = document.getElementById('encounter-rights-list');
  const encounterAfterList = document.getElementById('encounter-after-list');

  // Situation Quick-Check
  const qcStep1 = document.getElementById('qc-step-1');
  const qcStep2 = document.getElementById('qc-step-2');
  const qcResultBlock = document.getElementById('qc-result-block');
  const qcWhoOptions = document.getElementById('qc-who-options');
  const qcWhatOptions = document.getElementById('qc-what-options');
  const qcMatchedTitle = document.getElementById('qc-matched-title');
  const qcMatchedReason = document.getElementById('qc-matched-reason');
  const qcAdviceText = document.getElementById('qc-advice-text');
  const qcConfidenceChip = document.getElementById('qc-confidence-chip');
  const btnQcEnterEncounter = document.getElementById('btn-qc-enter-encounter');
  const btnQcRestart = document.getElementById('btn-qc-restart');

  // Incident Vault
  const vaultIncidentsList = document.getElementById('vault-incidents-list');
  const vaultEmptyState = document.getElementById('vault-empty-state');
  const btnEmptyStartEncounter = document.getElementById('btn-empty-start-encounter');
  const countAll = document.getElementById('count-all');
  const countUser = document.getElementById('count-user');
  const countDemo = document.getElementById('count-demo');
  const vaultFilterBtns = document.querySelectorAll('.v-filter-btn');

  // Incident Detail View
  const detailTitle = document.getElementById('detail-title');
  const detailTypeBadge = document.getElementById('detail-type-badge');
  const detailDemoTag = document.getElementById('detail-demo-tag');
  const detailDateTime = document.getElementById('detail-date-time');
  const detailLocation = document.getElementById('detail-location');
  const detailStatus = document.getElementById('detail-status');
  const detailDuration = document.getElementById('detail-duration');
  const detailRecordingLabel = document.getElementById('detail-recording-label');
  const detailTagsList = document.getElementById('detail-tags-list');
  const detailNotesText = document.getElementById('detail-notes-text');
  const detailNotesEditor = document.getElementById('detail-notes-editor');
  const detailNotesInput = document.getElementById('detail-notes-input');
  const btnDetailEditNotes = document.getElementById('btn-detail-edit-notes');
  const btnSaveDetailNotes = document.getElementById('btn-save-detail-notes');
  const btnCancelDetailNotes = document.getElementById('btn-cancel-detail-notes');
  const btnDetailExport = document.getElementById('btn-detail-export');
  const btnDetailDelete = document.getElementById('btn-detail-delete');
  const detailToast = document.getElementById('detail-toast');

  // Post-Encounter Checklist
  const postEncounterForm = document.getElementById('post-encounter-form');
  const postLocationInput = document.getElementById('post-location-input');
  const postNotesInput = document.getElementById('post-notes-input');
  const postRecIndicator = document.getElementById('post-rec-indicator');
  const postRecText = document.getElementById('post-rec-text');
  const btnSkipPostEncounter = document.getElementById('btn-skip-post-encounter');

  // Modals & Sheets
  const modalAfterEncounter = document.getElementById('modal-after-encounter');
  const btnSafeYes = document.getElementById('btn-safe-yes');
  const btnSafeHelp = document.getElementById('btn-safe-help');
  const sheetEmergency = document.getElementById('sheet-emergency');
  const btnCloseSos = document.getElementById('btn-close-sos');
  const btnDismissSos = document.getElementById('btn-dismiss-sos');
  const sosCallEmergency = document.getElementById('sos-call-emergency');
  const sosCallLabel = document.getElementById('sos-call-label');
  const sosAlertContact = document.getElementById('sos-alert-contact');
  const sosStartRecord = document.getElementById('sos-start-record');

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const contactNameInput = document.getElementById('contact-name');
  const contactPhoneInput = document.getElementById('contact-phone');
  const btnClearContact = document.getElementById('btn-clear-contact');
  const smsPreviewText = document.getElementById('sms-preview-text');
  const saveConfirm = document.getElementById('save-confirm');

  // ==========================================================================
  // Application State
  // ==========================================================================
  let currentCountry = 'IN';
  let currentRegion = 'IN_GEN';
  let currentScenario = 'police';
  let currentPhraseIndex = 0;
  let activeVaultFilter = 'all';
  let activeIncidentId = null;

  // Quick check state
  let qcSelectedWho = null;
  let qcSelectedWhat = null;
  let qcMatchedResult = null;

  // Recording state
  let mediaRecorder = null;
  let recordedChunks = [];
  let isRecording = false;
  let isPaused = false;
  let recordStartTime = null;
  let pausedDuration = 0;
  let pauseStartTime = null;
  let recordTimerInterval = null;
  let lastRecordedDurationString = '';

  // Speech synthesis state
  let isSpeaking = false;

  // ==========================================================================
  // Screen Management & Navigation
  // ==========================================================================

  function showScreen(id) {
    screens.forEach((s) => {
      s.dataset.active = String(s.id === id);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle data-back buttons
  document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => {
      showScreen(btn.dataset.back);
    });
  });

  // Topbar Shortcuts
  navBrandHome.addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('screen-home');
  });

  btnOpenQuickcheck.addEventListener('click', () => {
    initQuickCheck();
    showScreen('screen-quick-check');
  });

  btnHomeQuickcheck.addEventListener('click', () => {
    initQuickCheck();
    showScreen('screen-quick-check');
  });

  btnOpenVault.addEventListener('click', () => {
    renderVaultList();
    showScreen('screen-vault');
  });

  btnHomeOpenVault.addEventListener('click', () => {
    renderVaultList();
    showScreen('screen-vault');
  });

  btnOpenContacts.addEventListener('click', () => {
    populateContactForm();
    showScreen('screen-contacts');
  });

  btnEmptyStartEncounter.addEventListener('click', () => {
    showScreen('screen-home');
  });

  // ==========================================================================
  // Global Jurisdiction Engine (Country -> Region)
  // ==========================================================================

  function initJurisdiction() {
    countrySelect.innerHTML = '';
    COUNTRIES.forEach((c) => {
      const opt = document.createElement('option');
      opt.value = c.code;
      opt.textContent = c.name;
      countrySelect.appendChild(opt);
    });

    const savedCountry = localStorage.getItem('rightnow_country') || 'IN';
    const savedRegion = localStorage.getItem('rightnow_region') || 'IN_GEN';

    currentCountry = savedCountry;
    countrySelect.value = currentCountry;
    populateRegionsForCountry(currentCountry, savedRegion);

    countrySelect.addEventListener('change', () => {
      currentCountry = countrySelect.value;
      localStorage.setItem('rightnow_country', currentCountry);
      populateRegionsForCountry(currentCountry);
      updateEmergencyCallLink();
      if (document.getElementById('screen-encounter').dataset.active === 'true') {
        renderEncounterStateRule();
      }
    });

    regionSelect.addEventListener('change', () => {
      currentRegion = regionSelect.value;
      localStorage.setItem('rightnow_region', currentRegion);
      if (document.getElementById('screen-encounter').dataset.active === 'true') {
        renderEncounterStateRule();
      }
    });

    updateEmergencyCallLink();
  }

  function populateRegionsForCountry(countryCode, selectRegionCode) {
    const country = COUNTRIES.find((c) => c.code === countryCode);
    regionSelect.innerHTML = '';

    if (country && country.regions && country.regions.length) {
      country.regions.forEach((r) => {
        const opt = document.createElement('option');
        opt.value = r.code;
        opt.textContent = r.name;
        regionSelect.appendChild(opt);
      });
      currentRegion = selectRegionCode || country.regions[0].code;
      regionSelect.value = currentRegion;
    } else {
      const opt = document.createElement('option');
      opt.value = `${countryCode}_GEN`;
      opt.textContent = 'General Guidance';
      regionSelect.appendChild(opt);
      currentRegion = `${countryCode}_GEN`;
    }

    localStorage.setItem('rightnow_region', currentRegion);
  }

  function updateEmergencyCallLink() {
    const emNumber = getEmergencyNumber(currentCountry);
    sosCallEmergency.href = `tel:${emNumber}`;
    sosCallLabel.textContent = `CALL EMERGENCY SERVICES (${emNumber})`;
  }

  // ==========================================================================
  // Scenario Selection & Encounter Mode
  // ==========================================================================

  document.querySelectorAll('.scenario-card').forEach((card) => {
    card.addEventListener('click', () => {
      const scenarioKey = card.dataset.scenario;
      if (CONTENT[scenarioKey]) {
        launchEncounter(scenarioKey);
      }
    });
  });

  function launchEncounter(scenarioKey) {
    currentScenario = scenarioKey;
    currentPhraseIndex = 0;
    lastRecordedDurationString = '';
    renderEncounterMode();
    showScreen('screen-encounter');
  }

  function renderEncounterMode() {
    const scenario = CONTENT[currentScenario];
    if (!scenario) return;

    encounterHeadline.textContent = `YOU ARE IN A ${scenario.title.toUpperCase()}`;
    renderEncounterStateRule();

    // Reset status callout & recording UI
    emergencyStatusMsg.textContent = '';
    emergencyStatusMsg.className = 'emergency-status-callout';
    resetRecordingUi();

    // 1. Render 10-Second Summary ("RIGHT NOW")
    renderTenSecondSummary(scenario.tenSecondSummary);

    // 2. Render SAY THIS Section
    renderPhrasePills();
    updateScriptCard();

    // 3. Render DO THIS & AVOID THIS
    renderDoSteps(scenario.doThis);
    renderAvoidList(scenario.avoidThis);

    // 4. Render KNOW THIS (Accordion)
    renderRightsAccordion(scenario.rights);

    // 5. Render AFTERWARD Section
    renderAfterSteps(scenario.after);
  }

  function renderEncounterStateRule() {
    const info = getJurisdictionInfo(currentRegion, currentCountry);
    const stateName = getStateName(currentRegion);

    encounterJurisdictionChip.textContent = `Jurisdiction: ${stateName}`;
    stateRuleBadge.textContent = `${stateName.toUpperCase()}`;
    encounterStateNote.textContent = info.note;

    // Confidence badge
    const conf = info.confidence || { label: 'GENERAL INFORMATION', badgeClass: 'badge-general' };
    encounterConfidenceBadge.textContent = conf.label;
    encounterConfidenceBadge.className = `confidence-badge-chip ${conf.badgeClass}`;
    stateRuleConfidenceText.textContent = conf.label;
  }

  // --- 10-Second Summary ---
  function renderTenSecondSummary(steps) {
    encounterSummarySteps.innerHTML = '';
    if (!steps || !steps.length) return;

    steps.forEach((s) => {
      const item = document.createElement('div');
      item.className = 'summary-step-item';
      item.innerHTML = `
        <span class="summary-step-num">${s.step}</span>
        <div>
          <div class="summary-step-text">${s.action}</div>
          <div class="summary-step-sub">${s.sub}</div>
        </div>
      `;
      encounterSummarySteps.appendChild(item);
    });
  }

  // --- SAY THIS Logic ---
  function renderPhrasePills() {
    const scenario = CONTENT[currentScenario];
    phraseSwitcherList.innerHTML = '';

    scenario.phrases.forEach((phraseObj, index) => {
      const btn = document.createElement('button');
      btn.className = 'phrase-pill';
      btn.dataset.index = index;
      btn.dataset.active = String(index === currentPhraseIndex);
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(index === currentPhraseIndex));
      btn.textContent = phraseObj.label || `Script 0${index + 1}`;

      btn.addEventListener('click', () => {
        currentPhraseIndex = index;
        updateScriptCard();
      });

      phraseSwitcherList.appendChild(btn);
    });
  }

  function updateScriptCard() {
    const scenario = CONTENT[currentScenario];
    const phraseObj = scenario.phrases[currentPhraseIndex];
    if (!phraseObj) return;

    if (window.speechSynthesis && isSpeaking) {
      window.speechSynthesis.cancel();
      resetSpeechState();
    }

    scriptMainText.textContent = phraseObj.text;
    scriptContext.textContent = phraseObj.context || '';
    phraseIndexIndicator.textContent = `${currentPhraseIndex + 1}/${scenario.phrases.length}`;

    document.querySelectorAll('.phrase-pill').forEach((p, i) => {
      const isActive = i === currentPhraseIndex;
      p.dataset.active = String(isActive);
      p.setAttribute('aria-selected', String(isActive));
    });
  }

  btnPrevPhrase.addEventListener('click', () => {
    const scenario = CONTENT[currentScenario];
    if (!scenario) return;
    currentPhraseIndex = (currentPhraseIndex - 1 + scenario.phrases.length) % scenario.phrases.length;
    updateScriptCard();
  });

  btnNextPhrase.addEventListener('click', () => {
    const scenario = CONTENT[currentScenario];
    if (!scenario) return;
    currentPhraseIndex = (currentPhraseIndex + 1) % scenario.phrases.length;
    updateScriptCard();
  });

  // Copy Script to Clipboard
  btnCopyScript.addEventListener('click', async () => {
    const scenario = CONTENT[currentScenario];
    const phraseObj = scenario.phrases[currentPhraseIndex];
    if (!phraseObj) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(phraseObj.text);
      } else {
        const temp = document.createElement('textarea');
        temp.value = phraseObj.text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }

      copyBtnLabel.textContent = 'Copied!';
      scriptToast.hidden = false;
      setTimeout(() => {
        copyBtnLabel.textContent = 'Copy phrase';
        scriptToast.hidden = true;
      }, 2000);
    } catch (err) {
      copyBtnLabel.textContent = 'Copied!';
      setTimeout(() => { copyBtnLabel.textContent = 'Copy phrase'; }, 1500);
    }
  });

  // Read Aloud (Web Speech API)
  function resetSpeechState() {
    isSpeaking = false;
    btnSpeakScript.dataset.playing = 'false';
    speakBtnLabel.textContent = 'Read aloud';
  }

  btnSpeakScript.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      resetSpeechState();
      return;
    }

    const scenario = CONTENT[currentScenario];
    const phraseObj = scenario.phrases[currentPhraseIndex];
    if (!phraseObj) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phraseObj.text);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    utterance.onstart = () => {
      isSpeaking = true;
      btnSpeakScript.dataset.playing = 'true';
      speakBtnLabel.textContent = 'Stop speaking';
    };

    utterance.onend = resetSpeechState;
    utterance.onerror = resetSpeechState;

    window.speechSynthesis.speak(utterance);
  });

  // --- DO THIS & AVOID Lists ---
  function renderDoSteps(steps) {
    encounterDoList.innerHTML = '';
    steps.forEach((s) => {
      const card = document.createElement('div');
      card.className = 'do-step-card';
      card.innerHTML = `
        <div class="step-number-badge" aria-hidden="true">${s.step}</div>
        <div class="step-text-content">
          <h3 class="step-instruction">${s.text}</h3>
          <p class="step-detail">${s.detail}</p>
        </div>
      `;
      encounterDoList.appendChild(card);
    });
  }

  function renderAvoidList(avoids) {
    encounterAvoidList.innerHTML = '';
    avoids.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      encounterAvoidList.appendChild(li);
    });
  }

  // --- KNOW THIS Rights Accordion ---
  function renderRightsAccordion(rights) {
    encounterRightsList.innerHTML = '';
    rights.forEach((r, idx) => {
      const item = document.createElement('div');
      item.className = 'right-accordion-item';
      item.dataset.open = idx === 0 ? 'true' : 'false';

      item.innerHTML = `
        <button class="right-accordion-header" aria-expanded="${idx === 0}">
          <span>${r.h}</span>
          <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="right-accordion-body" ${idx === 0 ? '' : 'hidden'}>
          <p>${r.b}</p>
        </div>
      `;

      const headerBtn = item.querySelector('.right-accordion-header');
      const bodyDiv = item.querySelector('.right-accordion-body');

      headerBtn.addEventListener('click', () => {
        const isOpen = item.dataset.open === 'true';
        item.dataset.open = String(!isOpen);
        headerBtn.setAttribute('aria-expanded', String(!isOpen));
        bodyDiv.hidden = isOpen;
      });

      encounterRightsList.appendChild(item);
    });
  }

  // --- AFTERWARD Steps ---
  function renderAfterSteps(afterSteps) {
    encounterAfterList.innerHTML = '';
    afterSteps.forEach((step, i) => {
      const card = document.createElement('div');
      card.className = 'after-step-card';
      card.innerHTML = `
        <span class="after-index-badge" aria-hidden="true">0${i + 1}</span>
        <p class="after-step-text">${step}</p>
      `;
      encounterAfterList.appendChild(card);
    });
  }

  // ==========================================================================
  // Audio Recording (Start, Pause, Resume, Stop & Save)
  // ==========================================================================

  btnEncounterRecord.addEventListener('click', async () => {
    if (!isRecording) {
      await startRecording();
    } else {
      stopRecording();
    }
  });

  btnRecordPause.addEventListener('click', () => {
    if (!mediaRecorder) return;
    if (!isPaused) {
      pauseRecording();
    } else {
      resumeRecording();
    }
  });

  btnRecordStop.addEventListener('click', () => {
    stopRecording();
  });

  async function startRecording() {
    emergencyStatusMsg.textContent = 'Requesting microphone permission…';
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };

      mediaRecorder.start(1000);
      isRecording = true;
      isPaused = false;
      recordStartTime = Date.now();
      pausedDuration = 0;

      btnEncounterRecord.dataset.recording = 'true';
      recordBtnTitle.textContent = 'RECORDING ACTIVE';
      recordBtnSub.textContent = 'Tap to stop or use pause below';
      recordTimer.hidden = false;
      recordTimer.textContent = '00:00';
      recordingSubcontrols.hidden = false;
      pauseBtnLabel.textContent = 'Pause';
      btnRecordPause.dataset.paused = 'false';

      recordTimerInterval = setInterval(updateRecordingTimer, 1000);
      emergencyStatusMsg.textContent = '🎙️ Recording live audio locally to your phone. Audio file will be saved upon stopping.';
    } catch (err) {
      console.warn('Audio recording failed:', err);
      emergencyStatusMsg.textContent = 'Microphone permission denied. Continuing encounter without audio.';
    }
  }

  function pauseRecording() {
    if (!mediaRecorder || mediaRecorder.state !== 'recording') return;
    mediaRecorder.pause();
    isPaused = true;
    pauseStartTime = Date.now();
    btnRecordPause.dataset.paused = 'true';
    pauseBtnLabel.textContent = 'Resume';
    emergencyStatusMsg.textContent = '⏸️ Audio recording paused.';
  }

  function resumeRecording() {
    if (!mediaRecorder || mediaRecorder.state !== 'paused') return;
    pausedDuration += (Date.now() - pauseStartTime);
    pauseStartTime = null;
    mediaRecorder.resume();
    isPaused = false;
    btnRecordPause.dataset.paused = 'false';
    pauseBtnLabel.textContent = 'Pause';
    emergencyStatusMsg.textContent = '🎙️ Audio recording resumed.';
  }

  function updateRecordingTimer() {
    if (!recordStartTime || isPaused) return;
    const elapsedSeconds = Math.floor((Date.now() - recordStartTime - pausedDuration) / 1000);
    const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const secs = String(elapsedSeconds % 60).padStart(2, '0');
    const timerText = `${mins}:${secs}`;
    recordTimer.textContent = timerText;
    lastRecordedDurationString = timerText;
  }

  function stopRecording() {
    if (recordTimerInterval) {
      clearInterval(recordTimerInterval);
      recordTimerInterval = null;
    }

    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    }

    isRecording = false;
    isPaused = false;
    resetRecordingUi();

    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      downloadLink.href = url;
      downloadLink.download = `RightNow-${currentScenario}-${timestamp}.webm`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      emergencyStatusMsg.textContent = `✓ Audio recording (${lastRecordedDurationString || 'saved'}) downloaded directly to your device.`;
    } else {
      emergencyStatusMsg.textContent = '';
    }
  }

  function resetRecordingUi() {
    btnEncounterRecord.dataset.recording = 'false';
    recordBtnTitle.textContent = 'START RECORDING';
    recordBtnSub.textContent = 'Saves evidence file to device';
    recordTimer.hidden = true;
    recordingSubcontrols.hidden = true;
    btnRecordPause.dataset.paused = 'false';
    pauseBtnLabel.textContent = 'Pause';
  }

  // ==========================================================================
  // After-Encounter Safety Flow & Post-Encounter Checklist
  // ==========================================================================

  function handleEndEncounter() {
    if (isRecording) {
      stopRecording();
    }
    if (window.speechSynthesis && isSpeaking) {
      window.speechSynthesis.cancel();
      resetSpeechState();
    }

    // Open "ARE YOU SAFE NOW?" modal
    modalAfterEncounter.hidden = false;
  }

  btnEndEncounter.addEventListener('click', handleEndEncounter);
  btnStickyEnd.addEventListener('click', handleEndEncounter);

  btnSafeYes.addEventListener('click', () => {
    modalAfterEncounter.hidden = true;
    openPostEncounterChecklist();
  });

  btnSafeHelp.addEventListener('click', () => {
    modalAfterEncounter.hidden = true;
    openEmergencySheet();
  });

  function openPostEncounterChecklist() {
    // Reset form
    postEncounterForm.reset();
    postLocationInput.value = '';
    postNotesInput.value = '';

    // Show audio indicator if audio was recorded
    if (lastRecordedDurationString) {
      postRecIndicator.hidden = false;
      postRecText.textContent = `Recorded audio evidence (${lastRecordedDurationString}) will be referenced in this record.`;
    } else {
      postRecIndicator.hidden = true;
    }

    showScreen('screen-post-encounter');
  }

  postEncounterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkedBoxes = Array.from(postEncounterForm.querySelectorAll('input[name="occurrence"]:checked'))
      .map((cb) => cb.value);

    const location = postLocationInput.value.trim() || 'Unspecified location';
    const notes = postNotesInput.value.trim() || 'No additional notes provided.';
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    const newIncident = {
      id: 'user_' + Date.now(),
      type: CONTENT[currentScenario] ? CONTENT[currentScenario].title : 'Documented Stop',
      scenarioId: currentScenario,
      date: dateStr,
      time: timeStr,
      location: location,
      duration: lastRecordedDurationString || 'None recorded',
      status: 'Documented',
      isDemo: false,
      whatHappened: checkedBoxes.length ? checkedBoxes : ['General interaction'],
      notes: notes,
      recordingLabel: lastRecordedDurationString ? `Audio recording saved to downloads (${lastRecordedDurationString})` : 'No recording'
    };

    saveIncidentToVault(newIncident);
    showScreen('screen-vault');
    renderVaultList();
    openIncidentDetail(newIncident.id);
  });

  btnSkipPostEncounter.addEventListener('click', () => {
    showScreen('screen-home');
  });

  // ==========================================================================
  // Incident Vault Engine (Local-first)
  // ==========================================================================

  function getVaultIncidents() {
    try {
      const stored = localStorage.getItem('rightnow_incidents');
      if (!stored) {
        // Initialize with default demo incidents
        localStorage.setItem('rightnow_incidents', JSON.stringify(INITIAL_DEMO_INCIDENTS));
        return INITIAL_DEMO_INCIDENTS;
      }
      return JSON.parse(stored);
    } catch (e) {
      return INITIAL_DEMO_INCIDENTS;
    }
  }

  function saveIncidentToVault(newIncident) {
    const list = getVaultIncidents();
    list.unshift(newIncident);
    localStorage.setItem('rightnow_incidents', JSON.stringify(list));
    updateVaultCountBadge();
  }

  function updateVaultCountBadge() {
    const list = getVaultIncidents();
    navVaultCount.textContent = list.length;
  }

  function renderVaultList() {
    const allIncidents = getVaultIncidents();
    updateVaultCountBadge();

    const userIncidents = allIncidents.filter((inc) => !inc.isDemo);
    const demoIncidents = allIncidents.filter((inc) => inc.isDemo);

    countAll.textContent = allIncidents.length;
    countUser.textContent = userIncidents.length;
    countDemo.textContent = demoIncidents.length;

    let filtered = allIncidents;
    if (activeVaultFilter === 'user') filtered = userIncidents;
    if (activeVaultFilter === 'demo') filtered = demoIncidents;

    vaultIncidentsList.innerHTML = '';

    if (filtered.length === 0) {
      vaultEmptyState.hidden = false;
      return;
    }
    vaultEmptyState.hidden = true;

    filtered.forEach((inc) => {
      const card = document.createElement('article');
      card.className = 'incident-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${inc.type} on ${inc.date}`);

      const badgeHtml = inc.isDemo
        ? `<span class="demo-badge-pill">DEMO DATA — NOT A REAL INCIDENT</span>`
        : `<span class="user-badge-pill">USER INCIDENT</span>`;

      card.innerHTML = `
        <div class="incident-card-header">
          <h3 class="incident-type-title">${inc.type}</h3>
          ${badgeHtml}
        </div>
        <div class="incident-meta-line">
          <span>📅 ${inc.date} • ${inc.time}</span>
          <span>📍 ${inc.location || 'Location documented'}</span>
          <span>⏱️ ${inc.duration || '00:00'}</span>
        </div>
        <p class="incident-notes-snippet">${inc.notes}</p>
        <div class="incident-card-footer">
          <span class="card-status-badge ${inc.status.toLowerCase().includes('follow') ? 'follow-up' : ''}">● ${inc.status}</span>
          <span>View full record &rarr;</span>
        </div>
      `;

      card.addEventListener('click', () => openIncidentDetail(inc.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openIncidentDetail(inc.id);
        }
      });

      vaultIncidentsList.appendChild(card);
    });
  }

  vaultFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      vaultFilterBtns.forEach((b) => b.dataset.active = 'false');
      btn.dataset.active = 'true';
      activeVaultFilter = btn.dataset.filter;
      renderVaultList();
    });
  });

  // ==========================================================================
  // Incident Detail View
  // ==========================================================================

  function openIncidentDetail(incidentId) {
    const list = getVaultIncidents();
    const inc = list.find((item) => item.id === incidentId);
    if (!inc) return;

    activeIncidentId = incidentId;

    detailTitle.textContent = inc.type;
    detailTypeBadge.textContent = inc.type;
    detailDemoTag.hidden = !inc.isDemo;

    detailDateTime.textContent = `${inc.date} • ${inc.time}`;
    detailLocation.textContent = inc.location || 'Sample Location';
    detailStatus.textContent = inc.status || 'Documented';
    detailDuration.textContent = inc.duration ? `${inc.duration} duration` : 'None';

    detailRecordingLabel.textContent = inc.recordingLabel || 'No audio recorded';

    // Tags
    detailTagsList.innerHTML = '';
    if (inc.whatHappened && inc.whatHappened.length) {
      inc.whatHappened.forEach((tag) => {
        const chip = document.createElement('span');
        chip.className = 'detail-tag-chip';
        chip.textContent = tag;
        detailTagsList.appendChild(chip);
      });
    }

    // Notes
    detailNotesText.textContent = inc.notes || 'No notes.';
    detailNotesEditor.hidden = true;
    detailNotesText.hidden = false;

    showScreen('screen-incident-detail');
  }

  btnDetailEditNotes.addEventListener('click', () => {
    const list = getVaultIncidents();
    const inc = list.find((item) => item.id === activeIncidentId);
    if (!inc) return;

    detailNotesInput.value = inc.notes || '';
    detailNotesText.hidden = true;
    detailNotesEditor.hidden = false;
    detailNotesInput.focus();
  });

  btnSaveDetailNotes.addEventListener('click', () => {
    const list = getVaultIncidents();
    const inc = list.find((item) => item.id === activeIncidentId);
    if (!inc) return;

    inc.notes = detailNotesInput.value.trim();
    localStorage.setItem('rightnow_incidents', JSON.stringify(list));

    detailNotesText.textContent = inc.notes;
    detailNotesEditor.hidden = true;
    detailNotesText.hidden = false;
  });

  btnCancelDetailNotes.addEventListener('click', () => {
    detailNotesEditor.hidden = true;
    detailNotesText.hidden = false;
  });

  btnDetailExport.addEventListener('click', async () => {
    const list = getVaultIncidents();
    const inc = list.find((item) => item.id === activeIncidentId);
    if (!inc) return;

    const reportText = `
=== RIGHTNOW INCIDENT REPORT ===
Type: ${inc.type} ${inc.isDemo ? '(DEMO DATA - NOT A REAL INCIDENT)' : ''}
Date & Time: ${inc.date} • ${inc.time}
Location: ${inc.location}
Status: ${inc.status}
Audio Duration: ${inc.duration || 'None'}
Occurrences: ${(inc.whatHappened || []).join(', ')}

Notes:
${inc.notes}

Generated privately on-device via RightNow.
================================
    `.trim();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(reportText);
      }
      detailToast.hidden = false;
      setTimeout(() => { detailToast.hidden = true; }, 2400);
    } catch (err) {
      alert('Could not copy report to clipboard. You can select and copy the text manually.');
    }
  });

  btnDetailDelete.addEventListener('click', () => {
    if (!confirm('Are you sure you want to permanently delete this incident record from your device?')) {
      return;
    }
    const list = getVaultIncidents();
    const updated = list.filter((item) => item.id !== activeIncidentId);
    localStorage.setItem('rightnow_incidents', JSON.stringify(updated));

    showScreen('screen-vault');
    renderVaultList();
  });

  // ==========================================================================
  // Situation Quick-Check Triage Controller
  // ==========================================================================

  function initQuickCheck() {
    qcSelectedWho = null;
    qcSelectedWhat = null;
    qcMatchedResult = null;

    qcStep1.hidden = false;
    qcStep2.hidden = true;
    qcResultBlock.hidden = true;

    // Render Step 1
    qcWhoOptions.innerHTML = '';
    QUICK_CHECK_OPTIONS.who.forEach((opt) => {
      const card = document.createElement('button');
      card.className = 'qc-option-card';
      card.innerHTML = `
        <span class="qc-option-title">${opt.label}</span>
        <span class="qc-option-sub">${opt.sub}</span>
      `;
      card.addEventListener('click', () => {
        qcSelectedWho = opt.id;
        advanceToQuickCheckStep2();
      });
      qcWhoOptions.appendChild(card);
    });
  }

  function advanceToQuickCheckStep2() {
    qcStep1.hidden = true;
    qcStep2.hidden = false;
    qcResultBlock.hidden = true;

    qcWhatOptions.innerHTML = '';
    QUICK_CHECK_OPTIONS.what.forEach((opt) => {
      const card = document.createElement('button');
      card.className = 'qc-option-card';
      card.innerHTML = `
        <span class="qc-option-title">${opt.label}</span>
        <span class="qc-option-sub">${opt.sub}</span>
      `;
      card.addEventListener('click', () => {
        qcSelectedWhat = opt.id;
        showQuickCheckResult();
      });
      qcWhatOptions.appendChild(card);
    });
  }

  function showQuickCheckResult() {
    qcMatchedResult = resolveQuickCheck(qcSelectedWho, qcSelectedWhat);

    qcStep2.hidden = true;
    qcResultBlock.hidden = false;

    qcMatchedTitle.textContent = qcMatchedResult.title;
    qcMatchedReason.textContent = qcMatchedResult.matchedReason;
    qcAdviceText.textContent = qcMatchedResult.adviceSnippet;

    const conf = qcMatchedResult.confidence || { label: 'GENERAL INFORMATION', badgeClass: 'badge-general' };
    qcConfidenceChip.textContent = conf.label;
    qcConfidenceChip.className = `confidence-badge-chip ${conf.badgeClass}`;
  }

  btnQcEnterEncounter.addEventListener('click', () => {
    if (qcMatchedResult && qcMatchedResult.scenarioId) {
      launchEncounter(qcMatchedResult.scenarioId);
    } else {
      launchEncounter('police');
    }
  });

  btnQcRestart.addEventListener('click', initQuickCheck);

  // ==========================================================================
  // Emergency Action Sheet (SOS)
  // ==========================================================================

  function openEmergencySheet() {
    sheetEmergency.hidden = false;
  }

  function closeEmergencySheet() {
    sheetEmergency.hidden = true;
  }

  btnTriggerSos.addEventListener('click', openEmergencySheet);
  btnCloseSos.addEventListener('click', closeEmergencySheet);
  btnDismissSos.addEventListener('click', closeEmergencySheet);

  sosAlertContact.addEventListener('click', () => {
    closeEmergencySheet();
    triggerAlertContact();
  });

  sosStartRecord.addEventListener('click', () => {
    closeEmergencySheet();
    if (document.getElementById('screen-encounter').dataset.active !== 'true') {
      launchEncounter('police');
    }
    startRecording();
  });

  // ==========================================================================
  // Trusted Contact Management (SMS & Geolocation)
  // ==========================================================================

  btnEncounterAlert.addEventListener('click', triggerAlertContact);

  function getSavedContact() {
    try {
      return JSON.parse(localStorage.getItem('kyr_contact') || 'null');
    } catch (e) {
      return null;
    }
  }

  function updateHomeContactCard() {
    const contact = getSavedContact();
    if (contact && contact.phone) {
      const displayName = contact.name ? contact.name : 'Saved Contact';
      contactStatusTitle.textContent = `${displayName} (${contact.phone})`;
      contactStatusSub.textContent = '1-Tap emergency SMS alert is primed & ready';
      contactStatusBtnText.textContent = 'Change';
      homeContactCard.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    } else {
      contactStatusTitle.textContent = 'Trusted Emergency Contact';
      contactStatusSub.textContent = 'Set up 1-tap SMS & GPS location alert';
      contactStatusBtnText.textContent = 'Configure';
      homeContactCard.style.borderColor = '';
    }
  }

  function populateContactForm() {
    const contact = getSavedContact();
    if (contact) {
      contactNameInput.value = contact.name || '';
      contactPhoneInput.value = contact.phone || '';
    } else {
      contactNameInput.value = '';
      contactPhoneInput.value = '';
    }
    updateSmsPreview();
  }

  function updateSmsPreview() {
    const scenarioTitle = CONTENT[currentScenario] ? CONTENT[currentScenario].title : 'police stop';
    smsPreviewText.textContent = `“I need help. I'm in a ${scenarioTitle.toLowerCase()} right now. My location: https://maps.google.com/?q=22.5726,88.3639”`;
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();

    if (!phone) {
      alert('Please provide a phone number capable of receiving SMS messages.');
      contactPhoneInput.focus();
      return;
    }

    localStorage.setItem('kyr_contact', JSON.stringify({ name, phone }));
    updateHomeContactCard();
    saveConfirm.hidden = false;
    setTimeout(() => { saveConfirm.hidden = true; }, 2400);
  });

  btnClearContact.addEventListener('click', () => {
    if (confirm('Remove your saved trusted contact?')) {
      localStorage.removeItem('kyr_contact');
      contactNameInput.value = '';
      contactPhoneInput.value = '';
      updateHomeContactCard();
      saveConfirm.hidden = false;
      saveConfirm.innerHTML = `<span>Trusted contact removed.</span>`;
      setTimeout(() => {
        saveConfirm.hidden = true;
        saveConfirm.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Trusted contact saved securely on device.</span>`;
      }, 2000);
    }
  });

  function triggerAlertContact() {
    const contact = getSavedContact();
    if (!contact || !contact.phone) {
      emergencyStatusMsg.innerHTML = `⚠️ <strong>No trusted contact saved yet.</strong> <a href="#" id="link-setup-alert" style="color: var(--pink-bright); text-decoration: underline;">Tap here to configure contact</a>.`;
      const link = document.getElementById('link-setup-alert');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          populateContactForm();
          showScreen('screen-contacts');
        });
      }
      return;
    }

    emergencyStatusMsg.textContent = 'Acquiring GPS coordinates & preparing emergency SMS…';

    const scenarioTitle = CONTENT[currentScenario] ? CONTENT[currentScenario].title : 'Encounter';

    const sendSmsWithBody = (locationText) => {
      const messageBody = encodeURIComponent(
        `I need help. I am in a ${scenarioTitle.toLowerCase()} right now.${locationText}`
      );
      const cleanPhone = contact.phone.replace(/[^0-9+]/g, '');
      const smsUrl = `sms:${cleanPhone}?&body=${messageBody}`;

      const link = document.createElement('a');
      link.href = smsUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      emergencyStatusMsg.textContent = `✓ Prepared emergency SMS for ${contact.name || contact.phone}. Check your messaging app to send.`;
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const mapsLink = ` My location: https://maps.google.com/?q=${latitude.toFixed(5)},${longitude.toFixed(5)}`;
          sendSmsWithBody(mapsLink);
        },
        () => {
          sendSmsWithBody(' (GPS location unavailable)');
        },
        { timeout: 4000, enableHighAccuracy: true }
      );
    } else {
      sendSmsWithBody('');
    }
  }

  // ==========================================================================
  // Service Worker Registration
  // ==========================================================================

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((err) => {
        console.warn('Service worker registration failed:', err);
      });
    });
  }

  // ==========================================================================
  // Application Bootstrap
  // ==========================================================================

  initJurisdiction();
  updateHomeContactCard();
  updateSmsPreview();
  updateVaultCountBadge();

})();
