import React, { Component } from 'react'
import { connect } from 'react-redux'
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
            <div className='float-right'>
              <button className='btn btn-info'>EDIT</button>
              <button className='ml-2 btn btn-danger'>danger</button>
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
              <i className='fas fa-camera ' style={iconStyle} />
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

  render () {
    return (
      <div>
        <h1>StreamList</h1>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function selector (state) {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  }
}
const actions = {
  fetchStreamsThunk
}

export default connect(selector, actions)(StreamList)
