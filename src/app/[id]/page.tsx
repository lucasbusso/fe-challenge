export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await fetch(
    `${process.env.INDIVIDUAL_STORY}${id}.json?print=pretty`
  ).then(
    (res) => res.json() as Promise<{ url: string; title: string; by: string }>
  );

  return <iframe className="w-full h-full" src={post.url} />;
}
