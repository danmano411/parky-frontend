/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/parky-frontend',
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
