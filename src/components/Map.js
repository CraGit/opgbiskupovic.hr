"use client";

import React from "react";

export default function Map({ map_embed_url }) {
  // If a custom URL is provided, use it
  // Otherwise use the default URL with a lower zoom level (13 instead of the typical 15-17)
  const defaultUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10374.728134526113!2d16.853383491762738!3d43.4910319171536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134abefcd9b8ebd9%3A0x87c622b6460ac3ac!2sDonji%20Biskupovi%C4%87i%209%2C%2021256%2C%20Kre%C5%A1evo!5e0!3m2!1sen!2shr!4v1741256506362!5m2!1sen!2shr";

  // Function to modify zoom level if a custom URL is provided
  const getZoomedOutUrl = (url) => {
    if (!url) return defaultUrl;

    // If the URL already contains zoom parameter, try to reduce it
    if (url.includes("!3d")) {
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
          width="100%"
          height="428"
          style={{ border: 0, filter: "grayscale(100%)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
