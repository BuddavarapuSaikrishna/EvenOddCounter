// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {counter: 0}

  RandomNumber = () => Math.ceil(Math.random() * 100)

  OnIncrement = () => {
    const randomnumber = this.RandomNumber()
    this.setState(prev => ({counter: prev.counter + randomnumber}))
  }

  render() {
    const {counter} = this.state

    const EvenOddvalue = counter % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="Main-Container">
        <div className="Content-Container">
          <h1 className="Increase-Count">Count {counter}</h1>
          <p className="EvenOdd">Count is {EvenOddvalue}</p>
          <button
            className="Increment-Btn"
            type="button"
            onClick={this.OnIncrement}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
