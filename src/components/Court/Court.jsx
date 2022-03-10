import './Court.css'
import GreyCircle from "../GreyCircle/GreyCircle"

export default function Court () {

    return (
        <div className="Court">
                <GreyCircle id={'circle1'} />
                <GreyCircle id={'circle2'} />
                <GreyCircle id={'circle3'} />
                <GreyCircle id={'circle4'} />
                <GreyCircle id={'circle5'} />
                <GreyCircle id={'circle6'} />
        </div>
    )
}
