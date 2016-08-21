
import React, { Component } from 'react'
import {deepOrange900, amberA100, grey200} from 'material-ui/styles/colors'
import {AppBar, IconButton} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import iconSrc from './icon.png'
import BottomNav from '../../component/BottomNav'
import Icon from 'material-ui/svg-icons/action/favorite'

const muiTheme = getMuiTheme({
  appBar: {
    height: 100,
  },
  palette: {
    primary1Color: deepOrange900
  },
  bottomNavigation: {
    backgroundColor: deepOrange900,
    selectedColor: grey200,
  }
});

export default class App extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    const { children, route } = this.props
    const store = route.store
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            style={{background: deepOrange900}}
            iconElementLeft={<IconButton><img src={iconSrc} /></IconButton>}
            title="PicFood"
          />
          {children && React.cloneElement(children, {
            store: store
          })}
          <BottomNav {...this.props} />
        </div>
      </MuiThemeProvider>
    )
  }
}