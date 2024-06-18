import { Link } from 'react-router-dom'

const Car = (props) => {
  return (
    <Link to={`/car/${carId}`}>
      <div className="card" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.image} alt={`${props.make}-${props.model}`} />
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
    </Link>
  )
}

export default Car
