import React, { useState } from 'react';
import { MOCK_VIDEOS, PILLARS } from './data/pillars';
import Feed from './components/Feed';
import { Menu, Search } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredVideos = activeCategory === 'All'
    ? MOCK_VIDEOS
    : MOCK_VIDEOS.filter(v => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white font-sans max-w-md mx-auto border-x border-gray-900/50 shadow-2xl shadow-blue-900/10">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="w-5 h-5 text-gray-400" />
          <h1 className="text-lg font-bold tracking-tighter bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            DEEP VIEW
          </h1>
        </div>
        <Search className="w-5 h-5 text-gray-400" />
      </header>

      {/* Category Filter (Horizontal Scroll) */}
      <div className="sticky top-14 z-40 bg-black/95 border-b border-white/5 py-3 overflow-x-auto no-scrollbar">
        <div className="flex px-4 gap-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              activeCategory === 'All'
                ? 'bg-white text-black'
                : 'bg-gray-900 text-gray-400 hover:text-white'
            }`}
          >
            All Pillars
          </button>
          {PILLARS.map((pillar) => (
            <button
              key={pillar}
              onClick={() => setActiveCategory(pillar)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                activeCategory === pillar
                  ? 'bg-white text-black'
                  : 'bg-gray-900 text-gray-400 hover:text-white'
              }`}
            >
              {pillar}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-4">
        <Feed videos={filteredVideos} />
      </main>

      {/* Footer / Tab Bar Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default App;
