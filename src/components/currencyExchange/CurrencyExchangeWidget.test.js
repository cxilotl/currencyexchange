import React from 'react';
import renderer from 'react-test-renderer';
import CurrencyExchangeWidget from "./CurrencyExchangeWidget";

describe('CurrencyExchangeWidget', () => {

  it('Snapshot', () => {
    const component = renderer.create(
      <CurrencyExchangeWidget/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});