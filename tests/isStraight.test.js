const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that isStraight returns falsy if not straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦5');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that isStraight returns 0 if not straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦5');
  expect(CompareHands.isStraight(hand)).toEqual(0);
});