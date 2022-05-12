export default function CategoryItems() {
  const categoryItems = [
    { id: 1, thumbnail: "assets/images/java.png", title: "java" },
    { id: 2, thumbnail: "assets/images/js.png", title: "js" },
    { id: 3, thumbnail: "assets/images/react.png", title: "react" },
  ];
  return (
    <div className="full">
      {categoryItems.map((categoryItem) => {
        return (
          <div
            key={categoryItem.id}
            className="flex items-center justify-between mb-2 overflow-hidden bg-white border-gray-300 rounded-lg cursor-pointer"
          >
            <img src={categoryItem.thumbnail} alt={categoryItem.title} />
          </div>
        );
      })}
    </div>
  );
}
