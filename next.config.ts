import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "185.4.180.127",
        port: "", // если порт нестандартный — укажи (например, '8080')
        pathname: "**",
      },
    ],
  },
};
export default nextConfig;
