import React, { Component } from 'react'
import ColorBox from './ColorBox';
import {v4 as uuid} from 'uuid';

import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class SingleColorPalette extends Component {
    constructor(props) 
    {
        super(props)
        this.state = {
          format: "hex"
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId )

        this.changeFormat = this.changeFormat.bind(this)
    }
    gatherShades(palette, colorId)
    {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors)
        {
            shades = shades.concat(
                allColors[key].filter(color=>color.id === colorId)
            )
        }
        return shades.slice(1);
    }
    changeFormat(val)
    {
      this.setState({
         format:val 
      })
    }
      
      render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        let colorBox = this._shades.map( color =>
        <ColorBox 
        key={uuid()} 
        paletteId = { id }
        color = {color[format]} 
        name = {color.name}
        id = { color.id }
        moreUrl = { false }
         />
        )
        return (
          <div className='Palette SingleColorPalette'>
            <Navbar showAllColors = {false} changeFormat={this.changeFormat}></Navbar>
            <div className='Palette-box'> 
              { colorBox } 
              <div className='ColorBox go-back'><Link to={`/palette/${id}`} className='btn-goback'>Go Back</Link></div>
            </div>
            <Footer paletteName = {paletteName} emoji = {emoji} />
          </div>
        )
      }
}
