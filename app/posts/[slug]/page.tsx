import prisma from "@/lib/prisma";

async function getPost(slug: string) {
  const post = await prisma.post.findUnique({ where: { id: slug } });
  return post;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <div className="py-2">
      <h1 className="text-2xl font-semibold">{post?.title}</h1>
      <p className="mt-2 text-base text-neutral-800">{post?.content}</p>
    </div>
  );
}
