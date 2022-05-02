import CardItem from "./CardItem";

export default function CardList({ posts }: any) {
    return (
        <div id="CARD_LIST" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 max-w-[1240px]">
            {
                posts.map((post: any) => {
                    return (
                        <CardItem post={post} key={post.slug} />
                    )
                })
            }
        </div>
    )
}