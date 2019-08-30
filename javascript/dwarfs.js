"use strict";
/// <reference path="dwarfs.d.ts" />
const cacheDwarfs = {};
class Dwarf {
    constructor(pos) {
        this.pos = pos;
        this.gold = 0;
        this.turnBack = false;
    }
    _render(palette, canvas) {
        for (let y = 0; y < B_DWARF.length; ++y) {
            for (let x = 0; x < 8; ++x) {
                const n = B_DWARF[y] >> 2 * (7 - x) & 0b11;
                if (n != 0b10) {
                    canvas.fillStyle = '#' + palette[n];
                    canvas.fillRect(3 /* B_SCALE */ * x, 3 /* B_SCALE */ * y, 3 /* B_SCALE */, 3 /* B_SCALE */);
                }
            }
        }
    }
    buf(palette) {
        return cacheDwarfs[palette[0]] ||
            (cacheDwarfs[palette[0]] = renderBuf(3 /* B_SCALE */ * 8, 3 /* B_SCALE */ * 11, this._render.bind(this, palette)));
    }
}
const dwarfs = [];
