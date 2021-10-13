import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import StoreConfig from './config/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={StoreConfig.store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
