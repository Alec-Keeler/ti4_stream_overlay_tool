import { initExtract, standardUpdate } from "./extractors.js"
import { createScoreboard, updateScoreBoard } from "./scoreboard-dom.js"
import { createTechOverview, updateTechOverview } from "./tech-overview-dom.js"
import { updatePointsBoard } from "./points-overview-dom.js"
import { updateResourceOverview } from "./resource-overview.js"
import { updateLawOverview } from "./law-overview.js"
import { updateRotatingResources } from "./rotating-resources.js"
import { updateRotatingTech } from "./rotating-tech.js"
//variables for testing:
let loop;
let count = 1
//variables for testing ^^
let savedData = null;
let key;

//This function is called every time interval to update the data points
//This will also call functions to update html elements
const loopFetch = async () => {
    // const somethingElse = await fetch(`http://ti4-game-data.appspot.com/data?key=${key}`, {
    //     mode: 'no-cors',
    //     headers: {
    //         'If-Modified-Since': 10
    //     }
    // })
    const somethingElse = await fetch(`https://ti4-game-data.appspot.com/data?key=${key}`)
        .then(function (response) {
            console.log(response);

            if (response.status === 200) {
                response.json().then(function (data) {
                    console.log(data);
                    //call functions to parse data and set variables/innerHTML here
                    savedData = data;
                    updatePointsBoard(data);
                    standardUpdate(data);
                    updateTechOverview(data);
                    updateScoreBoard(data);
                    updateResourceOverview(data);
                    updateLawOverview(data);
                    updateRotatingResources(data);
                    updateRotatingTech(data);
                });
            // } else if (response.status === 304) {

            // }
            } else {
                console.log("Looks like there was a problem.  Status Code: " + response.status);
                return;
            };
        });
};

//This function begins the loop and calls the initial data extractor function
//This will also call functions to create html elements
window.addEventListener('DOMContentLoaded', event => {
    const getDataBtn = document.getElementById('get_data_btn');
    getDataBtn.addEventListener('click', async(e) => {
        // console.log(e.target.value);
        key = e.target.value;

        const startFetch = await fetch(`https://ti4-game-data.appspot.com/data?key=${key}`)
            .then(function(response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem.  Status Code: " + response.status);
                    return;
                };
                response.json().then(function(data) {
                    console.log(data);
                    createTechOverview(data);
                    createScoreboard(data);
                    initExtract(data);
                    //deprecated from points-overview-dom
                    // initLaw(data);
                    updatePointsBoard(data);
                    standardUpdate(data);
                    updateTechOverview(data);
                    updateScoreBoard(data);
                    updateResourceOverview(data);
                    updateLawOverview(data);
                    loop = setInterval(loopFetch, 20000);
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

