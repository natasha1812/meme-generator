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
    var imgUrl
    if (meme.imgUrl) {
        imgUrl = meme.imgUrl
    } else if (meme.selectedImgId) {
        imgUrl = getImgUrl(meme.selectedImgId)
    }

    var img = new Image()
    img.src = imgUrl

    img.onload = function () {
        coverCanvasWithImg(img)
        if (meme.lines && meme.lines.length > 0) {
            drawText(meme)
        }
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

function renderMemeToDataUrl(meme, callback) {
    var imgUrl = meme.imgUrl || getImgUrl(meme.selectedImgId)
    var img = new Image()
    img.src = imgUrl
    
    img.onload = function() {
        var tempCanvas = document.createElement('canvas')
        var tempCtx = tempCanvas.getContext('2d')
        tempCanvas.width = 400
        tempCanvas.height = (img.naturalHeight / img.naturalWidth) * tempCanvas.width
        
        tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height)
        
        if (meme.lines && meme.lines.length > 0) {
            meme.lines.forEach(function(line) {
                var fontSize = tempCanvas.width * 0.05
                tempCtx.font = fontSize + 'px Arial'
                tempCtx.textAlign = 'center'
                tempCtx.textBaseline = 'middle'
                
                var y = tempCanvas.height / 2
                var x = tempCanvas.width / 2
                
                tempCtx.strokeStyle = 'black'
                tempCtx.lineWidth = 7
                tempCtx.strokeText(line.txt, x, y)
                
                tempCtx.fillStyle = 'white'
                tempCtx.fillText(line.txt, x, y)
            })
        }
        
        var dataUrl = tempCanvas.toDataURL('image/jpeg')
        callback(dataUrl)
    }
}

function onAddEmoji(emoji) {
    var elInput = document.querySelector('.text-input input')
    var currentText = elInput.value || ''
    elInput.value = currentText + emoji
    setLineTxt(elInput.value)
}

function onSaveMeme() {
    var meme = getMeme()
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    var memeData = {
        id: Date.now(),
        imgUrl: imgContent,
        selectedImgId: meme.selectedImgId,
        lines: meme.lines
    }
    saveMeme(memeData)
    
    if (window.location.pathname.includes('memes.html')) {
        onBackToGallery()
        renderMemesGallery()
    }
    
    flashMsg('Your meme is saved to the Memes page')
}