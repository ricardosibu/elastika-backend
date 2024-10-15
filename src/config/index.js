const config = {
  PORT: process.env.PORT || 5000,
  VERSION: process.env.VERSION || 'v1',
  CODY_AI_API: process.env.CODY_AI_API,
  CODY_API_KEY: process.env.CODY_API_KEY,
  CODY_CONVERSATION_ID: process.env.CODY_CONVERSATION_ID,

  API_ELASTIKA_TEST: process.env.API_ELASTIKA_TEST,
  MONGO_URL: process.env.MONGO_URL
};

module.exports = { ...config };
