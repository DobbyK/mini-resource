// Game Configuration
const gameData = {
    collecting: null,
    resources: {
        money: { max: 100, amount: 0, gain: 0, loss: 0, worth: 1, unlocked: false, collectible: false, sellable: false },
        science: { max: 100, amount: 0, gain: 0, loss: 0, worth: 0, unlocked: false, collectible: true, sellable: false },
        food: { max: 100, amount: 0, gain: 0, loss: 0, worth: 1, unlocked: false, collectible: true, sellable: false },
        wood: { max: 100, amount: 0, gain: 0, loss: 0, worth: 2, unlocked: false, collectible: true, sellable: true },
        stone: { max: 100, amount: 0, gain: 0, loss: 0, worth: 5, unlocked: false, collectible: true, sellable: true },
        metal: { max: 100, amount: 0, gain: 0, loss: 0, worth: 10, unlocked: false, collectible: true, sellable: true }
    },
    buildings: {
        school: {
            type: "science", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 20, food: 5 }, resourcePrice: {}, baseUpgrade: 20
        },
        farm: {
            type: "food", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { food: 10 }, resourcePrice: {}, baseUpgrade: 20
        },
        silo: {
            type: "food", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0, 
            buildCost: { wood: 20 }, resourcePrice: {}, baseUpgrade: 20
        },
        lumbermill: {
            type: "wood", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { money: 10, food: 5 }, resourcePrice: {}, baseUpgrade: 20
        },
        woodyard: {
            type: "wood", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 50, wood: 10 }, resourcePrice: {}, baseUpgrade: 20
        },
        quarry: {
            type: "stone", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { wood: 10, money: 5 }, resourcePrice: {}, baseUpgrade: 20
        },
        stonepit: {
            type: "stone", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 75, stone: 20 }, resourcePrice: {}, baseUpgrade: 20
        },
        mine: {
            type: "metal", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { stone: 10, wood: 5 }, resourcePrice: { wood: 1 }, baseUpgrade: 20
        },
        scrapyard: {
            type: "metal", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 80, metal: 30 }, resourcePrice: {}, baseUpgrade: 20
        },
        market: {
            type: "money", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { stone: 10, wood: 5 }, resourcePrice: { food: 1 }, baseUpgrade: 20
        },
        bank: {
            type: "money", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 20, metal: 30, stone: 20 }, resourcePrice: {}, baseUpgrade: 20
        }
    },

    research: {
        unlockBank: {
            name: "No Interest Banking",
            description: "Put your hard earned cash into legit buildings, but money still doesnt grow on trees.",
            cost: { science: 50, stone: 50, wood: 40 },
            effect: () => { gameData.buildings.bank.unlocked = true; },
            completed: false,
            requires: ["unlockMarket"]
        },
        unlockScrapyard: {
            name: "Heavy Metal",
            description: "You think you might be on to something. Put the metal you find in the mines into a big open field.",
            cost: { science: 50, metal: 50 },
            effect: () => { gameData.buildings.scrapyard.unlocked = true; },
            completed: false,
            requires: ["unlockMine"]
        },
        unlockPit: {
            name: "Get Pitting",
            description: "We gotta put the earth we dig up in another part of the earth we dug up",
            cost: { science: 20, stone: 50 },
            effect: () => { gameData.buildings.stonepit.unlocked = true; },
            completed: false,
            requires: ["unlockQuarry"]
        },
        unlockFood: {
            name: "Unlock Food",
            description: "You are litterally an empty void. So Eat",
            cost: { food: 0 },
            effect: () => { gameData.resources.food.unlocked = true; },
            completed: false,
            requires: []
        },
        unlockFarm: {
            name: "Agiliculture",
            description: "Somehow you figure out you dont have to rumuge around in the trash.",
            cost: { food: 5 },
            effect: () => { gameData.buildings.farm.unlocked = true; },
            completed: false,
            requires: ["unlockFood"]
        },
        unlockMoney: {
            name: "Economy",
            description: "Here comes the money. $$$",
            cost: { food: 5 },
            effect: () => { gameData.resources.money.unlocked = true; gameData.resources.food.sellable = true; },
            completed: false,
            requires: ["unlockFood", "unlockFarm"]
        },
        unlockSilo: {
            name: "Unlock Silos",
            description: "You are swimming in food (i think)",
            cost: { science: 10, food: 50 },
            effect: () => { gameData.buildings.silo.unlocked = true; },
            completed: false,
            requires: ["unlockFarm"]
        },
        unlockYard: {
            name: "Unlock a Yard",
            description: "You've chopped a crap ton of trees down",
            cost: { science: 20, food: 50 },
            effect: () => { gameData.buildings.woodyard.unlocked = true; },
            completed: false,
            requires: ["unlockLumbermill"]
        },
        unlockScience: {
            name: "Unstupid",
            description: "Unlocks science collection.",
            cost: { money: 5 },
            effect: () => { gameData.resources.science.unlocked = true; },
            completed: false,
            requires: ["unlockMoney"]
        },
        unlockSchool: {
            name: "Get Learning",
            description: "I thought this science stuff was useless originally.",
            cost: { science: 20 },
            effect: () => { gameData.buildings.school.unlocked = true; },
            completed: false,
            requires: ["unlockMoney", "unlockScience"]
        },
        unlockWood: {
            name: "Unlock Wood",
            description: "How much wood would a wood trimp trimp if a wood trimp could trimp wood. (Play Trimps!)",
            cost: { money: 25, science: 5 },
            effect: () => { gameData.resources.wood.unlocked = true; },
            completed: false,
            requires: ["unlockFood", "unlockMoney"]
        },
        unlockLumbermill: {
            name: "Deforstation",
            description: "Unlocks building lumbermills. Now you can turn taking down plants industrially",
            cost: { money: 30, food: 10, science: 20 },
            effect: () => { gameData.buildings.lumbermill.unlocked = true; },
            completed: false,
            requires: ["unlockWood"]
        },
        unlockStone: {
            name: "Strike The Earth (Stone Collection)",
            description: "Urist McMiner. (well not really but like yeah play dwarf fortress)",
            cost: { money: 40, wood: 20, science: 20 },
            effect: () => { gameData.resources.stone.unlocked = true; },
            completed: false,
            requires: ["unlockLumbermill"]
        },
        unlockQuarry: {
            name: "Now with Rocks.",
            description: "Quarry is the stupidest word in the dictionary.",
            cost: { money: 50, stone: 5, science: 20 },
            effect: () => { gameData.buildings.quarry.unlocked = true; },
            completed: false,
            requires: ["unlockStone"]
        },
        unlockMetal: {
            name: "Softcore metal",
            description: "So this is what they meant when they said they are into softcore p-",
            cost: { money: 75, stone: 50, science: 20 },
            effect: () => { gameData.resources.metal.unlocked = true; },
            completed: false,
            requires: ["unlockQuarry"]
        },
        unlockMine: {
            name: "No Diamonds",
            description: "Even at y-11, this mine will not have diamonds",
            cost: { money: 80, metal: 5, science: 20 },
            effect: () => { gameData.buildings.mine.unlocked = true; },
            completed: false,
            requires: ["unlockMetal"]
        },
        unlockMarket: {
            name: "Get Selling ( well just food :( )",
            description: "Capitalism at its finest, but people won't buy stuff besides food yet.",
            cost: { money: 50, wood: 100, food: 100, science: 20 },
            effect: () => { gameData.buildings.market.unlocked = true; },
            completed: false,
            requires: ["unlockMine"]
        }
    }


};

