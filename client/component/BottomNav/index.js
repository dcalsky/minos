import React, {Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {deepOrange900, grey200} from 'material-ui/styles/colors'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui/svg-icons/action/home'
import BookIcon from 'material-ui/svg-icons/action/book'
import PersonIcon from 'material-ui/svg-icons/social/person'
import { browserHistory } from 'react-router'


const style = {
  iconCenter: {
    display: 'inline-block'
  },
  navBottom: {
    position: 'fixed',
    bottom: 0,
    background: 'rgb(191, 54, 12) !important'
  }
}

class BottomNav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {store} = this.props.route
    return (
        <BottomNavigation style={style.navBottom} selectedIndex={store.index.value}>
          <BottomNavigationItem
            label="Home"
            icon={<HomeIcon style={style.iconCenter} />}
            onTouchTap={() => {
              store.index.changeIndex(0)
              browserHistory.push('/home')
            }}
          />
          <BottomNavigationItem
            label="Function"
            icon={<BookIcon style={style.iconCenter} />}
            onTouchTap={() => {
              if(store.recipe.id) {
                store.index.changeIndex(1)
                browserHistory.push('/detail')
              }
            }}
          />
          <BottomNavigationItem
            label="Profile"
            icon={<PersonIcon style={style.iconCenter} />}
            onTouchTap={() => {
              //if(store.photo.id) {
              const username = localStorage.getItem('username')
              const token = localStorage.getItem('token')
              if(username && token) {
                store.index.changeIndex(2)
                browserHistory.push('/user')
              } else {
                store.index.changeIndex(-1)
                browserHistory.push('/login')
              }

              //}
            }}
          />
        </BottomNavigation>
    )
  }
}

export default BottomNav
