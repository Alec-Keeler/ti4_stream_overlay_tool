//variables for testing:
let players;
let loop;
let key;
let count = 1
//variables for testing ^^

//Variables to extract from fetches:
//array of laws in play
let laws;
//current round
let currRound;
//speaker vars
let firstSpeaker;
let secondSpeaker;
let finalSpeaker;
let currSpeaker;
//current turn
let currTurn;
//player variables
//white
let whitePlayerName;
let whiteActive;
let whiteAlliances;
let whiteTactic;
let whiteFleet;
let whiteStrat;
let whiteComms;
let whiteTGs;
let whiteFaction;
let whiteCustodianPts;
let whiteHandACs;
let whiteHandProms;
let whiteHandSOs;
let whiteLaws;
let whiteCommander;
let whiteHero;
let whiteScoredObjectives;
let whiteAvailInfl;
let whiteTotalInfl;
let whiteAvailRes;
let whiteTotalRes;
let whiteLegPlanets;
let whtieBSkips;
let whtieRSkips;
let whtieGSkips;
let whtieYSkips;
let whiteCultural;
let whiteHazardous;
let whiteIndustrial;
let whiteScore;
let whiteTechs;
//blue
let bluePlayerName;
let blueActive;
let blueAlliances;
let blueTactic;
let blueFleet;
let blueStrat;
let blueComms;
let blueTGs;
let blueFaction;
let blueCustodianPts;
let blueHandACs;
let blueHandProms;
let blueHandSOs;
let blueLaws;
let blueCommander;
let blueHero;
let blueScoredObjectives;
let blueAvailInfl;
let blueTotalInfl;
let blueAvailRes;
let blueTotalRes;
let blueLegPlanets;
let blueBSkips;
let blueRSkips;
let blueGSkips;
let blueYSkips;
let blueCultural;
let blueHazardous;
let blueIndustrial;
let blueScore;
let blueTechs;
//purple
let purplePlayerName;
let purpleActive;
let purpleAlliances;
let purpleTactic;
let purpleFleet;
let purpleStrat;
let purpleComms;
let purpleTGs;
let purpleFaction;
let purpleCustodianPts;
let purpleHandACs;
let purpleHandProms;
let purpleHandSOs;
let purpleLaws;
let purpleCommander;
let purpleHero;
let purpleScoredObjectives;
let purpleAvailInfl;
let purpleTotalInfl;
let purpleAvailRes;
let purpleTotalRes;
let purpleLegPlanets;
let purpleBSkips;
let purpleRSkips;
let purpleGSkips;
let purpleYSkips;
let purpleCultural;
let purpleHazardous;
let purpleIndustrial;
let purpleScore;
let purpleTechs;
//yellow
let yellowPlayerName;
let yellowActive;
let yellowAlliances;
let yellowTactic;
let yellowFleet;
let yellowStrat;
let yellowComms;
let yellowTGs;
let yellowFaction;
let yellowCustodianPts;
let yellowHandACs;
let yellowHandProms;
let yellowHandSOs;
let yellowLaws;
let yellowCommander;
let yellowHero;
let yellowScoredObjectives;
let yellowAvailInfl;
let yellowTotalInfl;
let yellowAvailRes;
let yellowTotalRes;
let yellowLegPlanets;
let yellowBSkips;
let yellowRSkips;
let yellowGSkips;
let yellowYSkips;
let yellowCultural;
let yellowHazardous;
let yellowIndustrial;
let yellowScore;
let yellowTechs;
//red
let redPlayerName;
let redActive;
let redAlliances;
let redTactic;
let redFleet;
let redStrat;
let redComms;
let redTGs;
let redFaction;
let redCustodianPts;
let redHandACs;
let redHandProms;
let redHandSOs;
let redLaws;
let redCommander;
let redHero;
let redScoredObjectives;
let redAvailInfl;
let redTotalInfl;
let redAvailRes;
let redTotalRes;
let redLegPlanets;
let redBSkips;
let redRSkips;
let redGSkips;
let redYSkips;
let redCultural;
let redHazardous;
let redIndustrial;
let redScore;
let redTechs;
//green
let greenPlayerName;
let greenActive;
let greenAlliances;
let greenTactic;
let greenFleet;
let greenStrat;
let greenComms;
let greenTGs;
let greenFaction;
let greenCustodianPts;
let greenHandACs;
let greenHandProms;
let greenHandSOs;
let greenLaws;
let greenCommander;
let greenHero;
let greenScoredObjectives;
let greenAvailInfl;
let greenTotalInfl;
let greenAvailRes;
let greenTotalRes;
let greenLegPlanets;
let greenBSkips;
let greenRSkips;
let greenGSkips;
let greenYSkips;
let greenCultural;
let greenHazardous;
let greenIndustrial;
let greenScore;
let greenTechs;
//

const loopFetch = async () => {
    const somethingElse = await fetch(`http://ti4-game-data.appspot.com/data?key=${key}`)
        .then(function (response) {
            console.log(response);
            if (response.status !== 200) {
                console.log("Looks like there was a problem.  Status Code: " + response.status);
                return;
            };
            response.json().then(function (data) {
                //call functions to parse data and set variables/innerHTML here

                //for testing the loop:
                console.log(count)
                count++;
            });
        });
};

window.addEventListener('DOMContentLoaded', event => {
    const getDataBtn = document.getElementById('get_data_btn');
    getDataBtn.addEventListener('click', async(e) => {
        console.log(e.target.value);
        key = e.target.value;

        const startFetch = await fetch(`http://ti4-game-data.appspot.com/data?key=${key}`)
            .then(function(response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem.  Status Code: " + response.status);
                    return;
                };
                response.json().then(function(data) {
                    loop = setInterval(loopFetch, 1000);
                });
            });
    });

    //this button stops the collecting of data
    const getStopBtn = document.getElementById('stop_data_btn');
    getStopBtn.addEventListener('click', () => {
        clearInterval(loop);
    })

    //add a button that makes a fetch request to backend to save data here
    //it should not work if the game is still actively collecting data
});

