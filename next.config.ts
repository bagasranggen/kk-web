import type { NextConfig } from 'next';

const REMOTE_HOSTNAMES = process.env.NEXT_PUBLIC_NEXT_IMAGE_REMOTE_HOSTNAME
    ? process.env.NEXT_PUBLIC_NEXT_IMAGE_REMOTE_HOSTNAME.split(',')
    : [];

const ALLOWED_DEV_ORIGIN = process.env.ALLOWED_DEV_ORIGIN ? process.env.ALLOWED_DEV_ORIGIN.split(',') : [];

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ALLOWED_DEV_ORIGIN,
    images: {
        remotePatterns: REMOTE_HOSTNAMES.map((item: string) => ({ hostname: item })),
        localPatterns: [{ pathname: '/api/media/*' }],
    },
};

export default nextConfig;
