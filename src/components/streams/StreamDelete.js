import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import history from '../../history'
import Modal from '../Modal'
import { fetchStreamThunk, deleteStreamThunk } from '../../actions/thunk'

class StreamDelete extends Component {
  componentDidMount () {
    const { 
      match: { params: { id }}, 
      fetchStreamThunk 
    } = this.props
    fetchStreamThunk(id)
  }
  renderActions = () => {
    const {
      match: { params: { id }},  
      deleteStreamThunk
    } = this.props
    return (
      <>
        <button onClick={() => deleteStreamThunk(id)} className='btn btn-danger'>Delete</button>
        <Link to='/' className='btn btn-secondary'>Cancel</Link>
      </>
    )
  }

  renderContent () {
    const { stream } = this.props
    return !stream
      ? 'Are you sure you want to delete this stream ?'
      : `Are you sure you want to delete this stream with title: ${stream.title}`
  }

  render () {
    return (
      <Modal
        title='Stream Delete'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDissmiss={() => history.push('/')}
      />
    )
  }
}

function selector (state, ownProps) {
  const { match: { params: { id } } } = ownProps
  return {
    stream: state.streams[id]
  }
}
const actions = {
  fetchStreamThunk,
  deleteStreamThunk
}
export default connect(selector, actions)(StreamDelete)
