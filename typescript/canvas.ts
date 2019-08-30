/// <reference path="dwarfs.d.ts" />

function setupCanvas(canvasId: string): CanvasRenderingContext2D {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    canvas.width = SCREEN_WIDTH
    canvas.height = SCREEN_HEIGHT
    return canvas.getContext('2d')!
}
