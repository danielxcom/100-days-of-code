import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';


// A card can be in 1 of 3 CardStates
// HIDING - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
//            the card should never move from MATCHING to another state during
//            game play.
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    // The cards that we will use for our state.
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];
    cards = shuffle(cards);
    this.state = {cards, noClick: false};
    
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  
  handleNewGame() {
    //function wants to do two things:
    //1) copy the state
    // and set all cards to have a state of hiding.
    //2) Shuffle, then set cards to new state.
    
    let cards = this.state.cards.map(c=>({
      ...c,
      cardState: CardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }
  
  //handleClick just handles the off/on functionality of all buttons.
  // handleClick(id) {
  //   this.setState(prevState => {
  //     let cards = prevState.cards.map(c => (
  //       c.id === id ? { //first ternery condition. 
  //       //decide between {...} or give back original c.
  //         ...c,
  //         cardState: c.cardState === CardState.HIDING ? 
  //           CardState.MATCHING : CardState.HIDING
  //         //second ternery condition.
  //         //cardState transitions MATCHING if original + new cardstate both match with .HIDING.
  //         //Else, return CardState.HIDING
  //       } : c
  //       ));
  //       return {cards};
  //   });
  // }
  
  //determines matching in memory game,
  handleClick(id) {
    //three params for map.
    //1) array of cards
    //2) array of IDs to change. (new)
    //3) state IDS should have.
    
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c=>{
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          }
        }
        return c;
      })
    }
    
    const foundCard = this.state.cards.find(c=> c.id === id);
    
    //check if card we just found if it's not equal to hiding then we dont want it.
    if(this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    
    //set var called noclick
    
    let noClick=false; //boolean counter
    
    //use this to decide whether user clicks again.
    
    //if 0 non-match SHOWING
    //OR 1 non-match
    //user clicks
    
    //if 2 non-match SHOWING
    //then user can't click for set time.
    
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    
    const showingCards = cards.filter((c)=> c.cardState===CardState.SHOWING);
    
    const ids = showingCards.map(c => c.id);
    
    //we have arr of cards currently SHOWING + IDs
    
    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor===showingCards[1].backgroundColor) {
          //case where we change state to MATCHING.
          
          cards = mapCardState(cards, ids, CardState.MATCHING);
        } else if (showingCards.length === 2) {
          let hidingCards = mapCardState(cards, ids, CardState.HIDING);
          //change card state of showing ids to hiding.
          
          noClick = true;
          
          //setState with the cards and noclick
          //note we use cards not HIDING cards.
          this.setState({cards, noClick}, () => {
            //from states showing to hiding.
            //sets state of cards to hiding after 3 sec.
            this.setState({cards: hidingCards, noClick: false});
          }, 3000);
          //show for amount of time.
          //after settimeout, hide.
          
          //so if aforementioned is case.
          //just return
          return;
        }
        //Otherwise if we're at bottom, setstate w/ cards and noclick.
        this.setState({cards, noClick});
        //reach case: 1) if 1 card isn't viewable (SHOWING) that's not MATCHED
        //2) 2 cards showing > do match. 
        //if 2 do not match, hit return from above.
  }
  
  
  render() {
    const cards = this.state.cards.map((card) =>
    (
      <Card 
        key={card.id} 
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onClick={()=>{this.handleClick(card.id)}}
        />
      ));
      
      return (
        
        <div>
          <Navbar onNewGame={this.handleNewGame}/>
          {cards}
        </div>
        );
  }
}
