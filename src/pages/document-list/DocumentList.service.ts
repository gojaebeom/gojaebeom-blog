import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "store";
import { setDocumentList } from "store/modules/document";

export default function useDocumentList() {
  const { documentList } = useSelector((state: RootState) => state.document);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const category = pathname.split("/documents/")[1];

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = async () => {
    const res = await axios({
      url: `https://asia-northeast3-jb-world-2188e.cloudfunctions.net/api/documents?category=${category}`,
      withCredentials: true,
    });
    console.debug(res.data.data);
    if (res.data.data) {
      dispatch(setDocumentList({ documents: res.data.data }));
    }
  };

  return {
    category,
    documentList,
  };
}
