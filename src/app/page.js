import Link from "next/link"


export default function Home() {
  return (<>
  <h1>Welcome to Nick & MJ's Guestbook</h1>
    <Link href="/posts">Leave A Message</Link>
  </>)

}
