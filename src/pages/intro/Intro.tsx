import { ModalLayout } from "components";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <ModalLayout>
      <img src="/assets/images/welcome.png" className="w-full rounded-lg" />
      <div>
        <Link to="/documents/java">자바</Link>
      </div>
      <div>
        <Link to="/documents/js">자바스크립트</Link>
      </div>
      <div>
        <Link to="/documents/react">리액트</Link>
      </div>
    </ModalLayout>
  );
}
