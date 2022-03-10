import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { useState } from 'react';

export default function AuthPage (props) {
    const [showLogin, setShowLogin] = useState(true); 
    const toggleAuth = () => {
        setShowLogin(!showLogin)
    }
        return (
            <main className="AuthPage">
                {showLogin ?
                <LoginForm toggleAuth={toggleAuth} setUserInState={props.setUserInState}/> 
                :
                <SignUpForm toggleAuth={toggleAuth} setUserInState={props.setUserInState}/>
                }
            </main> 
        )
    }
    
