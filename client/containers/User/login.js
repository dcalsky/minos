import React from 'react'
import request from '../../utils/auth.js'
import {TextField, RaisedButton, FlatButton} from 'material-ui'
import {browserHistory} from 'react-router'
import config from '../../config'

const URL = config.userServer.URL

const style = {
  form: {},
  login: {
    padding: '30px 20px 86px 20px'
  }
}

export default class Login extends React.Component {
  state = {
    username: null,
    password: null,
    token: null,
    message: null,
    mode: 1
  }

  constructor(props) {
    super(props)

    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    console.log(username, token)
    if (username && token.length > 5) {
      props.store.index.changeIndex(2)
      browserHistory.push('/user')
    }
  }

  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  // success: username, token
  // error: code, message
  handleLoginSubmit(e) {
    e.preventDefault()
    request({
      method: 'POST',
      url: URL + '/user/login',
      body: {
        username: this.state.username,
        password: this.state.password
      },
      success: (err, res) => {
        if(!err && !res.body.code) {
          const {token, username, message} = res.body
          localStorage.setItem('username', username)
          localStorage.setItem('token', token)
          this.setState({
            token: token,
            message: message
          })
          this.props.store.index.changeIndex(2)
          browserHistory.push('/user')
        }
      }
    })
  }

  // success: username, token
  // error: code, message
  handleRegisterSubmit(e) {
    e.preventDefault()
    request({
      method: 'POST',
      url: URL + '/user/register',
      body: {
        username: this.state.username,
        password: this.state.password,
      },
      success: (err, res) => {
        if (err) {
          throw err
        } else {
          const {token, username, message} = res.body
          this.props.store.user.login(username, token) // 寫入store
          localStorage.setItem('username', username)
          localStorage.setItem('token', token)
          this.setState({
            token: token,
            message: message
          })
        }
      }
    })
  }

  render() {
    return (
      <div style={style.login}>
        {
          this.state.mode === 1 ?
            <form onSubmit={::this.handleLoginSubmit} style={style.form}>
              <TextField
                hintText="Username Field"
                type="text"
                fullWidth={true}
                onChange={::this.handleChangeUsername}
              /><br />
              <TextField
                hintText="Password Field"
                type="password"
                fullWidth={true}
                onChange={::this.handleChangePassword}
              /><br />
              <RaisedButton type="submit" label="Login"/>
            </form>
            :
            <form onSubmit={::this.handleRegisterSubmit} style={style.form}>
              <TextField hintText="Username Field"
                         type="text"
                         fullWidth={true}
                         onChange={::this.handleChangeUsername}
              /><br />
              <TextField
                hintText="Password Field"
                type="password"
                fullWidth={true}
                onChange={::this.handleChangePassword}
              /><br />
              <RaisedButton type="submit" label="Register"/>
            </form>
        }
      </div>
    )
  }
}