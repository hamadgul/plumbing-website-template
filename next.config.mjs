/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder images are pulled from Unsplash for the demo.
    // Replace these with the client's own photos in /public/images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
