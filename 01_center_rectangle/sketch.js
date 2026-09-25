const r = require('raylib');
const math = require('./math')

const windowWidth = 800;
const windowHeight = 600;
const width = 500;
const height = 300;
const color = r.WHITE;

function running() {
    return !r.WindowShouldClose();
}


function setup() {
    r.InitWindow(windowWidth, windowHeight, 'raylib template');
    r.SetTargetFPS(50);
}

function update() {

}



function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    // write code from here

    const rectX = math.calcOffset(windowWidth, width);
    const rectY = math.calcOffset(windowHeight, height);

    r.DrawRectangle(rectX, rectY, width, height, color);
    r.EndDrawing();

}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};