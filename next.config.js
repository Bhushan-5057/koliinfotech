/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  // Tree-shake Lucide named imports so page entries do not pull the full icon barrel.
  modularizeImports: {
    "lucide-react": {
      // Use the package exports path (./icons/*), not ./dist/esm/icons/*
      transform: "lucide-react/icons/{{kebabCase member}}",
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    domains: [
      "localhost",
      "res.cloudinary.com",
      "api-v1.koliinfotech.com",
      "192.168.1.4",
      "192.168.1.6",
      "192.168.1.17",
      "img.freepik.com",
      "images.unsplash.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "7000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.4",
        port: "7000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.6",
        port: "7000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.17",
        port: "7000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api-v1.koliinfotech.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Pages Router normally allows global CSS only from pages/_app.js.
    // Allow co-located component `.css` imports so extracted styles keep working
    // without converting everything to CSS Modules (which broke class cascade/UI).
    const oneOf = config.module.rules.find((r) => Array.isArray(r.oneOf))?.oneOf;
    if (oneOf) {
      for (let i = oneOf.length - 1; i >= 0; i--) {
        const rule = oneOf[i];
        const use = rule.use;
        if (
          use &&
          typeof use === "object" &&
          !Array.isArray(use) &&
          use.loader === "error-loader" &&
          typeof use.options?.reason === "string" &&
          use.options.reason.includes("Custom <App>")
        ) {
          oneOf.splice(i, 1);
          continue;
        }
        // Broaden the _app-only global CSS rule to any issuer.
        if (
          rule.sideEffects === true &&
          rule.issuer &&
          typeof rule.issuer === "object" &&
          Array.isArray(rule.issuer.and) &&
          rule.issuer.and.length === 1 &&
          rule.issuer.and[0] instanceof RegExp &&
          rule.issuer.and[0].toString().includes("_app")
        ) {
          delete rule.issuer;
        }
      }
    }

    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: "all",
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            framework: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: "framework",
              chunks: "all",
              priority: 40,
              enforce: true,
            },
            mui: {
              test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
              name: "mui-vendor",
              chunks: "async",
              priority: 25,
            },
            icons: {
              test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
              name: "icons-vendor",
              chunks: "async",
              priority: 15,
            },
          },
        },
      };
    }
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Origin-Agent-Cluster", value: "?1" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Content-Security-Policy",
            // No upgrade-insecure-requests: Lighthouse on http://localhost would
            // upgrade asset URLs to https and fail to paint (NO_FCP).
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https: http: ws: wss:",
              "frame-src 'self' https://www.google.com https://maps.google.com https://calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/models/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/og-image.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home-page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/technologies",
        destination: "/Technologies",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

module.exports = nextConfig;
