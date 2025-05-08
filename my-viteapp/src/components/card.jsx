import "./card.css"
function Card(props) {

 const name ="hitech";

  return (
    <>
      <div className="card-container">
        <h1>Name:{props.name}</h1>
        <img className="card-image" src={props.image} alt="image....." />
        <p>
         {props.desc}
        </p>
        {name}
      </div>
      
    </>
  );
}

export default Card;
