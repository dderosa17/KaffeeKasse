import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, RESET_COUNTER } from "../actions/actionTypes";

const initlaState = {
    counter: 0,
}

export const kaffeeReducer = (state = initlaState, action) => {
    switch (action.type) {

        case INCREMENT_QUANTITY: {
            return { ...state, counter: state.counter + 1 }
        }
        case DECREMENT_QUANTITY: {
            return { ...state, counter: state.counter - 1 }
        }
        case RESET_COUNTER: {
            return { ...state, counter: state.counter = 0 }
        }
    }

    return state
}