import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from './ExchangeRateDropdown.module.scss';

const ExchangeRateDropdown = ({ rates }) => {
  const id = `exchange-rate`;
  return(
    <div className={ cssStyles.wrapper }>
      <select
        id={ id }
        data-testid={ id }
        className={ cssStyles.select }
      >
        {
          rates.map((item) => (
              <option key={ item } value={ item } className={ cssStyles.option }>
                { item }
              </option>
          ))
        }
      </select>
    </div>
  );
};

ExchangeRateDropdown.propTypes = {
  rates: PropTypes.array
};

export default ExchangeRateDropdown;