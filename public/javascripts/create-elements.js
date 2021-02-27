const scoreboard = document.getElementById('score-board-container');

function getPlayerInfo(data) {
    let playerInfo = [];
    let playerData = data.players;

    for (let i = 0; i < playerData.length; i++) {
        let color = playerData[i].color
        let name = playerData[i].steamName
        playerInfo.push([color, name])
    }
    return playerInfo;
};


export function createScoreboard(playerData) {
    // console.log(playerData)
    let playerInfo = getPlayerInfo(playerData)

    for (let i = 0; i < playerInfo.length; i++) {
        let color = playerInfo[i][0]
        let name = playerInfo[i][1];
        let parentEl = document.getElementById(`player-score-details-${color}`)
        console.log(parentEl)
    }
    // const testEl = document.createElement('p');
    // testEl.innerHTML = "This is a test";
    // scoreboard.appendChild(testEl)
};