/// <reference path="dwarfs.d.ts" />

const fortress = new Fortress
const forest = new Forest
const treasure = new Treasure

let hasAutorun = false
let autorunSpeed = 2.4
let autorunWait = 0
let autorunWaitPrev = 0
let clearedForLanding = 0 // boolean, really

dwarfs.push(new Dwarf)

function update(t: number) {
    dwarfsWaiting = []
    clearedForLanding = 0

    for (let dwarf of dwarfs) {
        dwarf.advance()

        if (dwarf.purpose == DwarfsPurpose.NONE)
            dwarfsWaiting.push(dwarf)

        if (dwarf.pos > 0 && dwarf.pos < 160)
            clearedForLanding = 1
        else if (dwarfAle &&
            dwarf.purpose != DwarfsPurpose.ALE &&
            dwarf.pos > 250 && dwarf.pos < 670)
            dwarf.haveFun()
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

function orbital(done: Function) {
    let paletteIndex = -1
    let start = Date.now()

    function renderOrbital() {
        const now = Date.now()
        if (now - start >= 2000) {
            done()
            return
        }
        const k = (2000 + start - now) / 2000
        requestAnimationFrame(renderOrbital)
        paletteIndex = (paletteIndex + 1) % 4
        forest.canvas.fillStyle = '#' + PAL_ORBITAL[paletteIndex]
        forest.canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        for (let dwarf of dwarfs) {
            if (dwarf.pos == 0 && dwarf.prevPos == 0) continue
            const pos = dwarf.pos - forest.pos
            if (pos < -40 || pos > 500) continue
            forest.canvas.save()
            forest.canvas.translate(pos + 2, 0)
            if (dwarf.turnBack)
                forest.canvas.scale(-1, 1)
            forest.canvas.drawImage(dwarf.buf(PAL_TREASURE),
                -4 * Inline.B_SCALE, dwarf.height + Inline.B_SCALE * 11 * (1 - k),
                Inline.B_SCALE * 8, Inline.B_SCALE * 11 * k)
            forest.canvas.restore()
        }
    }

    requestAnimationFrame(renderOrbital)
}
