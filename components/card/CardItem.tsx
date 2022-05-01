import Image from "next/image";
import Link from "next/link";

export default function CardItem({ post }: any) {
    return (
        <div id="CARD" className="p-2" key={post.slug}>
            <div
                id="CARD_THUMBNAIL"
                className="relative w-full h-[300px] overflow-hidden rounded-lg"
            >
                <Image src={`/images/${post.data.thumbnail}`} layout="fill" alt="image" />
            </div>
            <div id="CARD_BODY" className="px-2">
                <div id="CARD_TITLE" className="mt-2 text-2xl font-extrabold">
                    {post.data.title}
                </div>
                <div
                    id="CARD_CREATE_AT&CATEGORY_BOX"
                    className="flex items-center justify-between text-xs font-semibold text-gray-600"
                >
                    <div id="CARD_CREATE_AT" className="">
                        <i className="mr-1 fa-regular fa-timer"></i>
                        <span>Created by {post.data.createdAt}</span>
                    </div>
                    <div id="CARD_CATEGORY" className="text-blue-500">
                        <i className="mr-1 fa-duotone fa-hashtag"></i>
                        <span>{post.data.category}</span>
                    </div>
                </div>
                <div id="CARD_EXCERPT" className="mt-2 text-sm">
                    {post.data.excerpt}
                </div>
                <button
                    id="CARD_READ_MORE_BUTTON"
                    className="px-4 py-1 mt-2 text-sm font-bold text-white bg-blue-500 rounded-3xl"
                >
                    <Link href={`/posts/${post.slug}`}>
                        <a>더보기</a>
                    </Link>
                </button>
            </div>
        </div>
    )
}