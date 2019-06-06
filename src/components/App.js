import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from './streams'

const App = () => {
  return (
    <div>
      <Router>
        <div className='container'>
          <Header />
          <div className='mt-4'>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit' exact component={StreamEdit} />
            <Route path='/streams/delete' exact component={StreamDelete} />
            <Route path='/streams/show' exact component={StreamShow} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
