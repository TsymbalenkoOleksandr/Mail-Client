import React, { Component } from 'react'

export default class Message extends Component {

  render() {
    const { message } = this.props;
    const { data } = this.props

    return (
      <div className='row'>
      <h1>{data[message].email}</h1>
        <ul className='nav nav-pills nav-stacked'>
          <li>{data[message].body}</li>
        </ul>
      </div>
    )
  }
}

