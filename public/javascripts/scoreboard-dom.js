const scoreboard = document.getElementById('score-board-container');

function getPlayerInfo(data) {
    let playerInfo = [];
    let playerData = data.players;
    console.log(playerData)

    for (let i = 0; i < playerData.length; i++) {
        let color = playerData[i].color
        let name = playerData[i].steamName
        let stratCards = playerData[i].strategyCards
        let activeStatus = playerData[i].active;
        let score = playerData[i].score
        playerInfo.push([color, name, stratCards, activeStatus, score])
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
        let parentEl = document.getElementById(`player-score-details-${color}`);
        let nameEl = document.createElement('p');
        nameEl.innerHTML = name;
        nameEl.setAttribute('id', `scoreboard-name-${color}`);
        nameEl.setAttribute('class', `scoreboard-name-el-active`);
        let initScoreEl = document.createElement('p');
        initScoreEl.innerHTML = playerInfo[i][4];
        initScoreEl.setAttribute('id', `scoreboard-score-${color}`);
        initScoreEl.setAttribute('class', `scoreboard-score-el`);
        let stratCardOne = stratCards[0];
        let stratCardEl = document.createElement('p');
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

export function updateScoreBoard(data) {
    let playerInfo = getPlayerInfo(data);

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
        let nameEl = document.getElementById(`scoreboard-name-${color}`)
        console.log(color + ' - ' + activeStatus)
        if (activeStatus === true) {
            nameEl.setAttribute('class', `scoreboard-name-el-active`);
        } else {
            nameEl.setAttribute('class', `scoreboard-name-el-passed`);
        }
    };
}