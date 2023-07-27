export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a string');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
