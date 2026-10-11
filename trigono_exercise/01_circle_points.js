const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "Circle Point";
    const FPS = 50;
    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    const numberOfPoint = 12;
    const angleDifference = (2 * Math.PI) / numberOfPoint;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        HEIGHT,
        centerX,
        centerY,
        radius,
        numberOfPoint,
        angleDifference,
    };
}

function drawCircleLine(world) {
    r.DrawCircleLines(world.centerX, world.centerY, world.radius, r.GRAY);
}

function drawCircle(world, numberOfCircle) {
    const angle = numberOfCircle * world.angleDifference;
    const x = world.centerX + world.radius * Math.cos(angle);
    const y = world.centerY + world.radius * Math.sin(angle);

    r.DrawCircle(x, y, 4, r.WHITE);
}

function draw(world) {
    r.BeginDrawing();

    drawCircleLine(world);
    for (let i = 0; i < world.numberOfPoint; i++) {
        drawCircle(world, i);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}
function main() {
    const world = setup();
    loop(world);
}

main();
