import { db } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function GuestForm() {
  const {userId} = await auth();
  const user = await currentUser();
  const user_id = user.id;
  console.log("this is the user id that will go with the psot:", user_id)
  console.log("This is my userId:",userId)
  console.log("This is my currentUser:", user)

  async function handleSubmit(formData) {
    "use server";
    const guest = formData.get("guest");
    const message = formData.get("message")
   
    await db.query(
      `INSERT INTO guestbook (guest, message, user_id ) VALUES ($1, $2, $3)`,
      [guest, message, user_id]
    );

    revalidatePath("/posts");
  }

  return (
    <>
      <form action={handleSubmit}>
        <label>Name</label>
        <input
          id="guest"
          type="text"
          name="guest"
          placeholder="Enter your name here"
        />

        <label>Message</label>
        <input
          id="message"
          type="textarea"
          name="message"
          placeholder="Enter your message here"
        />
  <input type="hidden" name="id" value={user_id}/>
        <button type="submit">Post message</button>
      </form>
    </>
  );
}
