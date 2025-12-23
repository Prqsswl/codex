import React, { useState, useEffect, useRef } from 'react';
import { videos } from './data/videos';
import { Video, ChatMessage } from './types';
import { X, Send, Sparkles, Play, Info } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Group videos by category
const categories = Array.from(new Set(videos.map(v => v.category)));
const videosByCategory = categories.reduce((acc, category) => {
  acc[category] = videos.filter(v => v.category === category);
  return acc;
}, {} as Record<string, Video[]>);

const App = () => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-background text-primary font-sans flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-background/90 backdrop-blur z-10 border-b border-surface">
        <div>
          <h1 className="text-xl font-bold tracking-tight">DEEP VIEW</h1>
          <p className="text-xs text-secondary font-medium tracking-wide">23 PILLARS ACTIVE</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-surface border border-surfaceHover flex items-center justify-center">
           <span className="text-xs">AI</span>
        </div>
      </header>

      {/* Main Content - Vertical Feed of Tracks */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-20 safe-pb">
        <div className="flex flex-col gap-8 py-6">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-3">
              <h2 className="px-6 text-sm font-bold text-secondary uppercase tracking-wider">{category}</h2>

              {/* Horizontal Scroll Area for Cards */}
              <div className="overflow-x-auto no-scrollbar px-6 flex gap-4 snap-x">
                {videosByCategory[category].map((video) => (
                   <div
                     key={video.id}
                     onClick={() => setActiveVideo(video)}
                     className="snap-start shrink-0 w-[280px] flex flex-col gap-2 cursor-pointer group"
                   >
                     {/* Thumbnail Card */}
                     <div className="relative aspect-video rounded-lg overflow-hidden bg-surface border border-transparent group-hover:border-surfaceHover transition-all">
                       <img
                         src={video.thumbnail}
                         alt={video.title}
                         className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                       <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[10px] font-mono">
                          {video.duration || '10:00'}
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                             <Play size={16} fill="white" />
                          </div>
                       </div>
                     </div>

                     {/* Meta */}
                     <div>
                       <h3 className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-white text-gray-200 transition-colors">
                         {video.title}
                       </h3>
                       <p className="text-xs text-secondary mt-1 line-clamp-1">{video.views} views</p>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Immersive Player Modal */}
      {activeVideo && (
        <ImmersivePlayer
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
};

const ImmersivePlayer = ({ video, onClose }: { video: Video, onClose: () => void }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSynthesis = async () => {
    setIsSynthesizing(true);
    // Add system message indicating synthesis start
    const synthesisMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'ai',
      content: 'מעבד את תוכן הסרטון... יוצר סינתזה פילוסופית מעמיקה.',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, synthesisMsg]);

    // Mock delay for effect
    setTimeout(() => {
       const response: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: `**סינתזה: ${video.title}**\n\nבניתוח מעמיק של התוכן, אנו רואים כאן השתקפות של עקרונות אבולוציוניים בסיסיים. הטכנולוגיה אינה ישות זרה, אלא הרחבה (Exosomatic) של התודעה האנושית. \n\nכמו שהמיטוכונדריה נטמעה בתא כדי ליצור חיים מורכבים, כך ה-AI נטמע במרקם החברתי שלנו. השאלה איננה "האם זה יחליף אותנו", אלא האם אנחנו עדים לשלב הבא באבולוציה הביולוגית-דיגיטלית.\n\nהסרטון מדגיש את המתח שבין שליטה לכאוס - מוטיב שחוזר בביולוגיה, החל מהרמת ה-DNA ועד למערכות אקולוגיות מורכבות.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
      setIsSynthesizing(false);
    }, 2500);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Mock response
    setTimeout(() => {
      const reply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: "זו נקודה מעניינת. אם נבחן את זה דרך הפריזמה של תורת המשחקים (כפי שראינו ביהלומים אחרים), יש כאן דילמה של אסיר בקנה מידה פלנטרי. מה דעתך על ההיבט המוסרי שהועלה?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col animate-in slide-in-from-bottom duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-background/95 border-b border-surface">
        <button onClick={onClose} className="p-2 -ml-2 text-secondary hover:text-primary transition-colors">
          <X size={24} />
        </button>
        <span className="text-sm font-medium truncate max-w-[200px]">{video.title}</span>
        <button
          onClick={handleSynthesis}
          disabled={isSynthesizing}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 hover:bg-accent/20 text-accent text-xs font-bold rounded-full transition-colors border border-accent/20"
        >
          <Sparkles size={12} />
          {isSynthesizing ? 'מעבד...' : 'סינתזה'}
        </button>
      </div>

      {/* Video Player Area (Fixed Aspect Ratio) */}
      <div className="w-full aspect-video bg-black shrink-0 relative">
        <iframe
          className="w-full h-full absolute inset-0"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&playsinline=1&modestbranding=1&rel=0&enablejsapi=1`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Chat Area (Flex Grow) */}
      <div className="flex-1 flex flex-col min-h-0 bg-background relative">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
           {/* Welcome Message */}
           {messages.length === 0 && (
             <div className="text-center mt-8 px-8">
               <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-3">
                 <Sparkles className="text-secondary" size={20} />
               </div>
               <p className="text-sm text-secondary leading-relaxed">
                 אני כאן כשותף לצפייה ("Co-Watcher").<br/>
                 לחץ על "סינתזה" לניתוח עומק, או שאל אותי כל דבר שקשור לרעיונות בסרטון.
               </p>
             </div>
           )}

           {messages.map((msg) => (
             <div key={msg.id} className={cn("flex flex-col max-w-[85%]", msg.role === 'user' ? "self-start items-start" : "self-end items-end")}>
               <div className={cn(
                 "px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                 msg.role === 'user'
                   ? "bg-surface text-primary rounded-tl-none border border-surfaceHover"
                   : "bg-accent/10 text-primary rounded-tr-none border border-accent/20"
               )}>
                 {msg.content}
               </div>
               <span className="text-[10px] text-zinc-600 mt-1 px-1">
                 {msg.role === 'user' ? 'אני' : 'Deep View AI'}
               </span>
             </div>
           ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-surface bg-background safe-pb">
          <div className="flex items-center gap-2 bg-surface rounded-full px-4 py-2 border border-surfaceHover focus-within:border-secondary transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="שאל משהו מעמיק..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-primary placeholder-zinc-600 h-8"
              // Prevent zoom on iOS
              style={{ fontSize: '16px' }}
            />
            <button
              onClick={sendMessage}
              className="p-1.5 bg-secondary/10 rounded-full text-secondary hover:text-primary transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
