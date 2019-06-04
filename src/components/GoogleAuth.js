import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '916495204418-fvu3hgfr59k3ts5ha9662c8qbj242ldu.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = isSignedIn => {
    const { signIn, signOut } = this.props
    const userId = this.auth.currentUser.get().getId()
    isSignedIn ? signIn(userId) : signOut()
  }

  onSignInClick = () => { this.auth.signIn() }
  

  onSignOutClick = () => this.auth.signOut()

  renderAuthBttton () {
    const { isSignedIn } = this.props
    return isSignedIn === null 
      ? null
      : isSignedIn
        ? <button onClick={this.onSignOutClick} className='btn btn-danger'><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign out</button>
        :  <button onClick={this.onSignInClick} className='btn btn-primary'><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign in with google</button>
  }

  render () {
    return <div>{this.renderAuthBttton()}</div>
  }
}

function selector (state) {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

const actions = {
  signIn,
  signOut
}
export default connect(selector, actions)(GoogleAuth)
