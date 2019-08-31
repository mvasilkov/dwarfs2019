"use strict";
/// <reference path="dwarfs.d.ts" />
$click('btn-adventure', () => {
    if (dwarfsWaiting.length)
        dwarfsWaiting[0].purpose = 1 /* TREASURE */;
});
$click('btn-draft', () => {
    updateGold(-draftCost);
    updateDraftCost();
    dwarfs.push(new Dwarf);
    $setContent('dwarf-count', dwarfs.length);
    $('dwarf-plural').style.display = dwarfs.length == 1 ? 'none' : 'inline';
});
