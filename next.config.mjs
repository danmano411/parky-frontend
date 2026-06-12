/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/parky-frontend',
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/parky-frontend' : '',
    },
};

export default nextConfig;
