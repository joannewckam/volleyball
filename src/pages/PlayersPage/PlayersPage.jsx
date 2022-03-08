import {Component} from 'react'
import './PlayersPage.css'

export default class PlayersPage extends Component {
    state = {
        players: [{name: 'Jenni', position: 'OH', number:1234567890}],
        name: '',
        position: '',
        number: 1234567890,
    }
    render() {
    return(
        <>
            <h2>Players Page</h2> 
                <div className="playerContainer">
                    <section>
                        <form>
                            <label>
                                <span>Name</span>
                                <input name='name'/>
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
                            <label>
                                <span>Number</span>
                                <input name='number'/>
                            </label>
                            <button type="submit">Add Person</button>
                        </form>
                    </section>    
                </div>
        </>
    )
 }
}