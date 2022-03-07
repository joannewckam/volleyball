import './GreyCircle.css'
import useDraggable from '../../hooks/use-draggable'

export default function Court() {
const {position} = useDraggable('circle')
    return (
        <div id="circle" className="GreyCircle"
           style= {{
           top:position.y,
           left:position.x,
       }}>
        </div>
    )
}

