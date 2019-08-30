"use strict";
/// <reference path="dwarfs.d.ts" />
class Dwarf {
    constructor() {
        this.cache = {};
    }
    render(palette, canvas) {
        for (let y = 0; y < B_DWARF.length; ++y) {
            for (let x = 0; x < 8; ++x) {
                const n = B_DWARF[y] >> 2 * (7 - x) & 0b11;
                if (n != 0b10) {
                    canvas.fillStyle = '#' + palette[n];
                    canvas.fillRect(B_SCALE * x, B_SCALE * y, B_SCALE, B_SCALE);
                }
            }
        }
    }
    buf(palette) {
        return this.cache[palette[0]] ||
            (this.cache[palette[0]] = renderBuf(B_SCALE * 8, B_SCALE * 11, this.render.bind(this, palette)));
    }
}
