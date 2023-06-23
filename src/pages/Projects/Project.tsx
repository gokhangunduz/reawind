import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Banner from "../../components/Banner/Banner";
import { projects } from "../../templates/projects";
import ReactHelmet from "../../helper/ReactHelmet/ReactHelmet";
import { info } from "../../templates/template";
import axios from "axios";

export default function Project(): ReactElement {
  const [content, setContent] = useState<string>("");
  const params = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.url === params.project);

  useEffect(() => {
    if (!project) {
      navigate("/", { replace: true });
      return;
    }

    let cancelled = false;

    axios
      .get(`/markdown/${project.markdownFileName}`)
      .then((response) => {
        if (!cancelled) setContent(response.data);
      })
      .catch(() => {
        if (!cancelled) navigate("/", { replace: true });
      });

    return () => {
      cancelled = true;
    };
  }, [project, navigate]);

  if (!project) return <Fragment />;

  return (
    <Fragment>
      <ReactHelmet
        title={project.title + " | " + info.fullName}
        description={project.seo.description}
        keywords={project.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
        ogTitle={project.title}
        ogDescription={project.seo.description}
        ogImage={`/image/${project.imageFileName}`}
        ogUrl={window.location.href}
        ogType="website"
        ogSiteName={info.fullName}
        ogLocale={info.locale}
        articleAuthor={info.fullName}
        articleSection={project.title}
        articleTag={project.seo.keywords}
        articlePublishedTime={project.date}
        articleModifiedTime={project.date}
        twitterSite={info.fullName}
        twitterCreator={info.fullName}
        twitterCard="summary_large_image"
        twitterTitle={project.title}
        twitterDescription={project.seo.description}
        twitterImage={`/image/${project.imageFileName}`}
      />
      <div className="animate__animated animate__zoomIn">
        <Banner url={`/image/${project.imageFileName}`} alt={project.title} />
        <MarkdownPreview
          source={content}
          style={{ backgroundColor: "transparent" }}
          className="transition-all duration-500"
        />
      </div>
    </Fragment>
  );
}
