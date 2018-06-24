# Sports Radar - Full Stack Engineer - Candidate Assignment

## To Run Project

- `npm i`
- `npm start`
- test
  - `npm test`

## Language/Build System

- JavaScript / React / Jest

## Goals

- Implement a method to shuffle the deck that does not use native random() function. 

- Get all cards with the same suit from a shuffled deck 

- Order a shuffled deck in the following suit and card number (Diamonds [A-K], Clubs [A-K], Hearts [A-K], Spades [A-K]) 

- Implement your own sort method 

- Write unit tests to for each method

- Load this project up on GitHub and send us the URL to the project 

  

## How will I mimic a deck of cards?

What does a deck of cards have?

- Ranks: 1->10 J Q K A
- Suits: Clubs, Diamonds, Hearts. and Spades
- Color: Black, Red

> Json Array of Objects, 3 keys 

```json
[
    {
        ranks: '', //string
        suits: '', //string
        color: '' //string
    },
    ...
]
```

## Randomize an Array without using random()

- I can possibly use Epoch time to give myself a pseudo random number

### Research

- Fisher-Yates shuffle Algorithm
- https://bost.ocks.org/mike/shuffle/
- https://www.youtube.com/watch?v=tLxBwSL3lPQ
- https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131
- https://diessi.ca/blog/a-bit-on-random-numbers-in-javascript/
- xorshift128+ 
- http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html
- PRNG

## Get all cards of the same suit

- Filter by (insert arr, insert key, insert value)

- Javascript .filter


## Sorting each filtered Arr from A->K?

- Loop through partial deck, 
- if key 'rank' === ace, jack, queen, king assign relevant id
- else assign id as rank
- Run the new array of objects through a sort
- finally, returns X suit(13 cards) in sorted order

## Getting (Diamonds [A-K], Clubs [A-K], Hearts [A-K], Spades [A-K]) 

- Create a new array and concat the 4 processed decks in order

  



