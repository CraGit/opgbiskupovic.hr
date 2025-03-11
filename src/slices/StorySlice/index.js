import Story from "@/components/Story";

/**
 * @typedef {import("@prismicio/client").Content.StorySliceSlice} StorySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StorySliceSlice>} StorySliceProps
 * @param {StorySliceProps}
 */
const StorySlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Story heading={slice.primary.heading}
        subtitle={slice.primary.subtitle}
        projects={slice.primary.projects}
      />
    </section>
  );
};

export default StorySlice;
