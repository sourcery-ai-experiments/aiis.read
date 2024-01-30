import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

import Wallet from './Wallet';
import Welcome from './Welcome';

import '../tailwind.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#9A6CF9',
            fontSize: 16,
            colorTextBase: '#0F1419',
          },
          components: {
            Input: {
              controlHeight: 56,
            },
            Button: {
              colorBorder: '#0F1419',
            },
          },
        }}
      >
        {/* <Welcome /> */}
        <Wallet />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
);
