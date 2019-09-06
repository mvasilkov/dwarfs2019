/// <reference path="dwarfs.d.ts" />

const bufGold: HTMLCanvasElement = renderBuf(Inline.B_SCALE * 8, Inline.B_SCALE * 9,
    canvas => {
        for (let y = 0; y < B_GOLD.length; ++y) {
            for (let x = 0; x < 8; ++x) {
                const n = B_GOLD[y] >> 2 * (7 - x) & 0b11
                if (n) {
                    canvas.fillStyle = '#' + PAL_GOLD[n]
                    canvas.fillRect(Inline.B_SCALE * x, Inline.B_SCALE * y,
                        Inline.B_SCALE, Inline.B_SCALE)
                }
            }
        }
    })

const bufKeg: HTMLCanvasElement = renderBuf(24, 30, canvas => {
    for (let y = 0; y < B_KEG.length; ++y) {
        for (let x = 0; x < 12; ++x) {
            const n = B_KEG[y] >> 2 * (11 - x) & 0b11
            canvas.fillStyle = '#' + PAL_FOREST[n]
            canvas.fillRect(2 * x, 2 * y, 2, 2)
        }
    }
})

const bufAperture: HTMLCanvasElement = renderBuf(24, 24, canvas => {
    for (let y = 0; y < B_APERTURE.length; ++y) {
        for (let x = 0; x < 12; ++x) {
            if (B_APERTURE[y] >> (11 - x) & 1) {
                canvas.fillStyle = '#' + PAL_WASTELAND[0]
                canvas.fillRect(2 * x, 2 * y, 2, 2)
            }
        }
    }
    for (let y = B_APERTURE.length; y >= 0; --y) {
        for (let x = 0; x < 12; ++x) {
            if (B_APERTURE[y] >> x & 1) {
                canvas.fillStyle = '#' + PAL_WASTELAND[0]
                canvas.fillRect(2 * x, 2 * (5 - y) + 12, 2, 2)
            }
        }
    }
})

const bufFactory: HTMLCanvasElement = renderBuf(Inline.B_SCALE * 24, Inline.B_SCALE * 27,
    canvas => {
        for (let a of FACTORY) {
            if (typeof a == 'number') {
                canvas.fillStyle = '#' + PAL_WASTELAND[a]
            }
            else {
                canvas.fillRect(Inline.B_SCALE * a[0], Inline.B_SCALE * a[1],
                    Inline.B_SCALE * a[2], Inline.B_SCALE * a[3])
            }
        }

        for (let n = 0; n < 6; ++n) {
            canvas.fillRect(Inline.B_SCALE * 7, Inline.B_SCALE * (2 * n + 7), Inline.B_SCALE, Inline.B_SCALE)
            canvas.fillRect(Inline.B_SCALE * 16, Inline.B_SCALE * (2 * n + 7), Inline.B_SCALE, Inline.B_SCALE)
        }
    })

const bufChest: HTMLCanvasElement = renderBuf(40, 26,
    canvas => {
        for (let a of CHEST) {
            if (typeof a == 'number') {
                canvas.fillStyle = '#' + PAL_CHEST[a]
            }
            else {
                canvas.fillRect(2 * a[0], 2 * a[1], 2 * a[2], 2 * a[3])
            }
        }
    })

const bufExit: HTMLCanvasElement = renderBuf(Inline.B_SCALE * 13, Inline.B_SCALE * 13,
    canvas => {
        for (let y = 0; y < B_EXIT.length; ++y) {
            for (let x = 0; x < 13; ++x) {
                const n = B_EXIT[y] >> 2 * x & 0b11
                if (n < 2) {
                    canvas.fillStyle = '#' + PAL_FORTRESS[n]
                    canvas.fillRect(Inline.B_SCALE * x, Inline.B_SCALE * y,
                        Inline.B_SCALE, Inline.B_SCALE)
                }
            }
        }
    })

function renderPortal(canvas: CanvasRenderingContext2D, x0: number, y0: number, palette: string[]) {
    for (let y = 0; y < B_PORTAL.length; ++y) {
        for (let x = 0; x < 6; ++x) {
            const n = B_PORTAL[y] >> 2 * x & 0b11
            if (n != 0b00) {
                canvas.fillStyle = '#' + palette[n]
                canvas.fillRect(Inline.B_SCALE * x + x0, Inline.B_SCALE * y + y0,
                    Inline.B_SCALE, Inline.B_SCALE)
            }
        }
    }
}

