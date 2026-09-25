const r = require("raylib");

const circle1X = 400;
const circle1Y = 250;
const circle1Rad = 50;

const circle2X = 100;
const circle2Y = 250;
const circle2Rad = 30;

function setUp() {
    r.InitWindow(800, 800, "Center Rectangle");
    r.SetTargetFPS(60);
}

function update() { }

function calcCenterDistance() {
    const x1 = circle1X;
    const y1 = circle1Y;

    const x2 = circle2X;
    const y2 = circle2Y;

    const result = (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
    return result;

}

function setColor() {
    if (calcCenterDistance() - (circle1Rad + circle2Rad) > 0) {
        return r.BLACK;
    }

    return r.RED;
}

function draw() {

    r.BeginDrawing()
    r.ClearBackground(r.WHITE)
    r.DrawCircle(circle1X, circle1Y, circle1Rad, setColor());
    r.DrawCircle(circle2X, circle2Y, circle2Rad, setColor());
    r.EndDrawing()
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow();
}

main();
