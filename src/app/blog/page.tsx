import React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import Link from "next/link";
import styles from "./blog-page.module.css";

const BlogList = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className={styles.root}>
      {posts.map((post, indx) => (
        <article key={indx} className={styles.blogItem}>
          <time className={styles.blogDate}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <Link href={post.url} className={styles.blogTitle}>
            <span>{post.title}</span>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
