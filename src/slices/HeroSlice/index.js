/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param {HeroSliceProps}
 */
import Hero from "@/components/Hero";
const HeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero heading={slice.primary.heading} slider={slice.primary.slider} />
    </section>
  );
};

export default HeroSlice;
