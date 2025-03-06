/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you're deploying to a custom domain or GitHub user/organization site (username.github.io),
  // you can remove the basePath and assetPrefix.
  // If you're deploying to a GitHub project site (username.github.io/repo-name),
  // uncomment and update the following lines:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
}

module.exports = nextConfig

