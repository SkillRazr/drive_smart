import React, { useEffect, useState } from 'react';
import { getVideos } from '../services/api';

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videoList = await getVideos();
      setVideos(videoList);
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Videos Page</h1>
      <div className="mt-4">
        {videos.map((video, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl">{video.title}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                title={video.title}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
