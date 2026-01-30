# Version Router Worker

This Cloudflare Worker routes version subdomains (v1, v2, v3, etc.) to their respective Cloudflare Pages deployments.

## Setup

1. **Create wildcard DNS record** in Cloudflare:
   - Type: CNAME
   - Name: `*` (or `v*` for only version subdomains)
   - Target: `wevibing.ai`
   - Proxy status: Proxied (orange cloud)

2. **Deploy the Worker**:
   ```bash
   cd worker
   npx wrangler deploy
   ```

3. **Configure the route** (if not auto-configured):
   - Go to Cloudflare Dashboard → Workers & Pages → wevibing-version-router
   - Add route: `v*.wevibing.ai/*`

## How it works

1. User visits `v1.wevibing.ai`
2. Worker intercepts the request
3. Worker fetches `/versions.json` from the main site
4. Worker looks up the `pagesDeploymentUrl` for version 1
5. Worker redirects to the Cloudflare Pages deployment URL

## Testing locally

```bash
cd worker
npx wrangler dev
```

Then test with: `curl -L http://v1.localhost:8787`
