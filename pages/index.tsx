import Image from "next/image";

export default function HomePage() {
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      <div className="col-span-3">
        <div className="relative bg-gradient-to-r from-[#fa709a] to-[#fee140] h-[90vh] transition-all">
          <header className="absolute flex items-center w-full px-10 py-4 text-white">
            <figure className="mr-4 text-4xl font-extrabold">JBLOG</figure>
            <span className="mx-2 font-bold">About</span>
            <span className="mx-2 font-bold">Blog</span>
            <span className="mx-2 font-bold">Project</span>
          </header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L14.1,64C28.2,96,56,160,85,202.7C112.9,245,141,267,169,234.7C197.6,203,226,117,254,85.3C282.4,53,311,75,339,101.3C367.1,128,395,160,424,170.7C451.8,181,480,171,508,154.7C536.5,139,565,117,593,117.3C621.2,117,649,139,678,138.7C705.9,139,734,117,762,106.7C790.6,96,819,96,847,128C875.3,160,904,224,932,218.7C960,213,988,139,1016,112C1044.7,85,1073,107,1101,149.3C1129.4,192,1158,256,1186,240C1214.1,224,1242,128,1271,128C1298.8,128,1327,224,1355,250.7C1383.5,277,1412,235,1426,213.3L1440,192L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
            ></path>
          </svg>
          <div className="absolute flex justify-center w-full mt-[200px] text-6xl font-extrabold text-white">
            Welcome To
            <br />
            Gojaebeom's Blog
          </div>
        </div>
      </div>

      <div className="z-10 col-span-3">
        <div className="px-10 py-4 text-2xl font-bold text-gray-700">
          Latest Posts
        </div>
        <div className="h-[170px] lg:h-[300px] flex overflow-hidden transition-all">
          <div className="relative w-[300px] min-w-[300px] lg:w-[500px] lg:min-w-[500px]  mr-4 rounded-xl overflow-hidden transition-all ml-10 shadow-lg">
            <Image src="/images/06.jpg" layout="fill" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white transition-all duration-75 hover:bg-black/50">
              작품 1
            </div>
          </div>
          <div className="relative w-[300px] min-w-[300px] lg:w-[500px] lg:min-w-[500px]  mr-4 rounded-xl overflow-hidden transition-all">
            <Image src="/images/07.jpg" layout="fill" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white transition-all duration-75 hover:bg-black/50">
              작품 2
            </div>
          </div>
          <div className="relative w-[300px] min-w-[300px] lg:w-[500px] lg:min-w-[500px]  mr-4 rounded-xl overflow-hidden transition-all">
            <Image src="/images/08.jpg" layout="fill" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white transition-all duration-75 hover:bg-black/50">
              작품 3
            </div>
          </div>
          <div className="relative w-[300px] min-w-[300px] lg:w-[500px] lg:min-w-[500px]  mr-4 rounded-xl overflow-hidden transition-all">
            <Image src="/images/09.jpg" layout="fill" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white transition-all duration-75 hover:bg-black/50">
              작품 4
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 px-10 lg:col-span-2">
        <div className="py-4 text-gray-700 ">
          <span className="text-2xl font-bold">Categorise</span>
          <span className="ml-2 text-sm font-semibold">..더보기</span>
        </div>
        <div className="grid w-full grid-cols-3 gap-6">
          <div className="flex col-span-1">
            <div className="relative w-[130px] min-w-[130px] h-[180px] rounded-md overflow-hidden">
              <Image src="/images/01.jpg" layout="fill" />
            </div>
            <div className="ml-2">
              <div className="font-bold text-gray-700 text-md">Javascript</div>
              <div className="text-sm text-gray-500">
                웹,데스크톱,모바일등 많은 플랫폼에서 쓰이는 언어
              </div>
              <div className="text-sm text-gray-500">총 4</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border lg:col-span-1">
        <div className="px-10 py-4 text-2xl font-bold text-gray-700 ">
          Author
        </div>
        <div className="grid w-full grid-cols-1">
          <div className="col-span-1 border">1</div>
          <div className="col-span-1 border">1</div>
          <div className="col-span-1 border">1</div>
        </div>
      </div>
      <div className="col-span-3 h-[500px] relative bg-gradient-to-tr from-[#16a085] to-[#f4d03f]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L14.1,64C28.2,96,56,160,85,186.7C112.9,213,141,203,169,170.7C197.6,139,226,85,254,58.7C282.4,32,311,32,339,53.3C367.1,75,395,117,424,149.3C451.8,181,480,203,508,208C536.5,213,565,203,593,197.3C621.2,192,649,192,678,186.7C705.9,181,734,171,762,181.3C790.6,192,819,224,847,208C875.3,192,904,128,932,128C960,128,988,192,1016,229.3C1044.7,267,1073,277,1101,240C1129.4,203,1158,117,1186,90.7C1214.1,64,1242,96,1271,117.3C1298.8,139,1327,149,1355,133.3C1383.5,117,1412,75,1426,53.3L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg>
        <footer></footer>
      </div>
    </div>
  );
}
