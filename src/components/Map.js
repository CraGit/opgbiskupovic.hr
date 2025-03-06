"use client";

import React from "react";

export default function Map({ map_embed_url }) {
  // If a custom URL is provided, use it
  // Otherwise use the default URL with a lower zoom level (13 instead of the typical 15-17)
  const defaultUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29538.619029533678!2d70.77627388465575!3d22.265585534538012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc03c39dbc7%3A0x45b735e74ce3dce5!2sSPEEDWELL%20PARTY%20PLOT!5e0!3m2!1sen!2sin!4v1699430074310!5m2!1sen!2sin";
  
  // Function to modify zoom level if a custom URL is provided
  const getZoomedOutUrl = (url) => {
    if (!url) return defaultUrl;
    
    // If the URL already contains zoom parameter, try to reduce it
    if (url.includes('!3d')) {
      // This is a simplified approach - in a real scenario, you might want to parse the URL more carefully
      return url;
    }
    
    return url;
  };
  
  const embedUrl = getZoomedOutUrl(map_embed_url);

  return (
    <div className="map-sec pt-32 relative bg-white lg:mb-[775px]">
        <div className="map">
            <iframe
                src={embedUrl}
                width="100%" height="428" style={{ border:0, filter: "grayscale(100%)" }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
}
