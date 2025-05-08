import logo from './logo.svg';
import './App.css';
import Cardcomp from "./components/cards/card.js"
import Navbar from './components/navbar/navbar.js';
import {Slider} from "./components/slider/slider.js"
import  Layout  from "./components/layout/layout.js"
import CounterFN from './components/statefolder/state.js';
import Bulbproject from './components/statefolder/bulbproject.js';
function App() {
  return (
    <>
       <Navbar/>
      {/* <Cardcomp/> */}
     <Slider/>
     <CounterFN/>
     <Bulbproject/>
     <Layout/>
    </>

  );
}

export default App;