function renderFortress(withExit: boolean): RenderFun {
    return canvas => {
        canvas.fillStyle = '#' + PAL_FORTRESS[3]
        canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        canvas.fillStyle = '#' + PAL_FORTRESS[2]
        // canvas.fillRect(0, 87, SCREEN_WIDTH, 1)
        for (let n = 0; n < 23; ++n) {
            if (n % 2 == 0) {
                canvas.fillRect(20 * n + 5, 88, 20, 4)
                canvas.fillRect(20 * n + 4, 92, 20, 4)
                canvas.fillRect(20 * n + 3, 96, 20, 4)

                canvas.fillRect(20 * n + 1, 112, 20, 4)
                canvas.fillRect(20 * n, 116, 20, 4)
                canvas.fillRect(20 * n - 1, 120, 20, 4)
            }
            else {
                canvas.fillRect(20 * n + 3, 100, 20, 4)
                canvas.fillRect(20 * n + 2, 104, 20, 4)
                canvas.fillRect(20 * n + 1, 108, 20, 4)
            }
        }

        if (withExit)
            canvas.drawImage(bufExit, 300, 40)

        // renderPortal(canvas, 432 - Inline.B_SCALE * 6,
        //     Inline.groundLevel - Inline.B_SCALE, PAL_PORTAL_BLUE)

        canvas.fillStyle = '#' + PAL_FORTRESS[1]
        write('Dwarf Fortress', canvas, 20, 20)
    }
}

const bufFortress: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderFortress(false))

const bufFortressExit: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderFortress(true))

function renderForest(palette: string[], title: string): RenderFun {
    return canvas => {
        canvas.fillStyle = '#' + palette[3]
        canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        canvas.fillStyle = '#' + palette[2]
        for (let n = 0; n < 6; ++n) {
            write('&', canvas, 70 * n + 48, 50 + (0 | Math.random() * 40))
        }

        canvas.fillStyle = '#' + palette[1]
        write(title, canvas, 20, 20)
    }
}

const bufForest: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderForest(PAL_FOREST_DARK, 'Black Forest'))

const bufForestLit: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderForest(PAL_FOREST, 'Reasonably Lit Forest'))

const bufForestKegs: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    canvas => {
        renderForest(PAL_FOREST, '       Ale Forest')(canvas)
        canvas.drawImage(bufKeg, 20, 18)
        canvas.drawImage(bufKeg, 47, 18)
        canvas.drawImage(bufKeg, 74, 16)
        canvas.drawImage(bufKeg, 101, 16)
    })

function renderWasteland(title: string, features: number): RenderFun {
    return canvas => {
        canvas.fillStyle = '#' + PAL_WASTELAND[3]
        canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        canvas.fillStyle = '#' + PAL_WASTELAND[2]
        for (let n = 0; n < 3; ++n) {
            write('&', canvas, 120 * n + 48, 50 + (0 | Math.random() * 20))
        }

        if (features > 0) {
            canvas.fillStyle = '#' + PAL_WASTELAND[2]
            canvas.fillRect(0, 90, SCREEN_WIDTH, 24)

            canvas.fillStyle = '#' + PAL_WASTELAND[3]
            write(' -  -  -  -  -  -  -  - ', canvas, 0, 90)
        }

        if (features > 1) {
            canvas.drawImage(bufFactory, 368, 0)
            canvas.drawImage(bufAperture, 310, 18)
        }

        canvas.fillStyle = '#' + PAL_WASTELAND[1]
        write(title, canvas, 20, 20)
    }
}

const bufWasteland: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderWasteland('Wasteland', 0))

const bufWastelandRoad: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderWasteland('Country Roads', 1))

const bufWastelandAperture: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    renderWasteland('Industrial Area', 2))

const bufTreasure: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    canvas => {
        canvas.fillStyle = '#' + PAL_TREASURE[3]
        canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        for (let n = 0; n < 6; ++n) {
            const x = 35 * n + 24
            const y = 86 + (0 | Math.random() * 16)

            canvas.fillStyle = '#' + PAL_TREASURE[2]
            canvas.fillRect(x, y, 6, 2)
            canvas.fillRect(x - 1, y + 2, 6, 2)
        }

        canvas.drawImage(bufChest, 230, 75)
        canvas.drawImage(bufChest, 286, 73)
        canvas.drawImage(bufChest, 342, 73)
        canvas.drawImage(bufChest, 398, 73)
        canvas.drawImage(bufChest, 404, 45)
        canvas.drawImage(bufChest, 400, 17)

        // renderPortal(canvas, 32,
        //     Inline.groundLevel - Inline.B_SCALE, PAL_PORTAL_ORANGE)

        canvas.fillStyle = '#' + PAL_TREASURE[1]
        write('Fabled Treasure', canvas, 20, 20)
    })

function easingPos(pos: number): number {
    if (pos < 230) return 230 * easeInQuad(pos / 230)
    if (pos > 690) return 230 * easeOutQuad((pos - 690) / 230) + 690
    return pos
}

