export default class CPS {
  constructor(text = '') {
    this.csp = this.parse(text);
  }

  parse(text = '') {
    return text.split(';').reduce((result, item) => {
      const arr = item.split(' ').filter(key => key.trim());
      const key = arr[0];
      const value = arr.slice(1);
      result[key] = value;
      return result;
    }, {});
  }

  generate() {
    return Object.keys(this.csp)
      .reduce((result, item) => {
        return `${result} ${item} ${this.csp[item].join(' ')};`;
      }, '')
      .trim();
  }

  append(key, value) {
    if (this.csp[key]) {
      this.csp[key].push(value);
    } else {
      this.csp[key] = [value];
    }
    return this;
  }

  delete(key, value) {
    if (value) {
      const index = (this.csp[key] || []).indexOf(value);
      if (index > -1) {
        this.csp[key].splice(index, 1);
      }
    } else {
      delete this.csp[key];
    }
    return this;
  }

  get(key) {
    return this.csp[key];
  }
}
