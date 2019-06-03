import React from 'react'

class GoogleAuth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSignedIn: null
    }
  }

  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '916495204418-fvu3hgfr59k3ts5ha9662c8qbj242ldu.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => this.setState({ isSignedIn: this.auth.isSignedIn.get() })

  onSignIn = () => this.auth.signIn()
  

  onSignOut = () => this.auth.signOut()

  renderAuthBttton () {
    return this.state.isSignedIn === null 
      ? null
      : this.state.isSignedIn
        ? <button onClick={this.onSignOut} className='btn btn-danger'><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign out</button>
        :  <button onClick={this.onSignIn} className='btn btn-primary'><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign in with google</button>
  }

  render () {
    return <div>{this.renderAuthBttton()}</div>
  }
}

export default GoogleAuth
