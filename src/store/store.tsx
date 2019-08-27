import { createStore } from "redux";
import addcard from "../reducers/cardReducer"

function configureStore(state = {
    cards: [
        {
            id: 1,
            name: 'Card 1',
            description:  'This is card 1 for detail information'
        }
    ]
}
) {
    return createStore(addcard, state);
}

export default configureStore;