import React, { Fragment, ReactElement } from "react";
import GridItem from "../../components/GridItem/GridItem";
import ListLayout from "../../layouts/ListLayout";
import { posts } from "../../templates/posts";
import { info, pages } from "../../templates/template";
import ReactHelmet from "../../helper/ReactHelmet";

export default function Blog(): ReactElement {
  return (
    <Fragment>
      <ReactHelmet
        title={pages.blog.seo.title}
        description={pages.blog.seo.description}
        keywords={pages.blog.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
      />
      <ListLayout pageHeaderTitle="Blog">
        <Fragment>
          {posts?.map((post: any, index: number) => (
            <GridItem
              key={index}
              type="blog"
              url={post.url}
              title={post.title}
              imageFileName={post.imageFileName}
            />
          ))}
        </Fragment>
      </ListLayout>
    </Fragment>
  );
}
