export default function ListSuspense() {
  return (
    <li className="h-[64px] px-4">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 w-[72px]"></div>
        </div>
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 w-[50px]"></div>
        </div>
      </div>
    </li>
  );
}
