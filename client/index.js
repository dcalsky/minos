
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Home from './containers/Home'
import Detail from './containers/Detail'
import User from './containers/User'
import Login from './containers/User/login'
import New from './containers/Detail/new'

import './normalize.css'

injectTapEventPlugin()

// 维持一套状态在root组件
let store = {
  index: {
    value: 0,
    changeIndex(val) {
      this.value = val
    }
  },
  recipe: {
    id: null,
    title: null,
    ingredients: [],
    steps: [],
    changeId(id) {
      this.id = id
    },
    changeRecipe({id, title, ingredients, steps}) {
      this.title = title
      this.ingredients = ingredients
      this.steps = steps
    }
  },
  user: {
    username: null,
    token: null,
    login(username, token) {
      this.username = username
      this.token = token
    },
    logout() {
      this.username = this.token = null
      localStorage.setItem('token', 0)
      localStorage.setItem('username', 0)
    }
  }
}

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App} store={store}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={New} />
      </Route>
    </Router>,
  document.getElementById('app')
)
