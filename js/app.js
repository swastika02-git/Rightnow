(function () {
  'use strict';

  const screens = document.querySelectorAll('.screen');
  const stateSelect = document.getElementById('state-select');
  let currentScenario = 'police';
  let mediaRecorder = null;
  let recordedChunks = [];
  let isRecording = false;

  // ---------- Navigation ----------

  function showScreen(id) {
    screens.forEach((s) => s.dataset.active = String(s.id === id));
  }

  document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => showScreen(btn.dataset.back));
  });

  document.getElementById('btn-open-contacts').addEventListener('click', () => {
    showScreen('screen-contacts');
  });

  // ---------- State select ----------

  STATES.forEach((s) => {
    const opt = document.createElement('option');
    opt.value = s.code;
    opt.textContent = s.name;
    stateSelect.appendChild(opt);
  });

  const savedState = localStorage.getItem('kyr_state');
  if (savedState) stateSelect.value = savedState;
  stateSelect.addEventListener('change', () => {
    localStorage.setItem('kyr_state', stateSelect.value);
  });

  // ---------- Scenario cards ----------

  document.querySelectorAll('.scenario-card').forEach((card) => {
    card.addEventListener('click', () => {
      currentScenario = card.dataset.scenario;
      renderRightsScreen();
      showScreen('screen-rights');
    });
  });

  // ---------- Tabs ----------

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((t) => t.dataset.active = 'false');
      tab.dataset.active = 'true';
      ['rights', 'phrases', 'after'].forEach((key) => {
        document.getElementById('panel-' + key).hidden = key !== tab.dataset.tab;
      });
    });
  });

  // ---------- Render content ----------

  function renderRightsScreen() {
    const data = CONTENT[currentScenario];
    document.getElementById('rights-title').textContent = data.title;

    const rightsPanel = document.getElementById('panel-rights');
    rightsPanel.innerHTML = '';

    const note = document.createElement('div');
    note.className = 'state-note';
    note.textContent = getStateNote(stateSelect.value);
    rightsPanel.appendChild(note);

    data.rights.forEach((r) => {
      const card = document.createElement('div');
      card.className = 'right-card';
      card.innerHTML = `<h3>${r.h}</h3><p>${r.b}</p>`;
      rightsPanel.appendChild(card);
    });

    const phrasesPanel = document.getElementById('panel-phrases');
    phrasesPanel.innerHTML = '';
    data.phrases.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'phrase-card';
      card.innerHTML = `<span class="phrase-quote">&ldquo;</span>${p}<span class="phrase-quote">&rdquo;</span>`;
      phrasesPanel.appendChild(card);
    });

    const afterPanel = document.getElementById('panel-after');
    afterPanel.innerHTML = '';
    data.after.forEach((step, i) => {
      const row = document.createElement('div');
      row.className = 'after-step';
      row.innerHTML = `<span class="after-index">${i + 1}</span><p>${step}</p>`;
      afterPanel.appendChild(row);
    });

    // Reset to first tab
    document.querySelectorAll('.tab').forEach((t, i) => t.dataset.active = String(i === 0));
    document.getElementById('panel-rights').hidden = false;
    document.getElementById('panel-phrases').hidden = true;
    document.getElementById('panel-after').hidden = true;
  }

  // ---------- Record & alert ----------

  const recordBtn = document.getElementById('btn-record');
  const recordLabel = document.getElementById('record-label');
  const recordStatus = document.getElementById('record-status');

  recordBtn.addEventListener('click', async () => {
    if (!isRecording) {
      await startRecording();
    } else {
      stopRecording();
    }
  });

  async function startRecording() {
    recordStatus.textContent = 'Getting location and starting audio…';
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
      mediaRecorder.start();
      isRecording = true;
      recordBtn.dataset.recording = 'true';
      recordLabel.textContent = 'Stop recording';
      recordStatus.textContent = 'Recording audio…';
    } catch (err) {
      recordStatus.textContent = 'Microphone permission denied — continuing without audio.';
    }

    alertContact();
  }

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((t) => t.stop());
    }
    isRecording = false;
    recordBtn.dataset.recording = 'false';
    recordLabel.textContent = 'Start recording & alert contact';

    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `recording-${Date.now()}.webm`;
      a.click();
      recordStatus.textContent = 'Recording saved to your downloads.';
    } else {
      recordStatus.textContent = '';
    }
  }

  function alertContact() {
    const contact = JSON.parse(localStorage.getItem('kyr_contact') || 'null');
    if (!contact || !contact.phone) {
      recordStatus.textContent += ' No emergency contact saved yet.';
      return;
    }

    const send = (locationText) => {
      const body = encodeURIComponent(
        `I need help. I'm in a ${CONTENT[currentScenario].title.toLowerCase()} right now.${locationText}`
      );
      const smsUrl = `sms:${contact.phone}?&body=${body}`;
      const link = document.createElement('a');
      link.href = smsUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.click();
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const mapsLink = ` My location: https://maps.google.com/?q=${latitude},${longitude}`;
          send(mapsLink);
        },
        () => send(' (location unavailable)'),
        { timeout: 5000 }
      );
    } else {
      send('');
    }
  }

  // ---------- Contact form ----------

  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const phoneInput = document.getElementById('contact-phone');
  const saveConfirm = document.getElementById('save-confirm');

  const savedContact = JSON.parse(localStorage.getItem('kyr_contact') || 'null');
  if (savedContact) {
    nameInput.value = savedContact.name || '';
    phoneInput.value = savedContact.phone || '';
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('kyr_contact', JSON.stringify({
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
    }));
    saveConfirm.hidden = false;
    setTimeout(() => { saveConfirm.hidden = true; }, 2000);
  });

  // ---------- Service worker ----------

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  // ---------- Init ----------

  renderRightsScreen();
})();
