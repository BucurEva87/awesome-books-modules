export default class LS {
  static read(key) {
    const value = localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  static write(key, value) {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
}
