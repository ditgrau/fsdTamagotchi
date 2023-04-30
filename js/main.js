

function birth() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('./img/huevo.PNG')) {
        displayImage.src = "./img/tama.PNG"
    }
}

function popo() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('./img/tama.PNG')) {
        displayImage.src = "./img/caca.PNG"
    } else {
        displayImage.src = "./img/tama.PNG"
    }
}

function death() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('./img/tama.PNG')) {
        displayImage.src = "./img/muerte.PNG"
    } else {
        displayImage.src = "./img/huevo.PNG"
    }
}


