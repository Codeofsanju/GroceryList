import React from "react";
import {setVisibiltyFilters} from '../store';
import {connect} from 'react-redux';


const Footer = (props) => (
  <div className="footer">
    Show:
    <a onClick = {() => props.changeFilter('SHOW_ALL')}> All</a>,
    <a onClick = {() => props.changeFilter('SHOW_NOT_BOUGHT')}> Active</a>,
    <a onClick = {() => props.changeFilter('SHOW_BOUGHT')}> Bought </a>
  </div>
);

const mapDispatchToProps = (dispatch) =>{
  return {
    changeFilter: filter => dispatch(setVisibiltyFilters(filter))
  };
};

export default connect(null, mapDispatchToProps)(Footer);