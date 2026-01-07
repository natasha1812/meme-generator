"use strict"

function renderGallery() {
    var images = getImgs()
    var strHtmls = images.map(function(img) {
        return `
            <img src="./images/${img.folder}/${img.id}.jpg" 
                 onclick="onImgSelect(${img.id})">
        `
    })
    document.querySelector('.gallery-layout').innerHTML = strHtmls.join('')
}

function renderMemesGallery() {
    var images = getSquareImgs()
    var strHtmls = images.map(function(img) {
        return `
            <img src="./images/${img.folder}/${img.id}.jpg" 
                 onclick="onImgSelect(${img.id})">
        `
    })
    document.querySelector('.gallery-layout').innerHTML = strHtmls.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    document.querySelector('.gallery-view').classList.add('hidden')
    document.querySelector('.memes-editor-view').classList.remove('hidden')
    if (!gElCanvas) onInitMeme()
    renderMeme()
}

function onBackToGallery() {
    document.querySelector('.gallery-view').classList.remove('hidden')
    document.querySelector('.memes-editor-view').classList.add('hidden')
}
