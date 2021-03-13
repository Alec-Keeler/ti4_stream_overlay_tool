import { getSecretDescriptions, getPublicDescriptions } from "./objective-objects.js"
const publicObs = { public0: "", public1: "", public2: "", public3: "", public4: "", public5: "", public6: "", public7: "", public8: "", public9: "", public10: "" };
let publicObs1Count = 0;
let publicObs2Count = 0;
const secretObs = [];
const currentObs = [];
const potentialPointLaws = ["Political Censure", "Seed of an Empire", "Mutiny (For)", "Mutiny (Against)"]
// Track laws to determine when incentive program comes out?
let currentLaws = [];
let iPFlag = false;
let iPObjective = null;
let impRiderScored = false;
let secretDescriptions = getSecretDescriptions();
let publicDescriptions = getPublicDescriptions();

//This function turns the objectives into css classes and sets the innerHTML of
//the elements to the objective name, with special logic to add (IP) to the objective
//revealed from that agenda.
function classifyPO(objective, index, data) {
    let objClass= objective.split(" ").join("-");
    let publicEl = null
    let obs1 = data.objectives["Public Objectives I"]
    let obs2 = [];
    let offBoardObs = [];
    if (data.objectives["Public Objectives II"]) {
        obs2 = data.objectives["Public Objectives II"]
    }
    if (data.objectives.offBoardPublicObjectives) {
        offBoardObs = data.objectives.offBoardPublicObjectives
    }
    if ((obs1.includes(objective) && offBoardObs.includes(objective)) || obs2.includes(objective) && offBoardObs.includes(objective)) {
        publicEl = document.getElementById(`public${index}`);
        publicEl.innerHTML = publicDescriptions[objective] + " (IP)"
    } else {
        publicEl = document.getElementById(`public${index}`);
        publicEl.innerHTML = publicDescriptions[objective]
    }
    publicEl.classList.add(objClass);
    publicObs[`public${index}`] = objective
}

//This function checks if a player has scored any of the stored objectives,
//and if they have, add the appropriate class to the element.
function playerHasScoredPOChecker(player) {
    Object.keys(publicObs).forEach(function(key) {
        let publicNum = key.split('public')[1]
        let playerCol = player.color
        if (player.objectives.includes(publicObs[key])) {
            let currObjEl = document.getElementById(`point${playerCol}${publicNum}`)
            if (!currObjEl.classList.contains(publicObs[key])) {
                currObjEl.classList.add(`scored-${playerCol}`)
            }
        }
    })
}

//This function will add Imperial Riders header to appropriate element when someone
//has scored one
function setImpHeader() {
    if (impRiderScored === false) {
        let ele = document.getElementById("imp-riders");
        ele.innerHTML = "Imperial Riders"
        impRiderScored = true;
    }
}

//This function checks to see if a player has scored a point from Imperial Rider
function checkForImpRiders(players) {
    let playersWhoScoredIR = [];
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let playerObs = player.objectives;
        // console.log(playerObs)
        for (let j = 0; j < playerObs.length; j++) {
            let objective = playerObs[j];
            if (objective === "Imperial Rider") {
                playersWhoScoredIR.push(player.color);
            }
        }
    }
    if (playersWhoScoredIR.length > 0) {
        setImpHeader()
    }
    scoreImpRider(playersWhoScoredIR);
}

//This function just gets all the Imperial Rider elements
function getImpRiderEles(){
    let imp1 = document.getElementsByClassName("imp-rider1");
    let imp2 = document.getElementsByClassName("imp-rider2");
    let imp3 = document.getElementsByClassName("imp-rider3");
    let imp4 = document.getElementsByClassName("imp-rider4");
    let imp5 = document.getElementsByClassName("imp-rider5");
    let imp6 = document.getElementsByClassName("imp-rider6");
    let eles = [imp1, imp2, imp3, imp4, imp5, imp6];
    return eles;
}

//This function updates the dom to reflect a player scoring Imperial Rider
function scoreImpRider(playerColors) {
    let eles = getImpRiderEles();
    for (let i = 0; i < playerColors.length; i++) {
        let playerCol = playerColors[i];
        let ele = document.getElementById(`imp-rider-point${i}`)
        ele.classList.add(`scored-${playerCol}`)
    }
}

//This function clears Imperial Rider dom before checking for any IR points
function clearImpRiderDom() {
    let eles = getImpRiderEles();
    for (let i = 0; i < eles.length; i++) {
        let element = eles[i];
        let classList = element[0].classList;
        for (let j = 0; j < classList.length; j++) {
            const currClass = classList[j];
            if (currClass.split("-")[0] === "scored") {
                element[0].classList.remove(currClass)
            }
        }
    }
}

//This function checks for laws that grant points, sets the HTML on the correct
//element, then calls a function that will check for who has scored that law.
function findLawPoints(data) {
    let laws = data.laws;
    for (let i = 0; i < laws.length; i++) {
        const law = laws[i];
        if (potentialPointLaws.includes(law)) {
            let identifier = law.split(' ')[0];
            let ele = document.getElementById(identifier);
            ele.innerHTML = law;
            scoreLawPoints(law, data.players, identifier)
        }
    }
}

