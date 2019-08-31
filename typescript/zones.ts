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

const bufFortress: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    canvas => {
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

        canvas.fillStyle = '#' + PAL_FORTRESS[1]
        write('Dwarf Fortress', canvas, 20, 20)
    })

const bufForest: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    canvas => {
        canvas.fillStyle = '#' + PAL_FOREST[3]
        canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        canvas.fillStyle = '#' + PAL_FOREST[2]
        for (let n = 0; n < 6; ++n) {
            write('&', canvas, 70 * n + 48, 50 + Math.random() * 40)
        }

        canvas.fillStyle = '#' + PAL_FOREST[1]
        write('Black Forest', canvas, 20, 20)
    })

const bufTreasure: HTMLCanvasElement = renderBuf(SCREEN_WIDTH, SCREEN_HEIGHT,
    canvas => {
        canvas.fillStyle = '#' + PAL_TREASURE[3]
        canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

        canvas.fillStyle = '#' + PAL_TREASURE[1]
        write('Fabled Treasure', canvas, 20, 20)
    })

function easingPos(pos: number): number {
    if (pos < 230) return 230 * easeInQuad(pos / 230)
    if (pos > 690) return 230 * easeOutQuad((pos - 690) / 230) + 690
    return pos
}

const groundLevel = 70

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

        for (let dwarf of dwarfs) {
            if (dwarf.pos == 0 && dwarf.prevPos == 0) continue
            const pos = easingPos(lerp(dwarf.prevPos, dwarf.pos, t)) - this.pos
            if (pos < -40 || pos > 500) continue
            if (this.spawn) {
                $spawn(this.spawn)
                this.spawn = undefined
            }
            this.canvas.save()
            this.canvas.translate(pos + 2, 0)
            if (dwarf.gold)
                this.canvas.drawImage(bufGold, -4 * Inline.B_SCALE, groundLevel - 40)
            if (dwarf.turnBack)
                this.canvas.scale(-1, 1)
            this.canvas.drawImage(dwarf.buf(this.palette), -4 * Inline.B_SCALE, groundLevel)
            this.canvas.restore()
        }

        if (this.renderWaiting && dwarfsWaiting.length) {
            const count = Math.min(dwarfsWaiting.length, Inline.WAITING_SIZE)
            const buf = dwarfsWaiting[0].buf(this.palette)
            let pos, height

            for (let n = count - 1; n >= 0; --n) {
                if (n >= Inline.WAITING_BOTTOM) {
                    if (n >= Inline.WAITING_SIZE_BM) {
                        pos = Inline.WAITING_TOP_POS + Inline.B_SCALE *
                            (9 * (Inline.WAITING_SIZE - n) - 4)
                        height = groundLevel - 46
                    }
                    else {
                        pos = Inline.WAITING_MIDDLE_POS + Inline.B_SCALE *
                            (9 * (Inline.WAITING_SIZE_BM - n) - 4)
                        height = groundLevel - 23
                    }
                }
                else {
                    pos = Inline.WAITING_BOTTOM_POS + Inline.B_SCALE *
                        (9 * (Inline.WAITING_BOTTOM - n) - 4)
                    height = groundLevel
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
        this.palette = PAL_FOREST
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
