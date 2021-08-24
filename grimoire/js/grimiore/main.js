// Put your code here
console.log("Do you believe in magic?")

const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);
displaySpellBook(goodBook)
displaySpellBook(evilBook)


const displaySpellBook = (book) => {
    console.log(book.Title);
    for (const aSpell of spells) {
        console.log(`${aSpell.Name}`)
    }
}

const makeEvilSpellBook = (allSpells) => {
    const evilBook = {
        
    }
    evilBook.Title = "Evil Book";
    evilBook.Spells = allSpells.filter(spell => spell.IsEvil)
    return evilBook;
}

const makeGoodSpellBook = (allSpells) => {
    const goodBook = {

    }
    goodBook.Title = "Good Book";
    goodBook.Spells = allSpells.filter(spell => !spell.IsEvil)
    return goodBook
}



const allSpells = [
    {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyRequired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyRequired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyRequired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyRequired: 2921.5
    }
]

