// const scoreboard = document.getElementById('score-board-container');
let currentTurn = null;
let currRound = 1;
// need to track round so i can remove passed class when a new round starts

//This function will check if a player has a faction, and if not return a string
function checkFaction(faction) {
    if (faction === undefined) {
        return "Faction Unchosen"
    }
    return faction
}

function getPlayerInfo(data) {
    let playerInfo = [];
    let playerData = data.players;
    // console.log(data)

    for (let i = 0; i < playerData.length; i++) {
        let color = playerData[i].color
        let name = playerData[i].steamName
        let stratCards = playerData[i].strategyCards
        let activeStatus = playerData[i].active;
        let score = playerData[i].score;
        let factionName = playerData[i].factionShort;
        playerInfo.push([color, name, stratCards, activeStatus, score, factionName]);
    }
    return playerInfo;
};

export function createScoreboard(data) {
    let playerInfo = getPlayerInfo(data)
    let playerCount = playerInfo.length
    //add logic for creating an additional strat card element if 3/4 players

    for (let i = 0; i < playerInfo.length; i++) {
        let color = playerInfo[i][0];
        let name = playerInfo[i][1];
        let stratCards = playerInfo[i][2];
        let factionName = playerInfo[i][5];
        let parentEl = document.getElementById(`player-score-details-${color}`);
        let infoEl = document.getElementById(`score-info-${color}`)
        let nameEl = document.createElement('div');
        // nameEl.innerHTML = `${name} as ${factionName}`;
        nameEl.innerHTML = name;
        nameEl.setAttribute('id', `scoreboard-name-${color}`);
        nameEl.setAttribute('class', `scoreboard-name-el-active`);
        let initScoreEl = document.createElement('div');
        initScoreEl.innerHTML = playerInfo[i][4];
        factionName = checkFaction(factionName);
        initScoreEl.innerHTML = `${factionName} - ${playerInfo[i][4]} -`
        // initScoreEl.innerHTML = `${factionName} -- ${playerInfo[i][4]} -- ${stratCards[0]}`
        initScoreEl.setAttribute('id', `scoreboard-score-${color}`);
        initScoreEl.setAttribute('class', `scoreboard-score-el`);
        let stratCardOne = stratCards[0];
        let stratCardEl = document.createElement('div');
        if (stratCardOne) {
            stratCardEl.innerHTML = ` ${stratCardOne}`;
        } else {
            stratCardEl.innerHTML = "None"
        }
        // if (usedStratCard[0] === stratCardOne) {
        //     stratCardEl.classList.add('exhausted')
        // }
        stratCardEl.setAttribute('id', `scoreboard-strat-${color}`);
        stratCardEl.setAttribute('class', `scoreboard-strat-el`);
        parentEl.insertBefore(nameEl, infoEl);
        infoEl.appendChild(initScoreEl);
        infoEl.appendChild(stratCardEl);
    };
};

function setTurnClass(currentPlayer) {
    if (currentTurn === null && currentPlayer) {
        let newPlayerEl = document.getElementById(`player-score-details-${currentPlayer}`);
        newPlayerEl.classList.add('active-turn')
        currentTurn = currentPlayer;
    } else if (currentTurn != currentPlayer && currentPlayer) {
        let oldPlayerEl = document.getElementById(`player-score-details-${currentTurn}`);
        let newPlayerEl = document.getElementById(`player-score-details-${currentPlayer}`);
        oldPlayerEl.classList.remove('active-turn')
        newPlayerEl.classList.add('active-turn')
        currentTurn = currentPlayer;
    } else if (currentPlayer === "" && currentTurn) {
        let oldPlayerEl = document.getElementById(`player-score-details-${currentTurn}`);
        oldPlayerEl.classList.remove('active-turn')
    } else {
        currentTurn = currentPlayer;
    }
}

//This function updates the name elements so players can move seats without
//having to refresh the tool.
function updateName(playerInfo) {
    // [color, name, stratCards, activeStatus, score, factionName]
    for (let i = 0; i < playerInfo.length; i++) {
        const playerStuff = playerInfo[i];
        let color = playerStuff[0];
        let name = playerStuff[1];
        let ele = document.getElementById(`scoreboard-name-${color}`);
        ele.innerHTML = name;
    }
}

export function updateScoreBoard(data) {
    let playerInfo = getPlayerInfo(data);
    let playerTurn = data.turn;
    setTurnClass(playerTurn);
    let roundEl = document.getElementById('round');
    roundEl.innerHTML = `Round: ${data.round}`;
    updateName(playerInfo);
    for (let i = 0; i < playerInfo.length; i++) {
        let color = playerInfo[i][0];
        let stratCards = playerInfo[i][2];
        let activeStatus = playerInfo[i][3];
        let score = playerInfo[i][4];
        let faction = playerInfo[i][5];
        faction = checkFaction(faction);
        let scoreEl = document.getElementById(`scoreboard-score-${color}`);
        scoreEl.innerHTML = `${faction} - ${score} -`;
        let stratCardEl = document.getElementById(`scoreboard-strat-${color}`);
        let usedStratCard = data.players[i].strategyCardsFaceDown;
        if (` ${usedStratCard[0]}` === stratCardEl.innerHTML) {
            console.log('should exhaust')
            stratCardEl.classList.add('exhausted');
        } else if (usedStratCard.length === 0) {
            if (stratCardEl.classList.contains('exhausted')) {
                stratCardEl.classList.remove('exhausted');
            }
        }
        if (stratCards.length) {
            stratCardEl.innerHTML = ` ${stratCards[0]}`;
        } else {
            stratCardEl.innerHTML = "None";
        }
        let playerScoreEl = document.getElementById(`player-score-details-${color}`);
        // let playerScoreEl = document.getElementById(`scoreboard-strat-${color}`);
        if (activeStatus === true) {
            playerScoreEl.classList.remove('passed');
        } else {
            playerScoreEl.classList.add('passed');
        }
    };
}