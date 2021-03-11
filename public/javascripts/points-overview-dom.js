const publicObs = { public0: "", public1: "", public2: "", public3: "", public4: "", public5: "", public6: "", public7: "", public8: "", public9: "",  };
let publicObs1Count = 0;
let publicObs2Count = 0;
const secretObs = [];
const currentObs = [];
// Track laws to determine when incentive program comes out?
let currentLaws = [];
let iPFlag = false;
let iPDone = false;
let iPObjective = null;

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

function classifyPO(objective, index, isIPObj) {
    let objClass= objective.split(" ").join("-");
    // let objClass = objArr;
    let publicEl = null
    if (isIPObj) {
        removeScoreClasses(index);

        publicEl = document.getElementById(`public${index}`);

        publicEl.innerHTML = objective + " (IP)"
    } else {
        publicEl = document.getElementById(`public${index}`);
        // console.log("We should hit this all other times")
        publicEl.innerHTML = objective
    }
    publicEl.classList.add(objClass);
    publicObs[`public${index}`] = objective
}

function playerHasScoredPOChecker(player) {
    Object.keys(publicObs).forEach(function(key) {
        // console.log(key + " -- " + publicObs[key])
        let publicNum = key.split('public')[1]
        let playerCol = player.color
        // console.log(publicNum)
        if (player.objectives.includes(publicObs[key])) {
            let currObjEl = document.getElementById(`point${playerCol}${publicNum}`)
            if (!currObjEl.classList.contains(publicObs[key])) {
                currObjEl.classList.add(`scored-${playerCol}`)
            }
        }
    })
}

function checkForIP(data) {
    if (data.laws[data.laws.length - 1] === "Incentive Program" && !currentLaws.includes("Incentive Program")) {
        iPFlag = true;
    }
    let newObj = updateObjCount(data)
    if (iPFlag && newObj) {
        updateLaws(data);
        iPFlag = false
        // iPDone = true;
        console.log("Inside checkForIP: " + newObj)
        iPObjective = newObj;
        return newObj
    }
    updateLaws(data);
}

function updateLaws(data) {
    if (currentLaws.length < data.laws.length) {
        console.log(data.laws[data.laws.length - 1])
        let newLaw = data.laws[data.laws.length - 1]
        currentLaws.push(newLaw)
        console.log(currentLaws)
    }
}

export function initLaw(data) {
    currentLaws = data.laws
}

function updateObjCount(data) {
    let currS1Count = publicObs1Count;
    let currS2Count = publicObs2Count;
    let newS1Count = data.objectives["Public Objectives I"].length
    let newS2Count = data.objectives["Public Objectives II"].length
    if (currS1Count < newS1Count) {
        publicObs1Count++;
        return data.objectives["Public Objectives I"][data.objectives["Public Objectives I"].length - 1]
    } else if (currS2Count < newS2Count) {
        console.log("is the problem here?  If this prints twice, yes")
        publicObs2Count++;
        return data.objectives["Public Objectives II"][data.objectives["Public Objectives II"].length - 1]
    }
    return false;
}

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