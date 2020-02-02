import React from "react";
import PropTypes from 'prop-types';
import cssStyles from "./CurrencyInputForm.module.scss";
import amountValidator from './amountValidation';

const CurrencyInputForm = ({ currency, onChange }) => {
  const onInput = (e) => {
    const amount = parseFloat(e.currentTarget.value);
    if (amountValidator.validate(amount)) {
      onChange( e.currentTarget.value );
    } else {
      e.preventDefault();
    }
  };
  return(
    <form className={ cssStyles.form }>
      <label htmlFor="currentCurrency" className={ cssStyles.label }>
        { currency.toUpperCase() }
        <input
          id="currentCurrency"
          data-testid="currency-input"
          name="currentCurrency"
          className={ cssStyles.input }
          type="number"
          onChange={ onInput }
          placeholder="0.00"
          pattern="/^-?[0-9]+(\.[0-9][0-9]?)?$/g"
        />
      </label>
    </form>
  );
};

CurrencyInputForm.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default CurrencyInputForm;