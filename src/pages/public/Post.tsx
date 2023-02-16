import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";

export default function Post(): ReactElement {
  const url = useParams();
  const [post, setPost] = useState<string>("");

  useEffect(() => {
    axios
      .get(`/post/${url?.post}.md`)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        window.location.href = "/blog";
      });
  });

  return (
    <div className="px-80">
      <MarkdownPreview source={post} className="transition-all duration-500" />
    </div>
  );
}
