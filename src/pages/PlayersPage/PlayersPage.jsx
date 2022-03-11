import {Component} from 'react'
import './PlayersPage.css'

export default class PlayersPage extends Component {
    state = {
        players: [],
        name: '',
        position: '',
        number: '',
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value,
            error:''
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let fetchResponse = await fetch ('/api/players', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: this.state.name,
                    position: this.state.position,
                    number: this.state.number,
                })
            })
            let serverResponse = await fetchResponse.json()
            
            let fetchPlayersResponse = await fetch('/api/players')
            let players = await fetchPlayersResponse.json()
            console.log('playerresponse', players)
            console.log("Success:", serverResponse)
            this.setState({
                players: players,
                name:'',
                position: '',
                number: '',
            })
        }catch (err){
            console.error("Error", err)
        }
    }

    handleDelete = async (id) => {
        try{
            let fetchResponse = await fetch ('/api/players/', {
                method:'DELETE',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({p_id:id})
            })
            if (!fetchResponse.ok) throw new Error("Fetch failed = Bad request")
            let players = await fetchResponse.json()
            this.setState({players:players})
            
        }catch (err) {

        }
    }

    async componentDidMount() {
        try {
            let fetchPlayersResponse = await fetch('/api/players/')
            let players = await fetchPlayersResponse.json()
            this.setState({players: players})
        }catch (err) {
            console.error('error:', err)
        }
    }

    render() {
    return(
        <>
            <h2>Players</h2> 
                <div className="playerContainer">
                    <div className="playerCard">
                    {this.state.players.map(p => (
                        <article key={p._id}>
                            <div>{p.name}</div>
                            <div>{p.position}</div>
                            <div>{p.number}</div>
                            <button onClick={()=>(this.handleDelete(p._id))}>Delete</button>
                            </article>
                    ))}
                    </div>
                    <section>
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <label>
                                <span>Name</span>
                                <input name='name' value={this.state.name} onChange={this.handleChange}/>
                            </label>
                            <label>
                                <span>Position</span>
                                <select name="position" value={this.state.position} onChange={this.handleChange}>
                                    <option value="OH">OH</option>
                                    <option value="M">M</option>
                                    <option value="S">S</option>
                                    <option value="RS">RS</option>
                                </select>
                            </label>
                            <label>
                                <span>Number</span>
                                <input name='number' value={this.state.number} onChange={this.handleChange}/>
                            </label>
                            <button className="addPlayer"type="submit">Add Person</button>
                        </form>
                    </section>    
                </div>
        </>
    )
 }
}