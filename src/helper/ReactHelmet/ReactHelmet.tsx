import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

interface IReactHelmet {
  title: string;
  description: string;
  keywords: string;
  author?: string;
  contact?: string;
  copyright?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTag?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export default function ReactHelmet({
  title,
  description,
  keywords,
  author,
  contact,
  copyright,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  ogSiteName,
  ogLocale,
  articleAuthor,
  articleSection,
  articleTag,
  articlePublishedTime,
  articleModifiedTime,
  twitterSite,
  twitterCreator,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
}: IReactHelmet): ReactElement {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {contact && <meta name="contact" content={contact} />}
      {copyright && <meta name="copyright" content={copyright} />}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
      {ogLocale && <meta property="og:locale" content={ogLocale} />}

      {articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {articleTag && <meta property="article:tag" content={articleTag} />}
      {articlePublishedTime && (
        <meta
          property="article:published_time"
          content={articlePublishedTime}
        />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    </Helmet>
  );
}
