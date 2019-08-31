/// <reference path="dwarfs.d.ts" />

let totalGold = 0

let draftCost = 1
let draftCostPrev = 1

function updateButtons() {
    if (totalGold >= draftCost)
        $enable('btn-draft')
    else $disable('btn-draft')
}

function updateGold(n: number) {
    if (totalGold == 0) // First update
        $('gold-title').style.display = 'inline'

    totalGold += n

    $setContent('gold-count', totalGold)
    updateButtons()
}

function updateDraftCost() {
    let t = draftCost
    draftCost += draftCostPrev
    draftCostPrev = t

    $setContent('dwarf-cost', draftCost)
    updateButtons()
}
