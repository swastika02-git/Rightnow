# Know Your Rights

A fast, offline-capable web app that gives plain-language guidance for
police, ICE/immigration, and checkpoint encounters — built for someone
who has seconds, not minutes, to find what they need.

## Problem

Most know-your-rights material exists as dense PDFs or long web pages.
In an actual encounter, nobody has time to read a page of legal text.
This app puts the three things that matter — your rights, exact phrases
to say, and what to do after — behind one tap, in large type, usable
one-handed and under stress.

## Core features

- **Scenario-first navigation**: Police stop / ICE / Checkpoint, each one tap from the home screen.
- **State-aware notes**: a short, state-specific addendum on identification requirements (currently CA, TX, NY, FL, IL, plus a general fallback).
- **Scripted phrases**: short, exact sentences to say out loud, in large type.
- **Record & alert**: one button starts an audio recording (saved locally as a downloadable file) and — if an emergency contact is saved — opens a pre-filled text message with a live location link.
- **Installable, works offline**: a service worker caches the whole app shell, so it works with no signal after the first load.

## Tech stack

- Vanilla HTML / CSS / JavaScript — no framework, no build step, so it loads instantly and installs as a PWA on any phone.
- Browser APIs: `MediaRecorder`, `navigator.geolocation`, `sms:` URI scheme for the alert flow, `localStorage` for on-device contact storage, Service Worker + Web App Manifest for offline/installable behavior.
- No backend and no third-party data collection — everything stays on-device.

## AI tool disclosure

Built during the hackathon with assistance from Claude (Anthropic) for
scaffolding the app structure, writing the plain-language rights content,
and the visual design system. All legal content is general information
written from well-established constitutional principles, not copied from
any single source — it is not legal advice, and the app says so on-screen.

## Running it

### Live Demo
[RightNOW](https://rightnow-2a4e7mo6g-swastika14.vercel.app/)

### Run Locally
```bash
git clone https://github.com/swastika02-git/Rightnow.git
cd Rightnow

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5702c046-f553-4698-a9be-b1c34110a97d" />


## What's next

- Expand state coverage and verify each state note against current law with a legal advisor before any real-world use.
- Add a language switcher (Spanish is the clear next priority).
- Add a "share my rights" flow so someone can quickly text this page to a friend or family member in another state.
