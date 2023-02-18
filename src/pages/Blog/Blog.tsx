import React, { ReactElement, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blog(): ReactElement {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios(`/blog/posts.json`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Blog" subtitle="Gökhan Gündüz" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
        {posts.map((post: any, index: number) => (
          <div
            key={index}
            className="col-span-1 flex flex-col gap-1 items-center "
          >
            <img
              className="border border-layer-dark-800 shadow-lg rounded-lg"
              src={`/blog/image/${post.name}.png`}
              alt=""
            />
            <span>{post.date}</span>
            <Link to={`/blog/${post.name}`}>{post.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
