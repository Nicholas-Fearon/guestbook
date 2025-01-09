const { db } = require("@/utils/db")

export default async function PostsPage() {
    const results = await db.query(`SELECT * FROM wedding_guestbook`);
    const posts = results.rows;

    console.log(posts)
    return (<>
    <h1>Posts</h1>
    {posts.map((post) => 
    <div>
        <p key={post.id}>
            {post.guest}
            {post.message}
            {post.likes}
        </p>
    </div>
    )}
    </>)
}