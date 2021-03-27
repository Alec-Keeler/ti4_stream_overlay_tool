let techs = {
    'AI Development Algorithm': 'AI Dev Algo',
    'Advanced Carrier II': 'Adv Carrier II',
    'Aerie Hololattice': 'Aerie Holo',
    'Aetherstream': 'Aetherstream',
    'Antimass Deflectors': 'Antimass',
    'Assault Cannon': 'Assault Cannon',
    'Bio-Stims': 'Bio-Stims',
    'Bioplasmosis': 'Bioplas',
    'Carrier II': 'Carrier II',
    'Chaos Mapping': 'Chaos Map',
    'Crimson Legionnaire II': 'Crimson Legin II',
    'Cruiser II': 'Cruiser II',
    'Dacxive Animators': 'Dacxive',
    'Dark Energy Tap': 'Dark Energy Tap',
    'Destroyer II': 'Destroyer II',
    'Dimensional Splicer': 'D. Splicer',
    'Dimensional Tear II': 'Dim Tear II',
    'Dreadnought II': 'Dread II',
    'Duranium Armor': 'Duranium',
    'E-res Siphons': 'E-Res',
    'Exotrireme II': 'Exotrireme II',
    'Fighter II': 'Fighter II',
    'Fleet Logistics': 'Fleet Logistics',
    'Floating Factory II': 'FF II',
    'Genetic Recombination': 'Gene Recomb',
    'Graviton Laser System': 'Graviton',
    'Gravity Drive': 'Grav Drive',
    'Hegemonic Trade Policy': 'Hegemonic',
    'Hel-Titan II': 'Hel-Titan II',
    'Hybrid Crystal Fighter II': 'HCF II',
    'Hyper Metabolism': 'Hyper',
    'Impulse Core': 'Impulse',
    'Infantry II': 'Infantry II',
    'Inheritance Systems': 'Inherit. Systems',
    'Instinct Training': 'Instinct Train',
    'Integrated Economy': 'Integrated Eco.',
    'L4 Disruptors': 'L4 Disrupt',
    'Lazax Gate Folding': 'Lazax Gate',
    'Letani Warrior II': 'Letani II',
    'Light-Wave Deflector': 'Light/Wave',
    'Magen Defense Grid': 'Magen',
    'Mageon Implants': 'Mageon',
    'Magmus Reactor': 'Magmus',
    'Memoria II': 'Memoria II',
    'Mirror Computing': 'Mirror Comp',
    'Neural Motivator': 'Neural',
    'Neuroglaive': 'Neuroglaive',
    'Non-Euclidean Shielding': 'N.E.S.',
    'Nullification Field': 'Null. Field',
    'PDS II': 'PDS II',
    'Plasma Scoring': 'Plasma',
    'Pre-Fab Arcologies': 'Pre-Fab Arc',
    'Predictive Intelligence': 'Pred Intel',
    'Production Biomes': 'Prod. Biomes',
    'Prototype War Sun II': 'PWS II',
    'Psychoarchaeology': 'Pyschoarch',
    'Quantum Datahub Node': 'QDHN',
    'Salvage Operations': 'Salvage Ops.',
    'Sarween Tools': 'Sarween',
    'Saturn Engine II': 'Sat Eng II',
    'Scanlink Drone Network': 'Scanlink',
    'Self Assembly Routines': 'Self Assembly',
    'Sling Relay': 'Sling Relay',
    'Space Dock II': 'Space Dock II',
    'Spacial Conduit Cylinder': 'Spacial Conduit',
    'Spec Ops II': 'Spec Ops II',
    'Strike Wing Alpha II': 'String Wing II',
    'Super-Dreadnought II': 'SuperDread II',
    'Supercharge': 'Supercharge',
    'Temporal Command Suite': 'Temp Cmd Suite',
    'Transit Diodes': 'Transit',
    'Transparasteel Plating': 'Transparasteel',
    'Valefar Assimilator X': null,
    'Valefar Assimilator Y': null,
    'Valkyrie Particle Weave': 'Valkyrie PW',
    'Voidwatch': 'Voidwatch',
    'Vortex': 'Vortex',
    'War Sun': 'War Sun',
    'Wormhole Generator': 'Wormhole Gen',
    'X-89 Bacterial Weapon': 'X-89 B.W.',
    'Yin Spinner': 'Yin Spin',
}

let techColor = {
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

let playerNums = [0, 1, 2, 3, 4, 5];

//This function will determine whose information to grab,
//and adjust the playerNums array for the next iteration.
function determinePlayerNum() {
    let nextNum = playerNums.shift();
    playerNums.push(nextNum);
    return nextNum;
}

//This function will get all of the player's techs and create elements
//for each of them, appending them to the container as it goes
function getPlayerTechs(player) {
    let techList = player.technologies;
    let parentEl = document.getElementById('rotating-tech-container')
    for (let i = 0; i < techList.length; i++) {
        const tech = techList[i];
        let techEl = document.createElement('div');
        let techName = techs[tech];
        if (techName === null) {
            continue;
        }
        let techCol = techColor[tech];
        techEl.innerHTML = techName;
        techEl.setAttribute('class', `tech-${techCol}`);
        parentEl.appendChild(techEl);
    }
}

//This function applies the correct faction name as header
function getFactionName(player) {
    let faction = player.factionShort;
    let color = player.color;
    let ele = document.getElementById('rotating-tech-container');
    ele.innerHTML = faction;
    ele.setAttribute('class', `rot-tech-${color}`)
}

//This function will remove the previous player's tech dom
function clearTechDom() {
    let parentEl = document.getElementById(`rotating-tech-container`)
    while (parentEl.lastElementChild) {
        parentEl.removeChild(parentEl.lastElementChild)
    }
}

//This is the primary update function
export function updateRotatingTech(data) {
    clearTechDom();
    let playerNum = determinePlayerNum();
    let player = data.players[playerNum];
    getFactionName(player);
    getPlayerTechs(player);
}