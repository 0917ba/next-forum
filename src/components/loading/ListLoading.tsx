export default function ListLoading() {
  return (
    <div
      role="status"
      className="max-w-md animate-pulse space-y-4 divide-y divide-gray-100 rounded border border-gray-200 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-100 "></div>
        </div>
        <div className="h-2.5 w-12 rounded-full  bg-gray-200"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-100 "></div>
        </div>
        <div className="h-2.5 w-12 rounded-full  bg-gray-200"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-100 "></div>
        </div>
        <div className="h-2.5 w-12 rounded-full  bg-gray-200"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-100 "></div>
        </div>
        <div className="h-2.5 w-12 rounded-full  bg-gray-200"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-100 "></div>
        </div>
        <div className="h-2.5 w-12 rounded-full  bg-gray-200"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
