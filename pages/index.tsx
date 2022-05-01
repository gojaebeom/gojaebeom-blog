import useHome from "./index.service";

import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { CardList, Footer, Header, TagList } from "components";

export default function HomePage({ posts }: any) {
  useHome();
  return (
    <div className="w-full h-full overflow-hidden">
      <Header />
      <TagList />
      <CardList posts={posts} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('drafts'))
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('drafts', filename),
      'utf-8'
    )
    const { data } = matter(markdownWithMeta)
    return {
      slug,
      data,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
