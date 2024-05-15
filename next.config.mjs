/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io", protocol: "https" }],
  },
  output: "standalone",
};

export default nextConfig;
