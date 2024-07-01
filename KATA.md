# Tennis

## About this Kata

This Kata is about implementing a simplified version of a tennis game. 

The scoring system is as follows:

1. Each player can have either of these points in one game “love (L)” “15” “30” “40”
2. If you have 40 and you win the point you win the game, however there are special rules.
3. If both have 40 the players are “deuce”.
4. If the game is in deuce, the winner of a point will have advantage
5. If the player with advantage wins another point, they win the game
6. If the player without advantage wins, they are back at deuce.

A game is described by an array of 1s and 2s where 1 indicates that player 1 scored a point, and 2 indicates that player 2 scored a point.

So for example, the following array describes a game where player 1 wins:

[1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1]

The scorecard for that game looked like this:

A | B
-----
L | L
15| L 
15| 15
15| 30
15| 40
30| 40
40| 40
40| A
40| 40
A | 40
W | 40

Build a system that can consume a game array and return a scorecard.