/// <reference path="dwarfs.d.ts" />

const SCREEN_WIDTH = 464
const SCREEN_HEIGHT = 125

const PAL_FORTRESS = ['7c3f58', 'eb6b6f', 'f9a875', 'fff6d3']
const PAL_FOREST_DARK = ['8b956d', 'c4cfa1', '4d533c', '1f1f1f']
const PAL_FOREST = ['4c625a', '7b9278', 'abc396', 'dbf4b4']
const PAL_TREASURE = ['2b2b26', '706b66', 'a89f94', 'e0dbcd']
const PAL_WASTELAND = ['203c56', '544e68', '8d697a', 'ffd4a3'] // https://lospec.com/palette-list/slso8
const PAL_GOLD = ['', 'ffae00', 'ffd800', 'fff000']
const PAL_ORBITAL = ['ffdc26', 'fdec4a', 'fff699', 'fffee6']

const enum Inline {
    B_SCALE = 3,
    // Waiting fortress
    WAITING_BOTTOM = 0 | 230 / (9 * Inline.B_SCALE) + 1,
    WAITING_MIDDLE = Inline.WAITING_BOTTOM - 1,
    WAITING_TOP = Inline.WAITING_BOTTOM - 2,
    WAITING_SIZE_BM = Inline.WAITING_BOTTOM + Inline.WAITING_MIDDLE,
    WAITING_SIZE = Inline.WAITING_BOTTOM + Inline.WAITING_MIDDLE + Inline.WAITING_TOP,
    WAITING_BOTTOM_POS = 230 - 9 * Inline.B_SCALE * Inline.WAITING_BOTTOM,
    WAITING_MIDDLE_POS = Inline.WAITING_BOTTOM_POS + 4 * Inline.B_SCALE + 1, // 4.5
    WAITING_TOP_POS = Inline.WAITING_BOTTOM_POS + 9 * Inline.B_SCALE,
    // Orbital
    ORBITAL_DURATION = 2000,
}

const B_DWARF = [
    0b1001010101010110,
    0b0111111111111101,
    0b0111111111111101,
    0b0111011111011101,
    0b0011111111111100,
    0b0000000000000000,
    0b0000110101110000,
    0b0000000000000000,
    0b1000000000000010,
    0b1010100000001010,
    0b1010101000001010,
] // opacity is 0b10

const B_GOLD = [
    0b0000111111110000,
    0b0011101010101000,
    0b1110100101101010,
    0b1010011010111010,
    0b1010011010111010,
    0b1010011010111010,
    0b1010101111101001,
    0b0010101010100100,
    0b0000010101010000,
] // opacity is 0b00

const B_KEG = [
    0b111111110101010111111111,
    0b111101011011111001011111,
    0b110111111011111011110111,
    0b110111111011111011110111,
    0b110001011011111001010011,
    0b011100000101010100001101,
    0b011111100000000010111101,
    0b000110111111101111100100,
    0b010001011111101101010001,
    0b011100000101010100001101,
    0b011110110000000011101101,
    0b110110111111101111100111,
    0b110001011111101101010011,
    0b111100000101010100001111,
    0b111111110000000011111111,
]

/* Utility functions */
function lerp(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t
}

function clamp(x: number, a: number, b: number): number {
    return (x < a) ? a : (x > b) ? b : x
}

function easeInQuad(t: number): number {
    return t * t
}

function easeOutQuad(t: number): number {
    return t * (2 - t)
}

function $(a: string): HTMLElement {
    return document.getElementById(a)!
}

function $enable(a: string) {
    $(a).removeAttribute('disabled')
}

function $disable(a: string) {
    $(a).setAttribute('disabled', 'disabled')
}

function $setEnabled(a: string, b: any) {
    if (b) $enable(a)
    else $disable(a)
}

function $setContent(a: string, b: number | string) {
    $(a).textContent = '' + b
}

function $click(a: string, b: () => void) {
    $(a).addEventListener('click', event => {
        event.preventDefault()
        b()
    })
}

function $spawn(a: string) {
    $(a).className = 'obj spawn'
}

function $despawn(a: string, done?: Function) {
    $(a).className = 'obj despawn'
    setTimeout(() => {
        $(a).style.display = 'none'
        if (done) done()
    }, 500)
}

function $spawnModal(a: string) {
    $('fullscreen').style.display = 'block'
    $spawn(a)
}

function $despawnModal(a: string, done?: Function) {
    $despawn(a, () => {
        $('fullscreen').style.display = 'none'
        if (done) done()
    })
}
