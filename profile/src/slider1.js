import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './slider.css';
 
// list of items
const list = [
  { name: <img src="./me.jpg" className="sliderImg" alt="" /> },
  { name: <img src="./me.jpg" className="sliderImg" alt="" /> },
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
 
const selected = 'item1';
 
export default class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
        alignCenter={true}
        alignOnResize={true}
        />
      </div>
    );
  }
}

