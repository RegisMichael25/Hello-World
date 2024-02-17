import React, { useState } from 'react';


function DarkLight() {
    const [temp, setTemp] = useState(0);
    return(
        <button onClick={() => {
            
            let containerGlobal = document.getElementById('container-global');
            let dark = document.getElementById('dark');
            let btnReg = document.getElementById('button-register');
            let liDark = document.getElementById('li-dark');

            if(temp === 0){
                dark.classList.remove('bi-moon-fill');
                dark.classList.add('bi-brightness-high-fill');
                containerGlobal.classList.add('dark-mode');
                btnReg.classList.add('button-dark');
                liDark.classList.add('li-dark:hover');
                setTemp(1);
            }else {
                dark.classList.remove('bi-brightness-high-fill');
                dark.classList.add('bi-moon-fill');
                containerGlobal.classList.remove('dark-mode');
                setTemp(0);
            }

        }}  ><i id="dark" className="bi-moon-fill"></i></button>
    )
}

export default DarkLight;
