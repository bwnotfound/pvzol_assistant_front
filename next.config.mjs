/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        server: {
            host: "localhost:8080",
            protocol: "http",
        }
    },
};
export default nextConfig;
