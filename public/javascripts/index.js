import { initExtract, standardUpdate, testPrint } from "./extractors.js"
import { createScoreboard, updateScoreBoard } from "./scoreboard-dom.js"
import { createTechOverview } from "./tech-overview-dom.js"
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
    const somethingElse = await fetch(`http://ti4-game-data.appspot.com/data?key=${key}`)
        .then(function (response) {
            console.log(response);

            if (response.status === 200) {
                response.json().then(function (data) {
                    //call functions to parse data and set variables/innerHTML here
                    savedData = data;
                    createTechOverview(data);
                    standardUpdate(data);
                    updateScoreBoard(data);
                    testPrint();
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

        const startFetch = await fetch(`http://ti4-game-data.appspot.com/data?key=${key}`)
            .then(function(response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem.  Status Code: " + response.status);
                    return;
                };
                response.json().then(function(data) {
                    createScoreboard(data);
                    initExtract(data)
                    loop = setInterval(loopFetch, 3000);
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

