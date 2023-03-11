/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        // Apply this CSP to all pages and assets
        source: "/api/(.*)",
        headers: [
          {
            
            key: "Content-Security-Policy",
            value: "default-src 'self' 'strict-origin-when-cross-origin'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; block-all-mixed-content; upgrade-insecure-requests; disown-opener; reflected-xss block; object-src 'none';",
          },
        ],
      },
    ];
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true 
    return config;
  },
};
