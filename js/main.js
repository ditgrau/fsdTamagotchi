

function birth() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('"../Tamagotchi/img/huevo.png')) {
        displayImage.src = "../Tamagotchi/img/tama.png"
    }
}

function popo() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('"../Tamagotchi/img/tama.png"')) {
        displayImage.src = "../Tamagotchi/img/caca.png"
    } else {
        displayImage.src = "../Tamagotchi/img/tama.png"
    }
}

function death() {
    let displayImage = document.getElementById('content')
    if (displayImage.src.match('../Tamagotchi/img/caca.png')) {
        displayImage.src = "../Tamagotchi/img/muerte.png"
    } else {
        displayImage.src = "../Tamagotchi/img/huevo.png"
    }
}