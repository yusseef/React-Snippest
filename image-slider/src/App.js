
import './App.css';
import Slider from './components/Slider';
import { sliderData } from './components/sliderData';

function App() {
  return (
    <Slider slides={sliderData} />
    
  );
}

export default App;
