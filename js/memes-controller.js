"use strict"

function renderMeme() {
    var canvas = document.querySelector('.canvas')
    var ctx = canvas.getContext('2d')
    var meme = gMeme

    var selectedImg = gImgs.find(function (img) {
        return img.id === meme.selectedImgId
    })

    var imgUrl
    if (selectedImg) {
        imgUrl = selectedImg.url
    } else {
        var imgNum = meme.selectedImgId
        if (imgNum < 10) {
            imgUrl = './images/0' + imgNum + '.jpg'
        } else {
            imgUrl = './images/' + imgNum + '.jpg'
        }
    }

    var img = new Image()
    img.src = imgUrl

    img.onload = function () {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        for (var i = 0; i < meme.lines.length; i++) {
            var line = meme.lines[i]
            ctx.font = line.size + 'rem Arial'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'

            var y = (i + 1) * (canvas.height / (meme.lines.length + 1))
            var x = canvas.width / 2

            ctx.strokeStyle = 'black'
            ctx.lineWidth = 3
            ctx.strokeText(line.txt, x, y)
            
            ctx.fillStyle = line.color
            ctx.fillText(line.txt, x, y)
        }
    }
}
