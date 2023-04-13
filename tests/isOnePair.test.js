const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';


test('check that isOnePair returns correct point value for a one pair hand', () => {
  let hand = ['♥9', '♦9', '♣7', '♠5', '♣6'];
  let result = CompareHands.isOnePair(hand);
  let expected = 900 + 700 + 500 + 400;
  expect(result).toBe(expected);
});

test('check that isOnePair returns 0 for a non-one pair hand', () => {
  let hand = ['♥9', '♦8', '♣7', '♠6', '♣5'];
  let result = CompareHands.isOnePair(hand);
  let expected = 0;
  expect(result).toBe(expected);
});

