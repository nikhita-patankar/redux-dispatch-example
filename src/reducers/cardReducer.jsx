function addcard(state = [], action) {
    switch (action.type) {
      case 'ADD_CARD':
        var cardID = state.cards.length + 1;
        let newCard =
            {
              id: cardID,
              name: 'Card' + ' ' + cardID,
              description: 'This is card '+ cardID +' for detail information.',
            };

          return {
            ...state,
            cards: state.cards.concat(newCard)
          };
      default:
        return state;
    }
  }
  
  export default addcard
  