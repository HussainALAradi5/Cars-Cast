import Spell from './Spell'
import Weather from './Weather'
/* import Weather from './Weather'
 */ const ApisContainer = () => {
  return (
    <div className="apisContainer">
      {' '}
      <Spell />
      {<Weather />}{' '}
    </div>
  )
}
export default ApisContainer
