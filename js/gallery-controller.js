function renderGallery() {
    var galleryLayout = document.querySelector('.gallery-layout')
    galleryLayout.innerHTML = ''
    
    for (var i = 1; i <= 23; i++) {
        var img = document.createElement('img')
        var imgNum = i
        if (imgNum < 10) {
            img.src = '/images/0' + imgNum + '.jpg'
        } else {
            img.src = '/images/' + imgNum + '.jpg'
        }
        img.setAttribute('onclick', 'onImgSelect(' + i + ')')
        galleryLayout.appendChild(img)
    }
}

function onImgSelect(imgId) {
    setImg(imgId)
    document.querySelector('.gallery-view').classList.add('hidden')
    document.querySelector('.memes-editor-view').classList.remove('hidden')
    renderMeme()
}

function onBackToGallery() {
    document.querySelector('.gallery-view').classList.remove('hidden')
    document.querySelector('.memes-editor-view').classList.add('hidden')
}