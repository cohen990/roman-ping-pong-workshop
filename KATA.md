# Tennis

## About this Kata

This Kata is about implementing a simplified version of a tennis game. 

The scoring system is as follows:

1. Each player can have either of these points in one game “love” “15” “30” “40”
2. If you have 40 and you win the point you win the game, however there are special rules.
3. If both have 40 the players are “deuce”.
4. If the game is in deuce, the winner of a point will have advantage
5. If the player with advantage wins the ball he wins the game
6. If the player without advantage wins they are back at deuce.

So for example, for two players, Alice and Bob, a game might look like this
A | B
-----
0 | 0
15| 0
15| 15
15| 30
15| 40
30| 40
30| W

Build a system that can track the scores and report when a player has won.

[full description here](https://codingdojo.org/kata/Tennis/)