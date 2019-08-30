/// <reference path="dwarfs.d.ts" />

const enum DwarfsPurpose {
    NONE,
    FOREST,
    FORTRESS,
}

const cacheDwarfs: { [palette: string]: HTMLCanvasElement } = {}

class Dwarf {
    pos: number
    gold: number
    purpose: DwarfsPurpose
    turnBack: boolean

    constructor(pos: number) {
        this.pos = pos
        this.gold = 0
        this.purpose = DwarfsPurpose.NONE
        this.turnBack = false
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
}

const dwarfs: Dwarf[] = []
