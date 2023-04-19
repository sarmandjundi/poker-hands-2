const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';


test('returns true for a straight flush', () => {
  let hand = new Hand('♥5', '♥6', '♥7', '♥8', '♥9');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});
test('returns false for a non-straight flush hand', () => {
  let hand = new Hand('♦4', '♠5', '♠7', '♦8', '♠2');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

