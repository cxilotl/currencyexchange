import React from "react";
import PropTypes from 'prop-types';
import cssStyles from './AccountBalance.module.scss';

const AccountBalance = ({ currencySymbol, balance}) => {
  return(
    <div className={ cssStyles.layout }>
      <p className={ cssStyles.text }>You have <span data-testid="account-balance">{ currencySymbol }{ balance.toFixed(2) }</span></p>
    </div>
  );
};

AccountBalance.propTypes = {
  currencySymbol: PropTypes.string,
  balance: PropTypes.number
};

export default AccountBalance;