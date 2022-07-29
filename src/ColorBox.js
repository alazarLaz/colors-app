import './ColorBox.css'
import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

export default class ColorBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: false
      }
      this.handleCLick = this.handleCLick.bind(this)
    }

    handleCLick(evt)
    {
        this.setState(
            {value:true}
            ,()=>
            setTimeout(
                ()=>this.setState(
                    {value:false}
                    )
                ,2500)
            )
        console.log('clicked')
    }
    
  render() {
    const { value } = this.state;
    const { color, name, paletteId, id, moreUrl } = this.props;
    console.log(name)
    return (
    <CopyToClipboard text= { color }>
        <div className='ColorBox' style={{backgroundColor : `${color}`}}>
            <button className='btn-cpy' onClick={this.handleCLick}>Copy</button>
            <div className='color-title'>{name}</div>
            { moreUrl && <Link 
            to = {`/palette/${paletteId}/${ id }`}
            onClick={(e)=>e.stopPropagation()}
            >
            <div className='seemore'>More</div>
            </Link> } 
            <div style={{backgroundColor : `${color}`}} className={`overlay ${value===true?' expand':''}`}>
                <h1>Copied</h1>
                <p>{this.props.color}</p>
            </div>
        </div>
    </CopyToClipboard>  
    )
  }
}
