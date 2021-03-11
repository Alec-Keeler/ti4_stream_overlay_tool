const publicObs = { public0: "", public1: "", public2: "", public3: "", public4: "", public5: "", public6: "", public7: "", public8: "", public9: "",  };
let publicObs1Count = 0;
let publicObs2Count = 0;
const secretObs = [];
const currentObs = [];
// Track laws to determine when incentive program comes out?
let currentLaws = [];
let iPFlag = false;
let iPObjective = null;

//This function removes scored-Color classes from elements when a new objective 
//is assigned to the first sibling element, this happens in the case of Incentive
//Program coming up. (The objective may take the place of another objective, and if
//that objective had been scored by anyone, their score indicators would carry over
//to the IP objective.)
function removeScoreClasses(index) {
    let whiteEl = document.getElementById(`pointWhite${index}`)
    let blueEl = document.getElementById(`pointBlue${index}`)
    let purpleEl = document.getElementById(`pointPurple${index}`)
    let yellowEl = document.getElementById(`pointYellow${index}`)
    let redEl = document.getElementById(`pointRed${index}`)
    let greenEl = document.getElementById(`pointGreen${index}`)
    let eles = [whiteEl, blueEl, purpleEl, yellowEl, redEl, greenEl]
    for (let i = 0; i < eles.length; i++) {
        const ele = eles[i];
        ele.className = '';
    }
}

//This function turns the objectives into css classes and sets the innerHTML of
//the elements to the objective name, with special logic to add (IP) to the objective
//revealed from that agenda.
function classifyPO(objective, index, isIPObj) {
    let objClass= objective.split(" ").join("-");
    let publicEl = null
    if (isIPObj) {
        removeScoreClasses(index);

        publicEl = document.getElementById(`public${index}`);

        publicEl.innerHTML = objective + " (IP)"
    } else {
        publicEl = document.getElementById(`public${index}`);
        publicEl.innerHTML = objective
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

//This function checks if IP is in the saved laws array.  If it isn't, but it is in
//the laws array from the update, we add it and flip a flag.  When the flag flips,
//as soon as we detect a new objective, we return that obejctive and flip the flag back.
function checkForIP(data) {
    if (data.laws[data.laws.length - 1] === "Incentive Program" && !currentLaws.includes("Incentive Program")) {
        iPFlag = true;
    }
    let newObj = updateObjCount(data)
    if (iPFlag && newObj) {
        updateLaws(data);
        iPFlag = false
        iPObjective = newObj;
        return newObj
    }
    updateLaws(data);
}

//This function adds new laws to the constant to help track Incentive Program.
function updateLaws(data) {
    if (currentLaws.length < data.laws.length) {
        console.log(data.laws[data.laws.length - 1])
        let newLaw = data.laws[data.laws.length - 1]
        currentLaws.push(newLaw)
        // console.log(currentLaws)
    }
}

//This function is mostly for testing to set the base status of laws in game
//on the first fetch.  Assuming games have no laws in play at the start, this
//needed on live.
export function initLaw(data) {
    currentLaws = data.laws
}

//This function helps track the count of objectives to determine which objective 
//was added from Incentive Program 
function updateObjCount(data) {
    let currS1Count = publicObs1Count;
    let currS2Count = publicObs2Count;
    let newS1Count = data.objectives["Public Objectives I"].length
    let newS2Count = data.objectives["Public Objectives II"].length
    if (currS1Count < newS1Count) {
        publicObs1Count++;
        return data.objectives["Public Objectives I"][data.objectives["Public Objectives I"].length - 1]
    } else if (currS2Count < newS2Count) {
        publicObs2Count++;
        return data.objectives["Public Objectives II"][data.objectives["Public Objectives II"].length - 1]
    }
    return false;
}

//This function updates the scoreboard every loop
export function updatePointsBoard(data) {
    let stage1s = data.objectives["Public Objectives I"];
    let stage2s = data.objectives["Public Objectives II"];
    //check for Incentive Program, if it exists, set a flag and begin checking objective count
    let incentiveObj = checkForIP(data);
    let publics = stage1s.concat(stage2s);
    for (let i = 0; i < publics.length; i++) {
        let publicOb = publics[i];
        if (iPObjective && iPObjective === publicOb) {
            classifyPO(publicOb, i, true)
        } else {
            classifyPO(publicOb, i, false)
        }
    }
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        playerHasScoredPOChecker(player);
    }
}