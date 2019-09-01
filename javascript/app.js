"use strict";
/// <reference path="dwarfs.d.ts" />
const fortress = new Fortress;
const forest = new Forest;
const treasure = new Treasure;
let hasAutorun = false;
let autorunSpeed = 2.4;
let autorunWait = 0;
let autorunWaitPrev = 0;
let clearedForLanding = 0; // boolean, really
dwarfs.push(new Dwarf);
function update(t) {
    dwarfsWaiting = [];
    clearedForLanding = 0;
    for (let dwarf of dwarfs) {
        dwarf.advance();
        if (dwarf.purpose == 0 /* NONE */)
            dwarfsWaiting.push(dwarf);
        if (dwarf.pos > 0 && dwarf.pos < 160)
            clearedForLanding = 1;
    }
    $setEnabled('btn-adventure', dwarfsWaiting.length);
    if (hasAutorun) {
        if (autorunWait >= autorunSpeed) {
            autorunWait -= autorunSpeed;
            autorunWaitPrev = autorunWait;
            if (dwarfsWaiting.length)
                dwarfsWaiting[0].purpose = 1 /* TREASURE */;
        }
        else {
            autorunWaitPrev = autorunWait;
            autorunWait += t;
        }
    }
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
