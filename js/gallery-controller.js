"use strict"

function renderGallery() {
    var images = getImgs()
    var strHtmls = images.map(function (img) {
        return `<img src="./images/${img.folder}/${img.id}.jpg" 
                 onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery-layout').innerHTML = strHtmls.join('')
}

function renderMemesGallery() {
    var savedMemes = getSavedMemes()

    var savedMemesHtml = savedMemes.map(function (meme) {
        return `<img src="${meme.imgUrl}">`
    })

    document.querySelector('.gallery-layout').innerHTML = savedMemesHtml.join('')
}

function onSelectSavedMeme(memeId) {
    var savedMemes = getSavedMemes()
    var meme = savedMemes.find(function (m) {
        return m.id === memeId
    })
    if (meme) {
        gMeme = meme
        document.querySelector('.gallery-view').classList.add('hidden')
        document.querySelector('.memes-editor-view').classList.remove('hidden')
        if (!gElCanvas) onInitMeme()
        renderMeme()
    }
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
