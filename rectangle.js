"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    move(dx, dy) {
        this.a.move(dx, dy);
        this.b.move(dx, dy);
        this.c.move(dx, dy);
        this.d.move(dx, dy);
    }
    getArea() {
        const width = Math.abs(this.b.x - this.a.x);
        const height = Math.abs(this.c.y - this.a.y);
        return width * height;
    }
}
exports.Rectangle = Rectangle;
const a = new Point(0, 0);
const b = new Point(10, 0);
const c = new Point(0, 10);
const d = new Point(10, 10);
const rectangle = new Rectangle(a, b, c, d);
// Przykład użycia
console.log(rectangle.getArea());
rectangle.move(5, 5);
console.log(rectangle.a);
