export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.custom = new Map();
  }

  set settings(values) {
    this.custom.set(...values);
  }

  get settings() {
    const result = new Map(this.default);

    this.custom.forEach((value, key) => result.set(key, value));

    return result;
  }
}
