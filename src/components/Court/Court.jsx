import './Court.css'
import GreyCircle from "../GreyCircle/GreyCircle"
import OrangeCircle from "../OrangeCircle/OrangeCircle"
export default function Court () {
    return (
        <div className="Court">
            <GreyCircle/>
            <OrangeCircle/>
        </div>
    )
}
