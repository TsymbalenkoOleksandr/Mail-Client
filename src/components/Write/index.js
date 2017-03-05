import React, { Component } from 'react'

export default class Write extends Component {

    onBtnClick = (e) => {
      e.preventDefault()
      const whom = document.getElementById('email').value
      const theme = document.getElementById('theme').value
      const message = document.getElementById('comment').value
      this.props.pageActions.pressBtn({whom, theme, message})
      document.getElementById('email').value = ''
      document.getElementById('theme').value = ''
      document.getElementById('comment').value = ''
  }

  render() {
    return (
      <div className='container-fluid'>
        <form role='form'>
          <div className='form-group'>
            <label htmlFor='email'>Кому</label>
            <input type='email' className='form-control' id='email' placeholder='Введите email' />
          </div>
          <div className='form-group'>
            <label htmlFor='theme'>Тема</label>
            <input type='text' className='form-control' id='theme' placeholder='Тема сообщения' />
          </div>
          <div className='form-group'>
            <label htmlFor='comment'>Сообщение:</label>
            <textarea className='form-control' rows='5' id='comment' />
          </div>
          <button type='button' className='btn btn-primary' onClick={this.onBtnClick} >Отправить</button>
        </form>
      </div>
    )
  }
}