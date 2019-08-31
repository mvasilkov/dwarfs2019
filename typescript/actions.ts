/// <reference path="dwarfs.d.ts" />

$click('btn-adventure', () => {
    if (dwarfsWaiting.length)
        dwarfsWaiting[0].purpose = DwarfsPurpose.TREASURE
})

$click('btn-draft', () => {
    updateGold(-draftCost)
    updateDraftCost()
    dwarfs.push(new Dwarf)
    $setContent('dwarf-count', dwarfs.length)
    $('dwarf-plural').style.display = dwarfs.length == 1 ? 'none' : 'inline'
})

$click('btn-covfefe', () => {
    updateGold(-10)
    dwarfSpeed *= 1.2
    $despawn('covfefe')
})

$click('btn-autorun', () => {
    updateGold(-20)
    hasAutorun = true
    $despawn('autorun')
    $spawn('turborun')
})

$click('btn-turborun', () => {
    updateGold(-30)
    autorunSpeed *= 0.5
    $despawn('turborun')
    $spawn('speedrun')
})

$click('btn-speedrun', () => {
    updateGold(-40)
    autorunSpeed *= 0.5
    $despawn('speedrun')
})
