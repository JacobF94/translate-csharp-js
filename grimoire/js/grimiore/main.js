// Put your code here

console.log("Time for some magic spells")
console.log("-------------------")

const spellBook = [
    {
        name: "Hand to foot spell",
        isEvil: true,
        energyRequired: 17
    },
    {
        name: "Atom crumpler",
        isEvil: true,
        energyRequired: 1254
    },
    {
        name: "Summon moose familiar",
        isEvil: false,
        energyRequired: 3
    },
    {
        name: "Enhance",
        isEvil: false,
        energyRequired: .00008
    }
]

const displaySpells = () => {
    const goodSpells = spellBook.filter(x => x.isEvil === false)
    const evilSpells = spellBook.filter(x => x.isEvil === true)

    console.log("Good Book")
    for (const spell of goodSpells) {
        console.log(`  ${spell.name}`)
    }
    console.log("")
    console.log("Evil Book")
    for (const spell of evilSpells) {
        console.log(`  ${spell.name}`)
}
}
displaySpells()