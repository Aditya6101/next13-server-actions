import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-10 text-center">
      <h3 className="text-xl font-semibold max-w-[40ch] mx-auto">
        Posts app created using Vercel postgres database & Server Actions 🚀
      </h3>

      <Link href="/posts" className="underline">
        See Posts 📝
      </Link>
      <Link href="/posts" className="underline">
        Add Post ➕
      </Link>
    </div>
  );
}
