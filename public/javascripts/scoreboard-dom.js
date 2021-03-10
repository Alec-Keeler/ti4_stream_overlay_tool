// const scoreboard = document.getElementById('score-board-container');
let currentTurn = null;
let currRound = 1;
// need to track round so i can remove passed class when a new round starts

function getPlayerInfo(data) {
    let playerInfo = [];
    let playerData = data.players;
    console.log(data)

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
        let nameEl = document.createElement('div');
        nameEl.innerHTML = `${name} as ${factionName}`;
        nameEl.setAttribute('id', `scoreboard-name-${color}`);
        nameEl.setAttribute('class', `scoreboard-name-el-active`);
        let initScoreEl = document.createElement('div');
        initScoreEl.innerHTML = playerInfo[i][4];
        initScoreEl.setAttribute('id', `scoreboard-score-${color}`);
        initScoreEl.setAttribute('class', `scoreboard-score-el`);
        let stratCardOne = stratCards[0];
        let stratCardEl = document.createElement('div');
        if (stratCardOne) {
            stratCardEl.innerHTML = stratCardOne;
        } else {
            stratCardEl.innerHTML = "None"
        }
        stratCardEl.setAttribute('id', `scoreboard-strat-${color}`);
        stratCardEl.setAttribute('class', `scoreboard-strat-el`);
        parentEl.appendChild(nameEl);
        parentEl.appendChild(initScoreEl);
        parentEl.appendChild(stratCardEl);
    };
};

function setTurnClass(currentPlayer) {
    if (currentTurn === null) {
        let newPlayerEl = document.getElementById(`player-score-details-${currentPlayer}`);
        newPlayerEl.classList.add('active-turn')
        currentTurn = currentPlayer;
    } else if (currentTurn != currentPlayer) {
        let oldPlayerEl = document.getElementById(`player-score-details-${currentTurn}`);
        let newPlayerEl = document.getElementById(`player-score-details-${currentPlayer}`);
        oldPlayerEl.classList.remove('active-turn')
        newPlayerEl.classList.add('active-turn')
        currentTurn = currentPlayer;
    } else if (currentPlayer === "") {
        let oldPlayerEl = document.getElementById(`player-score-details-${currentTurn}`);
        oldPlayerEl.classList.remove('active-turn')
    } else {
        currentTurn = currentPlayer;
    }
}

export function updateScoreBoard(data) {
    let playerInfo = getPlayerInfo(data);
    let playerTurn = data.turn;
    // console.log(playerTurn)
    setTurnClass(playerTurn);
    let roundEl = document.getElementById('round')
    roundEl.innerHTML = `Round: ${data.round}`

    for (let i = 0; i < playerInfo.length; i++) {
        let color = playerInfo[i][0];
        let stratCards = playerInfo[i][2];
        let activeStatus = playerInfo[i][3];
        let score = playerInfo[i][4];
        let scoreEl = document.getElementById(`scoreboard-score-${color}`);
        scoreEl.innerHTML = score;
        let stratCardEl = document.getElementById(`scoreboard-strat-${color}`);
        if (stratCards.length) {
            stratCardEl.innerHTML = stratCards[0]
        } else {
            stratCardEl.innerHTML = "None"
        }
        let playerScoreEl = document.getElementById(`player-score-details-${color}`)
        if (activeStatus === true) {
            playerScoreEl.classList.remove('passed');
        } else {
            playerScoreEl.classList.add('passed');
        }
    };
}