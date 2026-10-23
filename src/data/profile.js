// Single source of truth for personal content. Everything here comes from the supplied CV
// or from the owner's brief. Nothing private (address, ID numbers, DOB, etc.) belongs here.

export const profile = {
  name: 'Sahil Shahzad',
  monogram: 'SS',
  headline: 'Aspiring Digital Marketing & Graphic Design Professional',
  eyebrow: 'Digital Marketing · Graphic Design',
  brandStatement: 'Creative ideas. Clear visuals. Smarter digital presence.',
  heroIntro:
    'Meet Sahil Shahzad — an aspiring creative professional interested in graphic design, digital marketing, and continuous skills development.',
  heroNote: 'Focused on creativity, learning, and practical growth.',
  photo: '/images/image.png',
  photoAlt: 'Portrait of Sahil Shahzad',
  aboutParagraphs: [
    'I am an enthusiastic, early-career creative studying BS Mass Communication, with an interest in graphic design and digital marketing.',
    'I am a quick learner who values clear communication, teamwork, and constructive feedback. I am looking for my first professional opportunity, where I can take on challenges, keep building practical skills, and contribute creatively to digital projects.',
  ],
  aboutStatement: 'Eager to learn, grow, and contribute.',
  email: 'sahilshahzad9876@gmail.com',
  // TODO(owner): the phone number on the CV (0300-8837690) differs from the one in the build brief.
  // Confirm the right number and approval before setting showPhone to true.
  phone: '0300-8837690',
  showPhone: false,
  // Add verified URLs only, e.g. { label: 'LinkedIn', href: 'https://...' }. Empty = no social icons.
  socials: [],
}

export const skillGroups = {
  digital: {
    title: 'Digital & Office Skills',
    items: [
      { id: 'digital-marketing', label: 'Digital Marketing', note: 'Listed on CV', icon: 'Megaphone' },
      { id: 'ms-office', label: 'MS Office', note: 'Listed on CV', icon: 'FileText' },
    ],
  },
  strengths: {
    title: 'Professional Strengths',
    items: [
      { id: 'communication', label: 'Communication', icon: 'MessageCircle' },
      { id: 'teamwork', label: 'Teamwork', icon: 'Users' },
      { id: 'critical-thinking', label: 'Critical Thinking', icon: 'Brain' },
      { id: 'management', label: 'Management', icon: 'Layers' },
      { id: 'quick-learner', label: 'Quick Learner', icon: 'Lightbulb' },
      { id: 'responsible', label: 'Hardworking & Responsible', icon: 'Target' },
    ],
  },
}

export const unverifiedSkills = [
  { label: 'Graphic Design', duration: '6 months', kind: 'unknown: training or experience?' },
  { label: 'Web Browsing', duration: null, kind: 'unknown' },
]

export const languages = [
  { id: 'punjabi', label: 'Punjabi' },
  { id: 'urdu', label: 'Urdu' },
  { id: 'english', label: 'English', level: 'Basic' },
]

// The CV lists no interests. Add verified ones here; the "Beyond Work" block stays hidden while this is empty.
export const interests = []