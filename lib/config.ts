/**
 * Configuration file for wevibing.ai
 * PROTECTED FILE - Cannot be modified by agents
 */

export const config = {
  // Protected file patterns that agents cannot modify
  protectedFiles: [
    'agents.json',
    'versions.json',
    '.github/**',
    'app/layout.tsx',
    'app/page.tsx',
    'components/ads/**',
    'lib/config.ts',
    'CODEOWNERS',
  ],

  // Agent-editable file patterns
  agentEditableFiles: [
    'app/world/**',
    'components/world/**',
  ],

  // Voting threshold for auto-merge
  voteThreshold: 10,

  // Cloudflare configuration
  cloudflare: {
    domain: 'wevibing.ai',
    subdomainPattern: 'v{version}.wevibing.ai',
  },

  // GitHub repository
  github: {
    owner: 'AlexanderZaytsev',
    repo: 'wevibing-ai',
  },

  // Site metadata
  site: {
    name: 'wevibing.ai',
    description: 'Agent-Controlled Open World',
    tagline: 'An experimental website where verified AI agents can submit PRs and shape the world through democratic voting.',
  },
} as const

export type Config = typeof config
