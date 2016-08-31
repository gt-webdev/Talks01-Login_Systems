import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Auth0Lock from 'auth0-lock'
import request from 'superagent';

export default React.createClass({
  getInitialState: function() {
    return {
      token: null,
      name: null,
      email: null,
      picture: null,
      gender: null
    }
  },
  componentDidMount: function() {
    console.log('ready!')
    // Code for initial mount goes here
    /* this.lock = new Auth0Lock('a2fICjgon77eKU58wBrqLv3A99rFgKuI', 'gtwebdev.auth0.com', {
      auth: {
        params: {scope: 'openid email profile'},
      }
    });
    this.lock.on('authenticated', this._doAuthentication); */
  },
  _doAuthentication(authResult){
    /* console.log(authResult);
    this.setState({
      token: authResult.idToken,
      name: authResult.idTokenPayload.nickname,
      email: authResult.idTokenPayload.email,
      picture: authResult.idTokenPayload.picture,
      gender: authResult.idTokenPayload.gender
    }) */
  },
  login: function() {
    console.log('login');
    // this.lock.show();
  },
  signup: function() {
    console.log('signup');
    // this.lock.show({ initialScreen: 'signUp' });
  },
  logout: function() {
    console.log('logout');
    /*this.setState({
      token: null,
      name: null,
      email: null,
      picture: null,
      gender: null
    }) */
  },
  ping: function() {
    console.log('ping');
    /*request.get('/authInfo')
      .set('authorization', 'Bearer ' + this.state.token)
      .end((err, res) => {
        if (err) {
          alert(err);
        } else {
          alert(JSON.stringify(res));
        }
      });*/
  },
  render: function() {
    return (
      <div className="app">
        <h1>Are you ready to test Login!?!</h1>
        <p>
          <button onClick={this.login}>Log In</button>
          <button onClick={this.signup}>Sign Up</button>
          <button onClick={this.logout}>Log Out</button>
          <button onClick={this.ping}>Ping Server</button>
        </p>
        <ul>
          <li>Token: {this.state.token}</li>
          <li>Name: {this.state.name}</li>
          <li>Email: {this.state.email}</li>
          <li>Picture: <img src={this.state.picture} /></li>
          <li>Gender: {this.state.gender}</li>
        </ul>
      </div>
    );
  }
});
