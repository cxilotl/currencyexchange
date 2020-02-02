import amountValidator from './amountValidation'

describe('Given a specific amount, the validator', () => {

  it('should validate an integer', () => {
    expect(amountValidator.validate(25)).toBeTruthy();
  });

  it('should validate an number with 1 decimals', () => {
    expect(amountValidator.validate(25.5)).toBeTruthy();
  });

  it('should validate an number with 2 decimals', () => {
    expect(amountValidator.validate(25.55)).toBeTruthy();
  });

  it('should invalidate an number with 3 decimals', () => {
    expect(amountValidator.validate(25.555)).toBeFalsy();
  });

  it('should invalidate an number with 4 decimals', () => {
    expect(amountValidator.validate(25.5556)).toBeFalsy();
  });

  it('should invalidate a number passed as string', () => {
    expect(amountValidator.validate('25.56')).toBeFalsy();
  });

  it('should invalidate any text', () => {
    expect(amountValidator.validate('something')).toBeFalsy();
  });

  it('should invalidate any boolean', () => {
    expect(amountValidator.validate(true)).toBeFalsy();
  });

});