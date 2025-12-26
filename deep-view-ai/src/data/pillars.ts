export interface Video {
  id: string;
  title: string;
  channelName: string;
  thumbnailUrl: string;
  videoUrl: string; // YouTube ID or URL
  category: string;
  duration: string;
}

export const PILLARS = [
  "Philosophy", "History", "Technology", "Science", "Psychology",
  "Biology", "Physics", "Mathematics", "Art", "Literature",
  "Music", "Cinema", "Economics", "Politics", "Sociology",
  "Religion", "Spirituality", "Nature", "Space", "Engineering",
  "Architecture", "Design", "Future"
];

// Helper to generate a mock thumbnail
const getThumb = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const MOCK_VIDEOS: Video[] = [
  // Philosophy
  {
    id: "1",
    title: "The meaning of life according to existentialism",
    channelName: "Philosophy Tube",
    thumbnailUrl: getThumb("mJP54_t3Wj8"),
    videoUrl: "mJP54_t3Wj8", // Example ID
    category: "Philosophy",
    duration: "25:30"
  },
  {
    id: "2",
    title: "Plato's Allegory of the Cave",
    channelName: "TED-Ed",
    thumbnailUrl: getThumb("1RWOpQXTltA"),
    videoUrl: "1RWOpQXTltA",
    category: "Philosophy",
    duration: "4:30"
  },
  // History
  {
    id: "3",
    title: "The Fall of Rome",
    channelName: "History Marche",
    thumbnailUrl: getThumb("3PszVWZNWVA"),
    videoUrl: "3PszVWZNWVA",
    category: "History",
    duration: "18:45"
  },
  // Tech / Future
  {
    id: "4",
    title: "The Future of AI",
    channelName: "ColdFusion",
    thumbnailUrl: getThumb("pVZ2NShfCE8"),
    videoUrl: "pVZ2NShfCE8",
    category: "Technology",
    duration: "15:20"
  },
  {
    id: "5",
    title: "Neuralink Launch Event",
    channelName: "CNET",
    thumbnailUrl: getThumb("dvv4o2tFv1I"),
    videoUrl: "dvv4o2tFv1I",
    category: "Technology",
    duration: "12:10"
  },
   // Science / Biology
  {
    id: "6",
    title: "The Map of Biology",
    channelName: "Domain of Science",
    thumbnailUrl: getThumb("nQ1F0sWIeYQ"),
    videoUrl: "nQ1F0sWIeYQ",
    category: "Biology",
    duration: "12:10"
  },
   // Music (User interest)
  {
    id: "7",
    title: "Why music makes us feel",
    channelName: "Adam Neely",
    thumbnailUrl: getThumb("rN0qRKjfX3s"),
    videoUrl: "rN0qRKjfX3s",
    category: "Music",
    duration: "14:20"
  },
  // Adding more placeholders to fill the feed
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: `mock-${i}`,
    title: `Deep Research Topic #${i + 1}: The Unseen Connections`,
    channelName: "Deep View Original",
    thumbnailUrl: `https://picsum.photos/seed/${i}/800/450`,
    videoUrl: "dQw4w9WgXcQ", // Rick Roll as placeholder for now, or use a generic safe one
    category: PILLARS[i % PILLARS.length],
    duration: "45:00"
  }))
];
