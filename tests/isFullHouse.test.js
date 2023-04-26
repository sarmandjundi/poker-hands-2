const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';


test('check that isFullHouse returns truthy is full house', () => {
  let hand = new Hand('♠6', '♦6', '♥6', '♣K', '♥K');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();

});

test('check that isFullHouse returns falsey if not full house', () => {
  let hand = new Hand('♣6', '♣6', '♥6', '♣K', '♣Q');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('check that isFullHouse returns 0 if not full of house', () => {
  let hand = new Hand('♣6', '♣6', '♥6', '♣K', '♣Q');
  expect(CompareHands.isFullHouse(hand)).toBe(0);
});