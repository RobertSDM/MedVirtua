/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.cnnbrasil.com.br", "i.blogs.es"],
        formats: ["image/avif", "image/webp"],
    },
    reactStrictMode: false,
};

module.exports = nextConfig;
