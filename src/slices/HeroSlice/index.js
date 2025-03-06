/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param {HeroSliceProps}
 */
import Hero from "@/components/Hero";
import { createClient } from "@/prismicio";

const HeroSlice = async ({ slice }) => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero heading={slice.primary.heading} slider={slice.primary.slider} settings={settings} />
    </section>
  );
};

export default HeroSlice;
