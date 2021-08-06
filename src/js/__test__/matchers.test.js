/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import heroHealth from '../healths';

test('return correctly value 1', () => {
  const heroes = heroHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }, 
  ]);
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(heroes).toEqual(result);
});
test('return correctly value 2', () => {
  const heroes = heroHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }, 
  ]);
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(heroes).not.toBe(result);
});
