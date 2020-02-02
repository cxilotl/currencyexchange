import React from 'react';
import cssStyles from './CurrencyExchangeWidget.module.scss';
import ExchangeRateDropdown from '../exchangheRateDropdown/ExchangeRateDropdown';
import CurrencyPocket from '../currencyPocket/CurrencyPocket';

const CurrencyExchangeWidget = () => {
  const currency = 'gbp';
  const symbol = '£';
  const balance = 58.33;
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
          currency={ currency }
          currencySymbol={ symbol }
          balance={ balance }
          onChangeAmount={ onInput }
        />
      </section>
      <section className={ cssStyles.bottom }>
        <CurrencyPocket
          currency={ currency }
          currencySymbol={ symbol }
          balance={ balance }
          onChangeAmount={ onInput }
        />
      </section>
    </div>
  );
};

export default CurrencyExchangeWidget;

