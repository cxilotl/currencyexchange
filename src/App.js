import React from 'react';
import cssStyles from './App.module.scss';

import CurrencyExchangeWidget from './components/currencyExchange/CurrencyExchangeWidget';

function App() {
  return (
    <div className={ cssStyles.layout }>
      <CurrencyExchangeWidget />
    </div>
  );
}

export default App;