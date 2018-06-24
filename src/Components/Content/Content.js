import React, { Component } from 'react';
import './Content.css';

import _deck from '../../Assets/deck';
import { Card, Select, Button } from 'antd';
import _utils from '../../Utils/utils';

const Option = Select.Option;

class Content extends Component {

    state = {
        deck: []
    }

    shuffle = () => {
        const shuffle = _utils.shuffle(_deck);
        this.setState(
            { deck: shuffle }
        )
    }

    sort = () => {
        const getDiamonds = _utils.filter(this.state.deck, 'suit', 'diamonds');
        const getClubs = _utils.filter(this.state.deck, 'suit', 'clubs');
        const getHearts = _utils.filter(this.state.deck, 'suit', 'hearts');
        const getSpades = _utils.filter(this.state.deck, 'suit', 'spades');
    
        const assignRankIdDiamonds = _utils.assignRankId(getDiamonds)
        const assignRankIdClubs = _utils.assignRankId(getClubs)
        const assignRankIdHearts = _utils.assignRankId(getHearts);
        const assignRankIdSpades = _utils.assignRankId(getSpades)
    
        const bubbleSortDiamonds = _utils.bubbleSort(assignRankIdDiamonds, 'cid');
        const bubbleSortClubs = _utils.bubbleSort(assignRankIdClubs, 'cid');
        const bubbleSortHearts = _utils.bubbleSort(assignRankIdHearts, 'cid');
        const bubbleSortSpades = _utils.bubbleSort(assignRankIdSpades, 'cid');

        const sortedDeck = _utils.organizeDeck(bubbleSortDiamonds, bubbleSortClubs, bubbleSortHearts, bubbleSortSpades );

        this.setState(
            { deck: sortedDeck }
        )
    }

    render() {
        const deckList = this.state.deck.map( card => {

            let cardStyle = {width: '80px', height: '100px', border: '1px solid black', margin: 'auto', position: 'relative'}

            if (card.color === 'red') {
                cardStyle = {width: '80px', height: '100px', border: '1px solid red', margin: 'auto', position: 'relative'}
            }

            // let suitIcon;
            // if( card.suit === 'hearts' ) {
            //     suitIcon = 
            // }

            return (
                <Card className='card' key={card.suit+card.rank}>
                    <div style={{position: 'absolute', top: 0, left: 0, marginLeft: 5}}>{card.rank}</div>
                    <div style={{margin: '0 auto'}}>{card.suit}</div>
                    <div style={{position: 'absolute', bottom: 0, right: 0, marginRight: 5}}>{card.rank}</div>
                </Card>
            )
            }
        );
 
        return (
            <div>
                <div className='header'>
                    <h3>Deck of Cards</h3>
                    <span className='buttonGroup'>
                        <Button onClick={this.shuffle}> <i className="fas fa-random"></i> Shuffle a Deck </Button>
                        <Button onClick={this.sort}> <i className="fas fa-sort-amount-down"></i> Sort Deck </Button>
                    </span>
                </div>
                <div className='deckContainer'>
                    {deckList}
                </div>
            </div>
        );
    }
}

export default Content;
