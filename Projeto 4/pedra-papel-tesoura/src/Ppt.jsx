import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";

function Ppt () {
    return(
        <>
            <div className="flex">
                <div className="icons p-20 hover:bg-slate-700"><FaHandRock className="w-20 h-20" /></div>
                <div className="icons p-20 hover:bg-slate-700"><FaHandPaper className="w-20 h-20"/></div>
                <div className="icons p-20 hover:bg-slate-700"><FaHandScissors className="w-20 h-20"/></div>
            </div>
        </>
    )
}

export default Ppt