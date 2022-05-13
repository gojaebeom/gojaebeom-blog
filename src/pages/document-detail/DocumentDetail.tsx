import { ModalLayout } from "components";
import useDocumentDetail from "./DocumentDetail.service";
import ReactMarkdown from "react-markdown";

export default function DocumentDetail() {
  const { category, title, content } = useDocumentDetail();
  return (
    <ModalLayout>
      <img
        src={`/assets/images/${category}.png`}
        className="w-full mb-2 rounded-lg"
      />
      <h1 className="mb-4 text-3xl font-ngb">{title}</h1>
      <ReactMarkdown children={content} className="prose" />
    </ModalLayout>
  );
}
