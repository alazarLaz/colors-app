import Palette from "./Palette";
import ColorSeed from './colorSeed'
import generatePalette from './colorHelper'

function App() {
  return (
    <div>
      <Palette palette = {generatePalette(ColorSeed[3])}/>
    </div>
  );
}

export default App;
