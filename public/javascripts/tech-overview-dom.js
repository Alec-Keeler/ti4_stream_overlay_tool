//Functions in this file will update the tech overview component
const techObj = {
    "AI Development Algorithm": "Red",
    "Advanced Carrier II": "White",
    "Aerie Hololattice": "Yellow",
    "Aetherstream": "Blue",
    "Antimass Deflectors": "Blue",
    "Assault Cannon": "Red",
    "Bio-Stims": "Green",
    "Bioplasmosis": "Green",
    "Carrier II": "White",
    "Chaos Mapping": "Blue",
    "Crimson Legionnaire II": "White",
    "Cruiser II": "White",
    "Dacxive Animators": "Green",
    "Dark Energy Tap": "Blue",
    "Destroyer II": "White",
    "Dimensional Splicer": "Red",
    "Dimensional Tear II": "White",
    "Dreadnought II": "White",
    "Duranium Armor": "Red",
    "E-res Siphons": "Yellow",
    "Exotrireme II": "White",
    "Fighter II": "White",
    "Fleet Logistics": "Blue",
    "Floating Factory II": "White",
    "Genetic Recombination": "Green",
    "Graviton Laser System": "Yellow",
    "Gravity Drive": "Blue",
    "Hegemonic Trade Policy": "Yellow",
    "Hel-Titan II": "White",
    "Hybrid Crystal Fighter II": "White",
    "Hyper Metabolism": "Green",
    "Impulse Core": "Yellow",
    "Infantry II": "White",
    "Inheritance Systems": "Yellow",
    "Instinct Training": "Green",
    "Integrated Economy": "Yellow",
    "L4 Disruptors": "Yellow",
    "Lazax Gate Folding": "Blue",
    "Letani Warrior II": "White",
    "Light-Wave Deflector": "Blue",
    "Magen Defense Grid": "Red",
    "Mageon Implants": "Green",
    "Magmus Reactor": "Red",
    "Memoria II": "White",
    "Mirror Computing": "Yellow",
    "Neural Motivator": "Green",
    "Neuroglaive": "Green",
    "Non-Euclidean Shielding": "Red",
    "Nullification Field": "Yellow",
    "PDS II": "White",
    "Plasma Scoring": "Red",
    "Pre-Fab Arcologies": "Green",
    "Predictive Intelligence": "Yellow",
    "Production Biomes": "Green",
    "Prototype War Sun II": "White",
    "Psychoarchaeology": "Green",
    "Quantum Datahub Node": "Yellow",
    "Salvage Operations": "Yellow",
    "Sarween Tools": "Yellow",
    "Saturn Engine II": "White",
    "Scanlink Drone Network": "Yellow",
    "Self Assembly Routines": "Red",
    "Sling Relay": "Blue",
    "Space Dock II": "White",
    "Spacial Conduit Cylinder": "Blue",
    "Spec Ops II": "White",
    "Strike Wing Alpha II": "White",
    "Super-Dreadnought II": "White",
    "Supercharge": "Red",
    "Temporal Command Suite": "Yellow",
    "Transit Diodes": "Yellow",
    "Transparasteel Plating": "Green",
    "Valefar Assimilator X": "White",
    "Valefar Assimilator Y": "White",
    "Valkyrie Particle Weave": "Red",
    "Voidwatch": "Green",
    "Vortex": "Red",
    "Wormhole Generator": "Blue",
    "X-89 Bacterial Weapon": "Green",
    "Yin Spinner": "Green",
    'War Sun': "White"
}
// function getTechColor(tech) {
//     let techCol = techObj[tech];

// }

function extractPlayerTechs(data) {
    let allTechs = [];
    for (let i = 0; i < data.players.length; i++) {
        let playerColor = data.players[i].color;
        let playerFaction = data.players[i].factionShort
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
        // parentEl.innerHTML = playerFaction
        let factionEl = document.createElement('h2');
        factionEl.innerHTML = playerFaction;
        factionEl.setAttribute('class', `tech-${playerColor}`);
        parentEl.appendChild(factionEl);

        for (let j = 0; j < playerTechs.length; j++) {
            let tech = playerTechs[j];
            let techEl = document.createElement('ul');
            techEl.innerHTML = tech;
            techEl.setAttribute('id', `tech-${playerColor}`);
            techEl.setAttribute('class', 'techs')
            //function to set class attribute based on tech color
            let techCol = techObj[tech];
            techEl.classList.add(`tech-${techCol}`)
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
    createTechOverview(data);
}