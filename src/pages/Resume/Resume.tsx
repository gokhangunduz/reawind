import React, { Fragment, ReactElement, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { info, pages } from "../../templates/template";
import ReactHelmet from "../../helper/ReactHelmet/ReactHelmet";

export default function Resume(): ReactElement {
  const [resume, setResume] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    axios
      .get(
        `https://raw.githubusercontent.com/${pages.resume.githubUsername}/${pages.resume.githubReadMeRepository}/${pages.resume.githubReadMeRepositoryBranch}/README.md`
      )
      .then((response) => {
        if (!cancelled) setResume(response.data);
      })
      .catch(() => {
        if (!cancelled) navigate("/", { replace: true });
      });

    return () => {
      cancelled = true;
    };
  }, [navigate]);

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
