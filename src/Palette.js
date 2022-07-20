import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import ColorBox from './ColorBox';
import './Palette.css';
import {v4 as uuid} from 'uuid';
import Slider from 'rc-slider';


export default class Palette extends Component {

    constructor(props) {
      super(props)
      this.state = {
        level: 500
      }
      this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level)
    {
        this.setState({level})
    }
    
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    let colorBox = colors[level].map( color =>
    <ColorBox 
    key={uuid()} 
    color = {color.hex} 
    name = {color.name} />
    )
    return (
      <div className='Palette'>
        <div className='slider'>
            <div> Level : {level}</div>
            <Slider 
                onAfterChange={this.changeLevel} 
                step={100} max={900} min={100}
                defaultValue={level} >
            </Slider>
        </div>
        <div className='Palette-box'> { colorBox } </div>
      </div>
    )
  }
}
