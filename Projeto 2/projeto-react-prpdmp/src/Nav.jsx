export default function Nav() {
    return(
        <div className="mx-4 my-20">
            <ul className="flex justify-end mr-10 gap-5 cursor-pointer">
                <li className="text-2xl hover:bg-[#6C63FF] hover:text-[#fff] p-3 rounded-2xl hover:transition ease-in-out delay-100">Register</li>
                <li className="text-2xl hover:bg-[#6C63FF] hover:text-[#fff] p-3 rounded-2xl hover:transition ease-in-out delay-100">Login</li>
            </ul>
        </div>
    );
}
