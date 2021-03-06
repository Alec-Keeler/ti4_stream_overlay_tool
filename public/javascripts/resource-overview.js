//This function assigns faction names to header elements
function assignFactionNames(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let faction = player.factionShort;
        if (faction === undefined) {
            faction = "Unchosen"
        }
        let color = player.color
        let ele = document.getElementById(`header-${color}`);
        ele.innerHTML = faction;
    }
}

//This function will update the resource cells
function updateResources(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let available = player.planetTotals.resources.avail;
        let total = player.planetTotals.resources.total;
        let ele = document.getElementById(`resource-${color}`);
        ele.innerHTML = `${available} / ${total}`;
    }
}

//This function will update the influence cells
function updateInfluences(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let available = player.planetTotals.influence.avail;
        let total = player.planetTotals.influence.total;
        let ele = document.getElementById(`influence-${color}`);
        ele.innerHTML = `${available} / ${total}`;
    }
}

//This function will update the trade good cells
function updateTrade(data) {
    let players = data.players;
    let header = document.getElementsByClassName('trade-header')[0]
    let tgEle = "<img src='/images/tradegood.png' class='tg'/>"
    let commEle = "<img src='/images/commodity.png' class='tg'/>"
    // header.innerHTML = `${tgEle} / ${commEle}`
    // let testEle = "<div>test</div>"
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let tradeGoods = player.tradeGoods;
        let commodities = player.commodities;
        let ele = document.getElementById(`trade-${color}`);
        ele.innerHTML = `${tradeGoods}${tgEle}     ${commodities}${commEle}`;
        // ele.innerHTML = `${tradeGoods} / ${commodities}`
    }
}

//This function will update the token cells
function updateTokens(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let tactics = player.commandTokens.tactics;
        let fleet = player.commandTokens.fleet;
        let strategy = player.commandTokens.strategy;
        let ele = document.getElementById(`tokens-${color}`);
        ele.innerHTML = `${tactics} / ${fleet} / ${strategy}`;
    }
}

//This function will update the cards in hand cells
function updateHand(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let secrets = player.handSummary["Secret Objectives"];
        if (!secrets) {
            secrets = 0;
        }
        let actions = player.handSummary["Actions"];
        if (!actions) {
            actions = 0;
        }
        let ele = document.getElementById(`hand-${color}`);
        ele.innerHTML = `${secrets} / ${actions}`;
    }
}

//This function will update the commander cells
function updateCommanderStatus(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let commanderStatus = player.leaders.commander;
        let ele = document.getElementById(`commander-${color}`);
        if (commanderStatus === "unlocked") {
            ele.innerHTML = 'Unlocked';
        } else {
            ele.innerHTML = 'Locked';
        }
    }
}

//This function will update the hero cells
function updateHeroStatus(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let heroStatus = player.leaders.hero;
        let ele = document.getElementById(`hero-${color}`);
        if (heroStatus === "unlocked") {
            ele.innerHTML = 'Unlocked';
        } else if (heroStatus === "locked") {
            ele.innerHTML = 'Locked';
        } else {
            ele.innerHTML = "Purged"
        }
    }
}

//This function will update the Alliance cells
function updateAlliances(data) {
    let players = data.players;
    for (let i = 0; i < players.length; i++) {
        const alliances = players[i].alliances;
        let color = players[i].color
        let mainEle = document.getElementById(`alliance-${color}`)
        while (mainEle.lastElementChild) {
            mainEle.removeChild(mainEle.lastElementChild);
        }
        for (let j = 0; j < alliances.length; j++) {
            const alliance = alliances[j];
            let allEle = document.createElement('div');
            allEle.setAttribute('class', `alliance-${alliance}`);
            allEle.classList.add('alliance-block');
            mainEle.appendChild(allEle);
        }
    }
}

//This function will update the tech skip cells
function updateSkips(data) {
    let players = data.players;
    let blueEle = "<img src='/images/blueskip.png' class='skip'/>"
    let greenEle = "<img src='/images/greenskip.png' class='skip'/>"
    let redEle = "<img src='/images/redskip.png' class='skip'/>"
    let yellowEle = "<img src='/images/yellowskip.png' class='skip'/>"
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let blue = player.planetTotals.techs.blue;
        let green = player.planetTotals.techs.green;
        let red = player.planetTotals.techs.red;
        let yellow = player.planetTotals.techs.yellow;
        let ele = document.getElementById(`skips-${color}`);
        ele.innerHTML = '';
        // ele.innerHTML = `B:${blue}/G:${green}/R:${red}/Y:${yellow}`;
        for (let j = 0; j < blue; j++) {
            ele.innerHTML = ele.innerHTML + blueEle;
        }
        for (let j = 0; j < green; j++) {
            ele.innerHTML = ele.innerHTML + greenEle;
        }
        for (let j = 0; j < red; j++) {
            ele.innerHTML = ele.innerHTML + redEle;
        }
        for (let j = 0; j < yellow; j++) {
            ele.innerHTML = ele.innerHTML + yellowEle;
        }
    }
}

//This function will update the trait cells
function updateTraits(data) {
    let players = data.players;
    let indusEle = "<img src='/images/industrial-icon.png' class='skip'/>"
    let hazEle = "<img src='/images/hazardous-icon.png' class='skip'/>"
    let cultEle = "<img src='/images/cultural-icon.png' class='skip'/>"
    let legendEle = "<img src='/images/legendary.png' class='skip'/>"
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let color = player.color;
        let blue = player.planetTotals.traits.cultural;
        let green = player.planetTotals.traits.industrial;
        let red = player.planetTotals.traits.hazardous;
        let legendaries = player.planetTotals.legendary
        let ele = document.getElementById(`traits-${color}`);
        ele.innerHTML = `${cultEle}${blue} ${indusEle}${green} ${hazEle}${red} ${legendEle}${legendaries}`;
    }
}

//This is the master function to update the component
export function updateResourceOverview(data) {
    assignFactionNames(data);
    updateResources(data);
    updateInfluences(data);
    updateTrade(data);
    updateTokens(data);
    updateHand(data);
    updateCommanderStatus(data);
    updateHeroStatus(data);
    updateSkips(data);
    updateTraits(data);
    updateAlliances(data);
    // updateLegendaries(data);
}