//This function will check each player to see if they've scored the law,
//and assign scored classes accordingly
function scoreLawPoints(law, players, id) {
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        if (player.laws.includes(law)) {
            if (id === "Political") {
                let ele = document.getElementsByClassName(`law1-${i}`);
                ele[0].classList.add(`scored-${player.color}`)
            } else if (id === "Seed") {
                let ele = document.getElementsByClassName(`law2-${i}`);
                ele[0].classList.add(`scored-${player.color}`)
            } else if (id === "Mutiny") {
                let ele = document.getElementsByClassName(`law3-${i}`);
                ele[0].classList.add(`scored-${player.color}`)
            }
        }
    }
}

//This function will clear custodian point classes to avoid duplicates
function clearCustodsClasses() {
    let custodEles = document.getElementsByClassName('custod');
    for (let i = 0; i < custodEles.length; i++) {
        let ele = custodEles[i];
        let eleClasses = ele.classList;
        let thirdEle = eleClasses[2];
        if (thirdEle !== undefined) {
            ele.classList.remove(thirdEle);
        }
    }
}

//This function will check if the player has scored Custodian points, how many,
//and apply scored classes appropriately
function checkCustods(players) {
    clearCustodsClasses()
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        let count = player.custodiansPoints;
        while (count > 0) {
            let eleCount = 1;
            let assigned = false;
            while (!assigned) {
                let ele = document.getElementsByClassName(`custodian${eleCount}`)
                if (ele[0].classList[2]) {
                    eleCount++
                } else {
                    ele[0].classList.add(`scored-${player.color}`);
                    assigned = true;
                }
            }
            count--;
        }
    }
}

//This function clears and applies the correct scored class for the Shard relic
function scoreShard(player) {
    let ele = document.getElementById("shard-point1");
    let eleClasses = ele.classList;
    console.log(eleClasses);
    if (eleClasses.length > 0) {
        let eleClass = eleClasses[0];
        ele.classList.remove(eleClass);
    }
    ele.classList.add(`scored-${player.color}`)
}

//This function clears and applies the correct scored class for the Crown relic
function scoreCrown(player) {
    let ele = document.getElementById("crown-point1");
    let eleClasses = ele.classList;
    console.log(eleClasses);
    if (eleClasses.length > 0) {
        let eleClass = eleClasses[0];
        ele.classList.remove(eleClass);
    }
    ele.classList.add(`scored-${player.color}`)
}

//This function will check for who has scored each relic point, clear existing 
//scored classes, and apply new classes (because shard can change hands)
function scoreRelics(data) {
    let players = data.players;
    let relics = ["Shard of the Throne", "The Crown of Emphidia"];
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let obs = player.objectives;
        for (let j = 0; j < obs.length; j++) {
            let obj = obs[j];
            if (relics.includes(obj) && obj === "Shard of the Throne") {
                scoreShard(player);
            } else if ((relics.includes(obj) && obj === "The Crown of Emphidia")) {
                scoreCrown(player)
            }
        }
    }
}

//This function will check if either point giving relic is out, assign html to the
//correct element, and call a function to check for the player(s) with the associated
//points
function checkForRelics(data) {
    if (data.objectives.Relics) {
        let relics = data.objectives.Relics;
        for (let i = 0; i < relics.length; i++) {
            const relic = relics[i];
            if (relic === "Shard of the Throne") {
                let ele = document.getElementById("relic-shard");
                ele.innerHTML = relic;
            } else if (relic === "The Crown of Emphidia") {
                let ele = document.getElementById("relic-crown");
                ele.innerHTML = relic;
            }
        }
        //call function to score the points here
        scoreRelics(data);
    }
}

//This is a test function to create a single secret element for testing
function testSecrets(){
    let secretDiv = document.getElementById('secrets-container');
    let newSecret = document.createElement('div')
    newSecret.innerHTML = "A Secret Ob"
    newSecret.setAttribute('class', 'secret-card')
    secretDiv.appendChild(newSecret)
}

for (let i = 0; i < 25; i++) {
    testSecrets();
}

//This function updates the scoreboard every loop
export function updatePointsBoard(data) {
    let stage1s = data.objectives["Public Objectives I"];
    let stage2s = []
    if (data.objectives["Public Objectives II"]) {
        stage2s = data.objectives["Public Objectives II"];
    }
    let publics = stage1s.concat(stage2s);
    for (let i = 0; i < publics.length; i++) {
        let publicOb = publics[i];
        classifyPO(publicOb, i, data)
    }
    clearImpRiderDom();
    let players = data.players;
    //add nonindividual score checkers here
    checkForImpRiders(players);
    checkCustods(players);
    findLawPoints(data);
    checkForRelics(data);
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        //add individual score checkers here
        playerHasScoredPOChecker(player);
    }
}