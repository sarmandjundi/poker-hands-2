const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';



test('check that isHighestCard returns correct point value for a highest card hand', () => {
  let hand = ['♥A', '♦K', '♣Q', '♠J', '♣10'];
  let result = CompareHands.isHighestCard(hand);
  let expected = 1400 + 1300 + 1200 + 1100 + 1000;
  expect(result).toBe(expected);
});

test('check that isHighestCard returns 0 for an empty hand', () => {
  let hand = [];
  let result = CompareHands.isHighestCard(hand);
  let expected = 0;
  expect(result).toBe(expected);
});

