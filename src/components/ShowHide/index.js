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

    return isClicked ? '' : <h1 className="display-flex">Joe</h1>
  }

  getJohnButton = () => {
    const {isNotClicked} = this.state

    return isNotClicked ? '' : <h1 className="display-flex">Jonas</h1>
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="card">
            <button type="button" onClick={this.joeButton}>
              Show/Hide Firstname
            </button>
            {this.getButtonText()}
          </div>
          <div>
            <button type="button" onClick={this.johnButton}>
              Show/Hide Lastname
            </button>
            {this.getJohnButton()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
