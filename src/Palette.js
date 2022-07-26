import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import {v4 as uuid} from 'uuid';

import Navbar from './Navbar';
import Footer from './Footer';


export default class Palette extends Component {

    constructor(props) {
      super(props)
      this.state = {
        level: 500,
        format:"hex"
      }
      this.changeLevel = this.changeLevel.bind(this)
      this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level)
    {
        this.setState({level})
    }
    changeFormat(format)
    {
      this.setState({
        format
      })
    }
    
  render() {
    const { paletteName, colors, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    let colorBox = colors[level].map( color =>
    <ColorBox 
    key={uuid()} 
    paletteId = { id }
    color = { color[format] } 
    name = { color.name }
    id = { color.id }
    moreUrl = { true }
     />
    )
    return (
      <div className='Palette'>
        <Navbar showAllColors= { true } level = {level} changeLevel = {this.changeLevel} changeFormat={this.changeFormat}></Navbar>
        <div className='Palette-box'> { colorBox } </div>
        <Footer paletteName = {paletteName} emoji = {emoji} />
      </div>
    )
  }
}
