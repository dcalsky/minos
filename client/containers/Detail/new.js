import React, {Component} from 'react'
import {RaisedButton, Paper, TextField, Divider, Snackbar} from 'material-ui'
import {browserHistory} from 'react-router'
import request from '../../utils/auth.js'
import config from '../../config'

const URL = config.userServer.URL

const style = {
  paper: {
    width: '100%',
    padding: '15px 5px 86px 5px'
  }
}

export default class Detail extends Component {
  state = {
    title: null,
    ingredients: null,
    steps: null,
    snackBarOpen: false
  }

  constructor(props) {
    super(props)
    if (localStorage.getItem('token').length < 5 || !localStorage.getItem('username')) {
      props.store.index.changeIndex(-1)
      browserHistory.push('/login')
    }
  }

  closeSnackBar() {
    this.setState({
      snackBarOpen: false
    })
    this.props.store.index.changeIndex(2)
    browserHistory.push('/user')
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleStepsChange(e) {
    this.setState({
      steps: e.target.value
    })
  }

  handleIngredientsChange(e) {
    this.setState({
      ingredients: e.target.value
    })
  }

  addToCollection() {
    const ingredients = JSON.stringify([{name: this.state.ingredients}])
    const steps = JSON.stringify([{step: this.state.steps}])
    request({
      method: 'POST',
      url: URL + '/recipe/add',
      auth: `Bearer ${localStorage.getItem('token')}`,
      body: {
        title: this.state.title,
        ingredients: ingredients,
        steps: steps,
        type: 'create'
      },
      success: (err, res) => {
        if (err) {
          throw err
        } else {
          if (res.body.message === 'ok') {
            this.setState({
              snackBarOpen: true
            })
          }
        }
      }
    })
  }

  render() {
    let {store} = this.props
    return (
      <Paper zDepth={2} style={style.paper}>
        <TextField hintText="標題" floatingLabelText="Title" style={style} underlineShow={false}
                   onChange={::this.handleTitleChange}/>
        <Divider />
        <TextField
          hintText="所需配料"
          floatingLabelText="Ingredients"
          multiLine={true}
          rows={2}
          rowsMax={6}
          underlineShow={false}
          onChange={::this.handleIngredientsChange}
        />
        <Divider />
        <TextField
          hintText="製作步驟"
          floatingLabelText="Steps"
          multiLine={true}
          rows={2}
          rowsMax={6}
          underlineShow={false}
          onChange={::this.handleStepsChange}
        />
        <Divider />
        <RaisedButton
          style={{marginTop: 40}}
          label="提交"
          onClick={::this.addToCollection}
          fullWidth={true}/>
        <Snackbar
          open={this.state.snackBarOpen}
          message="create successfully!"
          autoHideDuration={2000}
          onRequestClose={::this.closeSnackBar}
        />
      </Paper>

    )
  }
}