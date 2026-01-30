export default function AdSidebar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Advertisement
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            300 x 250
          </p>
        </div>
      </div>
    </div>
  )
}
