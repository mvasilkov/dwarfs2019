"use strict";
/// <reference path="dwarfs.d.ts" />
class Zone {
    render() {
        this.canvas.fillStyle = '#' + this.palette[3];
        this.canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        for (let dwarf of dwarfs) {
            const pos = dwarf.pos - this.pos;
            if (pos < -40 || pos > 500)
                continue;
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
    }
}
class Forest extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-forest');
        this.palette = PAL_FOREST;
        this.pos = 230;
    }
}
class Treasure extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-treasure');
        this.palette = PAL_TREASURE;
        this.pos = 690;
    }
}
