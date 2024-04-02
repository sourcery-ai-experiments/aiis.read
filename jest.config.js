module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    'lodash-es': 'lodash',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [1343],
      },
      astTransformers: {
        before: [
          {
            path: 'node_modules/ts-jest-mock-import-meta', // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
            options: {
              metaObjectReplacement: {
                env: {
                  VITE_SOCKET_BASE_URL: 'wss://dev-chat-xfans-api.buidlerdao.xyz',
                  VITE_ROOM_BASE_URL: 'https://dev-chat-xfans-api.buidlerdao.xyz',
                  VITE_CONTRACT_BASE_URL: 'https://test-mpc-xfans-api.buidlerdao.xyz',
                  VITE_BASE_URL: 'https://test-xfans-api.d.buidlerdao.xyz',
                },
              },
            },
          },
        ],
      },
    },
  },
};
