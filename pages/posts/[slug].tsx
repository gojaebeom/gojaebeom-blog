import { Footer, Scaffold } from "components";
import Image from "next/image";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import _marked from "marked";

export default function PostDetailPage({ slug, data, content }: any) {
  const marked: any = _marked;
  return (
    <Scaffold>
      <div
        id="DETAIL_THUMBNAIL"
        className="relative w-full md:w-[1240px] h-[300px] z-[1]"
      >
        <div
          id="DETAIL_BACK_BTN"
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-black rounded-full top-6 left-4 bg-white/30"
        >
          <Link href="/">
            <a>
              <i className="text-xl fa-regular fa-angle-left mt-0.5 mr-0.5"></i>
            </a>
          </Link>
        </div>
        <Image src="/images/09.jpg" layout="fill" alt="image" />
        <div
          id="DETAIL_THUMBNAIL_BOTTOM"
          className="absolute bottom-0 left-0 w-full h-6 bg-white rounded-t-3xl"
        ></div>
      </div>
      <div id="DETAIL_BODY" className="px-4 pt-4">
        <h1
          id="DETAIL_TITLE"
          className="mb-10 text-3xl font-extrabold text-black"
        >
          {data.title}
        </h1>
        <div
          id="DETAIL_CONTENT"
          className="prose prose-slate"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
      <Footer />
    </Scaffold>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("drafts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join("drafts", slug + ".md"),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      slug,
      data,
      content,
    },
  };
}

