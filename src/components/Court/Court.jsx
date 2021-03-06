import './Court.css'
import GreyCircle from "../GreyCircle/GreyCircle"
import { useEffect, useState } from 'react'

export default function Court () {
    const [positions, setPositions]= useState({})
    const [formations, setFormations] = useState([])
    const [activeFormation, setActiveFormation] = useState({})
    const [name, setName] = useState('')

    //set positions to array in state
    function handleStop(e, data) {
        let curPositions = {...positions}
        const circleId = e.target.id
        curPositions[circleId]= {}
        curPositions[circleId]['x']= data.x
        curPositions[circleId]['y']= data.y
        setPositions(curPositions)
    }

    //save formation to database
    async function saveFormation() {
        try {
            let fetchResponse = await fetch('/api/formations', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name, 
                    circle1: positions.circle1,
                    circle2: positions.circle2,
                    circle3: positions.circle3,
                    circle4: positions.circle4,
                    circle5: positions.circle5,
                    circle6: positions.circle6
                })
              })
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
            let serverResponse = await fetchResponse.json()
            console.log('success',serverResponse)
            let fetchFormationResponse = await fetch('/api/formations')
            let formations = await fetchFormationResponse.json()
            setFormations(formations)
        }catch(err){
            console.error('Error', err)
        }
    }
    //reset to default
    function handleReset(){

    }
    //change displayed formation to saved formation
    async function changeFormation(evt) {
        setActiveFormation(formations[evt.target.value])
    }

    useEffect(() => {
        async function fetchFormation(){
            let fetchFormationsResponse = await fetch('/api/formations')
                if (!fetchFormationsResponse.ok) throw new Error('Fetch failed - Bad request')
            let formations = await fetchFormationsResponse.json()
            setFormations(formations)
        }
        fetchFormation()
    },[])

    return (
        <>
        <div className="courtContainer">
            <div className="Court">
                    <div className="grid-item">
                    <GreyCircle id={'OH'} handleStop={handleStop} position={activeFormation.circle4}/>
                    </div>
                    <div className="grid-item">
                    <GreyCircle id={'OH'} handleStop={handleStop} position={activeFormation.circle3}/>
                    </div>
                    <div className="grid-item">
                    <GreyCircle id={'M'} handleStop={handleStop} position={activeFormation.circle2}/>
                    </div>
                    <div className="grid-item">
                    <GreyCircle id={'M'} handleStop={handleStop} position={activeFormation.circle1}/>
                    </div>
                    <div className="grid-item">
                    <GreyCircle id={'S'} handleStop={handleStop} position={activeFormation.circle5}/>
                    </div>
                    <div className="grid-item">
                    <GreyCircle id={'RS'} handleStop={handleStop} position={activeFormation.circle6}/>
                    </div>
            </div>
            <div className="formationForm">
                    <form>
                        <input onChange={(e) => setName(e.target.value)} name="name" className="formationName" type="text" autocomplete="off" placeholder="new formation name"/>
                    </form>
                    <button className="save" onClick={saveFormation}>Save</button>
                    <button className="save" onClick={handleReset}>Reset</button>
                    <p>Select a formation</p>
                    <select name="formation" onChange={changeFormation}>
                        {formations.length ?
                        formations.map((f, index)=> (<option value={index} key={f.id}>{f.name}</option>))
                        :
                       <option>"No saved formations yet" </option>
                        }
                    </select>
            </div>     
        </div>   
        </>
    )
}
