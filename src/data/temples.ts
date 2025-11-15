export interface Temple {
  id: string;
  name: string;
  nameDevanagari: string;
  region: string;
  state: string;
  era: string;
  type: string;
  civilization: string;
  coordinates: [number, number]; // [lat, lng]
  mythSnippet: string;
  image: string;
  deity: string;
  categories: string[];
}

export const temples: Temple[] = [
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    nameDevanagari: "काशी विश्वनाथ",
    region: "Aryavarta",
    state: "Uttar Pradesh",
    era: "Ancient (Pre-1000 BCE)",
    type: "Jyotirlinga",
    civilization: "Vedic",
    coordinates: [25.3109, 83.0105],
    mythSnippet: "Where Shiva's infinite light pierces through time",
    image: "/placeholder.svg",
    deity: "Shiva",
    categories: ["Jyotirlinga", "UNESCO Sites", "Ancient Kingdoms"]
  },
  {
    id: "kedarnath",
    name: "Kedarnath Temple",
    nameDevanagari: "केदारनाथ",
    region: "Himalayas",
    state: "Uttarakhand",
    era: "Ancient (Pre-1000 BCE)",
    type: "Mountain Temple",
    civilization: "Vedic",
    coordinates: [30.7346, 79.0669],
    mythSnippet: "The abode where Pandavas sought redemption",
    image: "/placeholder.svg",
    deity: "Shiva",
    categories: ["Mountain Temples", "Jyotirlinga", "Ramayana Sites"]
  },
  {
    id: "rameshwaram",
    name: "Ramanathaswamy Temple",
    nameDevanagari: "रामनाथस्वामी",
    region: "Dakshinapatha",
    state: "Tamil Nadu",
    era: "Ancient (Pre-1000 BCE)",
    type: "Shore Temple",
    civilization: "Dravidian",
    coordinates: [9.2876, 79.3129],
    mythSnippet: "Where Rama built the sacred bridge to Lanka",
    image: "/placeholder.svg",
    deity: "Shiva",
    categories: ["Jyotirlinga", "Ramayana Sites"]
  },
  {
    id: "dwarka",
    name: "Dwarkadhish Temple",
    nameDevanagari: "द्वारकाधीश",
    region: "Anarta",
    state: "Gujarat",
    era: "Ancient (Pre-1000 BCE)",
    type: "Shore Temple",
    civilization: "Vedic",
    coordinates: [22.2442, 68.9685],
    mythSnippet: "Krishna's legendary golden city by the sea",
    image: "/placeholder.svg",
    deity: "Krishna",
    categories: ["Ancient Kingdoms", "Mahabharata Sites"]
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    nameDevanagari: "कोणार्क",
    region: "Kalinga",
    state: "Odisha",
    era: "Medieval (1250 CE)",
    type: "Shore Temple",
    civilization: "Kalinga",
    coordinates: [19.8876, 86.0945],
    mythSnippet: "The celestial chariot of Surya carved in stone",
    image: "/placeholder.svg",
    deity: "Surya",
    categories: ["UNESCO Sites", "Ancient Kingdoms"]
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temples",
    nameDevanagari: "खजुराहो",
    region: "Madhya Pradesh",
    state: "Madhya Pradesh",
    era: "Medieval (950-1050 CE)",
    type: "Temple Complex",
    civilization: "Chandela",
    coordinates: [24.8318, 79.9199],
    mythSnippet: "Where divine union celebrates cosmic creation",
    image: "/placeholder.svg",
    deity: "Multiple",
    categories: ["UNESCO Sites", "Ancient Kingdoms"]
  },
  {
    id: "somnath",
    name: "Somnath Temple",
    nameDevanagari: "सोमनाथ",
    region: "Anarta",
    state: "Gujarat",
    era: "Ancient (Pre-1000 BCE)",
    type: "Shore Temple",
    civilization: "Vedic",
    coordinates: [20.8880, 70.4013],
    mythSnippet: "The eternal shrine that rose from destruction",
    image: "/placeholder.svg",
    deity: "Shiva",
    categories: ["Jyotirlinga", "Ancient Kingdoms"]
  },
  {
    id: "amarnath",
    name: "Amarnath Cave",
    nameDevanagari: "अमरनाथ",
    region: "Kashmir",
    state: "Jammu & Kashmir",
    era: "Ancient (Pre-1000 BCE)",
    type: "Cave Temple",
    civilization: "Vedic",
    coordinates: [34.2268, 75.4977],
    mythSnippet: "Where Shiva revealed the secrets of immortality",
    image: "/placeholder.svg",
    deity: "Shiva",
    categories: ["Cave Temples", "Mountain Temples"]
  },
  {
    id: "badrinath",
    name: "Badrinath Temple",
    nameDevanagari: "बद्रीनाथ",
    region: "Himalayas",
    state: "Uttarakhand",
    era: "Ancient (Pre-1000 BCE)",
    type: "Mountain Temple",
    civilization: "Vedic",
    coordinates: [30.7433, 79.4938],
    mythSnippet: "Vishnu's meditation in the Himalayan heights",
    image: "/placeholder.svg",
    deity: "Vishnu",
    categories: ["Mountain Temples", "Ancient Kingdoms"]
  },
  {
    id: "meenakshi",
    name: "Meenakshi Temple",
    nameDevanagari: "मीनाक्षी",
    region: "Dakshinapatha",
    state: "Tamil Nadu",
    era: "Medieval (1600 CE)",
    type: "Temple Complex",
    civilization: "Dravidian",
    coordinates: [9.9195, 78.1193],
    mythSnippet: "The divine marriage of Shiva and Parvati",
    image: "/placeholder.svg",
    deity: "Parvati",
    categories: ["Ancient Kingdoms", "Shakti Peethas"]
  },
  {
    id: "ajanta",
    name: "Ajanta Caves",
    nameDevanagari: "अजंता",
    region: "Vidarbha",
    state: "Maharashtra",
    era: "Ancient (200 BCE - 650 CE)",
    type: "Cave Temple",
    civilization: "Buddhist",
    coordinates: [20.5520, 75.7033],
    mythSnippet: "Buddha's teachings painted in timeless caves",
    image: "/placeholder.svg",
    deity: "Buddha",
    categories: ["Cave Temples", "Buddhist Routes", "UNESCO Sites"]
  },
  {
    id: "bodh-gaya",
    name: "Mahabodhi Temple",
    nameDevanagari: "महाबोधि",
    region: "Magadha",
    state: "Bihar",
    era: "Ancient (3rd Century BCE)",
    type: "Buddhist Temple",
    civilization: "Mauryan",
    coordinates: [24.6958, 84.9914],
    mythSnippet: "Where Siddhartha awakened under the Bodhi tree",
    image: "/placeholder.svg",
    deity: "Buddha",
    categories: ["Buddhist Routes", "UNESCO Sites", "Ancient Kingdoms"]
  }
];

export const sacredRoutes = [
  {
    name: "Char Dham",
    temples: ["kedarnath", "badrinath", "dwarka", "rameshwaram"],
    description: "The four cardinal shrines of Hindu pilgrimage"
  },
  {
    name: "Divine Axis",
    temples: ["kedarnath", "kashi-vishwanath", "rameshwaram"],
    description: "The sacred alignment of Shiva's cosmic energy"
  },
  {
    name: "Gujarat Sacred Coast",
    temples: ["dwarka", "somnath"],
    description: "The legendary western pilgrimage circuit"
  }
];
