"use strict";
/// <reference path="dwarfs.d.ts" />
function setupCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    return canvas.getContext('2d');
}
