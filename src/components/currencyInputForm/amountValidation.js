const validator = {
  validate: (amount) => {
    let isValid = false;
    if (typeof amount === 'number') {
      // const expression = /^[0-9]+(\.[0-9][0-9]?)?$/g;
      const expression = /^\d+(\.\d\d?)?$/g;
      const regexp = new RegExp(expression);
      isValid = regexp.test(amount);
    }
    return isValid;
  }
};

export default validator;