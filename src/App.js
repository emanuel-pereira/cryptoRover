import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';

import icon from './images/cryptoRoverLogo.png';

const App = () => {
  return (
    <div className='app'>
      <Layout>
        <div className='navbar'>
          <Navbar></Navbar>
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route
                  exact
                  path='/cryptocurrencies'
                  element={<Cryptocurrencies />}
                />
                <Route
                  exact
                  path='/crypto/:coinId'
                  element={<CryptoDetails />}
                />
                <Route exact path='/news' element={<News />} />
              </Routes>
            </div>
            <div className='footer'>
              <img
                src={icon}
                alt='news'
                style={{ width: '100px' }}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
              <Typography.Title
                level={5}
                style={{ color: '#77D4FC', textAlign: 'center' }}
              >
                All rigths reserved
              </Typography.Title>
              <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
              </Space>
            </div>
          </Layout>
        </div>
      </Layout>
    </div>
  );
};

export default App;
