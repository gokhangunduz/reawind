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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 text-layer-light-100 ">
        {posts.map((post: any, index: number) => (
          <Link to={`/blog/${post.name}`}>
            <div
              key={index}
              className="relative col-span-1 border border-layer-light-600 dark:border-layer-dark-700 shadow-lg rounded-lg hover:scale-105 transition-all duration-500"
            >
              <img
                className="rounded-lg"
                src={`/blog/image/${post.name}.png`}
                alt={post.name}
              />
              <div className="absolute flex flex-col gap-2 items-center bottom-5 left-1/2 transform -translate-x-1/2">
                <span className="text-sm font-medium">{post.name}</span>

                <span className="text-xs font-light">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
