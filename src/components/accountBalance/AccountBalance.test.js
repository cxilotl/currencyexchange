import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import AccountBalance from './AccountBalance';

describe('AccountBalance', () => {
  const currencySymbol = '£';
  const balance = 53.5;

  it('Snapshot', () => {
    const component = renderer.create(
      <AccountBalance
        currencySymbol={ currencySymbol }
        balance={ balance }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given a AccountBalance element, it', () => {
    afterEach(cleanup);

    it('should render a balance with 2 decimals', () => {
      const { getByTestId } = render(
        <AccountBalance
          currencySymbol={ currencySymbol }
          balance={ balance }
        />
      );
      const accountBalance = getByTestId('account-balance');
      expect(accountBalance.innerHTML).toEqual('£53.50');
    });
  });
});