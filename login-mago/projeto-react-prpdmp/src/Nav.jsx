export default function Nav() {
    return(
        <div className="mx-4 my-20">
            <ul id="li-dark" className="flex justify-end mr-10 gap-5 cursor-pointer">
                <li className="text-2xl hover:bg-[#6C63FF] hover:text-[#fff] p-3 rounded-2xl hover:transition ease-in-out delay-100" onClick={() => {
                    let register = document.getElementById('register');
                    let login = document.getElementById('login');
                    register.classList.remove('hidden');
                    login.classList.add('hidden');
                }} >Register</li>
                <li className="text-2xl hover:bg-[#6C63FF] hover:text-[#fff] p-3 rounded-xl hover:transition ease-in-out delay-100" onClick={() => {
                    let login = document.getElementById('login');
                    let register = document.getElementById('register');
                    login.classList.remove('hidden');
                    register.classList.add('hidden');
                }}>Login</li>
            </ul>
        </div>
    );
}
