// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      console.log(this.state)
      this.setState(prevState => {
        console.log(`Previous value is ${prevState.speed}`)

        return {speed: prevState.speed + 10}
      })
    }
  }

  onDecelerate = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`Previous value is ${prevState.speed}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnContainer">
          <button type="button" className="button1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onDecelerate}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
