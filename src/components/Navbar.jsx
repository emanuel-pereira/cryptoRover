import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptoRoverLogo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    screenSize < 768 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className='navContainer'>
      <div className='logo-container'>
        <Typography.Title level={2} className='logo'>
          <Link to='/'>
            <img
              src={icon}
              alt='news'
              style={{ width: '400px' }}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
          </Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <div>
          <Menu theme='light' mode='horizontal'>
            <Menu.Item icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to='/news'>News</Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  );
};
export default Navbar;
