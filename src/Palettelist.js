
import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import './Palettelist.css'

export default class Palettelist extends Component {
  handleClick(id)
  {
    this.props.history.push(`palette/${id}`)
  }
  render() {
  const { palettes } = this.props;
  const miniPalettes = palettes.map(palette=><MiniPalette handleClick = {()=>this.handleClick(palette.id)} {...palette}/>)
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
