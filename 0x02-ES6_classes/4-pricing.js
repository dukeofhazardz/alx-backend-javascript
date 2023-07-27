import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
    if (typeof currency === 'object') {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an object');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency === 'object') {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a object');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (amount === 'number' && conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and Conversion Rate must be a number');
  }
}
