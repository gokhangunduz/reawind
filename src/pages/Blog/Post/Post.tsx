import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Banner from "../../../components/Banner/Banner";
import ReactHelmet from "../../../helper/ReactHelmet";
import { info } from "../../../templates/template";
import { posts } from "../../../templates/posts";
import axios from "axios";

export default function Post(): ReactElement {
  const [post, setPost] = useState<string>("");
  const url = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/markdown/${getPost().markdownFileName}`)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  });

  function getPost() {
    return posts.filter((post: any) => post?.url === url?.post)[0];
  }

  return (
    <Fragment>
      <ReactHelmet
        title={getPost().title + " | " + info.fullName}
        description={getPost().seo.description}
        keywords={getPost().seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
        ogTitle={getPost().title}
        ogDescription={getPost().seo.description}
        ogImage={`/image/${getPost().imageFileName}`}
        ogUrl={window.location.href}
        ogType="website"
        ogSiteName={info.fullName}
        ogLocale={info.locale}
        articleAuthor={info.fullName}
        articleSection={getPost().title}
        articleTag={getPost().seo.keywords}
        articlePublishedTime={getPost().date}
        articleModifiedTime={getPost().date}
        twitterSite={info.fullName}
        twitterCreator={info.fullName}
        twitterCard="summary_large_image"
        twitterTitle={getPost().title}
        twitterDescription={getPost().seo.description}
        twitterImage={`/image/${getPost().imageFileName}`}
      />
      <div className="animate__animated animate__zoomIn">
        <Banner url={`/image/${getPost().imageFileName}`} />
        <MarkdownPreview
          source={post}
          style={{ backgroundColor: "transparent" }}
          className="transition-all duration-500"
        />
      </div>
    </Fragment>
  );
}
