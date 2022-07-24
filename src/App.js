import Palette from "./Palette";
import ColorSeed from './colorSeed'
import generatePalette from './colorHelper'
import { Route, Switch } from 'react-router-dom'
import { Component } from "react";
import Palettelist from "./Palettelist";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.findPalette = this.findPalette.bind(this)
  }

  findPalette(id)
  {
    return ColorSeed.find(color=>color.id === id)
  }
  

  render()
  {
    return(
      <div>
      <Switch>
        <Route exact path="/">
          <Palettelist palettes = {ColorSeed}/>
        </Route>
        <Route 
        exact 
        path="/palette/:id" 
        render={(routeProps) => 
        <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
        }>

        </Route>
      </Switch>
      {/* <Palette palette = {generatePalette(ColorSeed[3])}/> */}
    </div>
    )
  }
}

export default App;
