import React from "react";
import GroceryItem from "./GroceryItem";
import { connect } from 'react-redux';
import {toggleGrocery} from '../store';


const GroceryList = (props) => (
    <ul>
    {props.groceries.map(grocery => (
        <GroceryItem key={grocery.id} {...grocery} onClick={() => props.toggleGro(grocery.id)}/>
        ))}
  </ul>
);



const mapStateToProps = (state) =>{
    let groceries = state.groceries;
    if(state.currFilter === 'SHOW_BOUGHT'){
        groceries = state.groceries.filter(n => n.bought);
    }
    else if(state.currFilter === 'SHOW_NOT_BOUGHT'){
        groceries = state.groceries.filter(n => !n.bought);
    }
    return{
        groceries, 
        currFilter: state.currFilter
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        toggleGro: id => dispatch(toggleGrocery(id)),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);