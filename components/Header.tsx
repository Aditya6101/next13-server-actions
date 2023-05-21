import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 py-2 bg-gray-100 border-b-2 md:px-10 border-slate-200">
      <nav className="flex gap-4 text-base font-medium">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/posts/add">Add Post</Link>
      </nav>
    </header>
  );
}
