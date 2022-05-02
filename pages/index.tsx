import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { CardList, Footer, Header, Scaffold, TagList } from "components";

export default function HomePage({ posts }: any) {
  return (
    <Scaffold>
      <Header />
      <TagList />
      <CardList posts={posts} />
      <Footer />
    </Scaffold>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("drafts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("drafts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
