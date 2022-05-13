import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "store";
import { setDocumentDetail } from "store/modules/document";
import { Document } from "types";

export default function useDocumentDetail() {
  const { pathname } = useLocation();
  const categoryAndSlug = pathname.split("/documents/")[1];
  const [category, slug] = categoryAndSlug.split("/");

  const { documentDetail } = useSelector((state: RootState) => state.document);
  const dispatch = useDispatch();

  console.debug(category, slug);

  useEffect(() => {
    getDocumentDetail();
  }, []);

  const getDocumentDetail = async () => {
    const res = await axios({
      url: `https://asia-northeast3-jb-world-2188e.cloudfunctions.net/api/documents/${category}/${slug}`,
      withCredentials: true,
    });
    console.debug(res.data.data);
    const { content, data } = res.data.data;
    const document: Document = {
      title: data.title,
      createdAt: data.createdAt,
      content: content,
      slug: null,
      excerpt: null,
    };
    dispatch(setDocumentDetail({ document }));
  };

  const content: any = documentDetail?.content;
  return {
    category,
    title: documentDetail?.title,
    content,
  };
}
