const r = require("raylib");

const windowWidth = 800;
const windowHeight = 600;

const outerRectWidth = 500;
const outerRectHeight = 300;
const outerRectXposition = 200;
const outerRectYposition = 100;
const outerRectColor = r.WHITE;

const innerRectWidth = 0.8;
const innerRectHeight = 0.2;
const innerRectColor = r.RED;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Rectangle inside rectangle");
    r.SetTargetFPS(50);
}

function update() {}

function createRectangle(parent, num) {
    return parent * num;
}

function posCenter(parentPos, parent, child) {
    return parentPos + (parent - child) / 2;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        outerRectXposition,
        outerRectYposition,
        outerRectWidth,
        outerRectHeight,
        outerRectColor,
    );
    r.DrawRectangle(
        posCenter(
            outerRectXposition,
            outerRectWidth,
            createRectangle(outerRectWidth, innerRectWidth),
        ),
        posCenter(
            outerRectYposition,
            outerRectHeight,
            createRectangle(outerRectHeight, innerRectHeight),
        ),
        createRectangle(outerRectWidth, innerRectWidth),
        createRectangle(outerRectHeight, innerRectHeight),
        innerRectColor,
    );

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
    r.CloseWindow();
}

main();
