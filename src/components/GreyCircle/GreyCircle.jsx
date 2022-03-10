import './GreyCircle.css'
import useDraggable from '../../hooks/use-draggable'

export default function GreyCircle(props) {

const {position} = useDraggable(props.id)
    return (
        <>
            <div id={props.id}className="GreyCircle"
            style= {{
            top:position.y,
            left:position.x,
        }}>
            </div>
        </>
    )
}

