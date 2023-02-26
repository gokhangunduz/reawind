import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Banner from "../../components/Banner/Banner";
import { projects } from "../../templates/projects";
import ReactHelmet from "../../helper/ReactHelmet";
import { info } from "../../templates/template";
import axios from "axios";

export default function Project(): ReactElement {
  const [project, setProject] = useState<string>("");
  const url = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/markdown/${getProject().markdownFileName}`)
      .then(function (response) {
        setProject(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  });

  function getProject() {
    return projects.filter((project: any) => project?.url === url?.project)[0];
  }

  return (
    <Fragment>
      <ReactHelmet
        title={getProject().title + " | " + info.fullName}
        description={getProject().seo.description}
        keywords={getProject().seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
        ogTitle={getProject().title}
        ogDescription={getProject().seo.description}
        ogImage={`/image/${getProject().imageFileName}`}
        ogUrl={window.location.href}
        ogType="website"
        ogSiteName={info.fullName}
        ogLocale={info.locale}
        articleAuthor={info.fullName}
        articleSection={getProject().title}
        articleTag={getProject().seo.keywords}
        articlePublishedTime={getProject().date}
        articleModifiedTime={getProject().date}
        twitterSite={info.fullName}
        twitterCreator={info.fullName}
        twitterCard="summary_large_image"
        twitterTitle={getProject().title}
        twitterDescription={getProject().seo.description}
        twitterImage={`/image/${getProject().imageFileName}`}
      />
      <div className="animate__animated animate__zoomIn">
        <Banner url={`/image/${getProject().imageFileName}`} />
        <MarkdownPreview
          source={project}
          style={{ backgroundColor: "transparent" }}
          className="transition-all duration-500"
        />
      </div>
    </Fragment>
  );
}
