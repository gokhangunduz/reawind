export interface IContent {
  /** Route segment, e.g. `my-post` is served at `/blog/my-post`. */
  url: string;
  title: string;
  /** Markdown file inside `public/markdown`. */
  markdownFileName: string;
  /** Cover image inside `public/image`. */
  imageFileName: string;
  /** ISO 8601 date, used for SEO metadata and ordering. */
  date: string;
  seo: {
    description: string;
    keywords: string;
  };
}
