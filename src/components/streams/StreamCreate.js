import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
  renderInput ({ input, label }) {
    return (
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>{label}</label>
        <input {...input} className='form-control' />
      </div>
    )
  }

  onSubmit (formValue) {
    console.log(formValue)
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

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
