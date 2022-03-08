import React from 'react'
import { Link } from 'react-router-dom';

function Nav(props){
    return(
        <div className="component">
            {props.links.map(l => <Link>{l}</Link>)}
        </div>
    )
}
export default Nav;