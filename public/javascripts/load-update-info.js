let updates = [
    { 
        date: "Update 1 (Mar 09, 2021)",
        change1: "Changed all fonts to 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif.",
        change2: "Now using shorthand faction names instead of full faction names.",
        change3: "Now using a shorter key and added two letter characters to the end of the key string.",
        change4: "Since the !gamedata command now defaults to 30 second updates, removed the '30' part of the TTS command string and associated instruction.",
        change5: "New Feature: Tech Overview component fully functional."
    }, 
    {
        date: "Update 2 (Mar 13, 2021)",
        change1: "Implemented a minor feature that crosses out used strategy cards on the scoreboard.",
        change2: "Fixed styling to prevent names/factions not being fully contained and visible on the scoreboard.",
        change3: "New Feature: Available Points component fully functional.",
        featureNotes: ["To track Imperial Rider points, you MUST use the original action card to place owner token(s) on, return copies to the AC discard pile.", "If a law causes a secret to become a public objecive, it will still be tracked as a secret objective on the component, but will appear multiple times, once for each player who has scored it."]
    },
    {
        date: "Update 3 (Mar 14, 2021)",
        change1: "Updated Available Points component to remove a point indicator if Political Censure is repealed.  It will also indicate that the law had been in play but was repealed.",
        change2: "The scoreboard now automatically updates names when players switch seats.",
        change3: "Added a new instruction to the front page instruction list indicating users should use Window Capture, not Browser sources on OBS.",
        change4: "Fixed Tech Overview component to display Unchosen instead of undefined before players choose factions.",
        change5: "New Feature: Resource Overview component fully functional.",
        featureNotes: ["This component uses several abbreviations.", "A = Available", "T = Total", "TGs = Trade Goods", "Cmdts = Commodities", "SOs = Secret Objectives (this only counts unscored SOs in hand)", "ACs = Action Cards", "B = Blue (tech skip)", "G = Green (tech skip)", "R = Red (tech skip)", "Y = Yellow (tech skip)", "C = Cultural", "I = Industrial", "H = Hazardous", "L = Legendary"]
    },
    {
        date: "Update 4 (Mar 16, 2021)",
        change1: "Added additional styling and information to front page.",
        change2: "Added additional spacing between elements on the game display page.",
        change3: "Added images/icons to the Resource Overview component for slightly easier readability.",
        change4: "Law Overview component fully functional.",
        featureNotes: ["Laws assigned to a specific player will be colored in with the player's color."]
    },
    {
        date: "Update 5 (Mar 17, 2021)",
        change1: "Updated the Resource Overview component with cleaner icons and improved readability, and added a row for Alliances held by each player.",
        otherThing: "Happy St. Patrick's Day!"
    },
    {
        date: "Update 6 (Mar 18, 2021) VERSION 1!",
        change1: "Overlay functionality is now complete!  This is version 1.0!",
        change2: "Site now makes a fetch call for data every 20 seconds instead of 3.  I used the shorter time for easier testing, which is no longer necessary!",
        change3: "Fixed several bugs that can occurr early in games before objectives are scored by adding a variety of conditionals.",
        chagne4: "Added 'x3n d0g' to my list of thanks for the help with art assets.",
        change5: "Big thanks to everyone on that list (Found below!) and several others for their help and advice on this project, especially Darrell.",
        change6: "New Feature: Rotating Resource component fully functional.  This component changes the player whose details it shows every 20 seconds.",
        change7: "New Feature: Rotating Tech component fully functional.  This component will also change every 20 seconds.",
    change8: "Planned additions: Update to front page including images of sample data; Game data collection and aggregation"
    }
]



function createUpdateElements() {
    let container = document.getElementById("side-panel");
    for (let i = 0; i < updates.length; i++) {
        const update = updates[i];
        let date = update.date;
        let updateHeader = document.createElement('div');
        updateHeader.innerHTML = date;
        updateHeader.setAttribute('class', 'update-header');
        container.insertBefore(updateHeader, container.firstChild)
        for (const [key, value] of Object.entries(update)) {
            if (key === "date") {
                continue;
            } else if (key === "featureNotes") {
                console.log(updateHeader.lastChild)
                for (let i = 0; i < value.length; i++) {
                    const text = value[i];
                    let noteEle = document.createElement('li');
                    noteEle.innerHTML = text;
                    noteEle.setAttribute('class', 'update-content');
                    noteEle.classList.add('feature-note');
                    updateHeader.appendChild(noteEle);
                }
                continue;
            }
            let ele = document.createElement('li');
            ele.innerHTML = value;
            ele.setAttribute('class', 'update-content')
            updateHeader.appendChild(ele);
        }
    }
    let title = document.createElement('div');
    title.setAttribute('class', 'update-title');
    title.innerHTML = "Patch Notes";
    container.insertBefore(title, container.firstChild);
}

createUpdateElements();