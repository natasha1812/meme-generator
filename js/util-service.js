"use strict"

function flashMsg(msg) {
    var elMsg = document.querySelector('.user-msg')
    if (!elMsg) {
        elMsg = document.createElement('div')
        elMsg.className = 'user-msg'
        document.body.appendChild(elMsg)
    }
    elMsg.innerText = msg
    elMsg.style.display = 'block'
    setTimeout(function() {
        elMsg.style.display = 'none'
    }, 3000)
}
