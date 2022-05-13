import { Link, useNavigate } from "react-router-dom";

export default function Modal({ children }: any) {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-auto min-h-full p-20 bg-black/50">
      <div className="relative p-4 bg-white w-[600px] rounded-lg shadow-xl">
        <div className="absolute w-10 h-10 mb-4 left-2 top-2">
          <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-full h-full p-4 bg-gray-200 border-2 border-gray-300 rounded-full shadow-2xl cursor-pointer"
          >
            <i className="text-xl fa-duotone fa-chevron-left"></i>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
