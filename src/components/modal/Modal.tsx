import { useSelector } from "react-redux";
import { RootState } from "store";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import matter from "gray-matter";

export default function Modal() {
  const { markdownLinks } = useSelector((state: RootState) => state.markdown);

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-auto p-20 bg-black/50">
      <div className="p-4 bg-white w-[700px] h-[1500px] rounded-lg">
        <img src="assets/images/react.png" className="w-full rounded-lg" />
        {/* {markdownLinks.map((md: any) => {
          return <div>{md}</div>;
        })} */}

        <ReactMarkdown
          children={markdownLinks[0]}
          linkTarget={markdownLinks[0]}
        />
      </div>
    </div>
  );
}
