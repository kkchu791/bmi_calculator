import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <td>Height(m)</td>
              <td>Weight(kg)</td>
              <td>BMI</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.height}</td>
              <td>{this.props.weight}</td>
              <td>{this.props.bmi}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
