import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastname: false}

  firstName = () => {
    const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastName = () => {
    const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="heading">show/hide</h1>
          <div className="content-container">
            <div className="card">
              <button className="btn" type="button" onClick={this.firstName}>
                Show/hide Firstname
              </button>
              {firstName && <p className="txt">Joe</p>}
            </div>
            <div className="card">
              <button className="btn" type="button" onClick={this.lastName}>
                Show/hide Lastname
              </button>
              {lastName && <p className="txt">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
