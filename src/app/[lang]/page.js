import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang });

  return {
    title: page.data.meta_title || "",
    description: page.data.meta_description || "",
    openGraph: {
      title: page.data.meta_title || "",
      description: page.data.meta_description || "",
      images: page.data.meta_image?.url
        ? [
            {
              url: page.data.meta_image.url,
              width: page.data.meta_image.dimensions?.width,
              height: page.data.meta_image.dimensions?.height,
              alt: page.data.meta_image.alt || "",
            },
          ]
        : [],
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  const client = createClient();

  const page = await client.getByUID("page", "home", { lang });
  const navigation = await client.getSingle("navigation", { lang });
  const settings = await client.getSingle("settings", { lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.at("my.page.uid", "home")],
  });

  return pages.map((page) => {
    return {
      lang: page.lang,
    };
  });
}
