const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isFourOfKind returns truthy if is four of kind', () => {
  let hand = new Hand('♣5', '♦5', '♥5', '♠5', '♣7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();

});

test('check that isFourOfKind returns falsey if not is four of kind', () => {
  let hand = new Hand('♣4', '♣5', '♥5', '♣5', '♣7');
  let result = CompareHands.isFourOfAKind(hand);
  let expected = 0;
  expect(result).toBe(expected);
});

test('check that isFourOfAKind returns 0 for an empty hand', () => {
  let hand = new Hand();
  let result = CompareHands.isFourOfAKind(hand);
  let expected = 0;
  expect(result).toBe(expected);
});