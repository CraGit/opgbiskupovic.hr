/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    redirects: async () => {
      return [
        {
          source: "/admin",
          destination: "https://opgbiskupovichr.prismic.io/",
          permanent: true,
        },
        {
          source: "/cjenici",
          destination: "https://cjenici.parra.hr/jwmo/opg-biskupovic-marta",
          statusCode: 301,
        },
        {
          source: "/:lang/cjenici",
          destination: "https://cjenici.parra.hr/jwmo/opg-biskupovic-marta",
          statusCode: 301,
        },
      ];
    },
  };
};

module.exports = nextConfig;
