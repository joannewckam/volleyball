import { Component } from 'react';
import './SignUpForm.css'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,})
      })
      
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
      let token = await fetchResponse.json() // 3. decode fetch response to get jwt from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage
      
      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc)
    } catch (err) {
        console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
            <>
                <div className="signUpPage" onSubmit={this.handleSubmit}>
                    <section>
                            <form autoComplete="off">
                                <label></label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" required />
                                <label></label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"required />
                                <label></label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"required />
                                <label></label>
                                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} placeholder="password"required />
                                <button className="login" type="submit">Signup</button>
                            </form>
                                <button className="signup" onClick={this.props.toggleAuth} >Have an account?</button>
                    </section>    
                </div>
            </>
    );
  }
}
