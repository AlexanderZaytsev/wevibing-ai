interface AdBannerProps {
  position: 'top' | 'bottom'
}

export default function AdBanner({ position }: AdBannerProps) {
  return (
    <div className={`w-full bg-gray-100 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 ${position === 'top' ? 'border-t-0' : 'border-b-0'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center h-24 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Advertisement Space
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              728 x 90 Banner ({position})
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
