import Video from "@/components/Video";

/**
 * @typedef {import("@prismicio/client").Content.VideoSliceSlice} VideoSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSliceSlice>} VideoSliceProps
 * @param {VideoSliceProps}
 */
const VideoSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Video video_embed={slice.primary.video_embed} />
    </section>
  );
};

export default VideoSlice;
