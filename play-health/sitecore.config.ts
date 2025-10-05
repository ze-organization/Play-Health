const config = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Play-Health',
  api: {
    edge: {
      contextId: undefined, // Use Edge delivery if available
    },
    local: {
      apiHost: process.env.NEXT_PUBLIC_SITECORE_API_HOST,
      apiKey: process.env.SITECORE_API_KEY,
    },
  },
  language: 'en',
};

export default config;
