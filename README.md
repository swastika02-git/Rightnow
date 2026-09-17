# RightNOW

A fast, offline-capable web app that provides plain-language rights guidance for police, immigration, and checkpoint encounters — designed for people who have **seconds, not minutes**, to find what they need.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2e9e0f47-44eb-48cb-9250-e65826552612" />


## 🚀 Live Demo

[**Try RightNOW →**](https://rightnow-2a4e7mo6g-swastika14.vercel.app/)

## 💡 The Problem

Most know-your-rights resources are presented as dense PDFs, lengthy articles, or legal documents.

In an actual encounter, someone may not have the time or focus to search through pages of information.

**RightNOW** takes a scenario-first approach, putting three key things within quick reach:

* **Your rights**
* **What you can say**
* **What you can do next**

The interface is designed to be simple, fast, readable, and usable with one hand — even under stress.

## ✨ Core Features

### Scenario-First Guidance

Choose the situation you're dealing with instead of searching through a large collection of legal information.

* Police Stop
* ICE / Immigration Encounter
* Checkpoint

### 📍 State-Aware Information

Provides short state-specific notes for identification requirements, with coverage for:

* California
* Texas
* New York
* Florida
* Illinois
* General fallback guidance

### 🗣️ Scripted Phrases

Provides short, practical phrases that users can refer to and say out loud without having to remember complicated legal terminology.

### 🎙️ Record & Alert

A built-in recording feature allows users to start an audio recording locally.

If an emergency contact has been saved, the alert flow can also open a pre-filled text message containing a location link.

### 📱 Offline-Capable & Installable

A service worker caches the application shell so essential parts of the app can remain accessible after the initial load, even when connectivity is limited.

The app can also be installed as a Progressive Web App.

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **Progressive Web App (PWA)**
* **Service Worker**
* **Web App Manifest**
* **LocalStorage**
* **MediaRecorder API**
* **Geolocation API**
* **SMS URI scheme**

There is **no framework, build step, backend, or database**. The application runs primarily on the user's device.

## 🔐 Privacy

RightNOW is designed with a local-first approach.

* Emergency contact information is stored locally in the browser.
* Audio recordings are created locally on the device.
* Location is accessed through the browser only when the user uses the relevant feature.
* There is no application backend collecting user data.

## 🤖 AI Tool Disclosure

The project was reviewed and adapted by me throughout development.

The legal information presented by RightNOW is intended as **general educational information, not personalized legal advice**.

## 📚 What We Learned

Building RightNOW taught me that providing more information does not necessarily make an application more useful.

The main challenge was deciding **what a user needs to see first** when they may be stressed and have very little time.

This led us to focus heavily on information hierarchy, readable typography, minimal navigation, one-handed interaction, and scenario-based flows.

## 🔨 Challenges

Our biggest challenge was balancing **simplicity with completeness**.

Rights and procedures can vary depending on the situation and jurisdiction, so we had to avoid presenting every situation as though the same rules apply everywhere.



## 🔮 What's Next

* Expand state coverage and verify state-specific information with legal professionals.
* Add multilingual support, with Spanish as an initial priority.
* Add a "Share My Rights" flow so users can quickly send relevant information to a friend or family member.
* Continue improving offline capabilities and accessibility.

## ⚠️ Disclaimer

RightNOW is an educational information tool and **does not provide legal advice or replace a qualified attorney**.

Information can vary by jurisdiction and circumstances. Users should consult a qualified legal professional for advice about their specific situation.

---

Built with ❤️ 
