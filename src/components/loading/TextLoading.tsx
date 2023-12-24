export default function TextLoading() {
  return (
    <div role="status" className="max-w-lg animate-pulse space-y-2.5">
      <div className="flex w-full items-center">
        <div className="h-2.5 w-32 rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[480px] items-center">
        <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[400px] items-center">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[480px] items-center">
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[440px] items-center">
        <div className="ms-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-700"></div>
      </div>
      <div className="flex w-full max-w-[360px] items-center">
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
