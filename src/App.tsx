import { Link, Route, Routes } from "react-router-dom";
import { DocumentDetail, DocumentList, Intro } from "pages";
import useApp from "App.service";

function App() {
  useApp();
  return (
    <div className="App font-ng">
      <div id="phaser" className="fixed top-0 left-0 w-full h-full"></div>
      <Link
        to="/intro"
        className="fixed flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl right-10 bottom-10"
      >
        블로그
      </Link>

      <Routes>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/documents/:category" element={<DocumentList />} />
        <Route path="/documents/:category/:slug" element={<DocumentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
