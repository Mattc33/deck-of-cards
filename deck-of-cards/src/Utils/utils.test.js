import _utils from './utils'

const deck = [
    { "rank": "ace", "suit": "clubs", "color": "black" },
    { "rank": "2", "suit": "clubs", "color": "black" },
    { "rank": "3", "suit": "clubs", "color": "black" },
    { "rank": "4", "suit": "clubs", "color": "black" },
    { "rank": "5", "suit": "clubs", "color": "black" },
    { "rank": "6", "suit": "clubs", "color": "black" },
    { "rank": "7", "suit": "clubs", "color": "black" },
    { "rank": "8", "suit": "clubs", "color": "black" },
    { "rank": "9", "suit": "clubs", "color": "black" },
    { "rank": "10", "suit": "clubs", "color": "black" },
    { "rank": "jack", "suit": "clubs", "color": "black" },
    { "rank": "queen", "suit": "clubs", "color": "black" },
    { "rank": "king", "suit": "clubs", "color": "black" },
    { "rank": "ace", "suit": "diamonds", "color": "red" },
    { "rank": "2", "suit": "diamonds", "color": "red" },
    { "rank": "3", "suit": "diamonds", "color": "red" },
    { "rank": "4", "suit": "diamonds", "color": "red" },
    { "rank": "5", "suit": "diamonds", "color": "red" },
    { "rank": "6", "suit": "diamonds", "color": "red" },
    { "rank": "7", "suit": "diamonds", "color": "red" },
    { "rank": "8", "suit": "diamonds", "color": "red" },
    { "rank": "9", "suit": "diamonds", "color": "red" },
    { "rank": "10", "suit": "diamonds", "color": "red" },
    { "rank": "jack", "suit": "diamonds", "color": "red" },
    { "rank": "queen", "suit": "diamonds", "color": "red" },
    { "rank": "king", "suit": "diamonds", "color": "red" },
    { "rank": "ace", "suit": "hearts", "color": "red" },
    { "rank": "2", "suit": "hearts", "color": "red" },
    { "rank": "3", "suit": "hearts", "color": "red" },
    { "rank": "4", "suit": "hearts", "color": "red" },
    { "rank": "5", "suit": "hearts", "color": "red" },
    { "rank": "6", "suit": "hearts", "color": "red" },
    { "rank": "7", "suit": "hearts", "color": "red" },
    { "rank": "8", "suit": "hearts", "color": "red" },
    { "rank": "9", "suit": "hearts", "color": "red" },
    { "rank": "10", "suit": "hearts", "color": "red" },
    { "rank": "jack", "suit": "hearts", "color": "red" },
    { "rank": "queen", "suit": "hearts", "color": "red" },
    { "rank": "king", "suit": "hearts", "color": "red" },
    { "rank": "ace", "suit": "spades", "color": "black" },
    { "rank": "2", "suit": "spades", "color": "black" },
    { "rank": "3", "suit": "spades", "color": "black" },
    { "rank": "4", "suit": "spades", "color": "black" },
    { "rank": "5", "suit": "spades", "color": "black" },
    { "rank": "6", "suit": "spades", "color": "black" },
    { "rank": "7", "suit": "spades", "color": "black" },
    { "rank": "8", "suit": "spades", "color": "black" },
    { "rank": "9", "suit": "spades", "color": "black" },
    { "rank": "10", "suit": "spades", "color": "black" },
    { "rank": "jack", "suit": "spades", "color": "black" },
    { "rank": "queen", "suit": "spades", "color": "black" },
    { "rank": "king", "suit": "spades", "color": "black" }
]

// ? Shuffle
test('Should be an Array of Objects', () => {
    expect(_utils.shuffle(deck)).toBeTruthy();
    expect( typeof(_utils.shuffle(deck))).toBe('object');
});

test('Deck Should have 52 cards', () => {
    expect(_utils.shuffle(deck).length).toEqual(52);
});

test('Checks for keys in ea obj of deck', () => {
    const shuffledDeck = _utils.shuffle(deck);
    for( let i = 0; i < shuffledDeck.length; i++ ) {
        expect(Object.keys(shuffledDeck[i]).sort()).toEqual(['rank', 'suit', 'color'].sort());
    }
});

// ? filter by X suits

test('Result should be 13 items', () => {
    const shuffledDeck = _utils.shuffle(deck);
    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    expect(getHearts.length).toEqual(13);
    expect(getClubs.length).toEqual(13);
    expect(getDiamonds.length).toEqual(13);
    expect(getSpades.length).toEqual(13);
});

test('Result should array of objects with these keys', () => {
    const shuffledDeck = _utils.shuffle(deck);
    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    expect(Object.keys(getHearts[0]).sort()).toEqual(['rank', 'suit', 'color'].sort());
    expect(Object.keys(getDiamonds[5]).sort()).toEqual(['rank', 'suit', 'color'].sort());
    expect(Object.keys(getClubs[12]).sort()).toEqual(['rank', 'suit', 'color'].sort());
    expect(Object.keys(getSpades[7]).sort()).toEqual(['rank', 'suit', 'color'].sort());
});

// ? assignRankId