function initGame() {
    const container = document.getElementById("game");
    container.innerHTML = `
        <div id="save-controls">
            <button onclick="exportSave()">Export Save</button>
            <input type="file" id="importFile" accept=".json" style="display:none" onchange="importSave(event)">
            <button onclick="document.getElementById('importFile').click()">Import Save</button>
            <a target="_blank" href="changelog.html">v0.0.4</a>
        </div>
        <div id="resources"></div>
        <div id="buildings"></div>
        <div id="research"></div>
    `;
    updateUI();
}


// Update UI Dynamically
function updateUI() {
    const rDiv = document.getElementById("resources");
    const bDiv = document.getElementById("buildings");
    const researchDiv = document.getElementById("research");

    rDiv.innerHTML = '';
    for (const [name, res] of Object.entries(gameData.resources)) {
        if (res.unlocked) {
            rDiv.innerHTML += `
                <div>
                    <strong>${name}</strong>: <span id="${name}_amount">${res.amount}/${res.max}</span> 
                    (+<span id="${name}_gain">${res.gain}</span>/s)
                    ${res.collectible ? `<button onclick="collect('${name}')">Collect</button>` : ''}
${res.sellable ? `<button onclick="sell('${name}')">Sell $${res.worth}</button>` : ''}

                </div>
            `;
        } else {
            rDiv.innerHTML += ``;
        }
    }

    bDiv.innerHTML = '<h3>Buildings</h3>';
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.unlocked && gameData.resources[building.type].unlocked) {
            const costText = getCostText(building);
            bDiv.innerHTML += `
                <div>
                    <strong>${bName}</strong> (Lv ${building.level}) - Count: <span id="${bName}_count">${building.count}</span>
                    <button onclick="build('${bName}')">Build (${formatCost(building.buildCost)}${costText})</button>                   
                </div>
            `;
        }
    }

    researchDiv.innerHTML = "<h3>Research</h3>";
    for (const [key, item] of Object.entries(gameData.research)) {
        if (item.completed) continue;

        // Check if all prerequisites are met
        const prereqsMet = item.requires.every(reqKey => gameData.research[reqKey]?.completed);
        if (!prereqsMet) continue;

        researchDiv.innerHTML += `
        <div>
            <strong>${item.name}</strong>: ${item.description}
            <br>Cost: ${formatCost(item.cost)}
            <br><button onclick="performResearch('${key}')">Research</button>
        </div>
    `;
    }

}

