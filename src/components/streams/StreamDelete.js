import React from 'react'

import history from '../../history'
import Modal from '../Modal'

const StreamDelete = () => {
  const actions = (
    <>
      <button className='btn btn-danger'>Delete</button>
      <button className='btn btn-secondary'>Cancel</button>
    </>
  )
  return (
    <div>
      StreamDelete
      <Modal
        title='Stream Delete'
        content='Are you sure you want to delete this stream'
        actions={actions}
        onDissmiss={() => history.push('/')}
      />
    </div>
  )
}

export default StreamDelete
