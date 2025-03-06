"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Video({ video_embed }) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [embedUrl, setEmbedUrl] = useState("");
  
  // Function to modify YouTube URL to enable autoplay, loop, and hide controls
  const getEnhancedVideoUrl = (url, origin = "") => {
    if (!url) return "";
    
    // Check if it's a YouTube URL
    if (url.includes('youtube.com/embed/') || url.includes('youtube.com/watch')) {
      let enhancedUrl = url;
      
      // Convert watch URLs to embed URLs
      if (url.includes('youtube.com/watch')) {
        const videoId = new URL(url).searchParams.get('v');
        if (videoId) {
          enhancedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
      }
      
      // Add parameters to maximize hiding of YouTube branding
      const originParam = origin ? `&origin=${encodeURIComponent(origin)}` : '';
      
      enhancedUrl = enhancedUrl.includes('?') 
        ? `${enhancedUrl}&autoplay=1&loop=1&playlist=${enhancedUrl.split('/').pop().split('?')[0]}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&color=white&disablekb=1&fs=0&playsinline=1${originParam}`
        : `${enhancedUrl}?autoplay=1&loop=1&playlist=${enhancedUrl.split('/').pop()}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&color=white&disablekb=1&fs=0&playsinline=1${originParam}`;
      
      return enhancedUrl;
    }
    
    return url;
  };
  
  // Effect to handle iframe and container styling
  useEffect(() => {
    // Set the embed URL with origin once we're in the browser
    const origin = window.location.origin;
    setEmbedUrl(getEnhancedVideoUrl(video_embed, origin));
    
    if (iframeRef.current) {
      // Try to access the iframe content if possible (may be restricted by CORS)
      try {
        const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (iframeDoc && iframeDoc.body) {
          iframeDoc.body.style.margin = '0';
          iframeDoc.body.style.padding = '0';
          iframeDoc.body.style.overflow = 'hidden';
        }
      } catch (e) {
        // CORS restrictions may prevent access to iframe content
        console.log("Could not access iframe content due to CORS");
      }
    }
    
    // Apply CSS to hide YouTube logo and title using container overflow
    if (containerRef.current && iframeRef.current) {
      // Scale up the iframe slightly and position it to hide the top bar
      iframeRef.current.style.transform = 'scale(1.01)';
      iframeRef.current.style.top = '-1px';
    }
  }, [video_embed]);

  return (
    <div className="video-sec relative bg-white">
      {/* Outer container with hidden overflow to crop out YouTube elements */}
      <div 
        ref={containerRef}
        className="video-container relative w-full overflow-hidden" 
        style={{ 
          paddingTop: '56.25%',
          background: 'transparent'
        }}
      >
        {embedUrl && (
          <>
            {/* Main video iframe */}
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                background: 'transparent',
                pointerEvents: 'none' // Prevents interaction with YouTube elements
              }}
            ></iframe>
            
            {/* Overlay div to block YouTube logo and title */}
            <div 
              className="absolute top-0 left-0 w-full" 
              style={{ 
                height: '60px', 
                background: 'transparent',
                pointerEvents: 'none'
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
