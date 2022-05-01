export default function TagList() {
    return (
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
    )
}