/// <reference path="dwarfs.d.ts" />

const fortress = new Fortress
const forest = new Forest
const treasure = new Treasure

dwarfs.push(new Dwarf)

function update(t: number) {
    for (let dwarf of dwarfs) {
        dwarf.advance()
    }
}

function render(t: number) {
    fortress.render(t)
    forest.render(t)
    treasure.render(t)
}

startMainloop()
