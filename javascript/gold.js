"use strict";
/// <reference path="dwarfs.d.ts" />
const bufGold = renderBuf(3 /* B_SCALE */ * 8, 3 /* B_SCALE */ * 9, canvas => {
    for (let y = 0; y < B_GOLD.length; ++y) {
        for (let x = 0; x < 8; ++x) {
            const n = B_GOLD[y] >> 2 * (7 - x) & 0b11;
            if (n) {
                canvas.fillStyle = '#' + PAL_GOLD[n];
                canvas.fillRect(3 /* B_SCALE */ * x, 3 /* B_SCALE */ * y, 3 /* B_SCALE */, 3 /* B_SCALE */);
            }
        }
    }
});
