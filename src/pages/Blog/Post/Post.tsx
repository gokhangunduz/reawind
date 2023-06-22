import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Banner from "../../../components/Banner/Banner";
import ReactHelmet from "../../../helper/ReactHelmet/ReactHelmet";
import { info } from "../../../templates/template";
import { posts } from "../../../templates/posts";
import axios from "axios";

export default function Post(): ReactElement {
  const [content, setContent] = useState<string>("");
  const params = useParams();
  const navigate = useNavigate();

  const post = posts.find((item) => item.url === params.post);

  useEffect(() => {
    if (!post) {
      navigate("/", { replace: true });
      return;
    }

    let cancelled = false;

    axios
      .get(`/markdown/${post.markdownFileName}`)
      .then((response) => {
        if (!cancelled) setContent(response.data);
      })
      .catch(() => {
        if (!cancelled) navigate("/", { replace: true });
      });

    return () => {
      cancelled = true;
    };
  }, [post, navigate]);

  if (!post) return <Fragment />;

  return (
    <Fragment>
      <ReactHelmet
        title={post.title + " | " + info.fullName}
        description={post.seo.description}
        keywords={post.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
        ogTitle={post.title}
        ogDescription={post.seo.description}
        ogImage={`/image/${post.imageFileName}`}
        ogUrl={window.location.href}
        ogType="website"
        ogSiteName={info.fullName}
        ogLocale={info.locale}
        articleAuthor={info.fullName}
        articleSection={post.title}
        articleTag={post.seo.keywords}
        articlePublishedTime={post.date}
        articleModifiedTime={post.date}
        twitterSite={info.fullName}
        twitterCreator={info.fullName}
        twitterCard="summary_large_image"
        twitterTitle={post.title}
        twitterDescription={post.seo.description}
        twitterImage={`/image/${post.imageFileName}`}
      />
      <div className="animate__animated animate__zoomIn">
        <Banner url={`/image/${post.imageFileName}`} alt={post.title} />
        <MarkdownPreview
          source={content}
          style={{ backgroundColor: "transparent" }}
          className="transition-all duration-500"
        />
      </div>
    </Fragment>
  );
}
