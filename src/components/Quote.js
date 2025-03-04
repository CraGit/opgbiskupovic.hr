import React from "react";

export default function Quote({ content }) {
  return (
    <div className="relative pt-24 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-4xl lg:text-7xl text-center font-saintdelafield leading-relaxed text-s_black py-12">
          {content}
        </div>
      </div>
    </div>
  );
}
