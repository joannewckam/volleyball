import './AuthPage.css'
export default function AuthPage (){
    return (
        <div className="loginPage">
             <section>
                    <form id="login">
                        <label>
                            <input name='email' placeholder="email"/>
                        </label>
                        <label>
                            <input name='password' placeholder="password"/>
                        </label>
                        <label>
                            <input name='password' placeholder="password"/>
                        </label>
            <button className="login" type="submit" form="login">Login</button>
            <button className="signup" form="login">Signup</button>
                    </form>
            </section>    
        </div>
    )
}