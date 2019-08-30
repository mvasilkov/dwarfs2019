/// <reference path="dwarfs.d.ts" />

const fortress = new Fortress
const forest = new Forest
const treasure = new Treasure

fortress.render()
forest.render()
treasure.render()

const dwarf = new Dwarf

fortress.canvas.drawImage(dwarf.buf(fortress.palette), 40, 60)
forest.canvas.drawImage(dwarf.buf(forest.palette), 40, 60)
treasure.canvas.drawImage(dwarf.buf(treasure.palette), 40, 60)

fortress.canvas.drawImage(bufGold, 40, 20)
forest.canvas.drawImage(bufGold, 40, 20)
treasure.canvas.drawImage(bufGold, 40, 20)
