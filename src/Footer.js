import React from 'react'

export default function Footer(props) {
    const { paletteName, emoji } = props;
  return (
    <div className='Palette-footer'>{paletteName} : {emoji}</div>
  )
}
