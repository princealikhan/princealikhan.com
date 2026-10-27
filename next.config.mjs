/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // plain static folder in out/, deployable anywhere
  images: { unoptimized: true },
};

export default nextConfig;
