import { useState, useMemo } from 'react';
import { generateVideos } from './mockDataGenerator';
import { standardYouTubeAlgorithm, betterDiscoveryAlgorithm } from './algorithms';
import type { Video } from './types';
import { Play, ThumbsUp, Share2, MoreVertical, Compass, RefreshCw } from 'lucide-react';

function App() {
  const [videos] = useState(() => generateVideos());
  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);
  const [mode, setMode] = useState<'standard' | 'better'>('standard');

  const recommendations = useMemo(() => {
    if (mode === 'standard') {
      return standardYouTubeAlgorithm(currentVideo, videos);
    } else {
      return betterDiscoveryAlgorithm(currentVideo, videos);
    }
  }, [currentVideo, videos, mode]);

  // Helper to get label for the "Better" algo
  const getLabel = (v: Video) => {
    if (mode === 'standard') return null;

    if (JSON.stringify(v.categoryPath) === JSON.stringify(currentVideo.categoryPath))
      return { text: 'More of this', color: 'bg-gray-700 text-white' };

    if (v.categoryPath[0] === currentVideo.categoryPath[0])
      return { text: 'Broader Horizon', color: 'bg-blue-600 text-white' };

    if (v.qualityScore > 90 && v.viewCount < 10000)
      return { text: 'Hidden Gem', color: 'bg-amber-600 text-white' };

    if (v.categoryPath[0] !== currentVideo.categoryPath[0])
        return { text: 'New Perspective', color: 'bg-purple-600 text-white' };

    return null;
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans flex flex-col md:flex-row">
      {/* Main Content (Player) */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="aspect-video bg-black rounded-xl shadow-2xl flex items-center justify-center relative group cursor-pointer mb-4 border border-gray-800">
            <Play size={64} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-red-600 px-2 py-1 rounded text-xs font-bold">LIVE</div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">{currentVideo.title}</h1>

        <div className="flex flex-wrap items-center justify-between text-sm text-gray-400 border-b border-gray-800 pb-4 mb-4 gap-4">
            <div className="flex items-center gap-2">
                <span>{currentVideo.viewCount.toLocaleString()} views</span>
                <span>•</span>
                <span>Quality Score: <span className="text-green-400 font-bold">{currentVideo.qualityScore}</span></span>
            </div>

            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 hover:text-white"><ThumbsUp size={20} /> Like</button>
                <button className="flex items-center gap-2 hover:text-white"><Share2 size={20} /> Share</button>
                <button className="flex items-center gap-2 hover:text-white"><MoreVertical size={20} /> </button>
            </div>
        </div>

        <div className="bg-[#272727] p-4 rounded-xl mb-6">
            <div className="font-semibold mb-1">Category Path</div>
            <div className="flex items-center gap-2 text-sm text-gray-300 flex-wrap">
                {currentVideo.categoryPath.map((cat, i) => (
                    <span key={i} className="flex items-center">
                        {i > 0 && <span className="mx-1">›</span>}
                        <span className="bg-[#3f3f3f] px-2 py-0.5 rounded-full text-xs">{cat}</span>
                    </span>
                ))}
            </div>
            <div className="mt-4 text-sm text-gray-400">
                Tags: {currentVideo.tags.map(t => `#${t}`).join(' ')}
            </div>
        </div>

        <div className="p-4 border border-gray-800 rounded-xl bg-[#1f1f1f]">
            <h3 className="font-bold mb-2">Why this prototype?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
                Standard YouTube algorithms lock you into a feedback loop ("The Rabbit Hole").
                This prototype demonstrates a <strong>Structured Diversity</strong> approach:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
                <li><span className="text-blue-400 font-bold">30%</span> Broader Category (Same sport, different player)</li>
                <li><span className="text-purple-400 font-bold">20%</span> New Perspective (Completely different topic)</li>
                <li><span className="text-amber-400 font-bold">20%</span> Hidden Gems (High quality, low views)</li>
            </ul>
        </div>
      </div>

      {/* Sidebar (Recommendations) */}
      <div className="w-full md:w-[400px] bg-[#0f0f0f] border-l border-gray-800 flex flex-col h-screen sticky top-0">
        <div className="p-4 border-b border-gray-800 bg-[#0f0f0f] z-10">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Compass size={20} />
                Up Next
            </h2>

            {/* Toggle Switch */}
            <div className="bg-[#272727] p-1 rounded-lg flex relative">
                <div
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#3f3f3f] rounded-md transition-all duration-300 shadow ${mode === 'better' ? 'translate-x-full left-1' : 'left-1'}`}
                />
                <button
                    onClick={() => setMode('standard')}
                    className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${mode === 'standard' ? 'text-white' : 'text-gray-400'}`}
                >
                    Standard
                </button>
                <button
                    onClick={() => setMode('better')}
                    className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${mode === 'better' ? 'text-blue-400' : 'text-gray-400'}`}
                >
                    Better (Discovery)
                </button>
            </div>

            {mode === 'better' && (
                <div className="mt-3 text-xs text-gray-400 bg-blue-900/20 p-2 rounded border border-blue-900/50">
                    <span className="font-bold text-blue-400">AI Logic:</span> 30% Broad, 20% New, 20% Hidden Gems.
                </div>
            )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {recommendations.map((video) => {
                const label = getLabel(video);
                return (
                    <div
                        key={video.id}
                        onClick={() => setCurrentVideo(video)}
                        className="flex gap-3 cursor-pointer group hover:bg-[#272727] p-2 rounded-lg transition-colors"
                    >
                        <div className="w-40 h-24 bg-gray-800 rounded-lg flex-shrink-0 relative overflow-hidden">
                             {/* Mock Thumbnail */}
                             <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs font-bold bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform p-1 text-center">
                                {video.categoryPath[2]}
                             </div>
                             <span className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[10px] font-bold">12:34</span>
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h3 className="text-sm font-semibold leading-tight mb-1 line-clamp-2 text-white group-hover:text-blue-400 transition-colors">
                                {video.title}
                            </h3>

                            {label && (
                                <span className={`self-start text-[10px] font-bold px-1.5 py-0.5 rounded mb-1 ${label.color}`}>
                                    {label.text}
                                </span>
                            )}

                            <div className="text-xs text-gray-400">
                                {video.categoryPath[0]} • {Math.floor(video.viewCount / 1000)}K views
                            </div>
                        </div>
                    </div>
                );
            })}

             <button
                onClick={() => setCurrentVideo(videos[Math.floor(Math.random() * videos.length)])}
                className="w-full py-3 mt-4 flex items-center justify-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg text-sm font-medium transition-colors"
            >
                <RefreshCw size={16} />
                Randomize Start
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
