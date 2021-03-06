import React from 'react';
import Tab from './Tab';
import { tabData } from '../../data';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log(props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return( 
            <Tab tabs = {tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>
          );
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
    tabs: PropTypes.array,
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.string
}


// Make sure to use PropTypes to validate your types!
export default Tabs;
