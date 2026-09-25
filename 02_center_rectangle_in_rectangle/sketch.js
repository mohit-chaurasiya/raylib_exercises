const r = require('raylib');
const math = require('./math')

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
    // write code from here
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(
        outerXpos,
        outerYpos,
        outerRectWidth,
        outerRectHeight,
        outerRectColor,
    );
    r.DrawRectangle(
        math.calcOffset(outerXpos, outerRectWidth, innerRectWidth),
        math.calcOffset(outerYpos, outerRectHeight, innerRectHeight),
        innerRectWidth,
        innerRectHeight,
        innerRectColor,
    );

    //end
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