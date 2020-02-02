import React from "react";
import PropTypes from 'prop-types';
import cssStyles from './CurrencyPocket.module.scss';
import CurrencyInputForm from '../currencyInputForm/CurrencyInputForm';
import AccountBalance from '../accountBalance/AccountBalance';

const CurrencyPocket = ({ currency, currencySymbol, balance, onChangeAmount }) => {
  return(
    <section className={ cssStyles.layout }>
      <CurrencyInputForm
        currency={ currency }
        onChange={ onChangeAmount }
      />
      <AccountBalance
        currencySymbol={ currencySymbol }
        balance = { balance }
      />
    </section>
  );
};

CurrencyPocket.propTypes = {
  currency: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  onChangeAmount: PropTypes.func
};

export default CurrencyPocket;