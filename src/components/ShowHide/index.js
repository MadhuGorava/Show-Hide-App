// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isClicked: false,
    isNotClicked: false,
  }

  joeButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  johnButton = () => {
    this.setState(prevState => ({isNotClicked: !prevState.isNotClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'display-hide' : 'display-flex'
  }

  getJohnButton = () => {
    const {isNotClicked} = this.state

    return isNotClicked ? 'display-hide' : 'display-flex'
  }

  render() {
    const buttonText = this.getButtonText()

    const johnButtonText = this.getJohnButton()

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="card">
            <button type="button" onClick={this.joeButton}>
              Show/Hide FirstName
            </button>
            <h1 className={buttonText}>Joe</h1>
          </div>
          <div>
            <button type="button" onClick={this.johnButton}>
              Show/Hide LastName
            </button>
            <h1 className={johnButtonText}>Jonas</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
