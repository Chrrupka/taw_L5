class Point {
  constructor(public x: number, public y: number) {}

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}


class Rectangle {
  constructor(public a: Point, public b: Point, public c: Point, public d: Point) {}

  move(dx: number, dy: number) {
    this.a.move(dx, dy);
    this.b.move(dx, dy);
    this.c.move(dx, dy);
    this.d.move(dx, dy);
  }

  getArea(): number {
    const width = Math.abs(this.b.x - this.a.x);
    const height = Math.abs(this.c.y - this.a.y);
    return width * height;
  }
}

const a = new Point(0, 0);
const b = new Point(10, 0);
const c = new Point(0, 10);
const d = new Point(10, 10);
const rectangle = new Rectangle(a, b, c, d);

// Przykład użycia
console.log(rectangle.getArea());
rectangle.move(5, 5);
console.log(rectangle.a);

export { Point, Rectangle };
