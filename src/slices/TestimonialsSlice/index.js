/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSliceSlice} TestimonialsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSliceSlice>} TestimonialsSliceProps
 * @param {TestimonialsSliceProps}
 */
import Testimonials from "@/components/Testimonials";

const TestimonialsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Testimonials
        heading={slice.primary.heading}
        subtitle={slice.primary.subtitle}
        testimonials={slice.primary.testimonials}
      />
    </section>
  );
};

export default TestimonialsSlice;
