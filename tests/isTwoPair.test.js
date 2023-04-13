const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isTwoPair returns correct point value for a two pair hand', () => {

  let hand = ['♥9', '♦9', '♣7', '♠7', '♣5'];
  let result = CompareHands.isTwoPair(hand);
  let expected = 900 + 700 + 500;
  expect(result).toBe(expected);
});

test('check that isTwoPair returns 0 for a non-two pair hand', () => {
  let hand = ['♥9', '♦8', '♣7', '♠5', '♣6'];
  let result = CompareHands.isTwoPair(hand);
  let expected = 0;
  expect(result).toBe(expected);
});