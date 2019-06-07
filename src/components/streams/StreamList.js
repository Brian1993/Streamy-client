import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { fetchStreamsThunk } from '../../actions/thunk'

const iconStyle = {
  fontSize: '40px',
  margin: 'auto'
}
class StreamList extends Component {
  componentDidMount () {
    this.props.fetchStreamsThunk()
  }

  renderAdmin = (stream) => {
   return stream.userId === this.props.currentUserId
      ? (
          <div className='col-sm-6 '>
            <div className='float-right align-middle'> 
              <button className='btn btn-info'>EDIT</button>
              <button className='ml-2 btn btn-danger'>Delete</button>
            </div>
          </div>
        )
      : null
  }

  renderList () {
    const { streams } = this.props
    return _.map(streams, stream => (
      <li className='list-group-item' key={stream.id}>
        <div className='row'>
          <div className='col-sm-1'>
            <div className='align-middle'>
              <i className='fas fa-camera' style={iconStyle} />
            </div>
          </div>
          <div className='col-sm-5'>
            <h5 className='card-title'>{stream.title}</h5>
            <p className='card-text'>{stream.description}</p>
          </div>
          {this.renderAdmin(stream)}
        </div>
      </li>
    ))
  }
  
  renderCreate () {
    return this.props.isSignedIn 
      ? <div className='row'>
          <div className='col-9'/>
          <div className='col-3'>
            <Link to='/streams/new' className='btn btn-primary mt-3 float-right'>Create Stream</Link>
          </div>
        </div>
      : null
  }
  render () {
    return (
      <div>
        <h1>StreamList</h1>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
        {this.renderCreate()}
      </div>
    )
  }
}

function selector (state) {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}
const actions = {
  fetchStreamsThunk
}

export default connect(selector, actions)(StreamList)
