import { Link } from 'react-router-dom'
import {Component} from 'react'
export default class PlayersPage extends Component {
state = {
    name: '',
    position: '',
    number: '',
}
    render() {
    return(
        <>
            <h2>Players Page</h2> 
                {props.players.map(p =>(
                <article key={p.name}>
                <div>{p.preferredPosition}</div>
                <div>{p.number}</div>
                </article>
                ))}
                <form>
                    <label>
                        <span>Name</span>
                        <input name='Player'/>
                    </label>
                    <label>
                        <span>Position</span>
                        <select name="position">
                            <option value="OH">OH</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                            <option value="RS">RS</option>
                        </select>
                    </label>
                    <button type="submit">Add Person</button>
                </form>

                <Link to='/players/new'>Add Player</Link>
        </>
    )
 }
}