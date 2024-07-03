export default class Container {
    constructor(shape, parent) {
        this.shape = shape;
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.parent = parent;
    }

    getParent(parent = true) {
        if (parent) {
            let containers = [];
            let index = containers.indexOf(parent);
            return index;
        }

    }

    draw(context, color, x = 0, y = 0, width = 100, height = 100) {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    }
}