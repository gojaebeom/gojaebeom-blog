import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full p-2 sm:p-10">
      <div className="w-full lg:w-[1000px] grid gap-6 grid-cols-4">
        <div className="col-span-4 h-[300px] rounded-lg shadow">
          <h1 className="text-5xl">Welcome Gojaebeom's Blog</h1>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 h-[150px] rounded-lg shadow bg-gradient-to-t from-[#9e78fb] to-[#e481c6]">
          <div className="flex flex-col items-center justify-center w-full h-full text-white">
            <i className="text-5xl fa-light fa-album-collection"></i>
            <span className="mt-2 font-bold">나의 음악 플레이리스트 ✨</span>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 h-[150px] rounded-lg shadow bg-gradient-to-r from-[#fa709a] to-[#fee140]">
          <div className="flex flex-col items-center justify-center w-full h-full text-white">
            <i className="text-5xl fa-light fa-rocket-launch"></i>
            <span className="mt-2 font-bold">내가 만든 프로젝트</span>
          </div>
        </div>
        {/* <div className="hidden col-span-2 rounded-lg lg:block"></div> */}
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 lg:col-start-3 h-[150px] rounded-lg shadow bg-gradient-to-tr from-[#16a085] to-[#f4d03f]">
          05
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 h-[150px] rounded-lg shadow">
          06
        </div>
      </div>
    </div>
  );
};

export default Home;
