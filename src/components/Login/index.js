import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import './styles.scss'

export default class Login extends Component {
  targHandler(e) {
    e.preventDefault()
    const login = e.target.elements[0].value
    const password = e.target.elements[1].value
    if (login == 'admin' && password == 'admin') {
      window.localStorage.setItem('rr_login', login)
      window.localStorage.setItem('rr_password', password)
      document.getElementsByTagName('body')[0].style.background = 'white'
      browserHistory.push('/home')
    } else {
       browserHistory.push('/')
    }
  }
  render() {
    return (
    <div className='container bg'>
    <div className='centered'>
      <form onSubmit={this.targHandler}>
      <h4 className='font_color'>Please enter the login</h4>
      <div>
        <div className='input-group'>
          <span className='input-group-addon'><span className='glyphicon glyphicon-user'></span></span>
          <input type='text' className='form-control' />
        </div>
        <div className='input_align'>
        <h4 className='font_color'>Please enter the password</h4>
        <div className='input-group'>
        <span className='input-group-addon'><span className='glyphicon glyphicon-lock'></span></span>
          <input type='password' className='form-control' />
        </div>
        </div>
        <button type='submit' className='btn btn-primary form_button'>Отправить</button>
        </div>
      </form>
    </div>
    </div>
    )
  }s
}