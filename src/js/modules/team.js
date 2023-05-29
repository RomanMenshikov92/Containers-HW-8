export default class Team {
  // конструктор создаёт пустой Set для персонажей
  constructor() {
    this.members = new Set();
  }

  // добавить персонажа в Set
  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      // eslint-disable-next-line no-console
      console.log('Персонаж есть!');
    }
  }

  // добавить сразу несколько персонажей в Set
  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  // конвертировать Set в Array
  toArray() {
    this.membersArr = [];
    this.members.forEach((character) => this.membersArr.push(character));
  }
}
