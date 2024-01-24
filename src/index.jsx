import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';

require('dayjs/locale/ru');

dayjs.locale('ru');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    theme={{
      components: {},
      token: {
        // Seed Token
        colorPrimary: '#696ce7',

        // Alias Token
      },
    }}>
    <App />
  </ConfigProvider>,
);
