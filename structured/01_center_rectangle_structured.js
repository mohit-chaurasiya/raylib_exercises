const r = require("raylib");

const windowWidth = 800;
const windowHeight = 600;
const width = 500;
const height = 300;
const color = r.WHITE;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "rectangle in center");
    r.SetTargetFPS(50);
}

function update() { }

function posCenter(parent, child) {
    return (parent - child) / 2;
}

function draw() {
    const rectX = posCenter(windowWidth, width);
    const rectY = posCenter(windowHeight, height);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(rectX, rectY, width, height, color);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}

function main() {
    setup();
    loop();
}

main();
