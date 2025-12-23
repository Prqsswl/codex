export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  description: string;
  duration?: string;
  views?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}
