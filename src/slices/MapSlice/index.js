/**
 * @typedef {import("@prismicio/client").Content.MapSliceSlice} MapSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MapSliceSlice>} MapSliceProps
 * @param {MapSliceProps}
 */
const MapSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for map_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default MapSlice;
