import Link from "next/link";
import { ListItems } from "./components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    `${process.env.TOP_STORIES}&limitToFirst=10&orderBy="$key"`
  );

  if (!response.ok) {
    return <div>Error loading data</div>;
  }

  const posts = (await response.json()) as number[];
  return (
    <html lang="en">
      <body className="grid grid-rows-[60px,1fr] h-screen">
        <header className="bg-yellow-400 text-black font-semibold grid place-content-center">
          HackerNews Reader
        </header>
        <main className="grid grid-cols-[320px,1fr] gap-4">
          <aside>
            <ul>
              {posts.map((id) => (
                <Link href={`/${id}`} key={id}>
                  <ListItems id={id} />
                </Link>
              ))}
            </ul>
          </aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
