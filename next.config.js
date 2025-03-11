/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    redirects: async () => {
      return [
        {
          source: "/admin",
          destination: "https://opgbiskupovic.prismic.io/",
          permanent: true,
        },
      ];
    },
  };
};

module.exports = nextConfig;
