import { useState } from 'react'

const ColorPicker = () => {
  const [color, setColor] = useState('')
  const colorHandle = (event) => {
    let target = event.target.value
    setColor(target)
  }
  return (
    <div className="colorPicker">
      <h1>Color picker</h1>
      <div className="colorDisplay" style={{ background: color }}>
        <p>Selected color:{color}</p> <label>Select a color:</label>
        <input type="color" value={color} onChange={colorHandle} />
      </div>
    </div>
  )
}
export default ColorPicker
