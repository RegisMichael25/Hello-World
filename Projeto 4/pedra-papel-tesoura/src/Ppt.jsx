import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";
import pedraPapelTesoura from "./logicappt";
import './App.css'

function Ppt () {
    return(
        <>
            <h1>Escolha Da Maquina</h1>
            <div className="flex">

                <div className="icons p-20" id="pedra-bot"><FaHandRock className="w-20 h-20" /></div>

                <div className="icons p-20" id="papel-bot"><FaHandPaper className="w-20 h-20"/></div>

                <div className="icons p-20" id="tesoura-bot"><FaHandScissors className="w-20 h-20"/></div>


            </div>
            <h1>Escolha do Player</h1>
            <fieldset>
                <legend>Player</legend>
                <div className="flex cursor-pointer">
                    <div className="icons p-20 hover:bg-slate-700" id="pedra" onClick={pedraPapelTesoura}><FaHandRock className="w-20 h-20" /></div>
                    <div className="icons p-20 hover:bg-slate-700" id="papel" onClick={pedraPapelTesoura}><FaHandPaper className="w-20 h-20"/></div>
                    <div className="icons p-20 hover:bg-slate-700" id="tesoura" onClick={pedraPapelTesoura}><FaHandScissors className="w-20 h-20"/></div>
                </div>
            </fieldset>
                <h1 id="resultado"></h1>
        </>
    )
}

export default Ppt