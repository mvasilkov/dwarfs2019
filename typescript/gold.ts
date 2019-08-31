/// <reference path="dwarfs.d.ts" />

const goldSpawn: [number, string][] = [
    [10, 'autorun'],
]

let totalGold = 0

let draftCost = 1
let draftCostPrev = 1

function updateButtons() {
    $setEnabled('btn-draft', totalGold >= draftCost)
    $setEnabled('btn-covfefe', totalGold >= 10)
    $setEnabled('btn-autorun', totalGold >= 20)
    $setEnabled('btn-turborun', totalGold >= 30)
    $setEnabled('btn-speedrun', totalGold >= 40)
}

function updateGold(n: number) {
    if (totalGold == 0) { // First update
        $('gold-title').style.display = 'inline'
        $spawn('draft')
        $spawn('covfefe')
    }

    totalGold += n

    while (goldSpawn.length && totalGold >= goldSpawn[0][0]) {
        $spawn(goldSpawn[0][1])
        goldSpawn.shift()
    }

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
