export default function FormLogin() {
    return(
    <div className="flex flex-col ">
        <label> Email: 
            <input className="focus:outline-none border-b-2" type="text" placeholder="Digite seu Email "/>
        </label>
        <label> Senha: 
            <input className="focus:outline-none border-b-2" type="password" placeholder="Informe sua Senha "/>
        </label>
    </div>
    )
}