/**
 * @typedef {import("@prismicio/client").Content.ProjectsSliceSlice} ProjectsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsSliceSlice>} ProjectsSliceProps
 * @param {ProjectsSliceProps}
 */
const ProjectsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for projects_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectsSlice;
