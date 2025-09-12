// next.config.js
const nextConfig = {
  output: 'export', // habilita el comando next export
  images: {
    unoptimized: true, // necesario si usás next/image en un proyecto exportado
  },
};

module.exports = nextConfig;
