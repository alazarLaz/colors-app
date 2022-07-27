import React from 'react'

export default function MiniPalette(props) {
  const { colors, emoji, paletteName } = props;
  const items = colors.map(color=><div 
      className='MiniColor' 
      style={{background:`${color.color}`}}>
        
      </div>)
  
  return (
    <div className='MiniPalette'>
      <div className='MiniColors'>
        {items}
      </div>
      <div className='MiniPaletteBar'>
        <span>{ paletteName }</span>
        <span>{ emoji }</span>
      </div>
    </div>
  )
}
