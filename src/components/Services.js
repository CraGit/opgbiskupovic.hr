import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import richTextStyling from "@/app/utility/richTextStyling";

export default function Services({ heading, subtitle, services }) {
  return (
    <div className="service-sec py-14 lg:py-24 relative bg-white" id="service">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <h2
          className="heading pb-8 relative z-[5] bg-white text-[#7C7669]"
          data-aos="fade-up"
        >
          {heading}
        </h2>
        <p className="pera mb-16" data-aos="fade-up" data-aos-delay="100">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="relative cursor-pointer aspect-square overflow-hidden">
                <PrismicNextImage
                  field={service.image}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.1]"
                />
              </div>
              <div className="mt-6">
                <h4 className="text-[#7C7669] text-xl font-raleway font-semibold tracking-wider uppercase mb-3">
                  {service.heading}
                </h4>
                <p className="text-base leading-relaxed text-s_pera">
                  {service.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
