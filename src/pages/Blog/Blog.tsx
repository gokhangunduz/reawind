import React, { Fragment, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import GridItem from "../../components/GridItem/GridItem";
import ListLayout from "../../layouts/ListLayout";

export default function Blog(): ReactElement {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios(`/data/blog/posts.json`).then((res) => {
      setPosts(res.data || []);
    });
  }, []);

  return (
    <ListLayout pageHeaderTitle="Blog">
      <Fragment>
        {posts?.map((post: any, index: number) => (
          <GridItem key={index} type="blog" item={post} />
        ))}
      </Fragment>
    </ListLayout>
  );
}
