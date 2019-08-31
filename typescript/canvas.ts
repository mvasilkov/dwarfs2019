/// <reference path="dwarfs.d.ts" />

function setupCanvas(canvasId: string): CanvasRenderingContext2D {
    const canvas = $(canvasId) as HTMLCanvasElement
    canvas.width = SCREEN_WIDTH
    canvas.height = SCREEN_HEIGHT
    return canvas.getContext('2d')!
}

type RenderFun = (canvas: CanvasRenderingContext2D) => void

function renderBuf(width: number, height: number, render: RenderFun) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    render(canvas.getContext('2d')!)
    return canvas
}
