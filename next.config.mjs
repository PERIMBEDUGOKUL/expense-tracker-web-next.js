/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


module.exports = {
    env: {
        GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    },
};