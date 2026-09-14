# RightNow — Know Your Rights

> **“I have 10 seconds. Tell me what to do.”**

**RightNow** is a hackathon-grade civic safety utility designed for individuals facing high-stress encounters with law enforcement, immigration officers, or checkpoints. Rather than functioning like a dense legal blog or government PDF, RightNow delivers immediate, plain-language, scannable guidance built for one-handed operation on a mobile device under pressure.

---

## Core Product Principles

1. **10-Second Emergency Priority**: The user never has to read a wall of text before finding what they need. Information is strictly prioritized:
   - **RIGHT NOW (10-Second Summary)**: Immediate 3 core physical actions (`01`, `02`, `03`).
   - **SAY THIS**: Giant, high-contrast scripted phrases with built-in speech synthesis (`Read aloud`) and 1-tap clipboard copy.
   - **DO THIS**: Numbered physical actions + high-visibility **WHAT TO AVOID** callout.
   - **KNOW THIS**: Contextual constitutional rights & state-specific statutory requirements.
   - **AFTERWARD**: Documentation checklist once in a safe location.
2. **Distinctive Civic Utility Aesthetic**: Deep plum (`#160B22`) and near-black (`#090A0F`) foundation paired with an intentional **plum → purple → magenta → hot pink** gradient palette, high-contrast typography, and restrained emergency accents.
3. **100% On-Device & Zero Telemetry**: Stored purely in private browser `localStorage`. No cloud backends, no tracking cookies, no server uploads. Audio recordings stay on your device, and emergency SMS alerts are composed in your phone's native messaging client.
4. **Offline First (PWA)**: Full service worker caching (`rightnow-v3`) guarantees instant performance without cellular signal or Wi-Fi.

---

## Key Features

### 1. 10-Second Summary ("RIGHT NOW")
Every encounter begins with an ultra-concise summary of the 3 most important immediate physical actions to take under stress.

### 2. Situation Quick-Check ("What’s Happening?")
A 2-step triage questionnaire for users uncertain of their exact situation:
- **Step 1: Who are you dealing with?** (Police, Immigration, Checkpoint, Security, Not sure)
- **Step 2: What is happening?** (Questioned, Searched, Detained, ID asked, Asked to leave, Not sure)
- **Result**: Instant scenario matching with tailored plain-language advice and direct navigation into Encounter Mode.

### 3. Incident Vault (Private On-Device Archive)
- **Local-First Records**: Secure on-device incident storage with support for incident type, date, time, location, audio recording references, and personal notes.
- **Pre-Populated Demo Records**: Seeded with 3 fictional, clearly labeled sample incidents (`DEMO DATA — NOT A REAL INCIDENT`) for immediate hackathon demonstration without starting from an empty screen.
- **Incident Detail View**: Inspect full records, edit notes inline, export/share formatted reports via clipboard, or delete records.
- **Polished Empty State**: Gracefully handles deleting all demo records with a clean call-to-action to begin a new encounter.

### 4. After-Encounter Safety Flow & Checklist
- **“ARE YOU SAFE NOW?”**: Ending an encounter prompts an immediate safety verification modal.
  - **YES — I'M SAFE**: Opens the post-encounter documentation checklist to record occurrences (questioned, searched, detained, ID asked, paperwork, etc.), add notes, and save directly to the Incident Vault.
  - **I STILL NEED HELP**: Opens the Emergency Action Sheet (SOS).

### 5. Emergency Action Sheet (SOS)
A persistent safety menu accessible anytime via the **SOS** button in the global topbar:
- **Call Local Emergency Services**: Directly triggers native phone dialing based on the selected country (`112` for India/Europe/International, `911` for US/Canada, `999` for UK).
- **Alert Trusted Contact**: Pre-fills SMS with live GPS location link.
- **Start Audio Recording**: Immediately begins local audio capture.

### 6. Evidence & Recording Mode
- Audio recording powered by `MediaRecorder` with live elapsed timer (`00:37`).
- **Pause & Resume** controls alongside **Stop & Save**.
- Direct `.webm` evidence download to your device.
- Transparent legal notice regarding public recording rights.

### 7. Global Jurisdiction Engine & Confidence Ratings
- Multi-tier hierarchy: **Country → Region/State → Scenario → Guidance**.
- Broad coverage across:
  - **Asia**: India (with 21 states & union territories including West Bengal, Maharashtra, Karnataka, Tamil Nadu, Delhi, etc.), Japan, South Korea, Singapore, Malaysia, Indonesia, Thailand, Philippines, Vietnam, Bangladesh, Nepal, Sri Lanka, Pakistan, China, Taiwan, Hong Kong.
  - **North America**: United States (CA, TX, NY, FL, IL, General), Canada, Mexico.
  - **Europe**: United Kingdom (PACE Act), Germany, France, Italy, Spain, Netherlands.
- **Jurisdiction Confidence Badges**:
  - `VERIFIED JURISDICTION GUIDANCE` (e.g. India CrPC/BNSS Section 41 & *D.K. Basu* guidelines; US state stop-and-identify laws).
  - `GENERAL INFORMATION` (established constitutional protections).
  - `NOT YET VERIFIED LOCALLY` (clear disclaimer that local statutory verification is recommended).

---

## Tech Stack

- **Vanilla HTML5 / CSS3 / JavaScript (ES6+)**: Zero framework overhead, zero build step.
- **Modern Web APIs**:
  - `MediaRecorder` & `getUserMedia` (with pause/resume) for local audio evidence recording.
  - `window.speechSynthesis` for offline-capable text-to-speech phrase reading.
  - `navigator.geolocation` for emergency GPS coordinate resolution.
  - `navigator.clipboard` for script and report copying.
  - `ServiceWorker` & `Web App Manifest` for installable offline PWA capabilities.
  - `sms:` and `tel:` URI schemes for secure native carrier communication.

---

## Running Locally

No build step required. Open `index.html` in any browser, or serve the directory:

```bash
# Using Python
python -m http.server 8080

# Or using npx serve
npx serve .
```

To test Service Worker caching and PWA installation, access the application via `http://localhost:8080` or an `https://` endpoint.

---

## Legal Safety & Disclaimers

RightNow provides general informational guidance, not formal legal advice. It does not create an attorney-client relationship. Rules regarding police stops, search consent, and identification requirements vary across state and national jurisdictions.
