
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import './Palettelist.css'

export default class Palettelist extends Component {
  render() {
  const miniPalettes = this.props.palettes.map(palette=><MiniPalette {...palette}/>)
    return (
      <div className='Palettelist'>
        <div className='PaletteContainer'>
          <div className='Palettelistnav'>
            <h3>React Colors</h3>
            <span>Create a palette</span>
          </div>
          <div className='PalettesBox'>
            { miniPalettes }
          </div>
        </div>
      </div>
    )
  }
}
