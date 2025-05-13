import logo from './logo.svg';
import './App.css';
import Cardcomp from "./components/cards/card.js"
import Navbar from './components/navbar/navbar.js';
import {Slider} from "./components/slider/slider.js"
import  Layout  from "./components/layout/layout.js"
import CounterFN from './components/statefolder/state.js';
import Bulbproject from './components/statefolder/bulbproject.js';
import  Hooksfn from "./components/hooks/useeffects.js"
// import Title from './components/hooks/title.js';
// import Delay from './components/hooks/delay.js';
// import Printtime from './components/hooks/printtime.js';
import Dependency from './components/hooks/useeffectdependency.js';
function App() {
  return (
    <>
       <Navbar/>
      {/* <Cardcomp/> */}
     <Slider/>
     <CounterFN/>
     <Dependency/>
     {/* <Printtime/> */}
     {/* <Delay/> */}
     {/* <Title/> */}
     <Bulbproject/>
     <Layout/>
     <Hooksfn/>
    </>

  );
}

export default App;
