"use strict"

var gMeme

var gImgs = [{ id: 1, url: './images/1.jpg', keywords: ['funny', 'person'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 12.5,
            color: 'red',
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function getImgUrl(imgId) {
    var folder = 'diff-ratio-imgs'
    if (window.location.pathname.includes('memes.html')) {
        folder = 'square-imgs'
    }
    return './images/' + folder + '/' + imgId + '.jpg'
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
    renderMeme()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}


function getSavedMemes() {
	var savedMemes = loadFromStorage('savedMemes')
	return savedMemes || []
}

function saveMeme(memeData) {
	var savedMemes = getSavedMemes()
	savedMemes.push(memeData)
	saveToStorage('savedMemes', savedMemes)
}
