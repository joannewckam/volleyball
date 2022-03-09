import { Component } from 'react'
  
export default class LoginForm extends Component {
state ={
    email: '',
    password: '',
    error: '',
}
handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
    })
}
handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
        const fetchResponse = await fetch('/api/users/login',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email: this.state.email, password: this.state.password, })
        })

        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

        let token = await fetchResponse.json()
        localStorage.setItem('token', token);

        const userDoc = JSON.parse(atob(token.split('.')[1])).user;
        this.props.setUserInState(userDoc)

    } catch (err) {
        console.log("Login error", err)
        this.setState({ error: 'Login failed - try again'})
    }
}

render(){
    return (
        <>
            <div className="loginPage" onSubmit={this.handleSubmit}>
                <section>
                        <form autocomplete="off">
                            <label></label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" required />
                            <label></label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" required />
                            <button className="login" type="submit" >Login</button>
                        </form>
                </section>    
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        </>
        )    
    }
} 