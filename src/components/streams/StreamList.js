import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { fetchStreamsThunk } from '../../actions/thunk'

class StreamList extends Component {
  componentDidMount () {
    this.props.fetchStreamsThunk()
  }

  renderAdmin = (stream) => {
    const { id } = stream 
   return stream.userId === this.props.currentUserId
      ? (
          <div className='col-sm-6 '>
            <div className='float-right align-middle'>
              <Link 
                to={`/streams/edit/${id}`} 
                className='btn btn-info'
              >
                EDIT
              </Link>
              <Link 
                to={`/streams/delete/${id}`}
                className='ml-2 btn btn-danger'
              >
                Delete
              </Link>
            </div>
          </div>
        )
      : null
  }

  renderList () {
    const { streams } = this.props
    const iconStyle = {
      fontSize: '40px',
      margin: 'auto'
    }
    return _.map(streams, stream => (
      <li className='list-group-item' key={stream.id}>
        <div className='row'>
          <div className='col-sm-1'>
            <div className='align-middle'>
              <i className='fas fa-camera' style={iconStyle} />
            </div>
          </div>
          <div className='col-sm-5'>
            <h5>
              <Link to={`/streams/${stream.id}`} className='card-title'>{stream.title}</Link>
            </h5>
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
