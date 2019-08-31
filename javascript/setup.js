"use strict";
/// <reference path="dwarfs.d.ts" />
const SCREEN_WIDTH = 464;
const SCREEN_HEIGHT = 125;
const PAL_FORTRESS = ['7c3f58', 'eb6b6f', 'f9a875', 'fff6d3'];
const PAL_FOREST = ['4c625a', '7b9278', 'abc396', 'dbf4b4'];
const PAL_TREASURE = ['2b2b26', '706b66', 'a89f94', 'e0dbcd'];
const PAL_GOLD = ['', 'ffae00', 'ffd800', 'fff000'];
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
/* Utility functions */
function lerp(a, b, t) {
    return a * (1 - t) + b * t;
}
function clamp(x, a, b) {
    return (x < a) ? a : (x > b) ? b : x;
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
function $setContent(a, b) {
    $(a).textContent = '' + b;
}
function $click(a, b) {
    $(a).addEventListener('click', event => {
        event.preventDefault();
        b();
    });
}
