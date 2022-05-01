import CardItem from "./CardItem";

export default function CardList({ posts }: any) {
    return (
        <div id="CARD_LIST" className="mt-2">
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