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
