/// <reference path="dwarfs.d.ts" />

const fortress = new Fortress
const forest = new Forest
const treasure = new Treasure

let hasAutorun = false
let autorunSpeed = 2.4
let autorunWait = 0
let autorunWaitPrev = 0

dwarfs.push(new Dwarf)

function update(t: number) {
    dwarfsWaiting = []

    for (let dwarf of dwarfs) {
        if (dwarf.purpose == DwarfsPurpose.NONE)
            dwarfsWaiting.push(dwarf)

        dwarf.advance()
    }

    $setEnabled('btn-adventure', dwarfsWaiting.length)

    if (hasAutorun) {
        if (autorunWait >= autorunSpeed) {
            autorunWait -= autorunSpeed
            autorunWaitPrev = autorunWait
            if (dwarfsWaiting.length)
                dwarfsWaiting[0].purpose = DwarfsPurpose.TREASURE
        }
        else {
            autorunWaitPrev = autorunWait
            autorunWait += t
        }
    }
}

function render(t: number) {
    fortress.render(t)
    forest.render(t)
    treasure.render(t)
}

setTimeout(() => {
    $spawn('title')
    setTimeout(() => {
        $spawn('fortress')
        setTimeout(() => {
            $spawn('adventure')
        }, 300)
    }, 300)
}, 10)

startMainloop()
