export default async function ListItemsComponent({ id }: { id: number }) {
  const post = await fetch(
    `${process.env.INDIVIDUAL_STORY}${id}.json?print=pretty`
  ).then(
    (res) => res.json() as Promise<{ url: string; title: string; by: string }>
  );

  return (
    <li className="truncate leading-[64px] px-4">{post.title || post.by}</li>
  );
}
