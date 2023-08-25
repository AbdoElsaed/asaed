import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    onhashnode: { type: "boolean", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        post.onhashnode
          ? `https://apdoelsaed.hashnode.dev/${post._raw.flattenedPath}`
          : `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/_data/blog",
  documentTypes: [Post],
});
