import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import RichText from "@/components/RichText/RichText";

interface Video {
  _id: string;
  title?: string;
  youTube?: string;
  mp4?: any;
  description?: any;
}

const VideoGrid: React.FC<{ videos: Video[] }> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8">
      {videos.map((video) => (
        <div key={video._id} className="block space-y-2">
          <div className="aspect-h-9 aspect-w-16 bg-gray-600">
            {video.youTube || video.mp4 ? (
              <ReactPlayer
                url={video.youTube || video.mp4}
                controls
                width="100%"
                height="100%"
              />
            ) : (
              <p>No video available</p>
            )}
          </div>
          {video.title && (
            <h4 className="text-base font-bold mb-2 flex items-center">
              {video.title}
            </h4>
          )}
          {video.description && (
            <RichText
              theme="dark"
              content={video.description}
              classes="prose-p:text-sm"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
