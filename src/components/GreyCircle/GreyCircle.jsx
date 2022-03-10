import './GreyCircle.css'
// import useDraggable from '../../hooks/use-draggable'
import Draggable from 'react-draggable'

export default function GreyCircle(props) {
    return (
        <>  
            <Draggable onStop = {props.handleStop} position={props.position}>
            <div id={props.id} className="GreyCircle"></div>
            </Draggable>
        </>
    )
}

