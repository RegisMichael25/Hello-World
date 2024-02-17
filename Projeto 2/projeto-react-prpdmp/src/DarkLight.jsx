function EventoDarkLight() {
    let dark = document.getElementById('dark');
    dark.className.remove = 'bi bi-moon-fill'
    dark.className.add = 'bi bi-brightness-high-fill'
}

function DarkLight() {
    return( 
        <button onClick={EventoDarkLight} id="dark" ><i className="bi bi-moon-fill"></i></button>
    )
}

export default DarkLight;