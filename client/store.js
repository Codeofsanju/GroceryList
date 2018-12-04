import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import { isRegExp } from 'util';

//ACTION TYPES
const ADD_GROCERY = 'ADD_GROCERY';
const ITEM_TOGGLE = 'ITEM_TOGGLE';
const SET_VISIBILTY_FILTER = 'SET_VISIBILTY_FILTER';

//ACTION CREATOR 
let nextId = 0;

export const addGrocery = (text) => {
    return {
        type: ADD_GROCERY,
        id: nextId++,
        text
    };
};

export const toggleGrocery = (id) =>{
    return {
        type: ITEM_TOGGLE,
        id
    };
};

export const setVisibiltyFilters = (filterType) =>{
    return {
        type: SET_VISIBILTY_FILTER,
        filterType 
    };
};

const initialState = {
    groceries: [],
    currFilter: 'SHOW_ALL'
};


//REDUCER
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_GROCERY:
            return{ ...state, groceries: [...state.groceries, {id: action.id , text: action.text, bought: false}]};

        case ITEM_TOGGLE:
            const groceries = state.groceries.map(grocery =>{
                if(grocery.id === action.id){
                    return {...grocery, bought: !grocery.bought}
                }
                else{
                    return grocery;
                }
            });
            return {...state, groceries};
        
        case SET_VISIBILTY_FILTER:
            return {...state, currFilter: action.filterType};
        default:
            return state;
    }
};  

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

// store.dispatch(addGrocery('Milk'));
// store.dispatch(addGrocery('Oreos'));

export default store;
