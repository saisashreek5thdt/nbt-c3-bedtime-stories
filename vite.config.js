import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      strategies: "injectManifest",
      includeAssets: [
        "src/assets/images/meta/favicon.ico",
        "src/assets/images/meta/apple-touch-icon.png",
        "src/assets/images/meta/favicon-32x32.png",
        "src/assets/images/meta/favicon-16x16.png",
        "src/assets/images/meta/mask-icon.svg",
      ],
      manifest: {
        name: "National Book Trust, India",
        short_name: "NBT India",
        description: "e-Books",
        theme_color: "#ffffff",
        icons: [
          {
            src: "src/assets/images/meta/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/assets/images/meta/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "src/assets/images/meta/mask-icon.svg",
            sizes: "156x165",
            type: "image/svg",
          },
        ],
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        sourcemap: true,
        globPatterns: ["**/*.{js,css,html}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            handler: "NetworkOnly",
            urlPattern: /\/api\/.*\/*.json/,
            method: "POST",
            options: {
              backgroundSync: {
                name: "myQueueName",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
        ],
      },
      injectManifest: {
        globPatterns: ["**/*.{js,css,html}"],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
