import { useState } from "react"

const elvenShieldRecepie = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecepie = {
    ...elvenShieldRecepie,
    leather: 1,
    refinedMoonstone: 4,
}

console.log(elvenShieldRecepie)
console.log(elvenGauntletsRecepie)

const Recepies = () => {
    const [recepie, setRecepie] = useState([])
    return(
        <div>
            <h3>Current Recepie:</h3>
            <button onClick={() => setRecepie(elvenShieldRecepie)}>
                Elven Shield Recepie
            </button>
            <button onClick={() => setRecepie(elvenGauntletsRecepie)}>
                Elven Gauntlet Recepie
            </button>

            <ul>
                {Object.keys(recepie).map((material) => (
                    <li>
                        {material}: {recepie[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recepies