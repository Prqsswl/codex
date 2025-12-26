import React from 'react';
import { Video } from '../data/pillars';
import VideoPlayer from './VideoPlayer';

interface FeedProps {
  videos: Video[];
}

const Feed: React.FC<FeedProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-8 pb-20">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col gap-3">
          {/* Header */}
          <div className="px-4 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              {video.category}
            </span>
            <span className="text-xs text-gray-600 font-mono">
              Deep View
            </span>
          </div>

          {/* Player */}
          <VideoPlayer video={video} />

          {/* Info */}
          <div className="px-4 flex flex-col gap-1">
            <h3 className="text-lg font-medium leading-tight text-gray-100">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400">
              {video.channelName}
            </p>
          </div>

          <div className="h-px w-full bg-gray-900 mt-4" />
        </div>
      ))}
    </div>
  );
};

export default Feed;
