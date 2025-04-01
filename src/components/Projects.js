/**
 * A component to display a list of projects.
 *
 * @returns A `div` element with the project list
 */
import React from "react";
import { PrismicNextImage } from "@prismicio/next";

export default function Projects({
  heading,
  subtitle,
  projects,
  viewMoreText = "",
}) {
  return (
    <div className="project-sec relative py-14 lg:pb-24 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-0 md:gap-8 relative hover:cursor-pointer max-w-md md:max-w-full mx-auto">
          <div className="desc row-span-1 lg:py-7">
            <h2
              className="heading mb-8 md:text-left bg-white relative z-[5] text-[#7C7669]"
              data-aos="fade-up"
            >
              {heading}
            </h2>
            <p
              className="pera mb-8 lg:mb-12 md:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {subtitle}
            </p>
          </div>

          {projects &&
            projects.map((project, index) => (
              <div
                key={index}
                className="relative md:row-span-2 max-md:mb-8 mx-auto w-full h-auto aspect-square overflow-hidden group"
                data-aos="fade-right"
                data-aos-delay={100 * index}
              >
                <div className="w-full h-full">
                  {project.image &&
                    (typeof project.image === "string" ? (
                      <div
                        className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-[1.2]"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                    ) : (
                      <PrismicNextImage
                        field={project.image}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.2]"
                      />
                    ))}
                </div>
                {/* <div className="absolute bottom-0 left-0 w-4/5 md:w-72 h-24 p-5 bg-white transition-all duration-500">
                  <h3 className="font-playfair text-lg font-normal tracking-wider text-s_black mb-2.5 transition-all duration-500 uppercase">
                    {project.heading}
                  </h3>
                  <p className="font-releway font-semibold text-sm tracking-wide text-s_proj uppercase">
                    {project.subheading}
                  </p>
                </div> */}
              </div>
            ))}

          {/* {viewMoreText && (
            <div className="relative md:row-span-1 max-md:mb-5 mx-auto w-full h-full flex items-center justify-center md:min-h-[249px]">
              <button className="w-44 h-12 rounded-full outline-0 border-none relative z-20 bg-white flex items-center justify-center gap-2 group">
                <span className="relative z-10 font-releway px-4 font-semibold text-base">
                  {viewMoreText || "VIEW MORE"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span className="absolute h-12 w-12 aspect-square rounded-full -z-0 top-0 right-0 bg-s_btn_bg transition-all duration-500 group-hover:w-full"></span>
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
