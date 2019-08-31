/// <reference path="dwarfs.d.ts" />

function putchar(a: number, canvas: CanvasRenderingContext2D, x0: number, y0: number) {
    for (let y = 0; y < 8; ++y) {
        const char = FONT[a][y]

        for (let x = 0; x < 6; ++x) {
            const bit = char >> (5 - x) & 1
            if (bit) {
                canvas.fillRect(Inline.B_SCALE * x + x0, Inline.B_SCALE * y + y0,
                    Inline.B_SCALE, Inline.B_SCALE)
            }
        }
    }
}

function write(a: string, canvas: CanvasRenderingContext2D, x0: number, y0: number) {
    for (let x = 0; x < a.length; ++x) {
        putchar(a.charCodeAt(x), canvas, 6 * Inline.B_SCALE * x + x0, y0)
    }
}
