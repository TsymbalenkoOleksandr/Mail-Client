import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles.scss'
import * as pageActions from '../../actions/PageActions'

export default class App extends Component {
  exit() {
    window.localStorage.setItem('rr_login', '')
    window.localStorage.setItem('rr_password', '')
    document.getElementsByTagName('body')[0].style.cssText = 'background: -webkit-radial-gradient(#76BBEF, #292DA3); \
    background: -o-radial-gradient(#76BBEF, #292DA3); \
    background: -moz-radial-gradient(#76BBEF, #292DA3); \
    background: radial-gradient(#76BBEF, #292DA3); \
    background-repeat: no-repeat; \
    background-attachment: fixed; \
    '
  }
  componentWillMount() {
    if (window.localStorage.rr_login != 'admin' || window.localStorage.rr_password != 'admin') {
      browserHistory.push('/')
    }
  }
  render() {
    return (
      <div>
      <header>
        <div className='container header_img'>
          <div className='header_position'><b className='header_text'>Mail<br /> Client</b></div>
        </div>
      </header>
      <div className='container main_bg'>
      <div className='row'>
        <div className='col-md-3 bar_offset'>
          <div className='list-group'>
            <Link to='/new' className='list-group-item'>Написати</Link>
            <Link to='/inbox/1' className='list-group-item'>Вхідні</Link>
            <Link to='/home' className='list-group-item'>Надіслані</Link>
            <Link to='/' className='list-group-item' onClick={::this.exit}>Exit</Link>
          </div>
        </div>
        <div className='col-md-6 col-md-offset-1'>
          {this.props.children}
        </div>
        </div>
      </div>
      <footer className='footer'>
      <div className='container'>
          <p className='text-muted'>Place sticky footer content here.</p>
      </div>
    </footer>
      </div>
    )
  }
}

// function mapStateToProps({ sent }) {
//   return {
    
//   }
// }

const mapDispatchToProps = {
  pageActions
}

export default connect(null, mapDispatchToProps)(App)
