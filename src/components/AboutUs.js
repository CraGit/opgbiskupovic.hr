import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import richTextStyling from "@/app/utility/richTextStyling";

export default function AboutUs({ heading, content, group, image }) {
  return (
    <div className="about-sec relative pt-24 md:pb-12 bg-white" id="about">
      <div className="w-full">
        <h2 className="heading pb-8 max-w-6xl mx-auto px-4 pt-20 text-[#7C7669]">
          {heading}
        </h2>

        <PrismicNextImage
          field={image}
          className="w-full h-auto max-h-[528px] object-cover"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 relative max-w-6xl mx-auto px-6 lg:px-8">
          <div
            className="desc opacity-100 flex items-center py-12"
            data-aos="fade-right"
          >
            <div className="pera">
              <PrismicRichText field={content} components={richTextStyling} />
            </div>
          </div>

          <div
            className="relative bg-white md:z-20 -mt-20 md:right-0 md:bg-whites border border-white w-full"
            data-aos="fade-left"
          >
            <div className="counter py-14 lg:py-24 bg-white px-3.5">
              {group.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-16" : ""}>
                  <h1 className="counter-numbers font-normal text-[#7C7669] text-3xl md:text-6xl md:leading-[65px] text-center font-title">
                    {item.number}
                  </h1>
                  <p className="font-semibold text-xs md:text-base text-s_counter md:leading-8 tracking-[0.15em] uppercase text-center mt-2.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
