

function birth() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('./img/huevo.png')) {
        displayImage.src = "./img/tama.png"
    }
}

function popo() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('./img/tama.png')) {
        displayImage.src = "./img/caca.png"
    } else {
        displayImage.src = "./img/tama.png"
    }
}

function death() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('./img/caca.png')) {
        displayImage.src = "./img/muerte.png"
    } else {
        displayImage.src = "./img/huevo.png"
    }
}