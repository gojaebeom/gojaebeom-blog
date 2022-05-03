export default function BookList() {
  return (
    <div id="BOOK_LIST" className="flex">
      <div id="BOOK_CONTAINER" className="w-[200px] mr-4">
        <div
          id="BOOK_THUMBNAIL"
          className="relative h-[270px] border-blue-200 stream"
        >
          <img
            src="images/books/1.svg"
            alt="java image"
            className="stream__thumbnail"
          />
        </div>
        <div id="BOOK_TITLE" className="text-lg font-bold text-gray-700">
          Javascript
        </div>
        <div id="BOOK_DESC" className="text-xs text-gray-700">
          자바스크립트는 웹, 앱, 데스크톱등 다양한 플랫폼에서 활용되는
          프로그래밍 언어이다.
        </div>
      </div>
      <div id="BOOK_CONTAINER" className="w-[200px]">
        <div
          id="BOOK_THUMBNAIL"
          className="relative h-[270px] border-blue-200 stream"
        >
          <img
            src="images/books/2.svg"
            alt="java image"
            className="stream__thumbnail"
          />
        </div>
        <div id="BOOK_TITLE" className="text-lg font-bold text-gray-700">
          Typescript
        </div>
        <div id="BOOK_DESC" className="text-xs text-gray-700">
          타입스크립트는 자바스크립트의 슈퍼셋이다. 자바스크립트에 타입을 더해 개발자의 실수를 줄여준다.
        </div>
      </div>
    </div>
  );
}
