const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 600;
    const TITLE = "Regular Polygon";
    const FPS = 50;

    const centerX = 100;
    const centerY = 200;

    const segments = 50;
    const graphWidth = 500;
    const amplitude = 100;
    const angleDifference = (2 * Math.PI) / segments;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        HEIGHT,
        centerX,
        centerY,
        segments,
        graphWidth,
        amplitude,
        angleDifference,
    };
}

function drawSinWave(world, angle1, angle2, x1, x2) {
    const sinY1 = world.centerY - Math.sin(angle1) * world.amplitude;
    const sinY2 = world.centerY - Math.sin(angle2) * world.amplitude;

    r.DrawLine(x1, sinY1, x2, sinY2, r.GREEN);
}

function drawCosWave(world, angle1, angle2, x1, x2) {
    const cosY1 = world.centerY - Math.cos(angle1) * world.amplitude;
    const cosY2 = world.centerY - Math.cos(angle2) * world.amplitude;

    r.DrawLine(x1, cosY1, x2, cosY2, r.BLUE);
}

function getPosition(world, i) {
    return world.centerX + (i / world.segments) * world.graphWidth;
}

function calcAngle(world, i) {
    return i * world.angleDifference;
}

function drawWave(world, i) {
    const angle1 = calcAngle(world, i);
    const angle2 = calcAngle(world, i + 1);

    const x1 = getPosition(world, i);
    const x2 = getPosition(world, i + 1);

    drawSinWave(world, angle1, angle2, x1, x2);
    drawCosWave(world, angle1, angle2, x1, x2);
}

function drawKeyPoints(world) {
    const sinPoints = [
        [0, 0],
        [Math.PI / 2, 1],
        [Math.PI, 0],
        [(3 * Math.PI) / 2, -1],
        [2 * Math.PI, 0],
    ];

    const cosPoints = [
        [0, 1],
        [Math.PI / 2, 0],
        [Math.PI, -1],
        [(3 * Math.PI) / 2, 0],
        [2 * Math.PI, 1],
    ];

    for (let i = 0; i < sinPoints.length; i++) {
        markPoint(world, sinPoints[i][0], sinPoints[i][1], r.GREEN);
        markPoint(world, cosPoints[i][0], cosPoints[i][1], r.BLUE);
    }
}

function markPoint(world, angle, value, color) {
    const degree = "" + angle * (180 / Math.PI);
    const x = world.centerX + (angle / (2 * Math.PI)) * world.graphWidth;
    const y = world.centerY - value * world.amplitude;

    r.DrawText(degree, x - 10, world.centerY + 10, 18, r.WHITE);
    r.DrawCircle(x, y, 5, color);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawLine(world.centerX, 75, world.centerX, 350, r.WHITE);
    r.DrawLine(world.centerX, world.centerY, 600, world.centerY, r.WHITE);

    drawText(world);
    drawKeyPoints(world);

    for (let i = 0; i < world.segments; i++) {
        drawWave(world, i);
    }

    r.DrawLine(world.centerX, world.amplitude, 600, world.amplitude, r.WHITE);
    r.DrawLine(
        world.centerX,
        world.centerY + world.amplitude,
        600,
        world.centerY + world.amplitude,
        r.WHITE,
    );

    r.EndDrawing();
}

function drawText(world) {
    r.DrawText("cosine", world.centerX - 80, world.amplitude - 10, 18, r.BLUE);
    r.DrawText("sine", world.centerX - 80, world.centerY - 10, 18, r.GREEN);

    r.DrawText("1", world.centerX - 20, world.amplitude - 10, 18, r.WHITE);
    r.DrawText(
        "-1",
        world.centerX - 20,
        world.centerY + world.amplitude - 10,
        18,
        r.WHITE,
    );
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
