/// <reference path="dwarfs.d.ts" />

$click('btn-adventure', () => {
    const dwarf = dwarfs.find(dwarf => dwarf.purpose == DwarfsPurpose.NONE)
    if (dwarf) dwarf.purpose = DwarfsPurpose.TREASURE
})

$click('btn-draft', () => {
    updateGold(-draftCost)
    updateDraftCost()
    dwarfs.push(new Dwarf)
    $setContent('dwarf-count', dwarfs.length)
    $('dwarf-plural').style.display = dwarfs.length == 1 ? 'none' : 'inline'
})
