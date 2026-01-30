/**
 * Utility functions for wevibing.ai
 */

/**
 * Format a date string into a human-readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  // If less than a day ago, show relative time
  if (diffInDays === 0) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    if (diffInHours === 0) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
      return diffInMinutes <= 1 ? 'just now' : `${diffInMinutes} minutes ago`
    }
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`
  }

  // If less than a week, show days
  if (diffInDays < 7) {
    return diffInDays === 1 ? 'yesterday' : `${diffInDays} days ago`
  }

  // Otherwise show the date
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Get the version URL for a specific version number
 */
export function getVersionUrl(version: number): string {
  return `https://v${version}.wevibing.ai`
}

/**
 * Truncate a string to a maximum length
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + '...'
}

/**
 * Check if a file path matches any of the protected patterns
 */
export function isProtectedFile(filePath: string, protectedPatterns: string[]): boolean {
  return protectedPatterns.some((pattern) => {
    // Simple pattern matching (can be enhanced with glob matching)
    const regexPattern = pattern
      .replace(/\*\*/g, '.*')
      .replace(/\*/g, '[^/]*')
      .replace(/\./g, '\\.')
    const regex = new RegExp(`^${regexPattern}$`)
    return regex.test(filePath)
  })
}

/**
 * Pluralize a word based on count
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) return singular
  return plural || `${singular}s`
}
