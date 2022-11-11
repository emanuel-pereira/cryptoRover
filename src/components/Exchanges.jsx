import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { usePostCryptoExchangesQuery } from '../services/cryptoExchangesApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;


const Exchanges = () => {
  const { data, isFetching } = usePostCryptoExchangesQuery();
  
  console.log(data);
  const exchangesList = data;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Visitors</Col>
       
      </Row>
      <Row>
        {exchangesList.map((exchange, i) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.code}
                showArrow={false}
                header={(
                  <Row key={exchange.name}>
                    <Col span={6}>
                      <Text><strong>{i + 1} </strong></Text>
                      <Avatar className="exchange-image" src={exchange.png64} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.markets)}</Col>
                    <Col span={6}>{millify(exchange.visitors)}</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || 'No description available for now...')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;

