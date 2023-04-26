const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isThreeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('Test that isThreeOfAKind returns falsy if not three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠8');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that isThreeOfAKind returns 0 if not three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♥3', '♦8');
  expect(CompareHands.isThreeOfAKind(hand)).toBe(0);
});