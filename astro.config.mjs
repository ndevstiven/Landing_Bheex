// @ts-check
import { defineConfig } from 'astro/config';

// Static output for AWS Amplify Hosting (CDN-backed).
// Chat endpoint replaced by client-side rule-based fallback (no API key yet).
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
