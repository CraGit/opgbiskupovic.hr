import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import richTextStyling from "@/app/utility/richTextStyling";

export default function Services({ heading, subtitle, services }) {
  return (
    <div className="service-sec py-14 lg:py-24 relative bg-white" id="service">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="heading pb-8 relative z-[5] bg-white">{heading}</h2>
        <p className="pera mb-16">{subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-md lg:max-w-full mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden"
              data-aos="flip-down"
            >
              <div className="relative cursor-pointer aspect-square">
                <PrismicNextImage
                  field={service.image}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.1]"
                />
              </div>
              <div className="mt-6">
                <h4 className="text-s_black text-xl font-raleway font-semibold tracking-wider uppercase mb-3">
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
