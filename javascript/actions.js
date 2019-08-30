"use strict";
/// <reference path="dwarfs.d.ts" />
document.getElementById('btn-adventure').addEventListener('click', event => {
    event.preventDefault();
    const dwarf = dwarfs.find(dwarf => dwarf.purpose == 0 /* NONE */);
    if (dwarf)
        dwarf.purpose = 1 /* TREASURE */;
});
document.getElementById('btn-draft').addEventListener('click', event => {
    event.preventDefault();
    updateGold(-draftCost);
    updateDraftCost();
    dwarfs.push(new Dwarf);
});
