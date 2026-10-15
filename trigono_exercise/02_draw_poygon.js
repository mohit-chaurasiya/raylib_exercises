const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "Regular Polygon";
    const FPS = 50;

    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    const numberOfSide = 7;
    const angleDifference = (2 * Math.PI) / numberOfSide;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        HEIGHT,
        centerX,
        centerY,
        radius,
        numberOfSide,
        angleDifference,
    };
}

function drawCircle(x, y, radius) {
    r.DrawCircle(x, y, radius, r.WHITE);
}

function drawPolygonSide(world, i) {
    const angle1 = i * world.angleDifference;
    const angle2 = ((i + 1) % world.numberOfSide) * world.angleDifference;

    const x1 = world.centerX + world.radius * Math.cos(angle1);
    const y1 = world.centerY + world.radius * Math.sin(angle1);

    const x2 = world.centerX + world.radius * Math.cos(angle2);
    const y2 = world.centerY + world.radius * Math.sin(angle2);

    drawCircle(x1, y1, 4);
    r.DrawLine(x1, y1, x2, y2, r.WHITE);
}

function draw(world) {
    r.BeginDrawing();

    r.DrawCircleLines(world.centerX, world.centerY, world.radius, r.GRAY);
    for (let i = 0; i < world.numberOfSide; i++) {
        drawPolygonSide(world, i);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // update(world);
        draw(world);
    }
}
function main() {
    const world = setup();
    loop(world);
}

main();
