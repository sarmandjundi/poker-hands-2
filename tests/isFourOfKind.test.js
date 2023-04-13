const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isFourOfKind returns truthy if is four of kind', () => {
  for (let suit of suits) {
    let hand = new Hand('♣5', '♦5', '♥5', '♠5', '♣7');
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
  }
});

test('check that isFourOfKind returns falsey if not is four of kind', () => {
  let hand = new Hand('♣5', '♣5', '♥5', '♣5', '♣7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});