"use strict";
/// <reference path="dwarfs.d.ts" />
const fortress = new Fortress;
const forest = new Forest;
const treasure = new Treasure;
let hasAutorun = false;
let autorunWait = 0;
let autorunWaitPrev = 0;
dwarfs.push(new Dwarf);
function update(t) {
    dwarfsWaiting = [];
    for (let dwarf of dwarfs) {
        if (dwarf.purpose == 0 /* NONE */)
            dwarfsWaiting.push(dwarf);
        dwarf.advance();
    }
    $setEnabled('btn-adventure', dwarfsWaiting.length);
    if (hasAutorun) {
        if (autorunWait >= 2.2 /* AUTORUN_TIMEOUT */) {
            autorunWait -= 2.2 /* AUTORUN_TIMEOUT */;
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
