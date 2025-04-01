import React from "react";

export default function Quote({ content }) {
  return (
    <div className="relative pt-24 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="py-12 mb-4 text-3xl lg:text-6xl text-center font-moondance leading-[1.8] tracking-wider text-[#7C7669] block">
          {content}
        </div>
      </div>
    </div>
  );
}
