export interface Shape {
    x: number;
    y: number;
    lineWidth: number;
    color: string;
    draw(canvas: CanvasRenderingContext2D): void;
}

/**
 * Muutama vaihtoehto:
 * Jokaiseen luokkaan voi tehdä updaten, mutta miten se tehdään
 * for
 * circles[i].update(canvas.width, canvas.height, speedx, speedy)
 * 
 * 
 * update(speedX, speedY): void {
 *  canvas.context.x
 * }
 */