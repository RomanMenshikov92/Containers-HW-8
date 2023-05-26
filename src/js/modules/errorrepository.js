export default class ErrorRepository {
  // конструктор создаёт Map с кодом ошибки в ключе и её описании в значении
  constructor() {
    this.error = new Map([[1001, 'Ошибка 1001'], [1101, 'Ошибка 1101']]);
  }

  // метод получает значение ошибки по её коду
  translate(code) {
    if (!this.error.has(code)) {
      return 'Unknown error';
    }

    return this.error.get(code);
  }
}
