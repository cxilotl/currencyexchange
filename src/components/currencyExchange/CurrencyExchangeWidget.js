import React from 'react';
import cssStyles from './CurrencyExchangeWidget.module.scss';
import ExchangeRateDropdown from '../exchangheRateDropdown/ExchangeRateDropdown';
import CurrencyPocket from '../currencyPocket/CurrencyPocket';

const CurrencyExchangeWidget = () => {
  const accounts = [
    {
      currency: 'gbp',
      symbol: '£',
      balance: 58.33
    },
    {
      currency: 'eur',
      symbol: '€',
      balance: 116.12
    },
    {
      currency: 'usd',
      symbol: '$',
      balance: 45.5
    }
  ];
  const onInput = (value) => {
    console.log(value);
  };
  const exchangeRates = [
    `£1 = €1.3444`,
    `€1 = £0.7438`
  ];
  return(
    <div className={ cssStyles.widget }>
      <div className={ cssStyles.dropdown }>
        <ExchangeRateDropdown rates={ exchangeRates } />
      </div>
      <section className={ cssStyles.top }>
        <CurrencyPocket
          currency={ accounts[0].currency }
          currencySymbol={ accounts[0].symbol }
          balance={ accounts[0].balance }
          onChangeAmount={ onInput }
        />
      </section>
      <section className={ cssStyles.bottom }>
        <CurrencyPocket
          currency={ accounts[1].currency }
          currencySymbol={ accounts[1].symbol }
          balance={ accounts[1].balance }
          onChangeAmount={ onInput }
        />
      </section>
    </div>
  );
};

export default CurrencyExchangeWidget;

