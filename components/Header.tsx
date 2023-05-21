import Link from "next/link";

export default function Header() {
  return (
    <header className="px-10 py-2 bg-gray-100 border-b-2 border-slate-200">
      <nav className="flex gap-4 text-base font-medium">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/posts/add">Add Post</Link>
      </nav>
    </header>
  );
}
