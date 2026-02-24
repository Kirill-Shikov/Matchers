import { sortHeroesByHealth } from './sortHeroesByHealth';

describe('sortHeroesByHealth', () => {
  test('сортирует героев по убыванию здоровья', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('работает с пустым массивом', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('не мутирует исходный массив', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];
    const originalHeroes = JSON.parse(JSON.stringify(heroes)); // глубокая копия

    sortHeroesByHealth(heroes);

    expect(heroes).toEqual(originalHeroes);
  });

  test('сортирует при одинаковом здоровье', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ];

    const expected = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('обрабатывает одного героя', () => {
    const heroes = [{ name: 'одинокий герой', health: 75 }];
    const expected = [{ name: 'одинокий герой', health: 75 }];

    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('toBe не работает для сравнения объектов, а toEqual работает', () => {
    const heroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const result = sortHeroesByHealth(heroes);

    // toBe не сработает — сравнивает ссылки
    expect(result).not.toBe(heroes);

    // toEqual сработает — выполняет глубокое сравнение
    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });
});