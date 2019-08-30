"use strict";
/// <reference path="dwarfs.d.ts" />
class Zone {
    render() {
        this.canvas.fillStyle = '#' + this.palette[0];
        this.canvas.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.canvas.fillStyle = '#' + this.palette[3];
        this.canvas.fillRect(2, 2, SCREEN_WIDTH - 4, SCREEN_HEIGHT - 4);
    }
}
class Fortress extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-fortress');
        this.palette = PAL_FORTRESS;
    }
}
class Forest extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-forest');
        this.palette = PAL_FOREST;
    }
}
class Treasure extends Zone {
    constructor() {
        super();
        this.canvas = setupCanvas('can-treasure');
        this.palette = PAL_TREASURE;
    }
}
