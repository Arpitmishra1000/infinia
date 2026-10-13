# Infinia Bharat News

## Netlify deployment

This project uses Next.js server rendering and API routes. Deploy it through
Netlify's build pipeline, not by uploading the repository as a static directory.

`netlify.toml` configures `npm run build`, the `.next` publish directory, and
Node.js 22. Netlify automatically installs its Next.js adapter to package static
assets and server routes. Do not add a catch-all redirect to `index.html` or
publish the repository root or `public` directory.

The public news services read the existing `public/data` snapshots. The Next.js
configuration explicitly includes these files in server deployment traces so
dynamic pages and API routes can read them after deployment.

Configure the existing Firebase, comments Firebase, GitHub, email, and optional
integration credentials in Netlify environment variables; never commit them.
Browser-facing `NEXT_PUBLIC_*` variables must be available during the build,
and server credentials must be available to Functions. Firebase authentication
also requires the deployed domain in the project's authorized domains.

The public site address is configured in `src/config/site.ts` as
`https://infiniabharat.netlify.app`. Update that setting if moving to a custom
production domain.

After deployment, verify `/`, `/login`, `/latest`, `/api/public/categories`, and
`/logo.webp`. Repository files such as `/package.json` and
`/src/app/layout.tsx` must no longer be publicly served.
