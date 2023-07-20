import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import SaveButton from "./SaveButton";

async function createPost(formData: FormData) {
  "use server";

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });

  return redirect(`/posts`);
}

export default function CreatePost() {
  return (
    <form
      action={createPost}
      className="flex flex-col w-full max-w-lg py-2 md:w-3/4"
    >
      <label className="text-sm text-gray-600" htmlFor="title">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="p-1 my-2 text-sm text-gray-600 border rounded focus:outline-blue-700"
      />

      <label className="text-sm text-gray-600" htmlFor="content">
        Content
      </label>
      <textarea
        name="content"
        id="content"
        rows={5}
        className="p-1 my-2 text-sm text-gray-600 border rounded focus:outline-blue-700"
      ></textarea>

      <SaveButton />
    </form>
  );
}
