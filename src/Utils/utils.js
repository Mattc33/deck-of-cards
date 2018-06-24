const utils = {

    shuffle: (arr) => {
        const pseudoRandomNumber = parseInt( Date.now().toString().slice(9), 0) * (.0001);
        for ( let i = arr.length - 1; i >= 0; i-- ) {
            const randomNum = Math.floor( (pseudoRandomNumber) * (i+1) )
            const selectedItem = arr[randomNum];
            arr[randomNum] = arr[i];
            arr[i] = selectedItem;
        }
        return arr;
    },

    filter: (arr, key, value) => arr.filter( card => card[key] === value ),

    assignRankId: (partialDeck) => {
        const newPartialDeck = [];
        for( let i = 0; i < partialDeck.length; i++ ) {
            if( typeof( parseInt(partialDeck[i].rank, 0) ) !== isNaN ) {
                partialDeck[i].cid = parseInt(partialDeck[i].rank, 0);
            }
            if(partialDeck[i].rank.toLowerCase() === 'ace') {
                partialDeck[i].cid = 1
            }
            if(partialDeck[i].rank.toLowerCase() === 'jack') {
                partialDeck[i].cid = 11
            }
            if(partialDeck[i].rank.toLowerCase() === 'queen') {
                partialDeck[i].cid = 12
            }
            if(partialDeck[i].rank.toLowerCase() === 'king') {
                partialDeck[i].cid = 13
            }
            newPartialDeck.push(partialDeck[i]);
        }
        return newPartialDeck;
    },

    bubbleSort: (arr, key) => {
        let i, j, lim;
        lim = arr.length;
        while(lim--) {
            for(i = 0, j = 1; i < lim; ++i, ++j) {
                if ( arr[i][key] > arr[j][key] ) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    },

    organizeDeck: (diamonds, clubs, hearts, spades) => {
        const sortedDeckArr = [];
        return sortedDeckArr.concat(diamonds, clubs, hearts, spades);
    }

}

export default utils;

