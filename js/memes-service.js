var gMeme

var gImgs = [{ id: 1, url: '/images/01.jpg', keywords: ['funny', 'person'] }]
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

}

function setLineTxt() {
    gMeme

    renderMeme()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}