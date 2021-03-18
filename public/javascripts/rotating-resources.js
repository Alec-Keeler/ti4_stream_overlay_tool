let playerNums = [0, 1, 2, 3, 4, 5];

//This function will determine whose information to grab,
//and adjust the playerNums array for the next iteration.
function determinePlayerNum() {
    let nextNum = playerNums.shift();
    playerNums.push(nextNum);
    return nextNum;
}

//This function will update the faction name
function rotatingFactionName(player) {
    let ele = document.getElementById('rot-res-faction');
    ele.innerHTML = player.factionShort;
    ele.setAttribute('class', `rot-res-${player.color}`)
}

//This function will get the player's resource counts
function rotatingResources(player) {
    let total = player.planetTotals.resources.total;
    let avail = player.planetTotals.resources.avail;
    let ele = document.getElementById('rot-res-resources-value');
    ele.innerHTML = `${avail} / ${total}`
}

//This function will get the player's influence counts
function rotatingInfluence(player) {
    let total = player.planetTotals.influence.total;
    let avail = player.planetTotals.influence.avail;
    let ele = document.getElementById('rot-res-influence-value');
    ele.innerHTML = `${avail} / ${total}`
}

//This function will get the player's Trade details
function rotatingTrade(player) {
    let tgs = player.tradeGoods;
    let comms = player.commodities;
    let ele = document.getElementById('rot-res-trade-value');
    let tgEle = "<img src='/images/tradegood.png' class='tg'/>"
    let commEle = "<img src='/images/commodity.png' class='tg'/>"
    ele.innerHTML = `${tgs}${tgEle} ${comms}${commEle}`;
}

//This function will get the player's Token details
function rotatingTokens(player) {
    let ele = document.getElementById('rot-res-tokens-value');
    let tactics = player.commandTokens.tactics;
    let fleet = player.commandTokens.fleet;
    let strategy = player.commandTokens.strategy;
    ele.innerHTML = `${tactics} / ${fleet} / ${strategy}`;
}

//This function will get the player's Hand details
function rotatingHand(player) {
    let ele = document.getElementById('rot-res-hand-value')
    let sos = 0;
    let acs = 0;
    if (player.handSummary["Secret Objectives"]) {
        sos = player.handSummary["Secret Objectives"]
    }
    if (player.handSummary["Actions"]) {
        acs = player.handSummary["Actions"]
    }
    ele.innerHTML = `${sos} / ${acs}`;
}

//This is the primary update function
export function updateRotatingResources(data) {
    let playerNum = determinePlayerNum();
    let player = data.players[playerNum];
    // console.log(player);
    rotatingFactionName(player);
    rotatingResources(player);
    rotatingInfluence(player);
    rotatingTrade(player);
    rotatingTokens(player);
    rotatingHand(player);
}