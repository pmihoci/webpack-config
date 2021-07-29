import "./styles/index.scss"

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