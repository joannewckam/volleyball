import {Component} from 'react'
import './PlayersPage.css'

export default class PlayersPage extends Component {
    state = {
        players: [],
        name: '',
        position: '',
        number: '',
        isEdit: false,
        id: '',
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value,
            error:''
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        // check to see isEdit to determine if this is an edit or a new player
        if (this.state.isEdit) {
            this.handleUpdate()
        } else {
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
            console.log("response", serverResponse)
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
    }
    
    handleUpdate = async () => {
        try {
            let fetchResponse = await fetch ('/api/players', {
                method: 'PUT',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    id: this.state.id,
                    name: this.state.name,
                    position: this.state.position,
                    number: this.state.number,
                })
            })
            if (!fetchResponse.ok) throw new Error ("Fetch failed = Bad request")
            this.setState({
                    id: '',
                    name:'',
                    position: '',
                    number: '',
                    isEdit: false,
                })
                this.componentDidMount()
        } catch(err) {
            console.error('error', err)
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
    //populate form with selected player's info
    //e is id of player, find idx of with player id
    handleUpdateChange = (e) => {
        let map = this.state.players.map((e) => e._id)
        let idx = map.indexOf(e)
        this.setState({
            id: this.state.players[idx]._id,
            name: this.state.players[idx].name,
            position: this.state.players[idx].position,
            number:this.state.players[idx].number,
            isEdit: true,
        })
       
    }
    
    async componentDidMount() {
        try {
            let fetchResponse = await fetch('/api/players/')
            let players = await fetchResponse.json()
            this.setState({players: players})
        }catch (err) {
            console.error('error:', err)
        }
    }

    render() {
    return(
        <>
                <div className="playerContainer">
                    <div className="playerCard">
                    {this.state.players && this.state.players.map(p => (
                        <article key={p._id}>
                            <div>{p.name}</div>
                            <div>{p.position}</div>
                            <div>{p.number}</div>
                            <button className="editPlayer" onClick={()=>(this.handleUpdateChange(p._id))}>Edit</button>
                            <button className="deletePlayer" onClick={()=>(this.handleDelete(p._id))}>Delete</button>
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
                                    <option>Select</option>
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
                            {/* toggles same button to submit a new player and to edit a player */}
                            <button className="addPlayer"type="submit">{this.state.isEdit ? 'Submit' : 'Add Player' } </button>
                        </form> 
                       
                    </section>

                </div>
        </>
    )
 }
}