function renderDwarfs(t: number, canvas: CanvasRenderingContext2D,
    palette: string[], zonePos: number, k: number): boolean {

    let populated = false
    if (dwarfAle) dwarfs.sort((a, b) => a.height - b.height)

    for (let dwarf of dwarfs) {
        if (dwarf.pos == 0 && dwarf.prevPos == 0) continue
        const pos = easingPos(lerp(dwarf.prevPos, dwarf.pos, t)) - zonePos
        if (pos < -40 || pos > 500) continue
        populated = true
        canvas.save()
        canvas.translate(pos + 2, 0)
        switch (dwarf.gold) {
            case 1:
                canvas.drawImage(bufGold, -4 * Inline.B_SCALE, Inline.groundLevel - 40)
                break
            case 3:
                canvas.drawImage(bufGold, -8, Inline.groundLevel - 48, 16, 18)
            case 2:
                canvas.drawImage(bufGold, -20, Inline.groundLevel - 30, 16, 18)
                canvas.drawImage(bufGold, 4, Inline.groundLevel - 30, 16, 18)
        }
        if (dwarf.turnBack)
            canvas.scale(-1, 1)
        canvas.drawImage(dwarf.buf(palette), -4 * Inline.B_SCALE,
            Inline.B_SCALE * 11 * (1 - k) + dwarf.height,
            Inline.B_SCALE * 8, Inline.B_SCALE * 11 * k)
        canvas.restore()
    }

    return populated
}

abstract class Zone {
    abstract canvas: CanvasRenderingContext2D
    abstract palette: string[]
    abstract buf: HTMLCanvasElement
    abstract pos: number
    abstract spawn?: string
    abstract renderWaiting?: boolean

    render(t: number) {
        // this.canvas.fillStyle = '#' + this.palette[3]
        // this.canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
        this.canvas.drawImage(this.buf, 0, 0)

        if (renderDwarfs(t, this.canvas, this.palette, this.pos, 1) && this.spawn) {
            $spawn(this.spawn)
            this.spawn = undefined
        }

        if (this.renderWaiting && dwarfsWaiting.length) {
            const count = Math.min(dwarfsWaiting.length + clearedForLanding, Inline.WAITING_SIZE)
            const buf = dwarfsWaiting[0].buf(this.palette)
            let pos, height

            for (let n = count - 1; n >= clearedForLanding; --n) {
                if (n >= Inline.WAITING_BOTTOM) {
                    if (n >= Inline.WAITING_SIZE_BM) {
                        pos = Inline.WAITING_TOP_POS + Inline.B_SCALE *
                            (9 * (Inline.WAITING_SIZE - n) - 4)
                        height = Inline.groundLevel - 46
                    }
                    else {
                        pos = Inline.WAITING_MIDDLE_POS + Inline.B_SCALE *
                            (9 * (Inline.WAITING_SIZE_BM - n) - 4)
                        height = Inline.groundLevel - 23
                    }
                }
                else {
                    pos = Inline.WAITING_BOTTOM_POS + Inline.B_SCALE *
                        (9 * (Inline.WAITING_BOTTOM - n) - 4)
                    height = Inline.groundLevel
                }
                this.canvas.drawImage(buf, pos + 2, height)
            }
        }

        this.canvas.lineWidth = 2
        this.canvas.strokeStyle = '#' + this.palette[0]
        this.canvas.beginPath()
        this.canvas.rect(1, 1, SCREEN_WIDTH - 2, SCREEN_HEIGHT - 2)
        this.canvas.stroke()
    }
}

class Fortress extends Zone {
    canvas: CanvasRenderingContext2D
    palette: string[]
    buf: HTMLCanvasElement
    pos: number
    spawn?: string
    renderWaiting?: boolean

    constructor() {
        super()
        this.canvas = setupCanvas('can-fortress')
        this.palette = PAL_FORTRESS
        this.buf = bufFortress
        this.pos = -230
        this.renderWaiting = true
    }

    render(t: number) {
        super.render(t)

        if (hasAutorun) {
            this.canvas.lineWidth = 1
            this.canvas.strokeStyle = '#' + this.palette[0]
            this.canvas.beginPath()
            this.canvas.rect(SCREEN_WIDTH - 37.5, 4.5, 33, 7)
            this.canvas.stroke()

            this.canvas.fillStyle = '#' + this.palette[1]
            this.canvas.fillRect(SCREEN_WIDTH - 36, 6,
                30 * lerp(autorunWaitPrev, autorunWait, t) / autorunSpeed, 4)
        }
    }
}

class Forest extends Zone {
    canvas: CanvasRenderingContext2D
    palette: string[]
    buf: HTMLCanvasElement
    pos: number
    spawn?: string
    renderWaiting?: boolean

    constructor() {
        super()
        this.canvas = setupCanvas('can-forest')
        this.palette = PAL_FOREST_DARK
        this.buf = bufForest
        this.pos = 230
        this.spawn = 'forest'
    }
}

class Treasure extends Zone {
    canvas: CanvasRenderingContext2D
    palette: string[]
    buf: HTMLCanvasElement
    pos: number
    spawn?: string
    renderWaiting?: boolean

    constructor() {
        super()
        this.canvas = setupCanvas('can-treasure')
        this.palette = PAL_TREASURE
        this.buf = bufTreasure
        this.pos = 690
        this.spawn = 'treasure'
    }
}
