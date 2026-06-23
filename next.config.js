/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push({
      'mapbox-gl': 'mapboxgl',
    });
    return config;
  },
};

module.exports = nextConfig;
