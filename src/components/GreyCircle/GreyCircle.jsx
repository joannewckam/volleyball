import './GreyCircle.css'
// import useDraggable from '../../hooks/use-draggable'
import Draggable from 'react-draggable'
import { useState } from 'react'

export default function GreyCircle(props) {
const [positions, setPositions]= useState({})

function handleStop(e, data) {
    let curPositions = {...positions}
    const circleId = e.target.id
    curPositions[circleId]= {}
    curPositions[circleId]['x']= data.x
    curPositions[circleId]['y']= data.y
    setPositions(curPositions)
    console.log(curPositions[circleId])
}

    return (
        <>  
            <Draggable
            onStop = {handleStop}
            >
            <div id={props.id} className="GreyCircle"></div>
            </Draggable>
            
        </>
    )
}

