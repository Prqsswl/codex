import React, { useRef, useState } from 'react';
import { Video } from '../data/pillars';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  video: Video;
  startTime?: number; // Treat as initial value only
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, startTime = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Logic to handle startTime only on initial load would go here if we were using a more complex player.
  // For a simple iframe, we append t={startTime} to the URL.
  // Using playsinline=1 and modestbranding=1 as requested.

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!isPlaying) {
    return (
      <div
        className="relative w-full aspect-video bg-gray-900 overflow-hidden cursor-pointer group"
        onClick={handlePlay}
      >
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Play className="w-8 h-8 text-white fill-current ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-mono">
          {video.duration}
        </div>
      </div>
    );
  }

  const src = `https://www.youtube.com/embed/${video.videoUrl}?autoplay=1&playsinline=1&modestbranding=1&start=${startTime}`;

  return (
    <div className="w-full aspect-video bg-black">
      <iframe
        ref={iframeRef}
        src={src}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default VideoPlayer;
