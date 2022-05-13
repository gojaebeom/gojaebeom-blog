import { Router } from "express";
import * as fs from "fs";
import * as matter from "gray-matter";

const router = Router();

const DRAFT_DIR = "src/documents";

router.get("/", async (req, res) => {
  const { category } = req.query;
  console.debug(category);
  fs.readdir(`${DRAFT_DIR}/${category}`, (err, files) => {
    if (err) {
      return res.json({ message: "category is not defined", data: [] });
    }

    const dataList: any = [];

    files.forEach((file) => {
      const f = fs.readFileSync(`${DRAFT_DIR}/${category}/${file}`, "utf-8");
      const { data } = matter(f);
      dataList.push({
        slug: file.split(".")[0],
        title: data.title,
        excerpt: data.excerpt,
        createdAt: data.createdAt,
      });
    });

    return res.json({ message: "ok", data: dataList });
  });
});

router.get("/:category/:slug", async (req, res) => {
  const { category, slug } = req.params;
  console.debug(category, slug);
  fs.readdir(`${DRAFT_DIR}/${category}`, (err, files) => {
    if (err) {
      return res.json({ message: "category is not defined", data: null });
    }

    const selectFile = files.filter((file) => file.split(".")[0] === slug)[0];

    if (!selectFile)
      return res.json({ message: "slug is not defined", data: null });

    const file = fs.readFileSync(`${DRAFT_DIR}/${category}/${selectFile}`, "utf-8");
    const { data, content } = matter(file);
    return res.json({
      message: "ok",
      data: {
        data,
        content,
      },
    });
  });
});

export default router;
