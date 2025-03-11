// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | StorySliceSlice
  | VideoSliceSlice
  | MapSliceSlice
  | ContactSliceSlice
  | TestimonialsSliceSlice
  | ProjectsSliceSlice
  | ServicesSliceSlice
  | AboutSliceSlice
  | QuoteSliceSlice
  | HeroSliceSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Logo White field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo_white
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_white: prismic.ImageField<never>;

  /**
   * Footer Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer_description: prismic.KeyTextField;

  /**
   * Phone Number field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;

  /**
   * Address field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Email field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Facebook field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  facebook: prismic.KeyTextField;

  /**
   * Instagram field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  instagram: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *AboutSlice → Default → Primary → Group*
 */
export interface AboutSliceSliceDefaultPrimaryGroupItem {
  /**
   * Number field in *AboutSlice → Default → Primary → Group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_slice.default.primary.group[].number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Label field in *AboutSlice → Default → Primary → Group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_slice.default.primary.group[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Primary content in *AboutSlice → Default → Primary*
 */
export interface AboutSliceSliceDefaultPrimary {
  /**
   * Heading field in *AboutSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *AboutSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_slice.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Group field in *AboutSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_slice.default.primary.group[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  group: prismic.GroupField<Simplify<AboutSliceSliceDefaultPrimaryGroupItem>>;

  /**
   * Image field in *AboutSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutSlice*
 */
type AboutSliceSliceVariation = AboutSliceSliceDefault;

/**
 * AboutSlice Shared Slice
 *
 * - **API ID**: `about_slice`
 * - **Description**: AboutSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceSlice = prismic.SharedSlice<
  "about_slice",
  AboutSliceSliceVariation
>;

/**
 * Primary content in *ContactSlice → Default → Primary*
 */
export interface ContactSliceSliceDefaultPrimary {
  /**
   * Heading field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subtitle field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Button Text field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for ContactSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactSlice*
 */
type ContactSliceSliceVariation = ContactSliceSliceDefault;

/**
 * ContactSlice Shared Slice
 *
 * - **API ID**: `contact_slice`
 * - **Description**: ContactSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceSlice = prismic.SharedSlice<
  "contact_slice",
  ContactSliceSliceVariation
>;

/**
 * Item in *HeroSlice → Default → Primary → Slider*
 */
export interface HeroSliceSliceDefaultPrimarySliderItem {
  /**
   * Image field in *HeroSlice → Default → Primary → Slider*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.slider[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *HeroSlice → Default → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * Heading field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Slider field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.slider[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  slider: prismic.GroupField<Simplify<HeroSliceSliceDefaultPrimarySliderItem>>;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

/**
 * Primary content in *MapSlice → Default → Primary*
 */
export interface MapSliceSliceDefaultPrimary {
  /**
   * Map Embed field in *MapSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: map_slice.default.primary.map_embed
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  map_embed: prismic.KeyTextField;
}

/**
 * Default variation for MapSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MapSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MapSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MapSlice*
 */
type MapSliceSliceVariation = MapSliceSliceDefault;

/**
 * MapSlice Shared Slice
 *
 * - **API ID**: `map_slice`
 * - **Description**: MapSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MapSliceSlice = prismic.SharedSlice<
  "map_slice",
  MapSliceSliceVariation
>;

/**
 * Item in *ProjectsSlice → Default → Primary → Projects*
 */
export interface ProjectsSliceSliceDefaultPrimaryProjectsItem {
  /**
   * Image field in *ProjectsSlice → Default → Primary → Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_slice.default.primary.projects[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *ProjectsSlice → Default → Primary*
 */
export interface ProjectsSliceSliceDefaultPrimary {
  /**
   * Heading field in *ProjectsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *ProjectsSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your projects
   * - **API ID Path**: projects_slice.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Projects field in *ProjectsSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_slice.default.primary.projects[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  projects: prismic.GroupField<
    Simplify<ProjectsSliceSliceDefaultPrimaryProjectsItem>
  >;
}

/**
 * Default variation for ProjectsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectsSlice*
 */
type ProjectsSliceSliceVariation = ProjectsSliceSliceDefault;

/**
 * ProjectsSlice Shared Slice
 *
 * - **API ID**: `projects_slice`
 * - **Description**: ProjectsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceSlice = prismic.SharedSlice<
  "projects_slice",
  ProjectsSliceSliceVariation
>;

/**
 * Primary content in *QuoteSlice → Default → Primary*
 */
export interface QuoteSliceSliceDefaultPrimary {
  /**
   * Content field in *QuoteSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote_slice.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Default variation for QuoteSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *QuoteSlice*
 */
type QuoteSliceSliceVariation = QuoteSliceSliceDefault;

/**
 * QuoteSlice Shared Slice
 *
 * - **API ID**: `quote_slice`
 * - **Description**: QuoteSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceSlice = prismic.SharedSlice<
  "quote_slice",
  QuoteSliceSliceVariation
>;

/**
 * Item in *ServicesSlice → Default → Primary → Services*
 */
export interface ServicesSliceSliceDefaultPrimaryServicesItem {
  /**
   * Heading field in *ServicesSlice → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.services[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Image field in *ServicesSlice → Default → Primary → Services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.services[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *ServicesSlice → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.services[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *ServicesSlice → Default → Primary*
 */
export interface ServicesSliceSliceDefaultPrimary {
  /**
   * Heading field in *ServicesSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subtitle field in *ServicesSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Services field in *ServicesSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<ServicesSliceSliceDefaultPrimaryServicesItem>
  >;
}

/**
 * Default variation for ServicesSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ServicesSlice*
 */
type ServicesSliceSliceVariation = ServicesSliceSliceDefault;

/**
 * ServicesSlice Shared Slice
 *
 * - **API ID**: `services_slice`
 * - **Description**: ServicesSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceSlice = prismic.SharedSlice<
  "services_slice",
  ServicesSliceSliceVariation
>;

/**
 * Item in *StorySlice → Default → Primary → Projects*
 */
export interface StorySliceSliceDefaultPrimaryProjectsItem {
  /**
   * Image field in *StorySlice → Default → Primary → Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slice.default.primary.projects[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *StorySlice → Default → Primary → Projects*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slice.default.primary.projects[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *StorySlice → Default → Primary*
 */
export interface StorySliceSliceDefaultPrimary {
  /**
   * Heading field in *StorySlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subtitle field in *StorySlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slice.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Projects field in *StorySlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: story_slice.default.primary.projects[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  projects: prismic.GroupField<
    Simplify<StorySliceSliceDefaultPrimaryProjectsItem>
  >;
}

/**
 * Default variation for StorySlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StorySliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StorySliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *StorySlice*
 */
type StorySliceSliceVariation = StorySliceSliceDefault;

/**
 * StorySlice Shared Slice
 *
 * - **API ID**: `story_slice`
 * - **Description**: StorySlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StorySliceSlice = prismic.SharedSlice<
  "story_slice",
  StorySliceSliceVariation
>;

/**
 * Item in *TestimonialsSlice → Default → Primary → Testimonials*
 */
export interface TestimonialsSliceSliceDefaultPrimaryTestimonialsItem {
  /**
   * Name field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Job field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].job
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  job: prismic.KeyTextField;

  /**
   * Content field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * Image field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *TestimonialsSlice → Default → Primary*
 */
export interface TestimonialsSliceSliceDefaultPrimary {
  /**
   * Heading field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subtitle field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Testimonials field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonials: prismic.GroupField<
    Simplify<TestimonialsSliceSliceDefaultPrimaryTestimonialsItem>
  >;
}

/**
 * Default variation for TestimonialsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestimonialsSlice*
 */
type TestimonialsSliceSliceVariation = TestimonialsSliceSliceDefault;

/**
 * TestimonialsSlice Shared Slice
 *
 * - **API ID**: `testimonials_slice`
 * - **Description**: TestimonialsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceSlice = prismic.SharedSlice<
  "testimonials_slice",
  TestimonialsSliceSliceVariation
>;

/**
 * Primary content in *VideoSlice → Default → Primary*
 */
export interface VideoSliceSliceDefaultPrimary {
  /**
   * Video Embed field in *VideoSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_slice.default.primary.video_embed
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video_embed: prismic.KeyTextField;
}

/**
 * Default variation for VideoSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *VideoSlice*
 */
type VideoSliceSliceVariation = VideoSliceSliceDefault;

/**
 * VideoSlice Shared Slice
 *
 * - **API ID**: `video_slice`
 * - **Description**: VideoSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceSlice = prismic.SharedSlice<
  "video_slice",
  VideoSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutSliceSlice,
      AboutSliceSliceDefaultPrimaryGroupItem,
      AboutSliceSliceDefaultPrimary,
      AboutSliceSliceVariation,
      AboutSliceSliceDefault,
      ContactSliceSlice,
      ContactSliceSliceDefaultPrimary,
      ContactSliceSliceVariation,
      ContactSliceSliceDefault,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimarySliderItem,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
      MapSliceSlice,
      MapSliceSliceDefaultPrimary,
      MapSliceSliceVariation,
      MapSliceSliceDefault,
      ProjectsSliceSlice,
      ProjectsSliceSliceDefaultPrimaryProjectsItem,
      ProjectsSliceSliceDefaultPrimary,
      ProjectsSliceSliceVariation,
      ProjectsSliceSliceDefault,
      QuoteSliceSlice,
      QuoteSliceSliceDefaultPrimary,
      QuoteSliceSliceVariation,
      QuoteSliceSliceDefault,
      ServicesSliceSlice,
      ServicesSliceSliceDefaultPrimaryServicesItem,
      ServicesSliceSliceDefaultPrimary,
      ServicesSliceSliceVariation,
      ServicesSliceSliceDefault,
      StorySliceSlice,
      StorySliceSliceDefaultPrimaryProjectsItem,
      StorySliceSliceDefaultPrimary,
      StorySliceSliceVariation,
      StorySliceSliceDefault,
      TestimonialsSliceSlice,
      TestimonialsSliceSliceDefaultPrimaryTestimonialsItem,
      TestimonialsSliceSliceDefaultPrimary,
      TestimonialsSliceSliceVariation,
      TestimonialsSliceSliceDefault,
      VideoSliceSlice,
      VideoSliceSliceDefaultPrimary,
      VideoSliceSliceVariation,
      VideoSliceSliceDefault,
    };
  }
}
