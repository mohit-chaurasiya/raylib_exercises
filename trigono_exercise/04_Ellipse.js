const r = require("raylib");

function setup() {
    const WIDTH = 900;
    const HEIGHT = 500;
    const TITLE = "Regular Polygon";
    const FPS = 50;

    const centerX = 300;
    const centerY = 200;
    const horizontalRadius = 200;
    const verticalRadius = 150;
    const numberOfSide = 800;
    const angleDifference = (2 * Math.PI) / numberOfSide;

    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        screen: {
            width: WIDTH,
            height: HEIGHT,
        },

        ellipse: {
            centerX,
            centerY,
            horizontalRadius,
            verticalRadius,
            numberOfSide,
            angleDifference,
        },
    };
}

function calcCoordinate(ellipse, angle) {
    const x = ellipse.centerX + ellipse.horizontalRadius * Math.cos(angle);
    const y = ellipse.centerY + ellipse.verticalRadius * Math.sin(angle);
    return { x, y };
}

function getCoordinate(ellipse, angle1, angle2) {
    const x1 = calcCoordinate(ellipse, angle1).x;
    const y1 = calcCoordinate(ellipse, angle1).y;

    const x2 = calcCoordinate(ellipse, angle2).x;
    const y2 = calcCoordinate(ellipse, angle2).y;

    return { x1, y1, x2, y2 };
}

function drawEllipse(ellipse, i) {
    const angle1 = i * ellipse.angleDifference;
    const angle2 = ((i + 1) % ellipse.numberOfSide) * ellipse.angleDifference;

    const offSet = getCoordinate(ellipse, angle1, angle2);

    r.DrawLine(offSet.x1, offSet.y1, offSet.x2, offSet.y2, r.WHITE);
}

function draw(ellipse) {
    r.BeginDrawing();

    for (let i = 0; i < ellipse.numberOfSide; i++) {
        drawEllipse(ellipse, i);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // update(world);
        draw(world.ellipse);
    }
}
function main() {
    const world = setup();
    loop(world);
}

main();
