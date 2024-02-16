export default function FormLogin() {
    return(
    <div className="flex flex-col gap-8 mx-7">
        <label className=""> Email: 
            <input className="bg-[#00000042] rounded-md border-b-2 focus:outline-none" type="text" placeholder="Digite seu Email "/>
        </label>
        <label> Senha: 
            <input className="bg-[#00000042] rounded-md focus:outline-none border-b-2" type="password" placeholder="Informe sua Senha "/>
        </label>
    </div>
    )
}