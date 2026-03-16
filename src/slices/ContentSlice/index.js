/**
 * @typedef {import("@prismicio/client").Content.ContentSliceSlice} ContentSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSliceSlice>} ContentSliceProps
 * @param {ContentSliceProps}
 */
import { PrismicRichText } from "@prismicio/react";
import richTextStyling from "@/app/utility/richTextStyling";

const ContentSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 md:py-24"
    >
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
        {slice.primary.title && (
          <h1 className="heading mb-10 text-[#7C7669]">
            {slice.primary.title}
          </h1>
        )}
        <div className="pera">
          <PrismicRichText
            field={slice.primary.body}
            components={richTextStyling}
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSlice;
