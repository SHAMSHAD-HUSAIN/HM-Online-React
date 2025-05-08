
import img from "./assets/shamshad.jpg";
import img2 from "./assets/anil.png";
import img3 from "./assets/mujeeb.png";
import img4 from "./assets/soeb.png";
import Navbar from "./components/navbar.jsx";
import Card  from "./components/card.jsx";
import Mybutton from "./components/events.jsx";
function App() {


//   props=[{
//     name:"shamshad",
//     image:"./assets/shamshad.jpg",
//     desc:"desription1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus ea cum consectetur ex officiis hic eligendi tempora"
//   },
//   {name:"anil",
//     image:"./assets/anil.png",
//     desc:"desription1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus ea cum consectetur ex officiis hic eligendi tempora"
//   },
//   {name:"mujeeb",
//     image:"./assets/mujeeb.png",
//     desc:"desription3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus ea cum consectetur ex officiis hic eligendi tempora"
//   },
//   {name:"soeb",
//     image:"./assets/soeb.png",
//     desc:"desription3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus ea cum consectetur ex officiis hic eligendi tempora"
//   },
  
// ]
// Data=[
//   {name:"soeb",
//         image:"./assets/soeb.png",
//         desc:"desription3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus ea cum consectetur ex officiis hic eligendi tempora"
//       }

// ]
  return (
    <>

    <Navbar/>
      <Card
       name="shamshad" image={img} desc="desription1: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem minus ea cum consectetur ex officiis hic eligendi tempora
          quod iure."/>
      <Card name="anil" image={img2} desc="desription2: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br />Quidem minus ea cum consectetur ex officiis hic eligendi tempora
          quod iure."/>
      <Card name="mujeeb" image={img3} desc="desription3:Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br />Quidem minus ea cum consectetur ex officiis hic eligendi tempora
          quod iure."/>
      <Card name="soeb" image={img4} desc="desription4: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br />Quidem minus ea cum consectetur ex officiis hic eligendi tempora
          quod iure."/>
          <Card name="sjsj" image={img} desc="shhsg"/>

          <Mybutton/>

    </>
  )
}

export default App
