import React, { ReactElement, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../templates/config.json";

export default function Resume(): ReactElement {
  const [resume, setResume] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/${config.resume.githubUsername}/${config.resume.githubReadMeRepo}/${config.resume.githubReadMeRepoBranch}/README.md`
      )
      .then(function (response) {
        setResume(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  }, [navigate]);

  return (
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
  );
}
