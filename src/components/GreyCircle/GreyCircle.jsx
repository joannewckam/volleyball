import './GreyCircle.css'
import Draggable from 'react-draggable'
import { useState } from 'react'
export default function GreyCircle(props) {

    return (
        <>  
            <Draggable onStop = {props.handleStop} position={props.position} >
            <div id={props.id} className="GreyCircle">
                <p>{props.id}</p>
            </div>
            </Draggable>
        </>
    )
}

