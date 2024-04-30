// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  }
});

// Vitestの設定を統合
export const testConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // 他に必要なテスト設定を追加
  }
});
