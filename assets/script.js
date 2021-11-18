const weapon = ['pierre', 'feuille', 'ciseaux'];

const teams = ['celtics', 'lakers', 'warriors'];



let player = '';
let IA = '';
let myResult = document.getElementById('screenResult');
let playerScore = 0;
let IAScore = 0;


//Retourne le nom d'une équipe en string
function pickWeapon(list) {
    return list[Math.floor(Math.random() * list.length)];
}

//Lancer une nouvelle partie
function launchNewPlay() {
    document.getElementById('scoreUser').textContent = 0;
    document.getElementById('scoreAI').textContent = 0;
    document.getElementById('screenWeaponPlayer').textContent = '';
    document.getElementById('screenWeaponIA').textContent = '';
    myResult.textContent = '';
    playerScore = 0;
    IAScore = 0;
}

document.getElementById('newPlay').onclick = () => launchNewPlay();



//Choisir une équipe
function chooseTeam(element) {
    if (element.target.tagName == 'IMG' && element.target.className != 'chooseIA' && element.target.className != 'choosePlayer' && element.target.className != 'iconTeam') {
        IA = pickWeapon(teams);
        player = element.target.id;
        document.getElementById('screenWeaponPlayer').innerHTML = `<img src="assets/img/${player}.png" class="choosePlayer">`;
        document.getElementById('screenWeaponIA').innerHTML = `<img src="assets/img/${IA}.png" class="chooseIA">`;

        myResult.textContent = displayResult();
    }

}

document.addEventListener('click', chooseTeam);


function displayResult() {
    if (player === IA) {
        return 'Egalité';
    } else if ((player === 'celtics' && IA === 'lakers') || (player === 'lakers' && IA === 'warriors') || (player === 'warriors' && IA === 'celtics')) {
        IAScore++;
        document.getElementById('scoreAI').textContent = IAScore;
        return 'Perdu';
    } else {
        playerScore++;
        document.getElementById('scoreUser').textContent = playerScore;
        return 'Gagné';
    }
}



