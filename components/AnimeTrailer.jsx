'use client';

import { useState } from 'react';

export default function AnimeTrailer({ trailerUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Function to convert regular YouTube URLs to embed URLs
  const getEmbedUrl = (url) => {
    if (!url) return '';
    
    // If it's already an embed URL, return it
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // Extract video ID from various YouTube URL formats
    let videoId = '';
    
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v');
    } 
    // Format: https://youtu.be/VIDEO_ID
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    // Return the embed URL
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };
  
  // Get the proper embed URL
  const embedUrl = getEmbedUrl(trailerUrl);
  
  if (!embedUrl) {
    return <div className="text-white text-center py-4">No trailer available</div>;
  }
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-white mb-4">Official Trailer</h3>
      
      {!isPlaying ? (
        <div 
          className="relative aspect-video bg-gray-900 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden"
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 text-white font-bold text-lg z-10">
            Watch Trailer
          </div>
        </div>
      ) : (
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src={embedUrl} 
            title={`${title} trailer`}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
