/// <reference path="dwarfs.d.ts" />

const bufGold: HTMLCanvasElement = renderBuf(B_SCALE * 8, B_SCALE * 9, canvas => {
    for (let y = 0; y < B_GOLD.length; ++y) {
        for (let x = 0; x < 8; ++x) {
            const n = B_GOLD[y] >> 2 * (7 - x) & 0b11
            if (n) {
                canvas.fillStyle = '#' + PAL_GOLD[n]
                canvas.fillRect(B_SCALE * x, B_SCALE * y, B_SCALE, B_SCALE)
            }
        }
    }
})
