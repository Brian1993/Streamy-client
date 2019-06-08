import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchStreamThunk, editStreamThunk } from '../../actions/thunk'
import StreamForm from './StreamForm'
import _ from 'lodash'

class StreamEdit extends Component {
  componentDidMount () {
    const { 
      match: { params: { id }}, 
      fetchStreamThunk 
    } = this.props
    fetchStreamThunk(id)
  }

  onSubmit = formValues => {
    const { match: { params: { id }}} = this.props
    this.props.editStreamThunk(id, formValues)
  }
  render () {
    const { stream } = this.props
    const initialValues = stream ? _.pick(stream, 'title', 'description') : {} 
    return (
      !stream
       ? <div>...loading</div>
       :  <StreamForm
            initialValues={initialValues}
            onSubmit={this.onSubmit}
          />
    )
  }
}

function selector (state, props) {
  const { match: { params: { id } } } = props
  return {
    stream: state.streams[id],
  }
}

const actions = {
  fetchStreamThunk,
  editStreamThunk
}
export default connect(selector, actions)(StreamEdit)
