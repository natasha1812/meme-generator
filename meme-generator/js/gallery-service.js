"use strict"

function getImgs() {
    var images = []
    for (var i = 1; i <= 25; i++) {
        images.push({ id: i, folder: 'diff-ratio-imgs' })
    }
    return images
}

function getSquareImgs() {
    var images = []
    for (var i = 1; i <= 18; i++) {
        images.push({ id: i, folder: 'square-imgs' })
    }
    return images
}
