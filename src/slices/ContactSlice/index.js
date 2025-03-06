import Contact from "@/components/Contact";
import { createClient } from "@/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.ContactSliceSlice} ContactSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSliceSlice>} ContactSliceProps
 * @param {ContactSliceProps}
 */
const ContactSlice = async ({ slice }) => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Contact
        heading={slice.primary.heading}
        subtitle={slice.primary.subtitle}
        button_text={slice.primary.button_text}
        settings={settings}
      />
    </section>
  );
};

export default ContactSlice;
