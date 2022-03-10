import './Court.css'
import GreyCircle from "../GreyCircle/GreyCircle"
import { useEffect, useState } from 'react'
export default function Court () {
    const [positions, setPositions]= useState({})
    const [formations, setFormations] = useState(
        [],
    )
    const [activeFormation, setActiveFormation] = useState({})

    function handleStop(e, data) {
        let curPositions = {...positions}
        const circleId = e.target.id
        curPositions[circleId]= {}
        curPositions[circleId]['x']= data.x
        curPositions[circleId]['y']= data.y

        setPositions(curPositions)
        console.log(curPositions[circleId])
    }
    async function saveFormation() {
        console.log('i am saveFormation')
        try {
            let fetchResponse = await fetch('/api/formations', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: '', 
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
    async function changeFormation(evt) {
        console.log('I am changeFormation')
        setActiveFormation(formations[evt.target.value])
    }

    useEffect(() => {
        async function fetchFormation(){
            let fetchFormationsResponse = await fetch('/api/formations')
                if (!fetchFormationsResponse.ok) throw new Error('Fetch failed - Bad request')
            console.log(fetchFormationsResponse)
            let formations = await fetchFormationsResponse.json()
            setFormations(formations)
            console.log(formations)
        }
        fetchFormation()
    },[])

    return (
        <>
        <div className="Court">
                <GreyCircle id={'circle4'} handleStop={handleStop} position={activeFormation.circle4}/>
                <GreyCircle id={'circle3'} handleStop={handleStop} position={activeFormation.circle3}/>
                <GreyCircle id={'circle2'} handleStop={handleStop} position={activeFormation.circle2}/>
                <GreyCircle id={'circle1'} handleStop={handleStop} position={activeFormation.circle1}/>
                <GreyCircle id={'circle5'} handleStop={handleStop} position={activeFormation.circle5}/>
                <GreyCircle id={'circle6'} handleStop={handleStop} position={activeFormation.circle6}/>
        </div>
                <select name="formation" onChange={changeFormation}>
                    {formations.length ?
                    formations.map((f, index)=> (<option value={index} key={f.id}>{f.name}</option>))
                    :
                    "No saved formations yet"
                    }
                </select>
                <button className="save" onClick={saveFormation}>Save formation</button>
        </>
    )
}
