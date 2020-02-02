import React from 'react';
import renderer from 'react-test-renderer';
import ExchangeRateDropdown from '../exchangheRateDropdown/ExchangeRateDropdown';

describe('ExchangeRateDropdown', () => {
  const exchangeRates = [
    `£1 = €1.3444`,
    `€1 = £0.7438`
  ];
  it('Snapshot', () => {
    const component = renderer.create(
      <ExchangeRateDropdown rates={ exchangeRates }/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});