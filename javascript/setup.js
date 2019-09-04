"use strict";
/// <reference path="dwarfs.d.ts" />
const SCREEN_WIDTH = 464;
const SCREEN_HEIGHT = 125;
const PAL_FORTRESS = ['7c3f58', 'eb6b6f', 'f9a875', 'fff6d3'];
const PAL_FOREST_DARK = ['8b956d', 'c4cfa1', '4d533c', '1f1f1f'];
const PAL_FOREST = ['4c625a', '7b9278', 'abc396', 'dbf4b4'];
const PAL_TREASURE = ['2b2b26', '706b66', 'a89f94', 'e0dbcd'];
const PAL_WASTELAND = ['203c56', '544e68', '8d697a', 'ffd4a3']; // https://lospec.com/palette-list/slso8
const PAL_GOLD = ['', 'ffae00', 'ffd800', 'fff000'];
const PAL_ORBITAL = ['ffdc26', 'fdec4a', 'fff699', 'fffee6'];
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
]; // opacity is 0b10
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
]; // opacity is 0b00
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
];
const B_APERTURE = [
    0b000011100000,
    0b001011101100,
    0b011101101110,
    0b011110101100,
    0b000000001011,
    0b111100000111,
];
const FACTORY = [
    1,
    [0, 18, 8, 27],
    [5, 7, 3, 11],
    [14, 7, 3, 11],
    2,
    [8, 18, 24, 27],
    [8, 7, 2, 11],
    [17, 7, 2, 11],
    // [8, 0, 1, 1],
    [6, 2, 1, 1],
    [7, 3, 1, 1],
    // [16, 0, 1, 1],
    [15, 1, 1, 1],
    [17, 2, 1, 1],
    [16, 3, 1, 1],
    0,
    [10, 22, 3, 5],
    [16, 22, 2, 3],
    [20, 22, 2, 3],
    [5, 5, 5, 2],
    [14, 5, 5, 2],
    2,
];
/* Utility functions */
function lerp(a, b, t) {
    return a * (1 - t) + b * t;
}
function clamp(x, a, b) {
    return (x < a) ? a : (x > b) ? b : x;
}
function easeInQuad(t) {
    return t * t;
}
function easeOutQuad(t) {
    return t * (2 - t);
}
function $(a) {
    return document.getElementById(a);
}
function $enable(a) {
    $(a).removeAttribute('disabled');
}
function $disable(a) {
    $(a).setAttribute('disabled', 'disabled');
}
function $setEnabled(a, b) {
    if (b)
        $enable(a);
    else
        $disable(a);
}
function $setContent(a, b) {
    $(a).textContent = '' + b;
}
function $click(a, b) {
    $(a).addEventListener('click', event => {
        event.preventDefault();
        b();
    });
}
function $spawn(a) {
    $(a).className = 'obj spawn';
}
function $despawn(a, done) {
    $(a).className = 'obj despawn';
    setTimeout(() => {
        $(a).style.display = 'none';
        if (done)
            done();
    }, 500);
}
function $spawnModal(a) {
    $('fullscreen').style.display = 'block';
    $spawn(a);
}
function $despawnModal(a, done) {
    $despawn(a, () => {
        $('fullscreen').style.display = 'none';
        if (done)
            done();
    });
}
