"use strict"

var gElCanvas
var gCtx

function onInitMeme() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.selected-image')
    if (elContainer && gElCanvas) {
        gElCanvas.width = elContainer.clientWidth * 0.75
    }
}

function renderMeme() {
    var meme = getMeme()
    var imgUrl = getImgUrl(meme.selectedImgId)

    var img = new Image()
    img.src = imgUrl

    img.onload = function () {
        coverCanvasWithImg(img)
        drawText(meme)
    }
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(meme) {
    meme.lines.forEach(function(line) {
        var fontSize = gElCanvas.width * 0.05
        gCtx.font = fontSize + 'px Arial'
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'

        var y = gElCanvas.height / 2
        var x = gElCanvas.width / 2

        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 7
        gCtx.strokeText(line.txt, x, y)

        gCtx.fillStyle = 'white'
        gCtx.fillText(line.txt, x, y)
    })
}

function onDownloadMeme() {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    var link = document.createElement('a')
    link.href = imgContent
    link.download = 'meme.jpg'
    link.click()
}