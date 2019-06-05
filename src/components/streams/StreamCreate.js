import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
  renderInput = ({ input, label, meta }) => {
    const { error, touched } = meta
    const className = touched && error ? 'form-control is-invalid' : 'form-control'
    return (
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>{label}</label>
        <input {...input} className={className} />
        <small className='invalid-feedback'>{error}</small>
      </div>
    )
  }

  onSubmit (formValues) {
    console.log(formValues)
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter title' />
        <Field name='description' component={this.renderInput} label='Enter title' />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) errors.title = 'You must enter a title'
  if (!formValues.description) errors.description = 'You must enter a description'
  return errors
}

const streamCreateform = {
  form: 'streamCreate',
  validate
}
export default reduxForm(streamCreateform)(StreamCreate)
