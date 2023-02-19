import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
import BlogBanner from "../../../components/BlogBanner/BlogBanner";

export default function Post(): ReactElement {
  const url = useParams();
  const [post, setPost] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/blog/post/${url?.post}.md`)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  });

  return (
    <div className="animate__animated animate__zoomIn">
      <BlogBanner />
      <MarkdownPreview
        source={post}
        style={{ backgroundColor: "transparent" }}
        className="transition-all duration-500"
      />
    </div>
  );
}
