import React from 'react'
import { Router, Route } from 'react-router-dom'

import Header from './Header'
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from './streams'
import history from '../history'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className='container'>
          <Header />
          <div className='mt-4'>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/show' exact component={StreamShow} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
