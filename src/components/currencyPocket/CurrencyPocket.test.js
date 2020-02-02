import React from 'react';
import renderer from 'react-test-renderer';
import CurrencyPocket from "./CurrencyPocket";

describe('CurrencyPocket', () => {
  const currency = 'gbp';
  const symbol = '£';
  const balance = 58.33;
  const onInput = jest.fn();

  it('Snapshot', () => {
    const component = renderer.create(
      <CurrencyPocket
        currency={ currency }
        currencySymbol={ symbol }
        balance={ balance }
        onChangeAmount={ onInput }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});