import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
  renderInput () {

  }

  render () {
    return (
      <div>
        <Field name='title' component={this} />
        <Field name='description' />
      </div>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
