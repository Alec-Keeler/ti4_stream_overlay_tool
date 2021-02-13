import { initExtract, standardUpdate, testPrint } from "./extractors.js"
//variables for testing:
let loop;
let key;
let count = 1
//variables for testing ^^

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
                // console.log(count)
                // count++;
                standardUpdate(data);
                testPrint();
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
                    initExtract(data)
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

