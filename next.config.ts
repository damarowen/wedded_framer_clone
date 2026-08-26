import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/wedded_framer_clone",
    images: {
        unoptimized: true, // Diperlukan jika menggunakan tag <Image> Next.js
    },
};

export default nextConfig;