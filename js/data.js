// All content here is general information written in plain language.
// It is not legal advice and does not cite any single copyrighted source.

const STATES = [
  { code: 'GENERAL', name: 'General / not sure' },
  { code: 'CA', name: 'California' },
  { code: 'TX', name: 'Texas' },
  { code: 'NY', name: 'New York' },
  { code: 'FL', name: 'Florida' },
  { code: 'IL', name: 'Illinois' },
];

// Short, well-established addenda. Kept deliberately general where state
// statutes vary or change, with a pointer to verify locally.
const STATE_NOTES = {
  CA: "California does not require you to show ID to police just for walking or standing on the street. If you're driving, you must show your license, registration, and proof of insurance if asked.",
  TX: "In Texas, if you're arrested, you can be required to give your name, address, and date of birth. You're not required to answer other questions.",
  NY: "New York does not have a general law requiring you to identify yourself to police without being arrested first.",
  FL: "Florida requires you to identify yourself if you're lawfully detained and an officer has reasonable suspicion of a crime.",
  IL: "Illinois does not require you to show ID just for being stopped on the street, but you may be asked to identify yourself if lawfully detained.",
  GENERAL: "Rules about identifying yourself vary by state. If unsure, you can ask 'Am I being detained, or am I free to go?'"
};

const CONTENT = {
  police: {
    title: 'Police stop',
    rights: [
      { h: 'You can stay silent', b: 'Beyond identifying yourself where required, you can say: "I am going to remain silent." You do not have to answer questions about where you\'re going, what you\'re doing, or your immigration status.' },
      { h: 'You can refuse a search', b: 'Police can pat you down for weapons if they suspect danger, but you can clearly refuse consent to search your body, car, or belongings beyond that. Refusing consent is not a crime, even if they search anyway.' },
      { h: 'You can ask if you\'re free to leave', b: 'Ask: "Am I being detained, or am I free to go?" If the officer says you\'re free to go, you can calmly walk away.' },
      { h: 'You can record the interaction', b: 'In public places, you generally have the right to record police doing their job. Keep a safe distance and state clearly that you are recording if asked.' },
    ],
    phrases: [
      "I am going to remain silent.",
      "I do not consent to a search.",
      "Am I being detained, or am I free to go?",
      "I want to speak to a lawyer.",
      "I am recording this interaction.",
    ],
    after: [
      "Write down everything you remember as soon as it's safe: time, location, badge/car numbers, what was said.",
      "Note any witnesses and their contact info if possible.",
      "If you were hurt or your rights were violated, photograph any injuries or damage.",
      "Contact a local legal aid organization or attorney to report what happened.",
    ],
  },
  ice: {
    title: 'ICE / immigration',
    rights: [
      { h: 'You can stay silent', b: 'You do not have to answer questions about your immigration status, where you were born, or how you entered the country.' },
      { h: 'You don\'t have to open the door', b: 'If ICE does not have a warrant signed by a judge, you can keep the door closed. Ask them to slide the warrant under the door or hold it up to a window so you can check it.' },
      { h: 'You can refuse to sign anything', b: 'Don\'t sign any documents without a lawyer reviewing them first, especially anything that could waive your right to a hearing.' },
      { h: 'You have a right to a lawyer', b: 'You can say you want to speak to a lawyer before answering questions or signing documents. You may not be provided one for free in immigration proceedings, but you can still ask for time to get one.' },
    ],
    phrases: [
      "I do not wish to speak with you or answer any questions.",
      "I do not give you permission to enter my home.",
      "I want to see a judicial warrant.",
      "I do not consent to a search of my person or belongings.",
      "I want to speak to a lawyer.",
    ],
    after: [
      "Write down the officers' names, agency, and any document or case numbers you were given.",
      "Note the date, time, and location of the encounter.",
      "Contact an immigration attorney or a local immigrant-rights legal aid organization as soon as possible.",
      "If a family member was detained, ask for the A-number (alien registration number) if any document listed one.",
    ],
  },
  checkpoint: {
    title: 'Checkpoint',
    rights: [
      { h: 'Checkpoints must follow set rules', b: 'Officers running a checkpoint generally must stop vehicles using a neutral, pre-set pattern (like every car) rather than singling people out.' },
      { h: 'You can stay silent beyond basic ID', b: 'At a driving checkpoint you\'ll typically need to show license, registration, and insurance. Beyond that, you can decline to answer other questions.' },
      { h: 'You can ask what kind of checkpoint it is', b: 'It\'s reasonable to ask whether it\'s a sobriety, license, or immigration checkpoint so you understand what\'s being asked of you.' },
      { h: 'You can refuse consent to search', b: 'Unless officers have a specific legal basis, you can decline consent to search your vehicle beyond what\'s visible.' },
    ],
    phrases: [
      "Here is my license and registration.",
      "I am going to remain silent beyond that.",
      "I do not consent to a search of my vehicle.",
      "Am I free to go?",
    ],
    after: [
      "Note the location, time, and which agency was running the checkpoint.",
      "Write down anything unusual about how you were treated.",
      "If you believe your rights were violated, contact a local legal aid organization.",
    ],
  },
};

function getStateNote(stateCode) {
  return STATE_NOTES[stateCode] || STATE_NOTES.GENERAL;
}
