import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../../actions/PageActions'

export default function requireAuthenticationFunc(Component) {
  class AuthenticatedComponent extends Component {
    render() {
      return (
        <div>
          <Component {...this.props} />
        </div>
      )
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

  return connect(null, mapDispatchToProps)(AuthenticatedComponent)
}