const r = require("raylib");

const windowWidth = 800;
const windowHeight = 600;

const outerRectWidth = 500;
const outerRectHeight = 300;
const outerXpos = 200;
const outerYpos = 100;
const outerRectColor = r.WHITE;

const innerRectWidth = 200;
const innerRectHeight = 150;
const innerRectColor = r.RED;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Rectangle inside rectangle");
    r.SetTargetFPS(50);
}

function update() {}

function posCenter(pos, outer, inner) {
    return pos + (outer - inner) / 2;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        outerXpos,
        outerYpos,
        outerRectWidth,
        outerRectHeight,
        outerRectColor,
    );
    r.DrawRectangle(
        posCenter(outerXpos, outerRectWidth, innerRectWidth),
        posCenter(outerYpos, outerRectHeight, innerRectHeight),
        innerRectWidth,
        innerRectHeight,
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
