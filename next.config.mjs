/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations ...
  async rewrites() {
    return [
      {
        source: "/api/geojs/:path*",
        destination: "https://get.geojs.io/v1/ip/geo/:path*",
      },
    ]
  },
}

export default nextConfig
