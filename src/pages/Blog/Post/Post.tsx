import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
import PageHeader from "../../../components/PageHeader/PageHeader";

export default function Post(): ReactElement {
  const url = useParams();
  const [post, setPost] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/post/${url?.post}.md`)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        navigate("/");
      });
  });

  useEffect(() => {
    setTitle(post.split("\n")[0].replaceAll("#", "").trim());
  }, [post]);

  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title={title} subtitle="Gökhan Gündüz" />
      <MarkdownPreview source={post} className="transition-all duration-500" />
    </div>
  );
}
