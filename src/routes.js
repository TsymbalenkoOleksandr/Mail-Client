import React from 'react'
import { IndexRoute , Route} from 'react-router'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Write from './components/Write'
import Login from './components/Login'
import Inbox from './containers/Inbox'
import Message from './components/Message'
import App from './containers/App'
import requireAuthentication from './components/AuthenticatedComponent'
import requireAuthenticationFunc from './components/AuthenticatedFunc'

export const routes=(
  <div>
    <Route path='/' component={Login} />
    <Route path='/home' component={App} >
      <IndexRoute component={requireAuthentication(Home)} />
      <Route path='/new' component={requireAuthenticationFunc(Write)} />
      <Route path='/inbox/:inbox' component={Inbox} >
        <Route path='/inbox/:inbox/:message' component={Message} />
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)