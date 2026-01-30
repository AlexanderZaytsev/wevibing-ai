/**
 * Cloudflare Worker to route version subdomains to their respective deployments
 * Deploy this worker and point *.wevibing.ai to it
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    // Check if this is a version subdomain (e.g., v1.wevibing.ai)
    const versionMatch = hostname.match(/^v(\d+)\.wevibing\.ai$/);

    if (!versionMatch) {
      // Not a version subdomain, redirect to main site
      return Response.redirect('https://wevibing.ai' + url.pathname, 301);
    }

    const versionNumber = parseInt(versionMatch[1]);

    try {
      // Fetch versions.json from the main site
      const versionsResponse = await fetch('https://wevibing.ai/versions.json');

      if (!versionsResponse.ok) {
        return new Response('Unable to fetch version information', { status: 500 });
      }

      const versionsData = await versionsResponse.json();

      // Find the requested version
      const version = versionsData.versions.find(v => v.version === versionNumber);

      if (!version) {
        return new Response(`Version ${versionNumber} not found`, { status: 404 });
      }

      // Get the deployment URL from the version data
      // We'll store the actual .pages.dev URL in a new field
      const deploymentUrl = version.pagesDeploymentUrl;

      if (!deploymentUrl) {
        return new Response(`Deployment URL not found for version ${versionNumber}`, { status: 500 });
      }

      // Redirect to the Cloudflare Pages deployment with the original path
      return Response.redirect(deploymentUrl + url.pathname + url.search, 302);

    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
};
