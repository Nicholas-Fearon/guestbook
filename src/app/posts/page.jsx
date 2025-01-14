import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
const { db } = require("@/utils/db");

export default async function PostsPage() {
  const results = await db.query(`SELECT * FROM wedding_guestbook`);
  const posts = results.rows;
  const user = await auth();
  console.log("This is my user log:", user);
  console.log(posts);
  return (
    <>
      <h1>Guest Posts</h1>
      {user.userId === null || undefined ? (
       <Link href="/sign-in">Sign-in to make a post</Link> 
      ) : (
        <Link href="/form">Write a message</Link>
      )}

      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.guest}</p>
          <p>{post.message}</p>
          <p>{post.likes}</p>
        </div>
      ))}
    </>
  );
}
