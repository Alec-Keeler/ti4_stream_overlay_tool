//Functions in this file will update the tech overview component
function extractPlayerTechs(data) {
    let allTechs = [];
    for (let i = 0; i < data.players.length; i++) {
        let playerColor = data.players[i].color;
        let playerFaction = data.players[i].factionName
        let playerTechs = data.players[i].technologies;
        allTechs.push([playerColor, playerFaction, playerTechs]);
    };
    return allTechs
}

function purgeTechElements(playerColor) {
    let parentEl = document.getElementById(`player-techs-${playerColor}`)
    while (parentEl.lastElementChild) {
        parentEl.removeChild(parentEl.lastElementChild)
    }
}

export function createTechOverview(data) {
    let allTechs = extractPlayerTechs(data);
    console.log(allTechs);
    for (let i = 0; i < allTechs.length; i++) {
        let playerColor = allTechs[i][0];
        let playerFaction = allTechs[i][1];
        let playerTechs = allTechs[i][2];
        let parentEl = document.getElementById(`player-techs-${playerColor}`)
        let factionEl = document.createElement('div');
        factionEl.innerHTML = playerFaction;
        factionEl.setAttribute('id', `tech-${playerColor}`);
        parentEl.appendChild(factionEl);

        for (let j = 0; j < playerTechs.length; j++) {
            let tech = playerTechs[j];
            let techEl = document.createElement('div');
            techEl.innerHTML = tech;
            techEl.setAttribute('id', `tech-${playerColor}`);
            parentEl.appendChild(techEl);
        }
    }
}

export function updateTechOverview(data) {
    let allTechs = extractPlayerTechs(data);
    //call the purge function and then basically do all the create steps I think
    let colors = ["White", "Blue", "Purple", "Yellow", "Red", "Green"];
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        purgeTechElements(color);
    }
    console.log("done bitchessss")
}