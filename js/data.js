// All content here is general informational guidance written in plain language.
// It is not legal advice and does not substitute for consultation with a licensed attorney.

// ==========================================================================
// 1. GLOBAL JURISDICTION ENGINE
// ==========================================================================

const COUNTRIES = [
  {
    code: 'IN',
    name: 'India',
    emergencyNumber: '112',
    regions: [
      { code: 'IN_GEN', name: 'General / National (CrPC & BNSS)' },
      { code: 'IN_WB', name: 'West Bengal' },
      { code: 'IN_MH', name: 'Maharashtra' },
      { code: 'IN_KA', name: 'Karnataka' },
      { code: 'IN_TN', name: 'Tamil Nadu' },
      { code: 'IN_DL', name: 'Delhi (NCT)' },
      { code: 'IN_TG', name: 'Telangana' },
      { code: 'IN_UP', name: 'Uttar Pradesh' },
      { code: 'IN_GJ', name: 'Gujarat' },
      { code: 'IN_RJ', name: 'Rajasthan' },
      { code: 'IN_KL', name: 'Kerala' },
      { code: 'IN_AP', name: 'Andhra Pradesh' },
      { code: 'IN_OR', name: 'Odisha' },
      { code: 'IN_PB', name: 'Punjab' },
      { code: 'IN_HR', name: 'Haryana' },
      { code: 'IN_BR', name: 'Bihar' },
      { code: 'IN_AS', name: 'Assam' },
      { code: 'IN_JH', name: 'Jharkhand' },
      { code: 'IN_MP', name: 'Madhya Pradesh' },
      { code: 'IN_JK', name: 'Jammu & Kashmir' },
      { code: 'IN_GA', name: 'Goa' },
    ]
  },
  {
    code: 'US',
    name: 'United States',
    emergencyNumber: '911',
    regions: [
      { code: 'US_GEN', name: 'General / All US States' },
      { code: 'US_CA', name: 'California' },
      { code: 'US_TX', name: 'Texas' },
      { code: 'US_NY', name: 'New York' },
      { code: 'US_FL', name: 'Florida' },
      { code: 'US_IL', name: 'Illinois' },
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    emergencyNumber: '999',
    regions: [
      { code: 'GB_EW', name: 'England & Wales (PACE Act)' },
      { code: 'GB_SC', name: 'Scotland' },
      { code: 'GB_NI', name: 'Northern Ireland' },
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    emergencyNumber: '911',
    regions: [
      { code: 'CA_GEN', name: 'General / Federal (Charter)' },
      { code: 'CA_ON', name: 'Ontario' },
      { code: 'CA_QC', name: 'Quebec' },
      { code: 'CA_BC', name: 'British Columbia' },
      { code: 'CA_AB', name: 'Alberta' },
    ]
  },
  {
    code: 'MX',
    name: 'Mexico',
    emergencyNumber: '911',
    regions: [
      { code: 'MX_GEN', name: 'General / Federal (Constitución)' }
    ]
  },
  {
    code: 'JP',
    name: 'Japan',
    emergencyNumber: '110',
    regions: [
      { code: 'JP_GEN', name: 'National Police Agency rules' }
    ]
  },
  {
    code: 'KR',
    name: 'South Korea',
    emergencyNumber: '112',
    regions: [
      { code: 'KR_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'SG',
    name: 'Singapore',
    emergencyNumber: '999',
    regions: [
      { code: 'SG_GEN', name: 'General / Singapore Police Force' }
    ]
  },
  {
    code: 'MY',
    name: 'Malaysia',
    emergencyNumber: '999',
    regions: [
      { code: 'MY_GEN', name: 'General / PDRM' }
    ]
  },
  {
    code: 'ID',
    name: 'Indonesia',
    emergencyNumber: '112',
    regions: [
      { code: 'ID_GEN', name: 'General / POLRI' }
    ]
  },
  {
    code: 'TH',
    name: 'Thailand',
    emergencyNumber: '191',
    regions: [
      { code: 'TH_GEN', name: 'General / Royal Thai Police' }
    ]
  },
  {
    code: 'PH',
    name: 'Philippines',
    emergencyNumber: '911',
    regions: [
      { code: 'PH_GEN', name: 'General / PNP Guidelines' }
    ]
  },
  {
    code: 'VN',
    name: 'Vietnam',
    emergencyNumber: '113',
    regions: [
      { code: 'VN_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    emergencyNumber: '999',
    regions: [
      { code: 'BD_GEN', name: 'General / Bangladesh Police' }
    ]
  },
  {
    code: 'NP',
    name: 'Nepal',
    emergencyNumber: '100',
    regions: [
      { code: 'NP_GEN', name: 'General / Nepal Police' }
    ]
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    emergencyNumber: '119',
    regions: [
      { code: 'LK_GEN', name: 'General / Sri Lanka Police' }
    ]
  },
  {
    code: 'PK',
    name: 'Pakistan',
    emergencyNumber: '15',
    regions: [
      { code: 'PK_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'CN',
    name: 'China',
    emergencyNumber: '110',
    regions: [
      { code: 'CN_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'TW',
    name: 'Taiwan',
    emergencyNumber: '110',
    regions: [
      { code: 'TW_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    emergencyNumber: '999',
    regions: [
      { code: 'HK_GEN', name: 'General / Hong Kong' }
    ]
  },
  {
    code: 'DE',
    name: 'Germany',
    emergencyNumber: '112',
    regions: [
      { code: 'DE_GEN', name: 'General / StPO Federal' }
    ]
  },
  {
    code: 'FR',
    name: 'France',
    emergencyNumber: '112',
    regions: [
      { code: 'FR_GEN', name: 'General / Code de procédure pénale' }
    ]
  },
  {
    code: 'IT',
    name: 'Italy',
    emergencyNumber: '112',
    regions: [
      { code: 'IT_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'ES',
    name: 'Spain',
    emergencyNumber: '112',
    regions: [
      { code: 'ES_GEN', name: 'General / National' }
    ]
  },
  {
    code: 'NL',
    name: 'Netherlands',
    emergencyNumber: '112',
    regions: [
      { code: 'NL_GEN', name: 'General / National' }
    ]
  }
];

// Compatibility alias for legacy US state select if queried
const STATES = [
  { code: 'US_GEN', name: 'United States (General)' },
  { code: 'US_CA', name: 'California (US)' },
  { code: 'US_TX', name: 'Texas (US)' },
  { code: 'US_NY', name: 'New York (US)' },
  { code: 'US_FL', name: 'Florida (US)' },
  { code: 'US_IL', name: 'Illinois (US)' },
  { code: 'IN_GEN', name: 'India (National / CrPC & BNSS)' },
  { code: 'IN_WB', name: 'West Bengal (India)' },
  { code: 'IN_MH', name: 'Maharashtra (India)' },
  { code: 'IN_KA', name: 'Karnataka (India)' },
  { code: 'IN_TN', name: 'Tamil Nadu (India)' },
  { code: 'IN_DL', name: 'Delhi (India)' },
];

// Jurisdiction Confidence Definitions
const CONFIDENCE = {
  VERIFIED: {
    level: 'verified',
    label: 'VERIFIED JURISDICTION GUIDANCE',
    badgeClass: 'badge-verified',
    desc: 'Statutory rules verified against established legal codes.'
  },
  GENERAL: {
    level: 'general',
    label: 'GENERAL INFORMATION',
    badgeClass: 'badge-general',
    desc: 'Based on fundamental constitutional and civil rights protections.'
  },
  UNVERIFIED: {
    level: 'unverified',
    label: 'NOT YET VERIFIED LOCALLY',
    badgeClass: 'badge-unverified',
    desc: 'General guidance provided; consult local legal aid for specific local statutes.'
  }
};

// Region & Country Statutory Notes with Confidence levels
const JURISDICTION_DATA = {
  // --- United States ---
  US_CA: {
    note: "California does not have a 'stop-and-identify' statute requiring you to identify yourself merely for walking or standing in public. If you are lawfully driving, you must provide your driver's license, vehicle registration, and proof of insurance upon lawful demand.",
    confidence: CONFIDENCE.VERIFIED
  },
  US_TX: {
    note: "Under Texas Penal Code § 38.02, you are only required to give your name, residence address, and date of birth if you have been lawfully arrested. Merely being detained does not require answering identifying questions, though giving false identity is a crime.",
    confidence: CONFIDENCE.VERIFIED
  },
  US_NY: {
    note: "New York is not a strict stop-and-identify state. Under NY CPL § 140.50, police may stop a person reasonably suspected of a felony or misdemeanor and ask for their name and address, but refusal to answer without more does not constitute an independent crime.",
    confidence: CONFIDENCE.VERIFIED
  },
  US_FL: {
    note: "Under Florida Statute § 901.151 (Stop and Frisk Law), if an officer has reasonable suspicion that you committed, are committing, or are about to commit a crime, you may be required to identify yourself.",
    confidence: CONFIDENCE.VERIFIED
  },
  US_IL: {
    note: "Illinois statute 725 ILCS 5/107-14 allows peace officers to stop a person with reasonable suspicion and demand name and address. You are not required to produce physical identification papers unless driving.",
    confidence: CONFIDENCE.VERIFIED
  },
  US_GEN: {
    note: "Rules regarding identification vary across US states. If you are unsure whether you must identify yourself, ask: 'Am I being detained, or am I free to go?' You always have the constitutional right to remain silent beyond required driver credentials.",
    confidence: CONFIDENCE.VERIFIED
  },

  // --- India ---
  IN_GEN: {
    note: "Under Article 20(3) of the Constitution of India, you have a fundamental right against self-incrimination. Under the Code of Criminal Procedure (CrPC) / Bharatiya Nagarik Suraksha Sanhita (BNSS) Section 41 and the landmark Supreme Court ruling in D.K. Basu v. State of West Bengal: (1) Officers must wear clear identification tags; (2) An arrest memo with date and time must be prepared; (3) You have the right to inform a friend, relative, or lawyer within 8–12 hours; (4) Female suspects cannot be arrested between sunset and sunrise except under written magistrate orders and must be handled only by female officers.",
    confidence: CONFIDENCE.VERIFIED
  },
  IN_WB: {
    note: "West Bengal follows national criminal procedure (CrPC/BNSS) and the landmark D.K. Basu (Calcutta HC originated) guidelines. You have the right to demand that an arrest memo is counter-signed by a witness or family member.",
    confidence: CONFIDENCE.VERIFIED
  },
  IN_MH: {
    note: "Maharashtra Police are bound by BNSS/CrPC safeguards. For bailable offenses, police must grant bail immediately at the station. Routine street questioning does not permit physical search without lawful grounds or a registered FIR/complaint.",
    confidence: CONFIDENCE.VERIFIED
  },
  IN_KA: {
    note: "Karnataka follows federal criminal procedure. You are entitled to consult an advocate of your choice during questioning, though not throughout the entire interrogation (Section 41D CrPC).",
    confidence: CONFIDENCE.VERIFIED
  },
  IN_TN: {
    note: "Tamil Nadu enforces D.K. Basu safeguards. Medical examinations upon arrest are mandatory under Section 54. Police cannot seize personal mobile phones or devices without proper seizure memo and legal authority.",
    confidence: CONFIDENCE.VERIFIED
  },
  IN_DL: {
    note: "In Delhi (NCT), citizens have the right to verify the identity and station of questioning officers. Under Delhi Police Standing Orders, videography of police encounters in public spaces is permissible as long as you do not obstruct lawful duties.",
    confidence: CONFIDENCE.VERIFIED
  },

  // --- United Kingdom ---
  GB_EW: {
    note: "In England & Wales under the Police and Criminal Evidence Act 1984 (PACE), police must follow the 'GOWISELY' rule before a stop and search (Grounds, Object, Warrant card if not in uniform, Identity of officer, Station, Entitlement to a search record, Legal power used, and You are being detained). You do not have to provide name/address unless suspected of an offence.",
    confidence: CONFIDENCE.VERIFIED
  },

  // --- Canada ---
  CA_GEN: {
    note: "Under the Canadian Charter of Rights and Freedoms (Sections 9 & 10), you have the right not to be arbitrarily detained, the right to be informed promptly of the reasons for detention, and the right to retain and instruct legal counsel without delay.",
    confidence: CONFIDENCE.VERIFIED
  },

  // Fallback
  FALLBACK: {
    note: "Statutory rules for this specific jurisdiction have not yet been fully cataloged. Fundamental international principles apply: you have the right to remain calm, ask if you are free to leave, refrain from self-incrimination, and request immediate access to a legal representative.",
    confidence: CONFIDENCE.UNVERIFIED
  }
};

function getJurisdictionInfo(regionCode, countryCode) {
  // Check exact region
  if (regionCode && JURISDICTION_DATA[regionCode]) {
    return JURISDICTION_DATA[regionCode];
  }
  // Check country general (e.g. IN_GEN, US_GEN, GB_EW)
  const countryGenKey = `${countryCode}_GEN`;
  if (countryCode && JURISDICTION_DATA[countryGenKey]) {
    return JURISDICTION_DATA[countryGenKey];
  }
  // Fallback
  return JURISDICTION_DATA.FALLBACK;
}

function getStateNote(stateCode) {
  const info = getJurisdictionInfo(stateCode, stateCode ? stateCode.split('_')[0] : 'US');
  return info.note;
}

function getStateName(stateCode) {
  for (const c of COUNTRIES) {
    const reg = c.regions.find(r => r.code === stateCode);
    if (reg) return `${c.name} — ${reg.name}`;
  }
  const s = STATES.find(item => item.code === stateCode);
  return s ? s.name : 'General Jurisdiction';
}

function getEmergencyNumber(countryCode) {
  const c = COUNTRIES.find(item => item.code === countryCode);
  return c ? c.emergencyNumber : '112';
}

// ==========================================================================
// 2. SCENARIO CONTENT (WITH 10-SECOND SUMMARIES)
// ==========================================================================

const CONTENT = {
  police: {
    id: 'police',
    title: 'Police Stop',
    badge: 'Traffic • Street • Home',
    summary: 'Traffic stop, street stop, or police questioning at your door',
    cardSnippet: 'Know what to say. Know what to do. Stay calm and keep hands visible.',
    
    // 10-SECOND SUMMARY: Immediate 3 core actions
    tenSecondSummary: [
      { step: "01", action: "Stay calm and keep your hands visible", sub: "Place hands on the steering wheel or in plain sight." },
      { step: "02", action: "Ask: “Am I free to go, or am I being detained?”", sub: "If free to go, leave calmly. If detained, ask why." },
      { step: "03", action: "State: “I remain silent and do not consent to searches.”", sub: "Decline answering questions without an attorney." }
    ],

    primaryPhrase: "Am I free to go, or am I being detained?",
    phrases: [
      {
        text: "Am I free to go, or am I being detained?",
        label: "Check status",
        context: "Clarifies immediately whether you are legally required to stay."
      },
      {
        text: "I am going to remain silent.",
        label: "Remain silent",
        context: "Invokes your constitutional right against self-incrimination. Say this aloud."
      },
      {
        text: "I do not consent to any search.",
        label: "Refuse search",
        context: "State clearly for the record. Police cannot search without warrant or legal exception."
      },
      {
        text: "I want to speak to a lawyer.",
        label: "Request lawyer",
        context: "If detained or arrested, all questioning must stop once you request counsel."
      },
      {
        text: "I am recording this interaction.",
        label: "Record police",
        context: "You generally have the right to record officers performing duties in public spaces."
      }
    ],
    doThis: [
      { step: "01", text: "Stay calm and keep your hands visible", detail: "Place hands on the steering wheel if in a vehicle, or keep them empty and in plain view." },
      { step: "02", text: "Ask if you are free to leave", detail: "Ask: \"Am I being detained, or am I free to go?\" If you are free to go, calmly walk away." },
      { step: "03", text: "State non-consent to any search", detail: "Say: \"I do not consent to any search.\" Never physically resist, even if they search anyway." },
      { step: "04", text: "Show driver documents if driving", detail: "Drivers must provide license, registration, and insurance. Passengers generally do not have to provide ID unless suspected of a crime." }
    ],
    avoidThis: [
      "Do not make sudden movements or reach into pockets/gloveboxes without explaining first.",
      "Do not argue, touch an officer, or physically resist, even if you know the stop is improper.",
      "Do not answer casual questions about where you are heading, where you were, or what you were doing.",
      "Do not consent to searches of your person, phone, bag, or vehicle."
    ],
    rights: [
      {
        h: 'You can stay silent',
        b: 'Beyond identifying yourself where required by law, you can say: "I am going to remain silent." You do not have to answer questions about where you\'re going, what you\'re doing, or your immigration status.'
      },
      {
        h: 'You can refuse a search',
        b: 'Police can pat down outer clothing for weapons if they reasonably suspect danger, but you can clearly refuse consent to search your body, car, phone, or belongings. Refusing consent is not a crime.'
      },
      {
        h: 'You can ask if you\'re free to leave',
        b: 'Ask: "Am I being detained, or am I free to go?" If the officer says you\'re free to go, you can calmly walk away without answering further questions.'
      },
      {
        h: 'You can record the interaction',
        b: 'In public spaces, you have a constitutional right to record police officers performing their duties. Keep a safe distance and state clearly that you are recording.'
      }
    ],
    after: [
      "Write down everything you remember as soon as you are safe: officer names, badge numbers, patrol car numbers, agency, time, and exact location.",
      "Get contact details from any witnesses who saw or filmed the encounter.",
      "If you were injured or your property was damaged, take timestamped photos immediately and seek medical care.",
      "Save the encounter details to your Incident Vault and consult legal aid or an attorney."
    ]
  },

  ice: {
    id: 'ice',
    title: 'ICE / Immigration',
    badge: 'Home • Workplace • Public',
    summary: 'Home knock, workplace raid, or public encounter with immigration officers',
    cardSnippet: 'Do not open the door without a judge\'s warrant. Exercise your right to remain silent.',
    
    // 10-SECOND SUMMARY: Immediate 3 core actions
    tenSecondSummary: [
      { step: "01", action: "Keep doors closed. Do not open without a judicial warrant.", sub: "Speak through the closed door or through a window." },
      { step: "02", action: "Demand a warrant signed by a court judge.", sub: "Ask them to slide the warrant under the door to verify the judge's signature." },
      { step: "03", action: "Remain silent and refuse to sign any papers.", sub: "Never sign voluntary departure forms without an immigration lawyer." }
    ],

    primaryPhrase: "I do not give permission to enter. Show me a warrant signed by a judge.",
    phrases: [
      {
        text: "I do not give permission to enter. Show me a warrant signed by a judge.",
        label: "Deny entry",
        context: "Slide warrant under the door or hold to window. Must be signed by a judicial judge."
      },
      {
        text: "I do not wish to speak with you or answer any questions.",
        label: "Remain silent",
        context: "Applies to everyone regardless of immigration status. You do not have to answer."
      },
      {
        text: "I do not consent to a search of my person or belongings.",
        label: "Refuse search",
        context: "Officers cannot search your personal effects or home without consent or a judicial warrant."
      },
      {
        text: "I want to speak to an attorney before signing anything.",
        label: "Request attorney",
        context: "Never sign any paper or form that could waive your hearing rights."
      },
      {
        text: "I am remaining silent and choose not to answer questions about my birthplace or status.",
        label: "Status silence",
        context: "You are not required to disclose where you were born or your legal status."
      }
    ],
    doThis: [
      { step: "01", text: "Keep the door completely closed", detail: "Opening the door can be interpreted as consent to enter. Speak through the closed door or window." },
      { step: "02", text: "Inspect the warrant carefully", detail: "Ask them to slide it under the door. Check that it is signed by a court judge (not an administrative ICE supervisor) and contains your correct name/address." },
      { step: "03", text: "Remain silent and state your rights", detail: "State clearly: \"I am remaining silent and I want to speak to a lawyer.\" Everyone in the home has this right." },
      { step: "04", text: "Do not sign any documents", detail: "Never sign voluntary departure or waiver forms without consulting an immigration attorney first." }
    ],
    avoidThis: [
      "Do not open the door unless presented with a valid judicial search warrant signed by a court judge.",
      "Do not run, physically resist, or attempt to flee an encounter.",
      "Do not provide false identification documents or lie about your legal status or identity.",
      "Do not sign any papers or forms handed to you without legal counsel."
    ],
    rights: [
      {
        h: 'You can stay silent',
        b: 'You do not have to answer questions about your citizenship, where you were born, or how you entered the country. Remaining silent cannot be used as an admission of guilt.'
      },
      {
        h: 'You don\'t have to open your door',
        b: 'Administrative warrants do NOT give officers legal authority to enter your home without permission. Only a search warrant signed by a court judge allows entry.'
      },
      {
        h: 'You can refuse to sign anything',
        b: 'Don\'t sign any documents without an immigration lawyer reviewing them first, especially anything that could waive your right to a hearing before an immigration judge.'
      },
      {
        h: 'You have the right to legal counsel',
        b: 'You can state you want to speak with an attorney before answering questions or making decisions. You are entitled to representation at your own expense.'
      }
    ],
    after: [
      "Write down the officers' names, badges, agency names, and vehicle license plates.",
      "Note the date, time, and exact address of the encounter, plus names of everyone present.",
      "If someone was detained, immediately record their Alien Registration Number (A-Number) or booking ID.",
      "Contact an immigration attorney, rapid response network, or immigrant legal aid group immediately."
    ]
  },

  checkpoint: {
    id: 'checkpoint',
    title: 'Checkpoint',
    badge: 'Sobriety • Border • License',
    summary: 'Immigration checkpoint, sobriety checkpoint, or routine driver check',
    cardSnippet: 'Provide required driving credentials. Decline consent to vehicle searches.',
    
    // 10-SECOND SUMMARY: Immediate 3 core actions
    tenSecondSummary: [
      { step: "01", action: "Stop smoothly and keep your hands on the steering wheel.", sub: "Turn on your interior dome light at night." },
      { step: "02", action: "Provide required driver credentials upon demand.", sub: "Show license, registration, and insurance. Decline informal conversation." },
      { step: "03", action: "Decline consent to search and ask: “Am I free to go?”", sub: "Officers cannot search closed compartments without probable cause or consent." }
    ],

    primaryPhrase: "Here is my license and registration. I will remain silent beyond that.",
    phrases: [
      {
        text: "Here is my license and registration. I will remain silent beyond that.",
        label: "Documents only",
        context: "Satisfies mandatory driver requirements without volunteering conversational information."
      },
      {
        text: "Am I free to go?",
        label: "Check status",
        context: "Officers cannot detain you longer than necessary for the checkpoint's specific purpose."
      },
      {
        text: "I do not consent to any search of my vehicle.",
        label: "Refuse search",
        context: "Officers cannot search your trunk, glove compartment, or bags without probable cause or consent."
      },
      {
        text: "What is the specific legal purpose of this checkpoint?",
        label: "Ask purpose",
        context: "Checkpoints must follow established guidelines and a neutral stopping formula."
      }
    ],
    doThis: [
      { step: "01", text: "Pull forward calmly and keep hands visible", detail: "Turn on your interior light at night and rest hands on the steering wheel." },
      { step: "02", text: "Provide required driver credentials", detail: "Drivers must provide valid driver's license, vehicle registration, and proof of insurance upon request." },
      { step: "03", text: "State non-consent to search", detail: "State clearly: \"I do not consent to a search of my vehicle.\" Keep glove box and trunk closed unless lawfully commanded." },
      { step: "04", text: "Ask if you are free to proceed", detail: "Once required documents are inspected, ask: \"Am I free to go?\"" }
    ],
    avoidThis: [
      "Do not engage in casual conversation about where you have been, where you are going, or what you are doing.",
      "Do not consent to vehicle searches, trunk searches, or searches of passenger belongings.",
      "Do not make sudden movements or reach under seats without explaining your action to the officer."
    ],
    rights: [
      {
        h: 'Checkpoints must follow neutral rules',
        b: 'Law enforcement cannot stop drivers arbitrarily. Checkpoints must follow pre-established, neutral selection formulas (such as stopping every car or every third car).'
      },
      {
        h: 'You can stay silent beyond required documentation',
        b: 'At a vehicle checkpoint, you must provide valid driving credentials upon demand. Beyond providing those documents, you can decline to answer questions.'
      },
      {
        h: 'Vehicle search protections',
        b: 'Officers can observe items in plain view through windows, but they cannot search closed compartments, your trunk, or luggage without probable cause or your explicit consent.'
      },
      {
        h: 'Detention limits',
        b: 'A checkpoint stop cannot be prolonged beyond the time reasonably needed to effectuate its designated safety purpose without independent reasonable suspicion.'
      }
    ],
    after: [
      "Note the exact location, highway mile marker, agency operating the checkpoint, and time.",
      "Document whether the officers followed a neutral stopping pattern or singled you out unfairly.",
      "If you believe your constitutional rights were violated, save a record in your Incident Vault and contact legal aid."
    ]
  }
};

// ==========================================================================
// 3. PRE-POPULATED DEMO INCIDENTS FOR INCIDENT VAULT
// ==========================================================================

const INITIAL_DEMO_INCIDENTS = [
  {
    id: 'demo_1',
    type: 'Police Stop',
    scenarioId: 'police',
    date: 'September 12, 2026',
    time: '7:42 PM',
    location: 'Sample Location — Main St & 4th Ave',
    duration: '03:18',
    status: 'Documented',
    isDemo: true,
    whatHappened: ['I was questioned', 'I was asked for identification'],
    notes: 'Sample incident record showing how a documented police encounter with scripted responses and notes appears in the private vault.',
    recordingLabel: 'Demo recording preview (03:18) — Non-functional sample state'
  },
  {
    id: 'demo_2',
    type: 'Checkpoint',
    scenarioId: 'checkpoint',
    date: 'September 08, 2026',
    time: '5:16 PM',
    location: 'Sample Location — Highway Route 9 North',
    duration: '01:45',
    status: 'Documented',
    isDemo: true,
    whatHappened: ['I was asked for identification', 'I was asked to leave'],
    notes: 'Example checkpoint stop record. Showed driver license and registration, asserted right to remain silent, and declined consent for vehicle search.',
    recordingLabel: 'Demo recording preview (01:45) — Non-functional sample state'
  },
  {
    id: 'demo_3',
    type: 'ICE / Immigration',
    scenarioId: 'ice',
    date: 'September 02, 2026',
    time: '2:31 PM',
    location: 'Sample Location — Residential Building Entrance',
    duration: '04:12',
    status: 'Follow-up recommended',
    isDemo: true,
    whatHappened: ['I was questioned', 'I was given paperwork'],
    notes: 'Example record demonstrating post-encounter workflow. Kept door closed, requested judicial warrant, and did not sign unreviewed documents.',
    recordingLabel: 'Demo recording preview (04:12) — Non-functional sample state'
  }
];

// ==========================================================================
// 4. SITUATION QUICK-CHECK TRIAGE LOGIC
// ==========================================================================

const QUICK_CHECK_OPTIONS = {
  who: [
    { id: 'police', label: 'Police Officer / Patrol', sub: 'City police, state trooper, sheriff deputy' },
    { id: 'immigration', label: 'Immigration Officer', sub: 'ICE, border patrol, immigration enforcement' },
    { id: 'checkpoint', label: 'Checkpoint / Roadblock', sub: 'Sobriety checkpoint, border checkpoint, traffic check' },
    { id: 'security', label: 'Private Security / Guard', sub: 'Mall security, store guard, building staff' },
    { id: 'not_sure', label: 'I’m Not Sure', sub: 'Unmarked vehicle or unclear identification' }
  ],
  what: [
    { id: 'questioned', label: 'I am being questioned', sub: 'Asking where I am going or what I am doing' },
    { id: 'searched', label: 'I am being searched', sub: 'Attempting to search my pockets, bag, or vehicle' },
    { id: 'detained', label: 'I am being detained / held', sub: 'Told I cannot leave or ordered to stay' },
    { id: 'id_asked', label: 'I am asked for ID / documents', sub: 'Demanding driver license, ID, or papers' },
    { id: 'asked_to_leave', label: 'I am being asked to leave', sub: 'Directed to leave a public or private location' },
    { id: 'not_sure', label: 'I’m Not Sure', sub: 'Unclear commands or uncertain situation' }
  ]
};

function resolveQuickCheck(whoId, whatId) {
  if (whoId === 'immigration') {
    return {
      scenarioId: 'ice',
      title: 'ICE / Immigration Encounter',
      matchedReason: 'Dealing with immigration enforcement officers.',
      adviceSnippet: 'Keep doors closed without a judicial warrant. You do not have to answer questions regarding your birthplace or status.',
      confidence: CONFIDENCE.VERIFIED
    };
  }

  if (whoId === 'checkpoint') {
    return {
      scenarioId: 'checkpoint',
      title: 'Checkpoint Stop',
      matchedReason: 'Stopped at a vehicle or immigration checkpoint.',
      adviceSnippet: 'Provide required driver credentials upon lawful request. Decline consent to searches of closed vehicle areas.',
      confidence: CONFIDENCE.VERIFIED
    };
  }

  if (whoId === 'security') {
    return {
      scenarioId: 'police', // uses police base but provides security context
      title: 'Private Security Interaction',
      matchedReason: 'Dealing with private security guards or store personnel.',
      adviceSnippet: 'Private security guards generally do NOT have police search or arrest powers. They can ask you to leave private property. Ask: “Am I free to leave?” and walk away.',
      confidence: CONFIDENCE.GENERAL
    };
  }

  if (whoId === 'police' || whatId === 'detained' || whatId === 'searched' || whatId === 'questioned') {
    return {
      scenarioId: 'police',
      title: 'Police Stop & Questioning',
      matchedReason: 'Interacting with law enforcement officers.',
      adviceSnippet: 'Keep hands visible. Ask: “Am I being detained, or am I free to go?” Clearly state non-consent to any search.',
      confidence: CONFIDENCE.VERIFIED
    };
  }

  // Not sure / default cautious fallback
  return {
    scenarioId: 'police',
    title: 'General Safety Guidance',
    matchedReason: 'Uncertain situation — using standard civil protection protocol.',
    adviceSnippet: 'Stay calm and keep hands visible. Ask: “Am I free to leave?” Never physically resist. Exercise your right to remain silent until you can consult legal counsel.',
    confidence: CONFIDENCE.GENERAL
  };
}
