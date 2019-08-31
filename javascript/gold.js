"use strict";
/// <reference path="dwarfs.d.ts" />
let totalGold = 0;
let draftCost = 1;
let draftCostPrev = 1;
function updateButtons() {
    $setEnabled('btn-draft', totalGold >= draftCost);
    $setEnabled('btn-covfefe', totalGold >= 10);
}
function updateGold(n) {
    if (totalGold == 0) { // First update
        $('gold-title').style.display = 'inline';
        $spawn('draft');
        setTimeout(() => {
            $spawn('covfefe');
        }, 300);
    }
    totalGold += n;
    $setContent('gold-count', totalGold);
    updateButtons();
}
function updateDraftCost() {
    let t = draftCost;
    draftCost += draftCostPrev;
    draftCostPrev = t;
    $setContent('dwarf-cost', draftCost);
    updateButtons();
}
