/**
 * @typedef {import("@prismicio/client").Content.ProjectsSliceSlice} ProjectsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsSliceSlice>} ProjectsSliceProps
 * @param {ProjectsSliceProps}
 */
import Projects from "@/components/Projects";

const ProjectsSlice = ({ slice }) => {
  const { heading, subtitle, projects } = slice.primary;
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Projects 
        heading={heading}
        subtitle={subtitle}
        projects={projects}
        viewMoreText="VIEW MORE"
      />
    </section>
  );
};

export default ProjectsSlice;
