"use strict";
/// <reference path="dwarfs.d.ts" />
const bufGold = renderBuf(3 /* B_SCALE */ * 8, 3 /* B_SCALE */ * 9, canvas => {
    for (let y = 0; y < B_GOLD.length; ++y) {
        for (let x = 0; x < 8; ++x) {
            const n = B_GOLD[y] >> 2 * (7 - x) & 0b11;
            if (n) {
                canvas.fillStyle = '#' + PAL_GOLD[n];
                canvas.fillRect(3 /* B_SCALE */ * x, 3 /* B_SCALE */ * y, 3 /* B_SCALE */, 3 /* B_SCALE */);
            }
        }
    }
});
class Zone {
    render(t) {
        this.canvas.fillStyle = '#' + this.palette[3];
        this.canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        for (let dwarf of dwarfs) {
            const pos = lerp(dwarf.prevPos, dwarf.pos, t) - this.pos;
            if (pos < -40 || pos > 500)
                continue;
            if (this.spawn) {
                $spawn(this.spawn);
                this.spawn = false;
            }
            this.canvas.save();
            this.canvas.translate(pos + 2, 0);
            if (dwarf.gold)
                this.canvas.drawImage(bufGold, -4 * 3 /* B_SCALE */, 20);
            if (dwarf.turnBack)
                this.canvas.scale(-1, 1);
            this.canvas.drawImage(dwarf.buf(this.palette), -4 * 3 /* B_SCALE */, 60);
            this.canvas.restore();
        }
        this.canvas.lineWidth = 2;
        this.canvas.strokeStyle = '#' + this.palette[0];
        this.canvas.beginPath();
        this.canvas.rect(1, 1, SCREEN_WIDTH - 2, SCREEN_HEIGHT - 2);
        this.canvas.stroke();
    }
}
class Fortress extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-fortress');
        this.palette = PAL_FORTRESS;
        this.pos = -230;
        this.spawn = false;
    }
}
class Forest extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-forest');
        this.palette = PAL_FOREST;
        this.pos = 230;
        this.spawn = 'forest';
    }
}
class Treasure extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-treasure');
        this.palette = PAL_TREASURE;
        this.pos = 690;
        this.spawn = 'treasure';
    }
}
