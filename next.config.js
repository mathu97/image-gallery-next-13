module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "standalone",
    async headers() {
      return [
        {
          source:
            "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
          headers: [
            {
              key: "Cache-Control",
              value: "no-store",
            },
            {
              key: "MATHUSAN_HEADER",
              value: "YES",
            },
          ],
        },
      ];
    },
  };
  return nextConfig;
};

// module.exports = {
//   output: "standalone",
//   async headers() {
//     return [
//       {
//         source:
//           "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "no-store",
//           },
//           {
//             key: "MATHUSAN_HEADER",
//             value: "YES",
//           },
//         ],
//       },
//     ];
//   },
// };
