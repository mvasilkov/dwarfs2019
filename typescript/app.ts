/// <reference path="dwarfs.d.ts" />

const fortress = new Fortress
const forest = new Forest
const treasure = new Treasure

dwarfs.push(new Dwarf(0))
dwarfs.push(new Dwarf(230))
dwarfs.push(new Dwarf(460))
dwarfs.push(new Dwarf(690))
dwarfs.push(new Dwarf(920))

dwarfs[1].gold = 1
dwarfs[3].turnBack = true
dwarfs[4].gold = 1
dwarfs[4].turnBack = true

fortress.render()
forest.render()
treasure.render()
