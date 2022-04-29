import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useHome from "./index.service";

export default function HomePage() {
  useHome();
  return (
    <div className="w-full h-full overflow-hidden">
      <header className="px-4 pt-4 mb-4">
        <figure className="text-4xl font-extrabold text-gray-800">
          Piggy95
        </figure>
      </header>

      <div
        id="TAGLIST"
        className="flex items-center justify-start p-2 overflow-x-auto text-sm font-bold hide-scroll"
      >
        <div className="px-4 py-2 mx-1 bg-gray-100 whitespace-nowrap rounded-3xl">
          자바스크립트
        </div>
        <div className="px-4 py-2 mx-1 bg-gray-100 whitespace-nowrap rounded-3xl">
          타입스크립트
        </div>
        <div className="px-4 py-2 mx-1 bg-gray-100 whitespace-nowrap rounded-3xl">
          리액트
        </div>
        <div className="px-4 py-2 mx-1 bg-gray-100 whitespace-nowrap rounded-3xl">
          NextJS
        </div>
        <div className="px-4 py-2 mx-1 bg-gray-100 whitespace-nowrap rounded-3xl">
          NestJs
        </div>
      </div>

      <div id="CARD_LIST" className="mt-2">
        <div id="CARD" className="p-2">
          <div
            id="CARD_THUMBNAIL"
            className="relative w-full h-[300px] overflow-hidden rounded-lg"
          >
            <Image src="/images/06.jpg" layout="fill" />
          </div>
          <div id="CARD_BODY" className="px-2">
            <div id="CARD_TITLE" className="mt-2 text-2xl font-extrabold">
              자바스크립트 활용하기
            </div>
            <div
              id="CARD_CREATE_AT&CATEGORY_BOX"
              className="flex items-center justify-between text-xs font-semibold text-gray-600"
            >
              <div id="CARD_CREATE_AT" className="">
                <i className="mr-1 fa-regular fa-timer"></i>
                <span>Created by 2022-04-29</span>
              </div>
              <div id="CARD_CATEGORY" className="text-blue-500">
                <i className="mr-1 fa-duotone fa-hashtag"></i>
                <span>자바스크립트</span>
              </div>
            </div>
            <div id="CARD_EXCERPT" className="mt-2 text-sm">
              자바스크립트는 웹 뿐만아니라 모바일, 데스크톱 등 다양한 플렛폼에서
              활용되는 언어입니다.
            </div>
            <button
              id="CARD_READ_MORE_BUTTON"
              className="px-4 py-1 mt-2 text-sm font-bold text-white bg-blue-500 rounded-3xl"
            >
              <Link href="/posts/1">
                <a>더보기</a>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div
        id="FOOTER"
        className="bg-gradient-to-tr from-[#16a085] to-[#f4d03f] mt-20"
      >
        <div className="relative col-span-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L14.1,64C28.2,96,56,160,85,186.7C112.9,213,141,203,169,170.7C197.6,139,226,85,254,58.7C282.4,32,311,32,339,53.3C367.1,75,395,117,424,149.3C451.8,181,480,203,508,208C536.5,213,565,203,593,197.3C621.2,192,649,192,678,186.7C705.9,181,734,171,762,181.3C790.6,192,819,224,847,208C875.3,192,904,128,932,128C960,128,988,192,1016,229.3C1044.7,267,1073,277,1101,240C1129.4,203,1158,117,1186,90.7C1214.1,64,1242,96,1271,117.3C1298.8,139,1327,149,1355,133.3C1383.5,117,1412,75,1426,53.3L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
            ></path>
          </svg>
        </div>

        <footer className="w-full p-10 font-bold text-center text-white">
          Created By jaebeom Go 🎉
        </footer>
      </div>
    </div>
  );
}
