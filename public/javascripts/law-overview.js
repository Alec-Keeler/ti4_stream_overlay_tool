//This function will iterate over the laws, create elements for them, and append
//them to the correct place
function createLawElements(data) {
    let laws = data.laws;
    let container = document.getElementById('law-container');
    for (let i = 0; i < laws.length; i++) {
        let law = laws[i];
        let element = document.createElement('div');
        container.appendChild(element);
        element.classList.add('agenda');
        checkPlayerOwnsLaw(data, law, element);
        element.innerHTML = law;
    }
}

//This function will clear the law elements so the update loop starts with a fresh
//slate
function purgeLawElements() {
    let parentEl = document.getElementById(`law-container`)
    while (parentEl.lastElementChild) {
        parentEl.removeChild(parentEl.lastElementChild)
    }
}

//This function will check to see if a law is assigned to a player, and add a
//class to the element if so, to color it in
function checkPlayerOwnsLaw(data, currLaw, element) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let playerCol = player.color;
        let playerLaws = player.laws;
        let pointAgendas = []
        if (data.objectives.Agenda) {
            pointAgendas = data.objectives.Agenda;
        }
        if (pointAgendas.includes(currLaw)) {
            continue;
        }
        if (playerLaws.includes(currLaw)) {
            // element.classList.remove('agenda');
            element.classList.add(`elected-${playerCol}`);
        }
    }
}

//This function is the standard law overview update function
export function updateLawOverview(data) {
    purgeLawElements();
    createLawElements(data);
}