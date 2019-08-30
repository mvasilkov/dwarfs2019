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
let totalGold = 0;
function updateGold(n) {
    if (totalGold == 0) {
        document.getElementById('gold-title').style.display = 'inline';
    }
    totalGold += n;
    if (totalGold >= draftCost) {
        document.getElementById('btn-draft').removeAttribute('disabled');
    }
    document.getElementById('gold-count').textContent = '' + totalGold;
}
let draftCost = 1;
let draftCost2 = 1;
function updateDraftCost() {
    let t = draftCost;
    draftCost += draftCost2;
    draftCost2 = t;
    document.getElementById('dwarf-cost').textContent = '' + draftCost;
    if (totalGold < draftCost) {
        document.getElementById('btn-draft').setAttribute('disabled', 'disabled');
    }
}
