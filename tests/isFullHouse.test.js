const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';


test('check that isFourOfKind returns truthy if flush', () => {
  for (let suit of suits) {
    let hand = new Hand('♠6', '♦6', '♥6', '♣K', '♥K');
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
  }
});

test('check that isFourOfKind returns falsey if not flush', () => {
  let hand = new Hand('♣6', '♣6', '♥6', '♣k', '♣Q');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});