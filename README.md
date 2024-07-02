# Roman Numerals Ping Pong Workshop
Welcome to the Roman Numerals ping pong workshop!

The goal is to tackle a version of the Roman Numerals coding kata: (description in KATA.md)

We will be doing it using a pairing technique called Ping Pong.

## err... Kata?
A kata is a small coding exercise that is done to enhance and refine fundamental programming skills. The word comes from karate. Katas are basic motions that you practice like punching and shifting your weight around (... I think). And we programmers stole the word and now it's ours :)

## Ok... And did you say Ping Pong?
Ping Pong pairing is a style of pairing that really lends itself to problems like this. It keeps both parties very active and things switch up regularly. Doing it actually feels a bit like a game. It goes like this. 

### The flow of ping pong pairing
We have two programmers, Alice and Bob. They're going to take turns writing tests and implementing the solution.

1. Alice writes a unit test e.g. "should convert 1 to I".
2. Alice runs the tests to make sure that it fails. Otherwise, there's nothing to implement and she needs to think of a test that will fail.
3. After seeing the test fail, Alice hands over control to Bob.
4. Bob implements the simplest possible solution that makes the test pass, running them to confirm. Then, it's Bob's turn to write a test.
5. Bob writes a unit test e.g. "should convert 2 to II".
6. Bob then runs the tests to make sure that the new one fails
7. Bob hands control back over to Alice.
8. Alice will implement the simplest solution she can see that just makes the test pass.
9. Go back to 1 and repeat until the full functionality of the Kata is completed.

## Pro Tips
### Don't check out when the other person is writing
Just because you are not the one with hands on the keyboard, does not mean you are not doing anything. You should be observing the implementation the other person is writing and suggesting changes or solutions where relevant. Give them space to breathe though. Two very good questions to practice asking are: "Do you want my input or do you want a minute to think about things?" and "Are you sure we need this just to make this test pass?"

### Don't implement more than you need to
You need to be strict about "only implement enough to make the test pass". Otherwise, you're missing the point of the exercise. It's all about exploring how tests guide you through the implementation. Tests should be small and should be chosen to always carry you towards the next step of the implementation.

### Keep the flow going
Each person should only be implementing for a couple of minutes at a time. If you find yourself going for more than 5 minutes, take a step back and consider if there was a different test that you could have written that would have let you implement a smaller chunk of functionality. If you are the one implementing a solution and taking a long time, you need to be prepared for your pairing partner to say "hey, you've had the keyboard for a long time. I think we need to try a different test"

### VSCode Live Share
A really great tool for this kind of exercise is the VSCode extension "Live Share" (extension id: ms-vsliveshare.vsliveshare). This will let you share a session between computers so you can both type together without the blurry awkwardness of google meet. If you don't want to do that, you should commit and push the change so the other person can pull it down and implement it.

### Refactoring is where the magic happens
The flow is Red -> Green -> Refactor. Write test, it goes red. Write implementation, it goes green. Refactoring is a key part of the process and it's always an optional step, but only when the tests are green. Refactoring should never change the functionality, so the tests staying green are your proof positive that the refactor has been successful.

### Use git as a tool
Commit often. If you mess up, `git reset --hard` can save your butt.

### If you want to spice things up
If you want an extra challenge, you can do what I call "malicious compliance ping pong" where you do everything you can to make the test pass, but not actually implement the right solution. This is very fun and a very illustrative exercise for the ways in which your tests can give false positives. You will never write more rock-solid tests than you will in an exercise like this.