import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import CurrencyInputForm from "./CurrencyInputForm";

describe('CurrencyInputForm', () => {
  const currency = 'gbp';

  it('Snapshot', () => {
    const component = renderer.create(
      <CurrencyInputForm
        currency={ currency }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given a CurrencyInputForm element, it', () => {
    afterEach(cleanup);

    it('should include a currency label', () => {
      const { getByLabelText } = render(
        <CurrencyInputForm currency={ currency }/>
      );
      const currencyLabel = getByLabelText('GBP');
      expect(currencyLabel).toBeInTheDocument();
    });

    it('should include an input for the currency value to exchange', () => {
      const { getByTestId } = render(
        <CurrencyInputForm currency={ currency }/>
      );
      const currencyInput = getByTestId('currency-input');
      expect(currencyInput).toBeInTheDocument();
    });

    // TODO: Test inout validation as well for
    // contain two inputs on the active exchange screen for both pockets. Each input should be validated to let to type only numbers with two digits after the dot
  });
});