function formatCost(costObj) {
    return Object.entries(costObj).map(([res, amt]) => `${amt} ${res}`).join(', ');
}

function getCostText(building) {
    if (!building.resourcePrice || Object.keys(building.resourcePrice).length === 0) return '';
    const parts = Object.entries(building.resourcePrice)
        .map(([resource, cost]) => `${cost} ${resource}/s`);
    return parts.length > 0 ? ` | Cost: ${parts.join(', ')}` : '';
}

function getLevelPrice(building) {
    return Math.floor(building.baseUpgrade * Math.pow(1.5, building.level - 1));
}

function collect(resource) {
    const prev = gameData.collecting;
    gameData.collecting = resource;

    if (prev) {
        gameData.resources[prev].gain -= 1;
    }

    gameData.resources[resource].gain += 1;
    updateUI();
}

function sell(resource) {
    const res = gameData.resources[resource];
    if (res.amount > 0) {
        res.amount -= 1;
        gameData.resources.money.amount += res.worth;
        updateUI();
    } else {
        alert(`No ${resource} to sell.`);
    }
}

function build(buildingName) {
    const building = gameData.buildings[buildingName];

    // Check one-time costs
    for (const [resource, cost] of Object.entries(building.buildCost)) {
        if (gameData.resources[resource].amount < cost) {
            alert(`Not enough ${resource} to build ${buildingName}.`);
            return;
        }
    }

    // Check passive costs
    if (building.resourcePrice) {
        for (const [resource, costPerBuilding] of Object.entries(building.resourcePrice)) {
            const totalLoss = (building.count + 1) * costPerBuilding;
            let passiveGain = 0;
            for (const b of Object.values(gameData.buildings)) {
                if (b.type === resource) {
                    passiveGain += b.count * b.level * b.production;
                }
            }
            if (passiveGain < totalLoss) {
                alert(`You need at least ${totalLoss} ${resource}/s passive income to build another ${buildingName}.`);
                return;
            }
        }
    }

    // Deduct build cost
    for (const [resource, cost] of Object.entries(building.buildCost)) {
        gameData.resources[resource].amount -= cost;
    }

    building.count += 1;
    gameData.resources[building.type].max += building.maxBoost;
    updateGains();
    updateUI();
}


function updateGains() {
    for (const res of Object.values(gameData.resources)) {
        res.gain = 0;
        res.loss = 0;
    }

    for (const building of Object.values(gameData.buildings)) {
        if (building.resourcePrice) {
            for (const resource in building.resourcePrice) {
                const cost = building.resourcePrice[resource];
                gameData.resources[resource].loss += building.count * cost;
            }
        }
    }

    for (const building of Object.values(gameData.buildings)) {
        const gain = (building.count * building.level * building.production) - gameData.resources[building.type].loss;
        gameData.resources[building.type].gain += gain;

    }

    if (gameData.collecting) {
        gameData.resources[gameData.collecting].gain += 1;
    }
}

function performResearch(key) {
    const item = gameData.research[key];

    // Check resource availability
    for (const [res, cost] of Object.entries(item.cost)) {
        if (!gameData.resources[res] || gameData.resources[res].amount < cost) {
            alert(`Not enough ${res} to research ${item.name}.`);
            return;
        }
    }

    // Deduct cost
    for (const [res, cost] of Object.entries(item.cost)) {
        gameData.resources[res].amount -= cost;
    }

    // Apply effect
    item.effect();
    item.completed = true;

    updateUI();
}

function giveAllResourcesDebug() {
    for (const res of Object.values(gameData.resources)) {
        res.amount = 100000;
    }
    updateUI();
    console.log("All resources set to 100,000 for debugging.");
}

// Passive Gain
setInterval(() => {
    for (const res of Object.values(gameData.resources)) {
        if ((res.amount + res.gain) < res.max) {
            res.amount += res.gain;
        } else {
            res.amount = res.max;
        }
    }
    updateUI();
}, 1000);

function exportSave() {
    const dataStr = JSON.stringify(gameData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "myGameSave.json";
    a.click();

    URL.revokeObjectURL(url);
}

function importSave(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            Object.assign(gameData, parsed);
            updateGains();
            updateUI();
            alert("Save imported successfully!");
        } catch (err) {
            alert("Failed to load save file.");
            console.error(err);
        }
    };
    reader.readAsText(file);
}


initGame();
