/// <reference path="dwarfs.d.ts" />

const enum DwarfsPurpose {
    NONE,
    TREASURE,
    FORTRESS,
    ALE,
}

let dwarfCapacity = 1
let dwarfSpeed = 10
let speedFortress = 0.9
let speedForest = 0.59
let speedTreasure = 0.9
let dwarfAle = false
let dwarfPortal = false

const cacheDwarfs: { [palette: string]: HTMLCanvasElement } = {}

class Dwarf {
    pos: number
    prevPos: number
    gold: number
    purpose: DwarfsPurpose
    turnBack: boolean
    height: number
    drunkSpeed: number

    constructor() {
        this.pos = 0
        this.prevPos = 0
        this.gold = 0
        this.purpose = DwarfsPurpose.NONE
        this.turnBack = false
        this.height = Inline.groundLevel
        this.drunkSpeed = 0.1 - Math.random() * 0.05
    }

    private _render(palette: string[], canvas: CanvasRenderingContext2D) {
        for (let y = 0; y < B_DWARF.length; ++y) {
            for (let x = 0; x < 8; ++x) {
                const n = B_DWARF[y] >> 2 * (7 - x) & 0b11
                if (n != 0b10) {
                    canvas.fillStyle = '#' + palette[n]
                    canvas.fillRect(Inline.B_SCALE * x, Inline.B_SCALE * y,
                        Inline.B_SCALE, Inline.B_SCALE)
                }
            }
        }
    }

    buf(palette: string[]) {
        return cacheDwarfs[palette[0]] ||
            (cacheDwarfs[palette[0]] = renderBuf(Inline.B_SCALE * 8, Inline.B_SCALE * 11,
                this._render.bind(this, palette)))
    }

    advance() {
        this.prevPos = this.pos

        const speed = dwarfSpeed * (this.pos < 230 ? speedFortress :
            (this.pos > 690 ? speedTreasure : speedForest))

        switch (this.purpose) {
            case DwarfsPurpose.TREASURE:
                this.turnBack = false
                this.pos += speed
                if (this.pos >= 2 * SCREEN_WIDTH) {
                    this.pos = 2 * SCREEN_WIDTH
                    this.gold = dwarfCapacity
                    this.purpose = DwarfsPurpose.FORTRESS
                }
                break

            case DwarfsPurpose.FORTRESS:
                this.turnBack = true
                this.pos -= speed
                if (this.pos <= 0) {
                    this.pos = 0
                    updateGold(this.gold)
                    this.gold = 0
                    this.purpose = DwarfsPurpose.NONE
                    this.turnBack = false
                }
                break

            case DwarfsPurpose.ALE:
                if (Math.random() < 0.004) this.turnBack = !this.turnBack
                this.pos += this.drunkSpeed * (this.turnBack ? -speed : speed)
                if (this.pos < 250) {
                    this.pos = 250
                    this.turnBack = false
                }
                else if (this.pos > 670) {
                    this.pos = 670
                    this.turnBack = true
                }
                break
        }
    }

    haveFun(setPos?: boolean) {
        if (setPos) {
            this.pos = (0 | Math.random() * 420) + 250
            this.prevPos = this.pos
            this.turnBack = Math.random() < 0.5
        }
        this.gold = 0
        this.purpose = DwarfsPurpose.ALE
        this.height = (0 | Math.random() * 35) + 50
    }
}

const dwarfs: Dwarf[] = []
let dwarfsWaiting: Dwarf[] = []

function dwarfsFoundAle() {
    dwarfAle = true

    dwarfs.forEach(dwarf => dwarf.haveFun(true))
}

function dwarfsNoAle() {
    dwarfAle = false

    const survivors = dwarfs.filter(dwarf => dwarf.pos < 230 || dwarf.pos > 690).length
    dwarfs.splice(0, dwarfs.length)
    for (let n = 0; n < Math.max(survivors, 3); ++n) dwarfs.push(new Dwarf)

    draftCost = 3
    draftCostPrev = 2

    $setContent('dwarf-count', dwarfs.length)
    $setContent('dwarf-cost', draftCost)
}
