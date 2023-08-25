import React from "react";
import { allPosts, type Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import styles from "./Blog.module.css";
import Link from "next/link";

export const Blog = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className={styles.root}>
      <h4 className={styles.header}>Blog</h4>
      <div className={styles.titlesContainer}>
        {posts.map((post, indx) => (
          <article key={indx} className={styles.blog}>
            <Link href={post.url}>
              <span>{post.title}</span>
            </Link>
            <time>{format(parseISO(post.date), "LLLL d, yyyy")}</time>
          </article>
        ))}
      </div>
      <Link href="blog" className={styles.seeMoreLink}>
        see more &rarr;
      </Link>
    </div>
  );
};
