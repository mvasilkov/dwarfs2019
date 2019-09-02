"use strict";
/// <reference path="dwarfs.d.ts" />
let dwarfSpeed = 10;
let speedFortress = 0.9;
let speedForest = 0.59;
let speedTreasure = 0.9;
let dwarfAle = false;
const cacheDwarfs = {};
class Dwarf {
    constructor() {
        this.pos = 0;
        this.prevPos = 0;
        this.gold = 0;
        this.purpose = 0 /* NONE */;
        this.turnBack = false;
        this.height = groundLevel;
    }
    _render(palette, canvas) {
        for (let y = 0; y < B_DWARF.length; ++y) {
            for (let x = 0; x < 8; ++x) {
                const n = B_DWARF[y] >> 2 * (7 - x) & 0b11;
                if (n != 0b10) {
                    canvas.fillStyle = '#' + palette[n];
                    canvas.fillRect(3 /* B_SCALE */ * x, 3 /* B_SCALE */ * y, 3 /* B_SCALE */, 3 /* B_SCALE */);
                }
            }
        }
    }
    buf(palette) {
        return cacheDwarfs[palette[0]] ||
            (cacheDwarfs[palette[0]] = renderBuf(3 /* B_SCALE */ * 8, 3 /* B_SCALE */ * 11, this._render.bind(this, palette)));
    }
    advance() {
        this.prevPos = this.pos;
        const speed = dwarfSpeed * (this.pos < 230 ? speedFortress :
            (this.pos > 690 ? speedTreasure : speedForest));
        switch (this.purpose) {
            case 1 /* TREASURE */:
                this.turnBack = false;
                this.pos += speed;
                if (this.pos >= 2 * SCREEN_WIDTH) {
                    this.pos = 2 * SCREEN_WIDTH;
                    this.gold = 1;
                    this.purpose = 2 /* FORTRESS */;
                }
                break;
            case 2 /* FORTRESS */:
                this.turnBack = true;
                this.pos -= speed;
                if (this.pos <= 0) {
                    this.pos = 0;
                    updateGold(this.gold);
                    this.gold = 0;
                    this.purpose = 0 /* NONE */;
                    this.turnBack = false;
                }
                break;
            case 3 /* ALE */:
                if (Math.random() < 0.005)
                    this.turnBack = !this.turnBack;
                this.pos += 0.1 * (this.turnBack ? -speed : speed);
                if (this.pos < 250) {
                    this.pos = 250;
                    this.turnBack = false;
                }
                else if (this.pos > 670) {
                    this.pos = 670;
                    this.turnBack = true;
                }
                const heightChange = Math.random();
                if (heightChange < 0.01) {
                    if (heightChange < 0.005) {
                        this.height = clamp(this.height + 1, 50, 85);
                    }
                    else {
                        this.height = clamp(this.height - 1, 50, 85);
                    }
                }
                break;
        }
    }
}
const dwarfs = [];
let dwarfsWaiting = [];
function dwarfsFoundAle() {
    dwarfAle = true;
    dwarfs.forEach(dwarf => {
        if (dwarf.purpose == 3 /* ALE */)
            return;
        dwarf.pos = (0 | Math.random() * 420) + 250;
        dwarf.prevPos = dwarf.pos;
        dwarf.gold = 0;
        dwarf.purpose = 3 /* ALE */;
        dwarf.turnBack = Math.random() < 0.5;
        dwarf.height = (0 | Math.random() * 35) + 50;
    });
}
function dwarfsNoAle() {
    dwarfAle = false;
    dwarfs.forEach(dwarf => {
        dwarf.pos = 0;
        dwarf.prevPos = 0;
        dwarf.gold = 0;
        dwarf.purpose = 0 /* NONE */;
        dwarf.turnBack = false;
        dwarf.height = groundLevel;
    });
}
