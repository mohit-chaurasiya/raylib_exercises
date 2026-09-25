const r = require("raylib");

const windowWidth = 800;
const windowHeight = 600;

const radiusOfCircle = 50;

const xPosOfSrcCircle = 200;
const yPosOfSrcCircle = 300;
const srcCircleColor = r.BLUE;

const xPosOfdestCircle1 = 500;
const yPosOfdestCircle1 = 100;
const destCircleColor = r.RED;
const xPosOfdestCircle2 = 200;
const yPosOfdestCircle2 = 500;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "closer target");
    r.SetTargetFPS(60);
}

function update() {}

function distance(x1, y1, x2, y2) {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

function drawLine() {
    return distance(
        xPosOfSrcCircle,
        yPosOfSrcCircle,
        xPosOfdestCircle1,
        yPosOfdestCircle1,
    ) <
        distance(
            xPosOfSrcCircle,
            yPosOfSrcCircle,
            xPosOfdestCircle2,
            yPosOfdestCircle2,
        )
        ? r.DrawLine(
              xPosOfSrcCircle,
              yPosOfSrcCircle,
              xPosOfdestCircle1,
              yPosOfdestCircle1,
              r.BLACK,
          )
        : r.DrawLine(
              xPosOfSrcCircle,
              yPosOfSrcCircle,
              xPosOfdestCircle2,
              yPosOfdestCircle2,
              r.BLACK,
          );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(
        xPosOfSrcCircle,
        yPosOfSrcCircle,
        radiusOfCircle,
        srcCircleColor,
    );
    r.DrawCircle(
        xPosOfdestCircle1,
        yPosOfdestCircle1,
        radiusOfCircle,
        destCircleColor,
    );
    r.DrawCircle(
        xPosOfdestCircle2,
        yPosOfdestCircle2,
        radiusOfCircle,
        destCircleColor,
    );

    drawLine();

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
