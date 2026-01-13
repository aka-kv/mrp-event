import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'rewrite-summit-route',
          configureServer(server) {
            server.middlewares.use((req, res, next) => {
              if (req.url === '/summit' || req.url === '/summit/') {
                req.url = '/summit.html';
              }
              if (req.url === '/immigrant-summit' || req.url === '/immigrant-summit/') {
                req.url = '/immigrant-summit.html';
              }
              if (req.url === '/all-events' || req.url === '/all-events/') {
                req.url = '/all-events.html';
              }
              next();
            });
          },
        },
      ],
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            summit: path.resolve(__dirname, 'summit.html'),
            immigrantSummit: path.resolve(__dirname, 'immigrant-summit.html'),
            allEvents: path.resolve(__dirname, 'all-events.html'),
          },
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
