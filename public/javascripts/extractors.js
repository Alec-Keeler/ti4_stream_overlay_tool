let players;
//variables for testing ^^

//Variables to extract from fetches:
//array of laws in play
let laws;
//current round
let currRound;
//speaker vars
let firstSpeaker;
let secondSpeaker;
let secondSpeakerSetFlag = false;
let finalSpeaker;
let currSpeaker;
//current turn
let currTurn;
//Objective variables
let stageOnes;
let stageTwos;
let scoredSecrets;

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
let whiteBSkips;
let whiteRSkips;
let whiteGSkips;
let whiteYSkips;
let whiteCultural;
let whiteHazardous;
let whiteIndustrial;
let whiteScore;
let whiteTechs;
let whiteStratCard;
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
let blueStratCard;
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
let purpleStratCard;
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
let yellowStratCard;
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
let redStratCard;
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
let greenStratCard;
//

function setSecondSpeaker(speaker) {
    secondSpeaker = speaker;
    secondSpeakerSetFlag = true;
}

export function initExtract(data) {
    let whiteData = data.players[0];
    let blueData = data.players[1];
    let purpleData = data.players[2];
    let yellowData = data.players[3];
    let redData = data.players[4];
    let greenData = data.players[5];

    currSpeaker = data.speaker;
    firstSpeaker = data.speaker;
    whitePlayerName = whiteData.steamName;
    bluePlayerName = blueData.steamName;
    purplePlayerName = purpleData.steamName;
    yellowPlayerName = yellowData.steamName;
    redPlayerName = redData.steamName;
    greenPlayerName = greenData.steamName;
    players = [whitePlayerName, bluePlayerName, purplePlayerName, yellowPlayerName, redPlayerName, greenPlayerName]
    currTurn = data.turn;

    //remaining WHITE vars
    whiteActive = whiteData.active;
    whiteTactic = whiteData.commandTokens.tactics;
    whiteFleet = whiteData.commandTokens.fleet;
    whiteStrat = whiteData.commandTokens.strategy;
    whiteFaction = whiteData.factionName;
    whiteAlliances = "None"
    whiteComms = whiteData.commodities;
    whiteTGs = whiteData.tradeGoods;
    whiteCustodianPts = whiteData.custodiansPoints;
    whiteHandACs = whiteData.handSummary.Actions;
    whiteHandProms = whiteData.handSummary.Promissory;
    whiteHandSOs = whiteData.handSummary["Secret Objectives"];
    whiteLaws = whiteData.laws;
    whiteCommander = whiteData.leaders.commander;
    whiteHero = whiteData.leaders.hero
    whiteScoredObjectives = whiteData.objectives;
    whiteAvailInfl = whiteData.planetTotals.influence.avail;
    whiteTotalInfl = whiteData.planetTotals.influence.total;
    whiteAvailRes = whiteData.planetTotals.resources.avail;
    whiteTotalRes = whiteData.planetTotals.resources.total;
    whiteLegPlanets = whiteData.planetTotals.legendary;
    whiteBSkips = whiteData.planetTotals.techs.blue;
    whiteRSkips = whiteData.planetTotals.techs.red;
    whiteGSkips = whiteData.planetTotals.techs.green;
    whiteYSkips = whiteData.planetTotals.techs.yellow;
    whiteCultural = whiteData.planetTotals.traits.cultural;
    whiteHazardous = whiteData.planetTotals.traits.hazardous;
    whiteIndustrial = whiteData.planetTotals.traits.industrial;
    whiteScore = whiteData.score
    whiteTechs = whiteData.technologies
    whiteStratCard = whiteData.strategyCards;

    //remaining BLUE vars
    blueActive = blueData.active;
    blueTactic = blueData.commandTokens.tactics;
    blueFleet = blueData.commandTokens.fleet;
    blueStrat = blueData.commandTokens.strategy;
    blueFaction = blueData.factionName;
    blueAlliances = "None"
    blueComms = blueData.commodities;
    blueTGs = blueData.tradeGoods;
    blueCustodianPts = blueData.custodiansPoints;
    blueHandACs = blueData.handSummary.Actions;
    blueHandProms = blueData.handSummary.Promissory;
    blueHandSOs = blueData.handSummary["Secret Objectives"];
    blueLaws = blueData.laws;
    blueCommander = blueData.leaders.commander;
    blueHero = blueData.leaders.hero
    blueScoredObjectives = blueData.objectives;
    blueAvailInfl = blueData.planetTotals.influence.avail;
    blueTotalInfl = blueData.planetTotals.influence.total;
    blueAvailRes = blueData.planetTotals.resources.avail;
    blueTotalRes = blueData.planetTotals.resources.total;
    blueLegPlanets = blueData.planetTotals.legendary;
    blueBSkips = blueData.planetTotals.techs.blue;
    blueRSkips = blueData.planetTotals.techs.red;
    blueGSkips = blueData.planetTotals.techs.green;
    blueYSkips = blueData.planetTotals.techs.yellow;
    blueCultural = blueData.planetTotals.traits.cultural;
    blueHazardous = blueData.planetTotals.traits.hazardous;
    blueIndustrial = blueData.planetTotals.traits.industrial;
    blueScore = blueData.score
    blueTechs = blueData.technologies
    blueStratCard = blueData.strategyCards;

    //remaining PURPLE vars
    purpleActive = purpleData.active;
    purpleTactic = purpleData.commandTokens.tactics;
    purpleFleet = purpleData.commandTokens.fleet;
    purpleStrat = purpleData.commandTokens.strategy;
    purpleFaction = purpleData.factionName;
    purpleAlliances = "None"
    purpleComms = purpleData.commodities;
    purpleTGs = purpleData.tradeGoods;
    purpleCustodianPts = purpleData.custodiansPoints;
    purpleHandACs = purpleData.handSummary.Actions;
    purpleHandProms = purpleData.handSummary.Promissory;
    purpleHandSOs = purpleData.handSummary["Secret Objectives"];
    purpleLaws = purpleData.laws;
    purpleCommander = purpleData.leaders.commander;
    purpleHero = purpleData.leaders.hero
    purpleScoredObjectives = purpleData.objectives;
    purpleAvailInfl = purpleData.planetTotals.influence.avail;
    purpleTotalInfl = purpleData.planetTotals.influence.total;
    purpleAvailRes = purpleData.planetTotals.resources.avail;
    purpleTotalRes = purpleData.planetTotals.resources.total;
    purpleLegPlanets = purpleData.planetTotals.legendary;
    purpleBSkips = purpleData.planetTotals.techs.blue;
    purpleRSkips = purpleData.planetTotals.techs.red;
    purpleGSkips = purpleData.planetTotals.techs.green;
    purpleYSkips = purpleData.planetTotals.techs.yellow;
    purpleCultural = purpleData.planetTotals.traits.cultural;
    purpleHazardous = purpleData.planetTotals.traits.hazardous;
    purpleIndustrial = purpleData.planetTotals.traits.industrial;
    purpleScore = purpleData.score
    purpleTechs = purpleData.technologies
    purpleStratCard = purpleData.strategyCards;

    //remaining YELLOW vars
    yellowActive = yellowData.active;
    yellowTactic = yellowData.commandTokens.tactics;
    yellowFleet = yellowData.commandTokens.fleet;
    yellowStrat = yellowData.commandTokens.strategy;
    yellowFaction = yellowData.factionName;
    yellowAlliances = "None"
    yellowComms = yellowData.commodities;
    yellowTGs = yellowData.tradeGoods;
    yellowCustodianPts = yellowData.custodiansPoints;
    yellowHandACs = yellowData.handSummary.Actions;
    yellowHandProms = yellowData.handSummary.Promissory;
    yellowHandSOs = yellowData.handSummary["Secret Objectives"];
    yellowLaws = yellowData.laws;
    yellowCommander = yellowData.leaders.commander;
    yellowHero = yellowData.leaders.hero
    yellowScoredObjectives = yellowData.objectives;
    yellowAvailInfl = yellowData.planetTotals.influence.avail;
    yellowTotalInfl = yellowData.planetTotals.influence.total;
    yellowAvailRes = yellowData.planetTotals.resources.avail;
    yellowTotalRes = yellowData.planetTotals.resources.total;
    yellowLegPlanets = yellowData.planetTotals.legendary;
    yellowBSkips = yellowData.planetTotals.techs.blue;
    yellowRSkips = yellowData.planetTotals.techs.red;
    yellowGSkips = yellowData.planetTotals.techs.green;
    yellowYSkips = yellowData.planetTotals.techs.yellow;
    yellowCultural = yellowData.planetTotals.traits.cultural;
    yellowHazardous = yellowData.planetTotals.traits.hazardous;
    yellowIndustrial = yellowData.planetTotals.traits.industrial;
    yellowScore = yellowData.score
    yellowTechs = yellowData.technologies
    yellowStratCard = yellowData.strategyCards;

    //remaining RED vars
    redActive = redData.active;
    redTactic = redData.commandTokens.tactics;
    redFleet = redData.commandTokens.fleet;
    redStrat = redData.commandTokens.strategy;
    redFaction = redData.factionName;
    redAlliances = "None"
    redComms = redData.commodities;
    redTGs = redData.tradeGoods;
    redCustodianPts = redData.custodiansPoints;
    redHandACs = redData.handSummary.Actions;
    redHandProms = redData.handSummary.Promissory;
    redHandSOs = redData.handSummary["Secret Objectives"];
    redLaws = redData.laws;
    redCommander = redData.leaders.commander;
    redHero = redData.leaders.hero
    redScoredObjectives = redData.objectives;
    redAvailInfl = redData.planetTotals.influence.avail;
    redTotalInfl = redData.planetTotals.influence.total;
    redAvailRes = redData.planetTotals.resources.avail;
    redTotalRes = redData.planetTotals.resources.total;
    redLegPlanets = redData.planetTotals.legendary;
    redBSkips = redData.planetTotals.techs.blue;
    redRSkips = redData.planetTotals.techs.red;
    redGSkips = redData.planetTotals.techs.green;
    redYSkips = redData.planetTotals.techs.yellow;
    redCultural = redData.planetTotals.traits.cultural;
    redHazardous = redData.planetTotals.traits.hazardous;
    redIndustrial = redData.planetTotals.traits.industrial;
    redScore = redData.score
    redTechs = redData.technologies
    redStratCard = redData.strategyCards;

    //remaining GREEN vars
    greenActive = greenData.active;
    greenTactic = greenData.commandTokens.tactics;
    greenFleet = greenData.commandTokens.fleet;
    greenStrat = greenData.commandTokens.strategy;
    greenFaction = greenData.factionName;
    greenAlliances = "None"
    greenComms = greenData.commodities;
    greenTGs = greenData.tradeGoods;
    greenCustodianPts = greenData.custodiansPoints;
    greenHandACs = greenData.handSummary.Actions;
    greenHandProms = greenData.handSummary.Promissory;
    greenHandSOs = greenData.handSummary["Secret Objectives"];
    greenLaws = greenData.laws;
    greenCommander = greenData.leaders.commander;
    greenHero = greenData.leaders.hero
    greenScoredObjectives = greenData.objectives;
    greenAvailInfl = greenData.planetTotals.influence.avail;
    greenTotalInfl = greenData.planetTotals.influence.total;
    greenAvailRes = greenData.planetTotals.resources.avail;
    greenTotalRes = greenData.planetTotals.resources.total;
    greenLegPlanets = greenData.planetTotals.legendary;
    greenBSkips = greenData.planetTotals.techs.blue;
    greenRSkips = greenData.planetTotals.techs.red;
    greenGSkips = greenData.planetTotals.techs.green;
    greenYSkips = greenData.planetTotals.techs.yellow;
    greenCultural = greenData.planetTotals.traits.cultural;
    greenHazardous = greenData.planetTotals.traits.hazardous;
    greenIndustrial = greenData.planetTotals.traits.industrial;
    greenScore = greenData.score
    greenTechs = greenData.technologies
    greenStratCard = greenData.strategyCards;
}

