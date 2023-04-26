const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';



test('Test that TwoPair returns truthy if Two pairs', () => {
  let hand = new Hand('♥2', '♦2', '♣9', '♠3', '♠3');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Test that TwoPair returns falsy if not Two pairs', () => {
  let hand = new Hand('♥A', '♦K', '♣Q', '♠J', '♠10');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns 0 if not two pair', () => {
  let hand = new Hand('♥A', '♦K', '♣Q', '♠J', '♠10');
  expect(CompareHands.isTwoPair(hand)).toBe(0);
});
