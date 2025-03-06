import Map from "@/components/Map";

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
      <Map map_embed_url={slice.primary.map_embed} />
    </section>
  );
};

export default MapSlice;
