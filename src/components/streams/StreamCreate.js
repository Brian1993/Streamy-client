import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createStreamThunk } from '../../actions/thunk'
import StreamForm from './StreamForm'

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStreamThunk(formValues)
  }

  render () {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const actions = {
  createStreamThunk
}

export default connect(null, actions)(StreamCreate)