import Image from "next/image";

export default function PostDetailPage() {
  return (
    <div>
      <div id="DETAIL_THUMBNAIL" className="relative w-full h-[300px] z-[1]">
        <div
          id="DETAIL_BACK_BTN"
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-black rounded-full top-6 left-4 bg-white/30"
        >
          <i className="text-xl fa-regular fa-angle-left mt-0.5 mr-0.5"></i>
        </div>
        <Image src="/images/09.jpg" layout="fill" />
        <div
          id="DETAIL_THUMBNAIL_BOTTOM"
          className="absolute bottom-0 left-0 w-full h-6 bg-white rounded-t-3xl"
        ></div>
      </div>
      <div id="DETAIL_BODY" className="px-4 pt-4">
        <h1 id="DETAIL_TITLE" className="text-3xl font-extrabold text-black">
          자바스크립트 활용하기
        </h1>
        <div id="DETAIL_CONTENT" className="mt-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
      </div>
    </div>
  );
}
