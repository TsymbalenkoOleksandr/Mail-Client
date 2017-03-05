import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends Component {
    render() {
      return (
        <div>
          <Component {...this.props} />
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}