export function standardUpdate(data) {
    let whiteData = data.players[0];
    let blueData = data.players[1];
    let purpleData = data.players[2];
    let yellowData = data.players[3];
    let redData = data.players[4];
    let greenData = data.players[5];

    currSpeaker = data.speaker;
    currTurn = data.turn;
    laws = data.laws;
    currRound = data.round;
    stageOnes = data.objectives["Public Objectives I"];
    stageTwos = data.objectives["Public Objectives II"];
    scoredSecrets = data.objectives["Secret Objectives"];


    //remaining WHITE vars
    whiteActive = whiteData.active;
    whiteTactic = whiteData.commandTokens.tactics;
    whiteFleet = whiteData.commandTokens.fleet;
    whiteStrat = whiteData.commandTokens.strategy;
    whiteFaction = whiteData.factionName;
    whiteAlliances = whiteData.alliances;
    whiteComms = whiteData.commodities;
    whiteTGs = whiteData.tradeGoods;
    whiteCustodianPts = whiteData.custodiansPoints;
    whiteHandACs = whiteData.handSummary.Actions;
    whiteHandProms = whiteData.handSummary.Promissory;
    whiteHandSOs = whiteData.handSummary["Secret Objectives"];
    whiteLaws = whiteData.laws;
    whiteCommander = whiteData.leaders.commander;
    whiteHero = whiteData.leaders.hero
    whiteScoredObjectives = whiteData.objectives;
    whiteAvailInfl = whiteData.planetTotals.influence.avail;
    whiteTotalInfl = whiteData.planetTotals.influence.total;
    whiteAvailRes = whiteData.planetTotals.resources.avail;
    whiteTotalRes = whiteData.planetTotals.resources.total;
    whiteLegPlanets = whiteData.planetTotals.legendary;
    whiteBSkips = whiteData.planetTotals.techs.blue;
    whiteRSkips = whiteData.planetTotals.techs.red;
    whiteGSkips = whiteData.planetTotals.techs.green;
    whiteYSkips = whiteData.planetTotals.techs.yellow;
    whiteCultural = whiteData.planetTotals.traits.cultural;
    whiteHazardous = whiteData.planetTotals.traits.hazardous;
    whiteIndustrial = whiteData.planetTotals.traits.industrial;
    whiteScore = whiteData.score
    whiteTechs = whiteData.technologies
    whiteStratCard = whiteData.strategyCards;

    //remaining BLUE vars
    blueActive = blueData.active;
    blueTactic = blueData.commandTokens.tactics;
    blueFleet = blueData.commandTokens.fleet;
    blueStrat = blueData.commandTokens.strategy;
    blueFaction = blueData.factionName;
    blueAlliances = blueData.alliances;
    blueComms = blueData.commodities;
    blueTGs = blueData.tradeGoods;
    blueCustodianPts = blueData.custodiansPoints;
    blueHandACs = blueData.handSummary.Actions;
    blueHandProms = blueData.handSummary.Promissory;
    blueHandSOs = blueData.handSummary["Secret Objectives"];
    blueLaws = blueData.laws;
    blueCommander = blueData.leaders.commander;
    blueHero = blueData.leaders.hero
    blueScoredObjectives = blueData.objectives;
    blueAvailInfl = blueData.planetTotals.influence.avail;
    blueTotalInfl = blueData.planetTotals.influence.total;
    blueAvailRes = blueData.planetTotals.resources.avail;
    blueTotalRes = blueData.planetTotals.resources.total;
    blueLegPlanets = blueData.planetTotals.legendary;
    blueBSkips = blueData.planetTotals.techs.blue;
    blueRSkips = blueData.planetTotals.techs.red;
    blueGSkips = blueData.planetTotals.techs.green;
    blueYSkips = blueData.planetTotals.techs.yellow;
    blueCultural = blueData.planetTotals.traits.cultural;
    blueHazardous = blueData.planetTotals.traits.hazardous;
    blueIndustrial = blueData.planetTotals.traits.industrial;
    blueScore = blueData.score
    blueTechs = blueData.technologies
    blueStratCard = blueData.strategyCards;

    //remaining PURPLE vars
    purpleActive = purpleData.active;
    purpleTactic = purpleData.commandTokens.tactics;
    purpleFleet = purpleData.commandTokens.fleet;
    purpleStrat = purpleData.commandTokens.strategy;
    purpleFaction = purpleData.factionName;
    purpleAlliances = purpleData.alliances;
    purpleComms = purpleData.commodities;
    purpleTGs = purpleData.tradeGoods;
    purpleCustodianPts = purpleData.custodiansPoints;
    purpleHandACs = purpleData.handSummary.Actions;
    purpleHandProms = purpleData.handSummary.Promissory;
    purpleHandSOs = purpleData.handSummary["Secret Objectives"];
    purpleLaws = purpleData.laws;
    purpleCommander = purpleData.leaders.commander;
    purpleHero = purpleData.leaders.hero
    purpleScoredObjectives = purpleData.objectives;
    purpleAvailInfl = purpleData.planetTotals.influence.avail;
    purpleTotalInfl = purpleData.planetTotals.influence.total;
    purpleAvailRes = purpleData.planetTotals.resources.avail;
    purpleTotalRes = purpleData.planetTotals.resources.total;
    purpleLegPlanets = purpleData.planetTotals.legendary;
    purpleBSkips = purpleData.planetTotals.techs.blue;
    purpleRSkips = purpleData.planetTotals.techs.red;
    purpleGSkips = purpleData.planetTotals.techs.green;
    purpleYSkips = purpleData.planetTotals.techs.yellow;
    purpleCultural = purpleData.planetTotals.traits.cultural;
    purpleHazardous = purpleData.planetTotals.traits.hazardous;
    purpleIndustrial = purpleData.planetTotals.traits.industrial;
    purpleScore = purpleData.score
    purpleTechs = purpleData.technologies
    purpleStratCard = purpleData.strategyCards;

    //remaining YELLOW vars
    yellowActive = yellowData.active;
    yellowTactic = yellowData.commandTokens.tactics;
    yellowFleet = yellowData.commandTokens.fleet;
    yellowStrat = yellowData.commandTokens.strategy;
    yellowFaction = yellowData.factionName;
    yellowAlliances = yellowData.alliances;
    yellowComms = yellowData.commodities;
    yellowTGs = yellowData.tradeGoods;
    yellowCustodianPts = yellowData.custodiansPoints;
    yellowHandACs = yellowData.handSummary.Actions;
    yellowHandProms = yellowData.handSummary.Promissory;
    yellowHandSOs = yellowData.handSummary["Secret Objectives"];
    yellowLaws = yellowData.laws;
    yellowCommander = yellowData.leaders.commander;
    yellowHero = yellowData.leaders.hero
    yellowScoredObjectives = yellowData.objectives;
    yellowAvailInfl = yellowData.planetTotals.influence.avail;
    yellowTotalInfl = yellowData.planetTotals.influence.total;
    yellowAvailRes = yellowData.planetTotals.resources.avail;
    yellowTotalRes = yellowData.planetTotals.resources.total;
    yellowLegPlanets = yellowData.planetTotals.legendary;
    yellowBSkips = yellowData.planetTotals.techs.blue;
    yellowRSkips = yellowData.planetTotals.techs.red;
    yellowGSkips = yellowData.planetTotals.techs.green;
    yellowYSkips = yellowData.planetTotals.techs.yellow;
    yellowCultural = yellowData.planetTotals.traits.cultural;
    yellowHazardous = yellowData.planetTotals.traits.hazardous;
    yellowIndustrial = yellowData.planetTotals.traits.industrial;
    yellowScore = yellowData.score
    yellowTechs = yellowData.technologies
    yellowStratCard = yellowData.strategyCards;

    //remaining RED vars
    redActive = redData.active;
    redTactic = redData.commandTokens.tactics;
    redFleet = redData.commandTokens.fleet;
    redStrat = redData.commandTokens.strategy;
    redFaction = redData.factionName;
    redAlliances = redData.alliances;
    redComms = redData.commodities;
    redTGs = redData.tradeGoods;
    redCustodianPts = redData.custodiansPoints;
    redHandACs = redData.handSummary.Actions;
    redHandProms = redData.handSummary.Promissory;
    redHandSOs = redData.handSummary["Secret Objectives"];
    redLaws = redData.laws;
    redCommander = redData.leaders.commander;
    redHero = redData.leaders.hero
    redScoredObjectives = redData.objectives;
    redAvailInfl = redData.planetTotals.influence.avail;
    redTotalInfl = redData.planetTotals.influence.total;
    redAvailRes = redData.planetTotals.resources.avail;
    redTotalRes = redData.planetTotals.resources.total;
    redLegPlanets = redData.planetTotals.legendary;
    redBSkips = redData.planetTotals.techs.blue;
    redRSkips = redData.planetTotals.techs.red;
    redGSkips = redData.planetTotals.techs.green;
    redYSkips = redData.planetTotals.techs.yellow;
    redCultural = redData.planetTotals.traits.cultural;
    redHazardous = redData.planetTotals.traits.hazardous;
    redIndustrial = redData.planetTotals.traits.industrial;
    redScore = redData.score
    redTechs = redData.technologies
    redStratCard = redData.strategyCards;

    //remaining GREEN vars
    greenActive = greenData.active;
    greenTactic = greenData.commandTokens.tactics;
    greenFleet = greenData.commandTokens.fleet;
    greenStrat = greenData.commandTokens.strategy;
    greenFaction = greenData.factionName;
    greenAlliances = greenData.alliances;
    greenComms = greenData.commodities;
    greenTGs = greenData.tradeGoods;
    greenCustodianPts = greenData.custodiansPoints;
    greenHandACs = greenData.handSummary.Actions;
    greenHandProms = greenData.handSummary.Promissory;
    greenHandSOs = greenData.handSummary["Secret Objectives"];
    greenLaws = greenData.laws;
    greenCommander = greenData.leaders.commander;
    greenHero = greenData.leaders.hero
    greenScoredObjectives = greenData.objectives;
    greenAvailInfl = greenData.planetTotals.influence.avail;
    greenTotalInfl = greenData.planetTotals.influence.total;
    greenAvailRes = greenData.planetTotals.resources.avail;
    greenTotalRes = greenData.planetTotals.resources.total;
    greenLegPlanets = greenData.planetTotals.legendary;
    greenBSkips = greenData.planetTotals.techs.blue;
    greenRSkips = greenData.planetTotals.techs.red;
    greenGSkips = greenData.planetTotals.techs.green;
    greenYSkips = greenData.planetTotals.techs.yellow;
    greenCultural = greenData.planetTotals.traits.cultural;
    greenHazardous = greenData.planetTotals.traits.hazardous;
    greenIndustrial = greenData.planetTotals.traits.industrial;
    greenScore = greenData.score
    greenTechs = greenData.technologies
    greenStratCard = greenData.strategyCards;

    //set second round speaker for data collection
    if (!secondSpeakerSetFlag && currRound === 2) {
        setSecondSpeaker(currSpeaker);
    };
}

// export function testPrint() {
//     console.log("Site Is Live" + whitePlayerName)
// }