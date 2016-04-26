import React, { Component } from 'react'

let heightInMeters = (feet, inches) => {
  return Math.round(((parseInt(feet) * 12 + parseInt(inches)) * 0.025) * 10) / 10
}

let weightInKilograms = (pounds) => {
  return Math.round((pounds * 0.45) * 10) / 10
}

let calcBMI = (pounds, feet, inches) => {
  return Math.round(weightInKilograms(pounds) / Math.pow(heightInMeters(feet, inches), 2) * 10) / 10
}

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { feet: "", inches: "", pounds: "", bmi: "" }
    this.getFeet = this.getFeet.bind(this)
    this.getInches = this.getInches.bind(this)
    this.getPounds = this.getPounds.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.getBMI = this.getBMI.bind(this)
  }

  getFeet(event) {
    this.setState({ feet: event.target.value })
  }

  getInches(event) {
    this.setState({ inches: event.target.value })
  }

  getPounds(event) {
    this.setState({ pounds: event.target.value })
  }

  getBMI() {
    this.setState({ bmi : calcBMI(this.state.pounds, this.state.feet, this.state.inches) })
  }

  onSubmitForm(event) {
    event.preventDefault();
    if (this.state.feet && this.state.inches && this.state.pounds){
      this.props.onSubmitForm(heightInMeters(this.state.feet, this.state.inches), weightInKilograms(this.state.pounds), this.state.bmi)
    }
    this.setState({ feet: "", inches: "",  pounds: "", bmi: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          Your Height:<br />
          <input
            type="text"
            placeholder = "feet"
            value={this.state.feet}
            onChange = {this.getFeet}
          />(ft)

          <input
            type="text"
            placeholder = "inches"
            value={this.state.inches}
            onChange = {this.getInches}
          />(inches)<br />

          Your Weight:<br />
          <input
            type="text"
            value={this.state.pounds}
            placeholder = "lbs"
            onChange = {this.getPounds}
          />(lbs)<br />

          <button className="waves-effect waves-light btn-large" onClick={this.getBMI}>calculate BMI</button>
        </form>
      </div>
    )
  }
}
