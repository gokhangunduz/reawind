import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
import Banner from "../../components/Banner/Banner";

export default function Project(): ReactElement {
  const url = useParams();
  const [project, setProject] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/project/work/${url?.project}.md`)
      .then(function (response) {
        setProject(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  }, [navigate, url]);

  return (
    <div className="animate__animated animate__zoomIn">
      <Banner url={`/project/image/${url?.project}.png`} />
      <MarkdownPreview
        source={project}
        style={{ backgroundColor: "transparent" }}
        className="transition-all duration-500"
      />
    </div>
  );
}
