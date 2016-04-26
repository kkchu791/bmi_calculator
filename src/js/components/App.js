import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { height: 0, weight: 0, bmi: 0 }
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onSubmitForm(height, weight, bmi){
    this.setState({ height: height, weight: weight, bmi: bmi})
  }

  render() {
    return (
      <div style={{textAlign: "center", fontSize: "1.5em", fontFamily: "Exo" }}>
        <div style={{ background: "pink"}}>
          <h1>BMI Calculator</h1>
          <Form onSubmitForm={this.onSubmitForm}/>
        </div>
        <div style={{ background: "yellow" }}>
          <Table style={{ align: "center" }}
            height={this.state.height}
            weight={this.state.weight}
            bmi={this.state.bmi}
          />
        </div>
      </div>
    )
  }
}
