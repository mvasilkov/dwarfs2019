"use strict";
/// <reference path="dwarfs.d.ts" />
const fortress = new Fortress;
const forest = new Forest;
const treasure = new Treasure;
dwarfs.push(new Dwarf);
function update(t) {
    dwarfsWaiting = [];
    for (let dwarf of dwarfs) {
        if (dwarf.purpose == 0 /* NONE */)
            dwarfsWaiting.push(dwarf);
        dwarf.advance();
    }
    if (dwarfsWaiting.length)
        $enable('btn-adventure');
    else
        $disable('btn-adventure');
}
function render(t) {
    fortress.render(t);
    forest.render(t);
    treasure.render(t);
}
setTimeout(() => {
    $spawn('title');
    setTimeout(() => {
        $spawn('fortress');
        setTimeout(() => {
            $spawn('adventure');
        }, 300);
    }, 300);
}, 10);
startMainloop();
