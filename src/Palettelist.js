
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Palettelist extends Component {
  render() {
    return (
      <div>
        <h1>Palette List</h1>
        {this.props.palettes.map(
            (palette)=><Link to={`/palette/${palette.id}`}><h1>{palette.paletteName}</h1></Link>
        )}
      </div>
    )
  }
}
