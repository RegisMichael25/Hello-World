export default function FormLogin() {
    return(
    <div className="flex flex-col gap-8 mx-3">
        <label className="text-lg"> <span className="text-[#ffffff]">Email: </span> 
            <input className="bg-[#00000042] text-[#ffffff]  mx-2 rounded-md border-b-2 w-[300px] focus:outline-none pl-2 p-1" type="email" placeholder="Digite seu Email "/>
        </label>
        <label className="text-lg"> <span className="text-[#ffffff]">Senha: </span> 
            <input className="bg-[#00000042] text-[#ffffff]  mx-1 rounded-md w-[300px] focus:outline-none pl-2 p-1 border-b-2" type="password" placeholder="Informe sua Senha "/>
        </label>
    </div>
    )
}