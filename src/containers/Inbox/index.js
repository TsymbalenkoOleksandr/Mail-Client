import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import load from '../../loaders/loader'
import Message from '../../components/Message'

export default class Inbox extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.loadData()
  }

  componentWillMount() {
    if (this.props.params.inbox < 1 || !this.isNumeric(+this.props.params.inbox)) {
      browserHistory.push('/error')
    }
  }

  loadData() {
    load('https://jsonplaceholder.typicode.com/comments').then(users => {
      this.setState({
        data: JSON.parse(users)
      }).bind(this)
    })
  }

  btnClickBack(e) {
    if (+this.props.params.inbox < 2) {
      e.preventDefault()
    }
  }

  btnClickNext(e) {
    let next = Math.ceil(this.state.data.length / 15)
    if (+this.props.params.inbox >= next) {
      e.preventDefault()
    }
  }

  btnClickHref(event, i) {
    event = event || window.event
    event.preventDefault()
    this.context.router.push(`/inbox/${this.props.params.inbox}/${i}`)
  }
  isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
  }

  render() {
    let { inbox } = this.props.params
    let users = this.state.data.map((user, i) => {
      if (i >= (inbox * 15 - 15) && i < (inbox * 15)) {
      return (
        <li key = {i}>
          <a href='#' onClick = {() => false} >
            <Link to={`/inbox/${this.props.params.inbox}/${i}`} >{user.name}</Link>
          </a>
        </li>
      )
    }
    })

    return (
      <div className='row'>
      {this.props.params.message != undefined ? <Message data={this.state.data} message={this.props.params.message} /> :
      <div>
        <ul className='nav nav-pills nav-stacked'>
          {users}
        </ul>
        <ul className='pager'>
          <li className='previous' >
            <Link to={`/inbox/${+this.props.params.inbox - 1}`} onClick={::this.btnClickBack} >← Предыдущая</Link>
          </li>
          <li className='next'>
            <Link to={`/inbox/${+this.props.params.inbox + 1}`} onClick={::this.btnClickNext} >Следующая →</Link>
          </li>
        </ul>
        </div>
        }
      </div>
    )
  }
}

Inbox.contextTypes = {
  router: PropTypes.object.isRequired
}