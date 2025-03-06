"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials({ heading, subtitle, testimonials }) {
  const swiperRef = useRef(null);

  return (
    <div
      className="testi-sec relative py-12 md:pb-0 md:pt-20 bg-[#7C7669] after:content-[''] after:absolute after:z-0 after:w-full after:h-24 md:after:h-36 after:bg-white after:bottom-0"
      data-aos="fade-up"
    >
      <div className="w-full max-w-6xl mx-auto px-6 relative z-[1]">
        <div className="relative">
          <h2
            className="heading text-white mb-4 text-left font-normal text-4xl md:text-5xl"
            data-aos="fade-up"
          >
            {heading}
          </h2>
          <p
            className="text-white text-left mb-8 md:mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            pagination={false}
            spaceBetween={30}
            slidesPerView={1}
            className="testimonial-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonials &&
              testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="slide">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="flex flex-col justify-between">
                      <p className="text-xl md:text-2xl lg:text-3xl text-white font-normal leading-relaxed mb-16 md:mb-24">
                        {testimonial.content}
                      </p>
                      
                      {/* Name for desktop */}
                      <div className="pb-12 hidden md:block">
                        <p className="text-xl md:text-2xl font-medium text-[#7C7669] leading-tight mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                          {testimonial.job}
                        </p>
                      </div>
                      
                      {/* Mobile name and job title */}
                      <div className="block md:hidden mb-12">
                        <p className="text-xl font-medium text-white leading-tight mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-white text-opacity-80">
                          {testimonial.job}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      {/* Image - desktop only */}
                      <figure className="hidden md:block mb-6 h-[500px] overflow-hidden">
                        {testimonial.image && typeof testimonial.image === "string" ? (
                          <img
                            src={testimonial.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : testimonial.image ? (
                          <PrismicNextImage
                            field={testimonial.image}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">No image available</span>
                          </div>
                        )}
                      </figure>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
