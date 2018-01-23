import React, { Component } from 'react';
import './styles.css';

// libraries
import { Card } from 'reactstrap';
import TradingViewWidget from 'react-tradingview-widget';

const Chart = ({selectedCrypto}) => (
  <Card id="chart">
    <TradingViewWidget
      symbol={"BINANCE:" + selectedCrypto.symbol}
      autosize
    />
  </Card>
);

export default Chart;
