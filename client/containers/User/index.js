import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import {Tabs, Tab} from 'material-ui/Tabs'
import {FlatButton, Popover, Menu, MenuItem} from 'material-ui'
import {pinkA200} from 'material-ui/styles/colors'
import {browserHistory} from 'react-router'
import request from '../../utils/auth.js'
import config from '../../config'

const URL = config.userServer.URL

const style = {
  paper: {
    padding: '10px 0 30px 0'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs: {
    padding: 8
  }
}

export default class User extends Component {
  state = {
    starRecipes: [],
    myRecipes: [],
    completed: false
  }
  constructor(props) {
    super(props)
    if(localStorage.getItem('token').length < 5 || !localStorage.getItem('username')) {
      props.store.index.changeIndex(-1)
      browserHistory.push('/login')
    }
  }

  componentDidMount() {
    request({
      method: 'GET',
      url: URL + '/recipe/get',
      auth: `Bearer ${localStorage.getItem('token')}`,
      success: (err, res) => {
        let star = [], my = []
        res.body.content.map((item) => {
          if(item.type === 'star') {
            star.push(item)
          } else if(item.type === 'create') {
            my.push(item)
          }
        })
        this.setState({
          completed: true,
          starRecipes: star,
          myRecipes: my
        })
      }
    })
  }
  handleTouchTap(event) {
    event.preventDefault()
    this.setState({
      popOpen: true,
      anchorEl: event.currentTarget,
    })
  }
  handleRequestClose() {
    this.setState({
      popOpen: false,
    })
  }
  handleLogout() {
    this.props.store.user.logout()
    this.props.store.index.changeIndex(-1)
    browserHistory.push('/login')
  }
  addToCollection() {
    this.props.store.index.changeIndex(-1)
    browserHistory.push('/new')
  }
  render() {
    let {store} = this.props
    const username = localStorage.getItem('username')
    return (
      <div style={style.paper}>
        <List>
          <ListItem
            primaryText={username}
            leftIcon={<ActionGrade color={pinkA200}/>}
            onTouchTap={::this.handleTouchTap}
          />
        </List>
        <Tabs>
          <Tab label="收藏的食譜"  >
            <div style={style.tabs}>
              {
                this.state.starRecipes.length === 0 ?
                  this.state.completed ?
                    <h2 style={style.headline}>未收藏任何食譜</h2>
                    :
                    <h2 style={style.headline}>Loading ...</h2>
                    :
                  <List>
                    {this.state.starRecipes.map((item, i) => {
                      return (
                        <ListItem
                          onClick={() => {
                            store.recipe.changeRecipe({
                              title: item.title,
                              ingredients: item.ingredients,
                              steps: item.steps
                            })
                            store.index.changeIndex(1)
                            browserHistory.push('/detail')
                          }}
                          key={"star" + i}
                          primaryText={item.title} />
                      )
                    })}
                  </List>
              }
            </div>
          </Tab>
          <Tab label="我的食譜" >
            <div style={style.tabs}>
              {
                this.state.myRecipes.length === 0 ?
                  this.state.completed ?
                    <h2 style={style.headline}>未添加任何食譜</h2>
                    :
                    <h2 style={style.headline}>Loading ...</h2>
                  :
                  <List>
                    {this.state.myRecipes.map((item, i) => {
                      return (
                        <ListItem
                          onClick={() => {
                            store.recipe.changeRecipe({
                              title: item.title,
                              ingredients: item.ingredients,
                              steps: item.steps
                            })
                            store.index.changeIndex(1)
                            browserHistory.push('/detail')
                          }}
                          key={"my" + i}
                          primaryText={item.title} />
                      )
                    })}
                  </List>
              }
            </div>
          </Tab>
          {/*<Tab*/}
            {/*label="想吃的食物">*/}
            {/*<div style={style.tabs}>*/}
              {/*<h2 style={style.headline}>敬請期待 ...</h2>*/}
            {/*</div>*/}
          {/*</Tab>*/}
        </Tabs>
        <Popover
          open={this.state.popOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={::this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="添加我的食譜" onClick={::this.addToCollection} />
            <MenuItem primaryText="登出" onClick={::this.handleLogout} />
          </Menu>
        </Popover>
      </div>

    )
  }
}