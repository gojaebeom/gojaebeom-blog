import { ModalLayout } from "components";
import { Link } from "react-router-dom";
import useDocumentList from "./DocumentList.service";

export default function DocumentList() {
  const { documentList, category } = useDocumentList();
  return (
    <ModalLayout>
      <img
        src={`/assets/images/${category}.png`}
        className="w-full mb-2 rounded-lg"
      />
      <div className="p-2 text-sm">
        <i className="mr-2 fa-light fa-arrow-down-wide-short"></i>
        <span className="mr-2">최신순</span>
        <span>오래된순</span>
      </div>
      {documentList.map((doc, index) => {
        return (
          <div key={index} className="p-2 border-b border-dashed">
            <Link to={`/documents/${category}/${doc.slug}`}>
              <h1 className="text-2xl text-gray-600 font-ngb">{doc.title}</h1>
            </Link>
            <div className="text-sm">
              <i className="fa-duotone fa-timer"></i> {doc.createdAt}
            </div>
            <div className="text-sm">{doc.excerpt}</div>
          </div>
        );
      })}
    </ModalLayout>
  );
}
