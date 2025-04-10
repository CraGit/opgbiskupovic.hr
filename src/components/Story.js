/**
 * A component to display a list of projects.
 *
 * @returns A `div` element with the project list
 */
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import richTextStyling from "@/app/utility/richTextStyling";

const components = {
  paragraph: ({ children }) => (
    <p className="font-text text-base text-s_text mb-4">{children}</p>
  ),
  heading2: ({ children }) => (
    <h2 className="font-title text-2xl text-[#7C7669] mb-6">{children}</h2>
  ),
};

export default function Story({
  heading,
  description,
  projects,
  viewMoreText = "",
}) {
  return (
    <div className="project-sec relative py-24 lg:pb-24 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 relative max-w-md md:max-w-full mx-auto">
          <div className="desc row-span-1 lg:py-7">
            <h2
              className="heading mb-8 md:text-left bg-white relative z-[5] text-[#7C7669]"
              data-aos="fade-up"
            >
              {heading}
            </h2>
            <div className="font-text text-base text-s_text max-w-xl">
              <PrismicRichText field={description} components={components} />
            </div>
          </div>

          {projects &&
            projects.map((project, index) => (
              <div
                key={index}
                className={`relative md:row-span-2 max-md:mb-12 mx-auto w-full h-auto ${index % 2 === 0 ? "" : "md:mt-64"}`}
                data-aos="fade-right"
                data-aos-delay={100 * index}
              >
                <div className="aspect-square overflow-hidden group">
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
                <div className="mt-6 mb-16">
                  <PrismicRichText
                    field={project.content}
                    components={richTextStyling}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
