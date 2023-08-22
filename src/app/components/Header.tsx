import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="bg-yellow-400 text-black font-semibold grid place-content-center">
      <Link href="/">HackerNews Reader</Link>
    </header>
  );
}
