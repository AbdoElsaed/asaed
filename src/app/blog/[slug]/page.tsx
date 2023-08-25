import React from "react";
import { format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post?.title };
};

const SingleBlog = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="">
      <div className="">
        <time dateTime={post?.date} className="">
          {format(parseISO(post?.date), "LLLL d, yyyy")}
        </time>
        <h1 className="">{post?.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default SingleBlog;
