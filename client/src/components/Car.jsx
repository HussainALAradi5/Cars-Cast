import { Link } from 'react-router-dom'

const Car = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt={`${props.make} ${props.model}`} />
      </div>
      <div className="info-wrapper  flex-col">
        <h3>
          {props.make}
          {}
          {props.model}
        </h3>
        <p>
          <strong>{props.price}</strong>
        </p>
        <p>//reviews link to be added</p>
      </div>
    </div>
  )
}

export default Car
