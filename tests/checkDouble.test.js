const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';


test('check that checkDouble returns truthy if doesnt contain double cards', () => {
  let hand1 = new Hand('♠5', '♦5', '♥9', '♣7', '♥3');
  let hand2 = new Hand('♠6', '♦6', '♥6', '♣K', '♥K');
  expect(CompareHands.checkIfNotContainDouble(hand1, hand2)).toBeTruthy();

});

test('check that checkDouble returns falsy if does contain double cards', () => {
  let hand1 = new Hand('♠5', '♦5', '♥9', '♣7', '♥3');
  let hand2 = new Hand('♠6', '♦6', '♥6', '♣K', '♥9');
  expect(CompareHands.checkIfNotContainDouble(hand1, hand2)).toBeFalsy();

});

test('check that checkDouble returns falsy if does contain double cards', () => {
  let hand1 = new Hand('♠5', '♦5', '♥9', '♣7', '♥9');
  expect(CompareHands.checkIfNotContainDouble(hand1)).toBeFalsy();

});
