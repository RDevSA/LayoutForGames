export default class Container {
    constructor(shape, color, x = 0, y = 0, width = 100, height = 100) {
        this.shape = shape;
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.fillStyle = 'color';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}