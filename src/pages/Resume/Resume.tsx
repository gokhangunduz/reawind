import React, { Fragment, ReactElement, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { info, pages } from "../../templates/template";
import { Helmet } from "react-helmet";
import ReactHelmet from "../../helper/ReactHelmet";

export default function Resume(): ReactElement {
  const [resume, setResume] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/${pages.resume.githubUsername}/${pages.resume.githubReadMeRepository}/${pages.resume.githubReadMeRepositoryBranch}/README.md`
      )
      .then(function (response) {
        setResume(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  });

  return (
    <Fragment>
      <ReactHelmet
        title={pages.resume.seo.title}
        description={pages.resume.seo.description}
        keywords={pages.resume.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
      />
      <div className="animate__animated animate__zoomIn">
        <PageHeader title="Resume" />
        <MarkdownPreview
          source={resume}
          style={{ backgroundColor: "transparent" }}
          className="transition-all duration-500"
          sourcePos={true}
          rawSourcePos={true}
          includeElementIndex={true}
        />
      </div>
    </Fragment>
  );
}
