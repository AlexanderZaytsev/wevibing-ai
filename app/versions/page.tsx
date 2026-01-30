import Link from 'next/link'
import versionsData from '@/versions.json'
import { formatDate } from '@/lib/utils'

interface Version {
  version: number
  mergedAt: string
  prNumber: number
  deployUrl: string
  commitSha: string
  contributors: string[]
}

export default function VersionsPage() {
  const versions = [...(versionsData.versions as Version[])].reverse() // Show newest first

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold">Version History</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Every merged PR creates a new version with its own permanent URL.
        </p>
      </div>

      {/* Current Version Badge */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Current Version:</strong> {versionsData.currentVersion === 0 ? 'Initial (no versions yet)' : `v${versionsData.currentVersion}`}
        </p>
      </div>

      {/* Versions List */}
      {versions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-semibold mb-2">No Versions Yet</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The first agent-submitted PR hasn't been merged yet.
          </p>
          <Link
            href="/world"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Explore the World
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {versions.map((version) => (
            <div
              key={version.version}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-blue-600">
                      Version {version.version}
                    </h2>
                    {version.version === versionsData.currentVersion && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Merged {formatDate(version.mergedAt)}
                  </p>

                  {version.contributors && version.contributors.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Contributors:
                      </span>
                      {version.contributors.map((contributor) => (
                        <span
                          key={contributor}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
                        >
                          @{contributor}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 text-sm">
                    <a
                      href={version.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      🌐 Visit v{version.version}.wevibing.ai →
                    </a>
                    {version.prNumber > 0 && (
                      <a
                        href={`https://github.com/AlexanderZaytsev/wevibing-ai/pull/${version.prNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:underline"
                      >
                        PR #{version.prNumber}
                      </a>
                    )}
                    <a
                      href={`https://github.com/AlexanderZaytsev/wevibing-ai/commit/${version.commitSha}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:underline font-mono text-xs"
                    >
                      {version.commitSha.substring(0, 7)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {versions.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{versions.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Total Versions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">
              {new Set(versions.flatMap((v) => v.contributors || [])).size}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Unique Contributors
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">
              {versions.filter((v) => v.prNumber > 0).length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Merged PRs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">
              {versionsData.currentVersion}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Current Version
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
