function calcOffset(pos, outer, inner) {
    return pos + (outer - inner) / 2;
}


module.exports = {
    calcOffset,
}