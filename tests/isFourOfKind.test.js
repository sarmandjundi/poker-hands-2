const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';
const ranks = '23456789TJQKA';

test('check that isFourOfKind returns truthy if is four of kind', () => {
  let preRank;
  for (rank of ranks) {
    let hand = new Hand('♣' + rank, '♦' + rank, '♥' + rank, '♠' + rank, '♣' + (preRank ? preRank : "A"));
    preRank = rank;
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
  }
});

test('check that isFourOfKind returns falsey if not is four of kind', () => {
  let hand = new Hand('♣4', '♣5', '♥5', '♣5', '♣7');
  let result = CompareHands.isFourOfAKind(hand);
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();

});

test('check that isFourOfAKind returns a highest score for the strongest hand', () => {
  let hand1 = new Hand('♣5', '♣5', '♥5', '♣5', '♣7');
  let hand2 = new Hand('♣8', '♣8', '♥8', '♣8', '♣4');
});
