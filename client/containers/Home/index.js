import React, {Component} from 'react'
import {RaisedButton, CircularProgress} from 'material-ui'
import ActionAndroid from 'material-ui/svg-icons/file/cloud-upload'
import Picture from 'material-ui/svg-icons/image/add-a-photo'
import defaultPhoto from './default.jpg'
import { browserHistory } from 'react-router'
import Qiniu from 'react-qiniu'
import request from '../../utils/auth.js'
import config from '../../config'

const URL = config.photoServer.URL


const style = {
  qiniu: {
    textAlign: 'center',
    border: 'none',
    paddingTop: 40
  },
  photoBox: {
    position: 'relative',
    border: '2px dashed #a1a1a1'
  },
  photo: {
    width: '100%',
    maxHeight: 375
  },
  progressBox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)'
  },
  progress: {
    position: 'absolute'
  }
}

export default class Home extends Component {
  state = {
    token: null,
    uploadCompleted: false,
    uploading: false,
    photoURL: null
  }
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    let self = this
    request({
      method: 'GET',
      url: URL + '/qiniu/uptoken',
      success: (err, res) => {
          self.setState({
            token: res.body.uptoken
          })
      }
    })
  }
  onUpload(files) {
    let self = this
    this.setState({uploading: true})
    files.map(function (file) {
      let reader  = new FileReader()

      reader.addEventListener("load", function () { // FileReader来读取File类型
        self.setState({
          photoURL: file.preview
        })
      }, false)

      if (file) {
        reader.readAsDataURL(file)
      }

      file.onprogress = function(e) {
        if(e.percent === 100 && e.target.response) { // 完成百分比
          const result = JSON.parse(e.target.response)
          self.props.store.recipe.changeId(result._id)
          request({
            method: 'GET',
            url: URL + '/upload/analyze' + '?id=' + result._id,
            success: (err, res) => {
              if(err || res.body.err) {
                self.setState({
                  uploading: false,
                  uploadCompleted: true
                })
              } else {
                const {title, _id, ingredients, instructions} = res.body
                if(_id) {
                  self.props.store.recipe.changeRecipe({
                    title: title,
                    ingredients: JSON.stringify(ingredients),
                    steps: JSON.stringify(instructions)
                  })
                  self.setState({
                    uploading: false,
                    uploadCompleted: true
                  })
                  self.props.store.index.changeIndex(1)
                  browserHistory.push('detail')
                }
              }
            }
          })

        }
      }
    })
  }
  render() {
    return(
      <div style={{padding: '30px 10px 100px 10px'}}>
        <div style={style.photoBox}>
          {
            this.state.uploading ?
              <div style={style.progressBox}>
                <CircularProgress style={style.progress} size={4} />
              </div>
              :
              null
          }
          <img style={style.photo} src={this.state.photoURL || defaultPhoto} alt=""/>
        </div>
        <Qiniu onDrop={()=>{}} style={style.qiniu} token={this.state.token} onUpload={::this.onUpload}>
            <RaisedButton
              label="拍張照片"
              labelPosition="after"
              fullWidth={true}
              icon={<Picture />}
            />
        </Qiniu>
      </div>
    )
  }
}