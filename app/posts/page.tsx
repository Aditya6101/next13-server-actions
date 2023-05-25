import prisma from "@/lib/prisma";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany();

  return posts;
}

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Post() {
  const posts = await getPosts();

  return (
    <ul className="p-4">
      {posts.map((post) => (
        <li className="list-disc" key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <span className="border-b border-neutral-400">{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
