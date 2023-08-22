export default async function ListItemsComponent({ id }: { id: number }) {
  const post = await fetch(
    `${process.env.INDIVIDUAL_STORY}${id}.json?print=pretty`
  ).then(
    (res) => res.json() as Promise<{ url: string; title: string; by: string }>
  );

  return (
    <div className="truncate h-[64px] px-4">
      {post.title}
      <div className="flex justify-between leading-normal text-sm text-slate-300">
        <p>{post.by}</p>
        <p>Visit site</p>
      </div>
    </div>
  );
}
