import CategoryItems from "components/categoryItems/CategoryItems";
import useCategoryBox from "./CategoryBox.service";

export default function CategoryBox() {
  const {
    categoryBoxToggle: { activite, setActivate },
  } = useCategoryBox();

  return (
    <>
      <div
        className={`
        fixed right-10 bottom-10 flex p-2 shadow-2xl bg-white z-10 overflow-hidden
        ${
          activite
            ? "w-[300px] h-[500px] rounded-lg  flex-col items-center"
            : "w-20 h-20 rounded-full justify-center items-center cursor-pointer"
        }
        transition-all
      `}
        onClick={() => {
          !activite && setActivate();
        }}
      >
        {activite ? (
          <div className="w-full">
            <h1 className="mb-2 text-3xl text-gray-800 font-ngb">카테고리</h1>
            <CategoryItems />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <i className="text-3xl text-red-400 fa-solid fa-splotch"></i>
            <span>블로그</span>
          </div>
        )}
      </div>
      {activite && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/0"
          onClick={setActivate}
        ></div>
      )}
    </>
  );
}
