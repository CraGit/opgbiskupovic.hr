import Services from "@/components/Services";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSliceSlice} ServicesSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSliceSlice>} ServicesSliceProps
 * @param {ServicesSliceProps}
 */
const ServicesSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Services
        heading={slice.primary.heading}
        subtitle={slice.primary.subtitle}
        services={slice.primary.services}
      />
    </section>
  );
};

export default ServicesSlice;
