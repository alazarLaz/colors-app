import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css'
import { Snackbar, Select, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
// import CloseIcon from '@mui/icons-material/Close';

import Slider from 'rc-slider';

export default class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: "hex",
         open: false
      }
      this.changeFormatHandler = this.changeFormatHandler.bind(this)
      this.handleSnakbarClose = this.handleSnakbarClose.bind(this)
    }
    changeFormatHandler(val)
    {
        this.setState({ value : val.target.value })
        this.props.changeFormat( val.target.value )
        this.setState({ open: true })
    }
    handleSnakbarClose()
    {
        this.setState({ open: false })
    }

  render() {
    const { level, changeLevel, showAllColors } = this.props;
    const { value, open } = this.state;
    return (
      <div className='Navbar'>
        <Link className="Logo" to="/">
            <div>reactcolorpicker</div>
            </Link>
            { showAllColors &&
        <div className='slider-container'>
          <div> Level : {level}</div>
        <div className='slider'>
            <Slider 
                onAfterChange={changeLevel} 
                step={100} max={900} min={100}
                defaultValue={level} >
            </Slider>
        </div>
        </div>
        }
        <Select 
        className='select-item'
        onChange={this.changeFormatHandler}
         value={value}>
            <MenuItem value = "hex">Hex - #FFFFFF</MenuItem>
            <MenuItem value = "rgb">Rgb - RGB(255,255,255)</MenuItem>
            <MenuItem value = "rgba">Rgba - RGBA(255,255,255,1.0)</MenuItem>
        </Select>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={this.handleSnakbarClose}
            message={`Changed to: ${value.toUpperCase()}`}
            action={[
                    <CloseIcon onClick={this.handleSnakbarClose}/>
            ]}
/>
      </div>
    )
  }
}
