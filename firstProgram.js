const r = require("raylib");

const windowWidth = 500;
const windowHeight = 400;
let xPos = 10;
let yPos = 10;
const width = 100;
const height = 100;
const color = r.WHITE;

r.InitWindow(windowWidth, windowHeight, "first raylib program ");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
    if (xPos < windowWidth - xPos) {
        xPos = xPos + 1;
    }

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(xPos, yPos, width, height, color);
    r.EndDrawing();
}
