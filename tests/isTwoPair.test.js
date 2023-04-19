const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isTwoPair returns correct point value for a two pair hand', () => {

  let hand = new Hand('♥9', '♦9', '♣7', '♠7', '♣5');
  let hand2 = new Hand('♥Q', '♦Q', '♣7', '♠5', '♣6')
  let scoreHand1 = CompareHands.isTwoPair(hand1);
  let scoreHand2 = CompareHands.isTwoPair(hand2)
  expect(scoreHand2).toBeGreaterThan(scoreHand1);
});


test('check that isTwoPair returns 0 for a non-one pair hand', () => {
  let hand = new Hand('♥5', '♦6', '♣7', '♠6', '♣5');
  let result = CompareHands.isTwoPair(hand);
  let expected = 0;
  expect(result).toBe(expected);
});
