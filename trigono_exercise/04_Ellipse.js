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
    const numberOfSide = 500;
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

function drawPolygonSide(ellipse, i) {
    const angle1 = i * ellipse.angleDifference;
    const angle2 = ((i + 1) % ellipse.numberOfSide) * ellipse.angleDifference;

    const x1 = ellipse.centerX + ellipse.horizontalRadius * Math.cos(angle1);
    const y1 = ellipse.centerY + ellipse.verticalRadius * Math.sin(angle1);

    const x2 = ellipse.centerX + ellipse.horizontalRadius * Math.cos(angle2);
    const y2 = ellipse.centerY + ellipse.verticalRadius * Math.sin(angle2);

    r.DrawLine(x1, y1, x2, y2, r.WHITE);
}

function draw(ellipse) {
    r.BeginDrawing();

    for (let i = 0; i < ellipse.numberOfSide; i++) {
        drawPolygonSide(ellipse, i);
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
