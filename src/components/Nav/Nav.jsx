import './Nav.css'
import {Link} from 'react-router-dom'
export default function Nav(props) {
    
    return (
        <nav>
            <ul className='nav-links'>
                <Link to="/"><li>Formations</li></Link>
                <Link to="/players"><li>Players</li></Link>
            {props.user ? 
                (<Link to="/" onClick={props.removeUserFromState}><li>Logout</li></Link>)
                :
                (<Link to="/login"><li>Login</li></Link>)
            }
            </ul>
        </nav>
    )
}