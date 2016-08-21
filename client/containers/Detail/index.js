import React, {Component} from 'react'
import { List, ListItem} from 'material-ui/List';
import { Card, CardHeader, CardText} from 'material-ui/Card'
import { RaisedButton, FlatButton, Dialog, TextField, Snackbar} from 'material-ui'
import { browserHistory } from 'react-router'
import {orange500} from 'material-ui/styles/colors'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import request from '../../utils/auth.js'
import config from '../../config'

const URL = config.userServer.URL

const style = {
  paper: {
    width: '100%',
    padding: '15px 0 86px 0'
  }

};

export default class Detail extends Component {
  state = {
    snackBarOpen: false,
    modalOpen: false,
    foodName: null
  }
  constructor(props) {
    super(props)
    if(!props.store.recipe.title) {
      props.store.index.changeIndex(0)
      browserHistory.push('/home')
    }
  }
  componentDidMount() {
    const id = this.props.store.recipe.id
    // todo fetch()
  }
  openModal() {
    this.setState({modalOpen: true});
  }
  closeModal() {
    this.setState({modalOpen: false});
  }
  handleInfoSubmit() {
    this.props.store.index.changeIndex(0)
    browserHistory.push('/home')
  }
  handleFoodNameChange(e) {
    this.setState({
      foodName: e.target.value
    })
  }
  closeSnackBar() {
    this.setState({
      snackBarOpen: false
    })
  }
  addToStar() {
    const {title, ingredients, steps} = this.props.store.recipe
    const _ingredients = JSON.stringify(ingredients)
    const _steps = JSON.stringify(steps)
    request({
      method: 'POST',
      url: URL + '/recipe/add',
      auth: `Bearer ${localStorage.getItem('token')}`,
      body: {
        title: title,
        ingredients: _ingredients,
        steps: _steps,
        type: 'star'
      },
      success: (err, res) => {
        if(res.body.message === 'ok') {
          this.setState({
            snackBarOpen: true
          })
        }
      }
    })
  }
  render() {
    let {store} = this.props
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={::this.closeModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={::this.handleInfoSubmit}
      />,
    ]
    const {title, steps, ingredients} = this.props.store.recipe
    const _steps = JSON.parse(steps)
    const _ingredients = JSON.parse(ingredients)
    return (
      <div  style={style.paper}>
          <List>
            <ListItem  primaryText={"食物名稱: " + title} />
          </List>

        <Card>`
          <CardHeader
            title="配料"
          />
          <CardText>
            {_ingredients.map((item) => {
              const amount = item.amount || ""
              return (
                <span>{item.name + "  " + amount + "、 "}</span>
              )
            })}
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="步驟"
          />
          <CardText>
            {_steps.map((item, i) => {
              i += 1
              return (
                <span>{i + '、 ' + item.step}<br/><br/></span>
              )
            })}
          </CardText>
        </Card>
        <div style={{position: 'relative', marginTop: 20}}>
          <RaisedButton
            labelPosition="after"
            icon={<ActionGrade color={orange500}/>}
            label="收藏"
            onClick={::this.addToStar}
          />
          <RaisedButton style={{position: 'absolute', right: 0}} secondary={true} label="存在搜索误差?" onTouchTap={::this.openModal}/>
          <Dialog
            title="指出其中存在的錯誤,以便我們為您提供更舒適的Smart Life!"
            actions={actions}
            modal={false}
            open={this.state.modalOpen}
            onRequestClose={::this.closeModal}
          >
            <TextField
              onChange={::this.handleFoodNameChange}
              hintText="照片里的食物是?"
            />
          </Dialog>
        </div>
        <Snackbar
          open={this.state.snackBarOpen}
          message="Add successfully!"
          autoHideDuration={2000}
          onRequestClose={::this.closeSnackBar}
        />
      </div>

    )
  }
}
// 1、糯米2500克。洗凈浸泡5個小時，再瀝幹水分<br/><br/>
// 2、粽葉我準備了約200片，沒用完。多備點沒錯。幹粽葉提前泡發壹天，再兩面擦洗幹凈<br/><br/>
// 3、五花肉800克。切兩指寬的大塊。用生姜、大蒜、鹽、老抽、生抽、白酒腌入味，我腌了壹天。調味要比正常的味道鹹壹些，煮出來的味道才正好<br/><br/>
// 4、放壹點食用堿，壹點點的撒哦，堿壹放，糯米的顏色立刻就變了。微黃就可以了。放了堿的粽子煮出來會比較軟爛，且有壹定的防腐作用。但是別放多了。而且煮出來顏色微黃，更加好看<br/><br/>
// ...