test('Result should be 13 items', () => {
    const shuffledDeck = _utils.shuffle(deck);

    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
    const assignRankIdClubs = _utils.assignRankId(getClubs)
    const assignRankIdHearts = _utils.assignRankId(getHearts);
    const assignRankIdSpades = _utils.assignRankId(getSpades)

    expect(assignRankIdHearts.length).toEqual(13);
    expect(assignRankIdDiamonds.length).toEqual(13);
    expect(assignRankIdSpades.length).toEqual(13);
    expect(assignRankIdClubs.length).toEqual(13);
});

test('Result should be array with with key: cid', () => {
    const shuffledDeck = _utils.shuffle(deck);

    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
    const assignRankIdClubs = _utils.assignRankId(getClubs)
    const assignRankIdHearts = _utils.assignRankId(getHearts);
    const assignRankIdSpades = _utils.assignRankId(getSpades)

    expect(Object.keys(assignRankIdHearts[0]).sort()).toEqual(['rank', 'suit', 'color', 'cid'].sort());
    expect(Object.keys(assignRankIdDiamonds[5]).sort()).toEqual(['rank', 'suit', 'color', 'cid'].sort());
    expect(Object.keys(assignRankIdSpades[12]).sort()).toEqual(['rank', 'suit', 'color', 'cid'].sort());
    expect(Object.keys(assignRankIdClubs[8]).sort()).toEqual(['rank', 'suit', 'color', 'cid'].sort());
});

// ? Bubble Sort
test('Should have 13 items', () => {
    const shuffledDeck = _utils.shuffle(deck);

    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
    const assignRankIdClubs = _utils.assignRankId(getClubs)
    const assignRankIdHearts = _utils.assignRankId(getHearts);
    const assignRankIdSpades = _utils.assignRankId(getSpades)

    const bubbleSortDiamonds = _utils.bubbleSort(assignRankIdDiamonds, 'cid');
    const bubbleSortClubs = _utils.bubbleSort(assignRankIdClubs, 'cid');
    const bubbleSortHearts = _utils.bubbleSort(assignRankIdHearts, 'cid');
    const bubbleSortSpades = _utils.bubbleSort(assignRankIdSpades, 'cid');

    expect(bubbleSortHearts.length).toEqual(13);
    expect(bubbleSortDiamonds.length).toEqual(13);
    expect(bubbleSortSpades.length).toEqual(13);
    expect(bubbleSortClubs.length).toEqual(13);
});

test('First Object and Last Object should be', () => {
    const shuffledDeck = _utils.shuffle(deck);
    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
    const bubbleSortDiamonds = _utils.bubbleSort(assignRankIdDiamonds, 'cid');

    expect(bubbleSortDiamonds[0]).toEqual({"cid": 1, "color": "red", "rank": "ace", "suit": "diamonds"});
    expect(bubbleSortDiamonds[12]).toEqual({ "rank": "king", "suit": "diamonds", "color": "red", "cid": 13 });
});


// ? organize Deck

test('Should have 52 items', () => {
    const shuffledDeck = _utils.shuffle(deck);

    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
    const assignRankIdClubs = _utils.assignRankId(getClubs)
    const assignRankIdHearts = _utils.assignRankId(getHearts);
    const assignRankIdSpades = _utils.assignRankId(getSpades)

    const bubbleSortDiamonds = _utils.bubbleSort(assignRankIdDiamonds, 'cid');
    const bubbleSortClubs = _utils.bubbleSort(assignRankIdClubs, 'cid');
    const bubbleSortHearts = _utils.bubbleSort(assignRankIdHearts, 'cid');
    const bubbleSortSpades = _utils.bubbleSort(assignRankIdSpades, 'cid');

    const sortedDeck = _utils.organizeDeck(bubbleSortDiamonds, bubbleSortClubs, bubbleSortHearts, bubbleSortSpades);
    
    expect(sortedDeck.length).toEqual(52);
});

test('First and Last Object should be', () => {
    const shuffledDeck = _utils.shuffle(deck);

    const getDiamonds = _utils.filter(shuffledDeck, 'suit', 'diamonds');
    const getClubs = _utils.filter(shuffledDeck, 'suit', 'clubs');
    const getHearts = _utils.filter(shuffledDeck, 'suit', 'hearts');
    const getSpades = _utils.filter(shuffledDeck, 'suit', 'spades');

    const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
    const assignRankIdClubs = _utils.assignRankId(getClubs)
    const assignRankIdHearts = _utils.assignRankId(getHearts);
    const assignRankIdSpades = _utils.assignRankId(getSpades)

    const bubbleSortDiamonds = _utils.bubbleSort(assignRankIdDiamonds, 'cid');
    const bubbleSortClubs = _utils.bubbleSort(assignRankIdClubs, 'cid');
    const bubbleSortHearts = _utils.bubbleSort(assignRankIdHearts, 'cid');
    const bubbleSortSpades = _utils.bubbleSort(assignRankIdSpades, 'cid');


    const sortedDeck = _utils.organizeDeck(bubbleSortDiamonds, bubbleSortClubs, bubbleSortHearts, bubbleSortSpades);
    
    expect(sortedDeck[0]).toEqual({"cid": 1, "color": "red", "rank": "ace", "suit": "diamonds"});
    expect(sortedDeck[51]).toEqual({ "rank": "king", "suit": "spades", "color": "black", "cid": 13 });
});






