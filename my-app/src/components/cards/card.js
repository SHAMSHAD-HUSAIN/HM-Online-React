import "./card.css"
import {Slider} from "../slider/slider.js"

function Card(props){
  let a =2;
    return(

        <>
       <div class="card-main-div">
        
        <img  class="card-img" src={props.img} alt=''/>
     <h5 class="card-name">Name:{props.name}</h5>
     <p class="card-desc">desciption:{props.description} </p>

       </div>
        </>

    )
}

export default Card;