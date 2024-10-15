import frutasObjects from "./frutasObjects";

for(let pos in frutasObjects) {
    console.log(frutasObjects[pos].nome)
}

function CardFrutas() {
    return(
        <div>
            <p>r</p>
            <p>{frutasObjects[pos].nome} </p>
            <p>{frutasObjects[pos].valor}</p>
        </div>
    )
}

export default CardFrutas;