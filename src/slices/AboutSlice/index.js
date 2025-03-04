/**
 * @typedef {import("@prismicio/client").Content.AboutSliceSlice} AboutSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSliceSlice>} AboutSliceProps
 * @param {AboutSliceProps}
 */
import AboutUs from "@/components/AboutUs";
const AboutSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutUs
        heading={slice.primary.heading}
        content={slice.primary.content}
        group={slice.primary.group}
        image={slice.primary.image}
      />
    </section>
  );
};

export default AboutSlice;
