import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    const users = this.props.user.map((user, i) => {
      return (
        <li key={i}>
          <div className='dropdown'>
            <a href='#' data-toggle='dropdown' className='dropdown-toggle'>{user.theme}</a>
            <ul className='dropdown-menu'>
              <li><a href='#'><b>Сообщение: </b>{user.message}</a></li>
            </ul>
          </div>
        </li>
      )
    })
    return (
      <div className='row'>
        <ul className='nav nav-pills nav-stacked'>
          {users}
        </ul>
      </div>
    )
  }
}

