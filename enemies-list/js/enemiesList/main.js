// Put your code here

console.log("My enemy list!!")
console.log("----------------------")

const enemyList = []

const createNewEnemy = (a, b, c, d) => {
    const newEnemy = {
        firstName: a,
        lastName: b,
        reallyHated: c,
        offense: d
    }
    enemyList.push(newEnemy)
}

createNewEnemy("Jacob", "Frensley", true, "Wakes up too late")
createNewEnemy("Sharif", "Rashed", false, ["plays age of empires", "doesn't play melty blood"])
createNewEnemy("Josh", "Barton", true, "Doesn't like front end")

for (const enemy of enemyList) {
    if(enemy.reallyHated === true){
        console.log(`I really, really hate ${enemy.firstName} ${enemy.lastName}`)
    }
    else
    {
        console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
}