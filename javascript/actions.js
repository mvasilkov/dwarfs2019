"use strict";
/// <reference path="dwarfs.d.ts" />
$click('btn-adventure', () => {
    const dwarf = dwarfs.find(dwarf => dwarf.purpose == 0 /* NONE */);
    if (dwarf)
        dwarf.purpose = 1 /* TREASURE */;
});
$click('btn-draft', () => {
    updateGold(-draftCost);
    updateDraftCost();
    dwarfs.push(new Dwarf);
    $setContent('dwarf-count', dwarfs.length);
    $('dwarf-plural').style.display = dwarfs.length == 1 ? 'none' : 'inline';
});
