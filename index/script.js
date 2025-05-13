// Game Configuration
const gameData = {
    collecting: null,
    resources: {
        money: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 1, 
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Money... Capitalism... Sell Stuff To get Money"
        },
        human: { 
            max: 10, amount: 0, gain: 0, loss: 0, worth: 50, 
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Weird creatures with 2 legs and 'brains'. Maybe they could do something, or be sold- i mean uh."
        },
        rat: { 
            max: 20, amount: 0, gain: 0, loss: 0, worth: 100, 
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Offspring of ratsareamazing. Chef"
        },
        science: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 0, 
            unlocked: false, collectible: true, sellable: false,
            tooltip: "Knowledge is power. You need this to research most things"
        },
        food: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 1, 
            unlocked: false, collectible: true, sellable: false,
            tooltip: "Consumables"
        },
        meal: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 100, 
            unlocked: false, collectible: false, sellable: true,
            tooltip: "+1 Enchanted Food"
        },
        wood: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 2, 
            unlocked: false, collectible: true, sellable: true,
            tooltip: "Take a tree cut it down. build stuff"
        },
        stone: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 5, 
            unlocked: false, collectible: true, sellable: true,
            tooltip: "Dwayne the rock johnson. Build slightly sturder than wood"
        },
        metal: { 
            max: 100, amount: 0, gain: 0, loss: 0, worth: 10, 
            unlocked: false, collectible: true, sellable: true,
            tooltip: "Non-descript resource of stuff mined underground. Also buildin."
        },
        hoe: { 
            max: 50, amount: 0, gain: 0, loss: 0, worth: 25, 
            unlocked: false, collectible: false, sellable: true,
            tooltip: "The Farming Kind, Not the other"
        },
        axe: { 
            max: 50, amount: 0, gain: 0, loss: 0, worth: 40, 
            unlocked: false, collectible: false, sellable: true,
            tooltip: "How the frick did you collect wood before?"
        },
        hammer: { 
            max: 50, amount: 0, gain: 0, loss: 0, worth: 60, 
            unlocked: false, collectible: false, sellable: true,
            tooltip: "All I can think of is the Harmer class in final fantasy"
        },
        pickaxe: { 
            max: 50, amount: 0, gain: 0, loss: 0, worth: 80, 
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Mining away on this minecraft day"
        },
        
    },
    buildings: {
        hammerMaker: {
            type: "hammer", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 300, metal: 150, stone: 200 },
            resourcePrice: { human: 1, wood: 2, metal: 2 },
            buildingProd: {},
            tooltip: "The 50 billionth type of toolsmith"
        },
        autoHammerer: {
            type: "stone", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 0,
            buildCost: { hammer: 10, wood: 100, metal: 250, money: 300 },
            resourcePrice: { hammer: 2, human: 2, food: 8, wood: 10, money: 5 },
            buildingProd: { "quarry": 1 },
            tooltip: "Teach a man to hammer, get infinite rocks"
        },
        pickaxeMaker: {
            type: "pickaxe", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 400, metal: 300, stone: 300 },
            resourcePrice: { human: 1, wood: 5, metal: 10 },
            buildingProd: {},
            tooltip: "Not a crafting table?"
        },
        autoPicker: {
            type: "metal", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 0,
            buildCost: { pickaxe: 10, wood: 150, stone: 150, metal: 300, money: 400 },
            resourcePrice: { pickaxe: 2, human: 2, food: 10, wood: 1 },
            buildingProd: { "mine": 1 },
            tooltip: "Redstone..."
        },        
        axeSmith: {
            type: "axe", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { metal: 400, money: 150, stone: 200 },
            resourcePrice: { human: 1, metal: 6, wood: 2},
            buildingProd: { },
            tooltip: "Train some dude to strike together some axes"
        },
        ratTrainer: {
            type: "rat", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { food: 400, wood: 400, stone: 100, money: 100 },
            resourcePrice: { human: 2, food: 8, stone: 1 },
            buildingProd: { },
            tooltip: "Use food to train rats who in turn make food better. And some traping"
        },
        kitchen: {
            type: "meal", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { food: 200, metal: 400, stone: 100 },
            resourcePrice: { rat: 2, human: 1, food: 5 },
            buildingProd: {  },
            tooltip: "Food+Rats+Human Slave = Better Food?"
        },
        AutoHoer: {
            type: "food", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 0, 
            buildCost: { food: 500, hoe: 20, wood: 100, metal: 300, money: 400 },
            resourcePrice: { hoe: 2, human: 2, food: 10 },
            buildingProd: { "farm": 1 },
            tooltip: "Peak Human Integunity. (no spell check)"
        },
        hoeMaker: {
            type: "hoe", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { wood: 200, metal: 100 },
            resourcePrice: { human: 1, wood: 2, stone: 1 },
            buildingProd: {},
            tooltip: "Use unpaid labor to make hoes! And some wood & stone"
        },
        nursery: {
            type: "human", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { wood: 100, stone: 50, metal: 20 },
            resourcePrice: { food: 2 },
            buildingProd: {},
            tooltip: "If you feed some humans, they'll be birds & bees."
        },
        hut: {
            type: "human", count: 0, level: 1, unlocked: false, maxBoost: 10, production: 0,
            buildCost: { wood: 50, stone: 25 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "The homeless rates are going down"
        },
        school: {
            type: "science", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 20, food: 5 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Expires in the summer time. Makes science, somehow"
        },
        farm: {
            type: "food", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { food: 10 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Agiliculture. Make the food, become the food."
        },
        silo: {
            type: "food", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0, 
            buildCost: { wood: 20 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "All that food you got gotta go somewhere"
        },
        lumbermill: {
            type: "wood", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { money: 10, food: 5 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Industiral Climate Change"
        },
        woodyard: {
            type: "wood", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 50, wood: 10 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Put chopped trees in a field for later use"
        },
        superAxeHacker: {
            type: "wood", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { metal: 500, wood: 200, stone: 300, money: 1000, axe: 20 },
            resourcePrice: { human: 2, axe: 2, money: 10, food: 5 },
            buildingProd: {"lumbermill": 1},
            tooltip: "How bad could I possibly be?"
        },
        quarry: {
            type: "stone", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1, 
            buildCost: { wood: 10, money: 5 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Choose one place randomly you'll get stone faster if you dont do it randomly"
        },
        stonepit: {
            type: "stone", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 75, stone: 20 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Throw that stone in a new area, for later use"
        },
        mine: {
            type: "metal", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { stone: 10, wood: 5 },
            resourcePrice: { wood: 1 },
            buildingProd: {},
            tooltip: "Don't mine straight down. Or up. Get Metal."
        },
        scrapyard: {
            type: "metal", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 80, metal: 30 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Find another places you can throw all that stuff you found."
        },
        market: {
            type: "money", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { stone: 10, wood: 5 },
            resourcePrice: { food: 1 },
            buildingProd: {},
            tooltip: "Sell Food, Get Cash. Yum"
        },
        lumberCompany: {
            type: "money", count: 0, level: 1, unlocked: false, maxBoost: 0, production: 2,
            buildCost: { stone: 50, wood: 40, metal: 40 },
            resourcePrice: { wood: 1 },
            buildingProd: {},
            tooltip: "Sell Lumber Large Scale Baby"
        },
        bank: {
            type: "money", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 20, metal: 30, stone: 20 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "The Bank of ${GameName}. :) Store your money here!!!"
        },
        library: {
            type: "science", count: 0, level: 1, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { human: 20, money: 100, stone: 200 },
            resourcePrice: {},
            buildingProd: {},
            tooltip: "Some inspirational quote for why it costs humans - DobbyK"
        },
    },

    research: {
        unlockHammer: {
            name: "Now We're getting somewhere",
            description: "The hammer is flat just like you",
            cost: { science: 200, food: 300, stone: 200, metal: 150, wood: 200 },
            effect: () => {
                gameData.resources.hammer.unlocked = true;
                gameData.buildings.hammerMaker.unlocked = true;
            },
            completed: false,
            requires: ["unlockAxe"],
            tooltip: "Unlock Hammer & Hammer Maker"
        },
        unlockAutoHammer: {
            name: "Rock Hard ;)",
            description: "Okay maybe I have made too many dirty jokes...",
            cost: { science: 400, food: 500, stone: 300, metal: 250 },
            effect: () => {
                gameData.buildings.autoHammerer.unlocked = true;
            },
            completed: false,
            requires: ["unlockHammer"],
            tooltip: "Unlock AutoHammerer"
        },
        unlockPickaxe: {
            name: "Deeper into your mo-",
            description: "Theoritcally (again no spell check in my IDE) you could go bellow y=11",
            cost: { science: 300, food: 400, stone: 300, metal: 200 },
            effect: () => {
                gameData.resources.pickaxe.unlocked = true;
                gameData.buildings.pickaxeMaker.unlocked = true;
            },
            completed: false,
            requires: ["unlockHammer"],
            tooltip: "Unlock Pickaxe & Pickaxe Maker"
        },
        unlockAutoPicker: {
            name: "The Quicker Picker Upper",
            description: "Paper Towel to be added in full release <a target='_blank' href='https://bountytowels.com/en-us'>Not The Trimps Bounty</a>",
            cost: { science: 500, food: 600, metal: 400, money: 300 },
            effect: () => {
                gameData.buildings.autoPicker.unlocked = true;
            },
            completed: false,
            requires: ["unlockPickaxe"],
            tooltip: "Unlock AutoPicker"
        },        
        unlockAxeHacker: {
            name: "Anti-lorax",
            description: "It's a principle of nature, that almost every creature knows  <a target='_blank' href='https://seuss.fandom.com/wiki/Super_Axe_Hacker'>Wiki</a>",
            cost: { science: 400, food: 600, stone: 300, metal: 200 },
            effect: () => {
                gameData.buildings.superAxeHacker.unlocked = true;
            },
            completed: false,
            requires: ["unlockAutoHoe"],
            tooltip: "Unlock Super Axe Hacker"
        },
        unlockLumberCompany: {
            name: "Capitalism 2.0",
            description: "New Update! Sell Wood to the masses",
            cost: { science: 200, food: 800, stone: 150 },
            effect: () => {
                gameData.buildings.lumberCompany.unlocked = true;
            },
            completed: false,
            requires: ["unlockMarket", "unlockLibrary"],
            tooltip: "Unlock Lumber Company"
        },
        unlockAxe: {
            name: "Chop Chop",
            description: "Hilt + Handle - wait aren't those the same.",
            cost: { science: 150, food: 100, stone: 150 },
            effect: () => {
                gameData.resources.axe.unlocked = true;
                gameData.buildings.axeSmith.unlocked = true;
            },
            completed: false,
            requires: ["unlockHoe"],
            tooltip: "Unlock Axe"
        },
        unlockMeals: {
            name: "Make The Food Better?",
            description: "The Humans think the rats are smart. make Food???",
            cost: { science: 500, food: 1000, metal: 350 },
            effect: () => {
                gameData.buildings.kitchen.unlocked = true;
                gameData.resources.meal.unlocked = true;
            },
            completed: false,
            requires: ["unlockRat"],
            tooltip: "Unlock Meals & Kitchen"
        },
        unlockRat: {
            name: "Anyone Can Cook",
            description: "see title",
            cost: { science: 400, food: 500, human: 40 },
            effect: () => {
                gameData.buildings.ratTrainer.unlocked = true;
                gameData.resources.rat.unlocked = true;
            },
            completed: false,
            requires: ["unlockHoe"],
            tooltip: "Unlock Rats"
        },
        unlockLibrary: {
            name: "Alexandria",
            description: "Store all of your knowledge, lets hope it doesn't burn down",
            cost: { science: 100, food: 50, money: 500 },
            effect: () => {
                gameData.buildings.library.unlocked = true;
            },
            completed: false,
            requires: ["unlockHuman"],
            tooltip: "Unlock Library"
        },
        unlockAutoHoe: {
            name: "Crop Rotation",
            description: "Using ancient ways, you can teach some people to keep making farms.",
            cost: { science: 200, stone: 500, food: 750, metal: 300, money: 200 },
            effect: () => {
                gameData.buildings.AutoHoer.unlocked = true;
            },
            completed: false,
            requires: ["unlockHoe"],
            tooltip: "Unlock AutoHoer"
        },
        unlockHoe: {
            name: "Make some tools!",
            description: "People need some way to strike the farms.",
            cost: { science: 100, stone: 200, food: 100, metal: 100 },
            effect: () => {
                gameData.resources.hoe.unlocked = true;
                gameData.buildings.hoeMaker.unlocked = true;
            },
            completed: false,
            requires: ["unlockMine"],
            tooltip: "Unlock Hoes"
        },
        unlockSlavery: {
            name: "Crime Against Humanity",
            description: "But if you need cash...",
            cost: { science: 75, stone: 500, money: 200 },
            effect: () => {
                gameData.resources.human.sellable = true;
            },
            completed: false,
            requires: ["unlockNursery"],
            tooltip: "Unlock Selling Humans"
        },
        unlockHuman: {
            name: "Reproduction",
            description: "You figured it out! Finally! If only you had...",
            cost: { science: 50, stone: 50, food: 100 },
            effect: () => {
                gameData.resources.human.unlocked = true;
            },
            completed: false,
            requires: ["unlockQuarry"],
            tooltip: "Unlock Human"
        },
        
        unlockNursery: {
            name: "Like Rabbits",
            description: "The humans, well they multiply.",
            cost: { science: 40, food: 100 },
            effect: () => {
                gameData.buildings.nursery.unlocked = true;
            },
            completed: false,
            requires: ["unlockHuman"],
            tooltip: "Unlock Nursery"
        },
        
        unlockHut: {
            name: "2009",
            description: "The homes are too expensive!!!!!!!!! <a target='_blank' href='https://en.wikipedia.org/wiki/Subprime_mortgage_crisis'>Wiki</a>",
            cost: { science: 50, wood: 100, food: 250 },
            effect: () => {
                gameData.buildings.hut.unlocked = true;
            },
            completed: false,
            requires: ["unlockHuman"],
            tooltip: "Unlock Hut"
        },
        
        unlockBank: {
            name: "No Interest Banking",
            description: "Put your hard earned cash into legit buildings, but money still doesn't grow on trees.",
            cost: { science: 50, stone: 50, wood: 40 },
            effect: () => { gameData.buildings.bank.unlocked = true; },
            completed: false,
            requires: ["unlockMarket"],
            tooltip: "Unlock Bank"
        },
        
        unlockScrapyard: {
            name: "Heavy Metal",
            description: "You think you might be on to something. Put the metal you find in the mines into a big open field.",
            cost: { science: 50, metal: 50 },
            effect: () => { gameData.buildings.scrapyard.unlocked = true; },
            completed: false,
            requires: ["unlockMine"],
            tooltip: "Unlock Scrapyard"
        },
        
        unlockPit: {
            name: "Get Pitting",
            description: "We gotta put the earth we dig up in another part of the earth we dug up",
            cost: { science: 20, stone: 50 },
            effect: () => { gameData.buildings.stonepit.unlocked = true; },
            completed: false,
            requires: ["unlockQuarry"],
            tooltip: "Unlock Pit"
        },
        
        unlockFood: {
            name: "Unlock Food",
            description: "You are literally an empty void. So Eat",
            cost: { food: 0 },
            effect: () => { gameData.resources.food.unlocked = true; },
            completed: false,
            requires: [],
            tooltip: "Unlock Food"
        },
        
        unlockFarm: {
            name: "Agiliculture",
            description: "Somehow you figure out you don't have to rummage around in the trash.",
            cost: { food: 5 },
            effect: () => { gameData.buildings.farm.unlocked = true; },
            completed: false,
            requires: ["unlockFood"],
            tooltip: "Unlock Farm"
        },
        
        unlockMoney: {
            name: "Economy",
            description: "Here comes the money. $$$",
            cost: { food: 5 },
            effect: () => { 
                gameData.resources.money.unlocked = true; 
                gameData.resources.food.sellable = true; 
            },
            completed: false,
            requires: ["unlockFood", "unlockFarm"],
            tooltip: "Unlock Money"
        },
        
        unlockSilo: {
            name: "Unlock Silos",
            description: "You are swimming in food (I think)",
            cost: { science: 10, food: 50 },
            effect: () => { gameData.buildings.silo.unlocked = true; },
            completed: false,
            requires: ["unlockFarm"],
            tooltip: "Unlock Silo"
        },
        
        unlockYard: {
            name: "Unlock a Yard",
            description: "You've chopped a crap ton of trees down",
            cost: { science: 20, food: 50 },
            effect: () => { gameData.buildings.woodyard.unlocked = true; },
            completed: false,
            requires: ["unlockLumbermill"],
            tooltip: "Unlock Yard"
        },
        
        unlockScience: {
            name: "Unstupid",
            description: "Unlocks science collection.",
            cost: { money: 5 },
            effect: () => { gameData.resources.science.unlocked = true; },
            completed: false,
            requires: ["unlockMoney"],
            tooltip: "Unlock Science"
        },
        
        unlockSchool: {
            name: "Get Learning",
            description: "I thought this science stuff was useless originally.",
            cost: { science: 20 },
            effect: () => { gameData.buildings.school.unlocked = true; },
            completed: false,
            requires: ["unlockMoney", "unlockScience"],
            tooltip: "Unlock School"
        },
        
        unlockWood: {
            name: "Unlock Wood",
            description: "How much wood would a wood trimp trimp if a wood trimp could trimp wood. (Play Trimps!)",
            cost: { money: 25, science: 5 },
            effect: () => { gameData.resources.wood.unlocked = true; },
            completed: false,
            requires: ["unlockFood", "unlockMoney"],
            tooltip: "Unlock Wood"
        },
        
        unlockLumbermill: {
            name: "Deforstation",
            description: "Unlocks building lumbermills. Now you can turn taking down plants industrially",
            cost: { money: 30, food: 10, science: 20 },
            effect: () => { gameData.buildings.lumbermill.unlocked = true; },
            completed: false,
            requires: ["unlockWood"],
            tooltip: "Unlock Lumbermill"
        },
        
        unlockStone: {
            name: "Strike The Earth (Stone Collection)",
            description: "Urist McMiner. (well not really but like yeah play dwarf fortress)",
            cost: { money: 40, wood: 20, science: 20 },
            effect: () => { gameData.resources.stone.unlocked = true; },
            completed: false,
            requires: ["unlockLumbermill"],
            tooltip: "Unlock Stone"
        },
        
        unlockQuarry: {
            name: "Now with Rocks.",
            description: "Quarry is the stupidest word in the dictionary.",
            cost: { money: 50, stone: 5, science: 20 },
            effect: () => { gameData.buildings.quarry.unlocked = true; },
            completed: false,
            requires: ["unlockStone"],
            tooltip: "Unlock Quarry"
        },
        
        unlockMetal: {
            name: "Softcore metal",
            description: "So this is what they meant when they said they are into softcore p-",
            cost: { money: 75, stone: 50, science: 20 },
            effect: () => { gameData.resources.metal.unlocked = true; },
            completed: false,
            requires: ["unlockQuarry"],
            tooltip: "Unlock Metal"
        },
        
        unlockMine: {
            name: "No Diamonds",
            description: "Even at y-11, this mine will not have diamonds",
            cost: { money: 80, metal: 5, science: 20 },
            effect: () => { gameData.buildings.mine.unlocked = true; },
            completed: false,
            requires: ["unlockMetal"],
            tooltip: "Unlock Mine"
        },
        
        unlockMarket: {
            name: "Get Selling ( well just food :( )",
            description: "Capitalism at its finest, but people won't buy stuff besides food yet.",
            cost: { money: 50, wood: 100, food: 100, science: 20 },
            effect: () => { gameData.buildings.market.unlocked = true; },
            completed: false,
            requires: ["unlockMine"],
            tooltip: "Unlock Market"
        }
        
    }
};


function initGame() {
    const container = document.getElementById("game");
    container.innerHTML = `
        <div id="save-controls">
            <button onclick="darkModeToggle()">Dark Mode</button>
            <button onclick="saveGame()">Save In Browser</button>
            <button onclick="loadGame()">Load From Browser</button>
            <button onclick="exportSave()">Export Save</button>
            <input type="file" id="importFile" accept=".json" style="display:none" onchange="importSave(event)">
            <button onclick="document.getElementById('importFile').click()">Import Save</button>
            <button onclick="giveAllResourcesDebug()">Don't Press</button>
            <a target="_blank" href="changelog.html">v0.0.7</a>
        </div>
        <div id="resources">
        </div>
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

    rDiv.innerHTML = '<h3>Resources</h3>';
    for (const [name, res] of Object.entries(gameData.resources)) {
        if (res.unlocked) {
            rDiv.innerHTML += `
                <div>
                    <div class="tooltip">
                    <span class="tooltiptext">${res.tooltip}</span>
                    <strong>${format(name)}</strong>: </div> <span id="${name}_amount">${res.amount}/${res.max}</span> 
                    <div class="tooltip"><span class="tooltiptext">${getProductionBreakdown(name)}</span>(+<span id="${name}_gain">${res.gain}</span>/s)</div><br>
                    ${res.collectible ? `<button onclick="collect('${name}')">Collect</button>` : ''}
${res.sellable ? `<button onclick="sell('${name}')">Sell $${res.worth}</button>` : ''}

                </div>
                <hr style="margin: 4px 0; border: none; border-top: 1px solid #ccc;">
            `;
        } else {
            rDiv.innerHTML += ``;
        }
    }

    bDiv.innerHTML = '<h3>Buildings</h3>';

    const buildingsByType = {};
    
    // Group buildings by type
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.unlocked && gameData.resources[building.type]?.unlocked) {
            if (!buildingsByType[building.type]) {
                buildingsByType[building.type] = [];
            }
            buildingsByType[building.type].push({ name: bName, ...building });
        }
    }
    
    // Optional: Sort types alphabetically
    const sortedTypes = Object.keys(buildingsByType).sort();
    
    for (const type of sortedTypes) {
        bDiv.innerHTML += `<hr style="margin: 4px 0; border: none; border-top: 1px solid #ccc;">
<h4>${type.charAt(0).toUpperCase() + type.slice(1)} Buildings</h4>`;
        
        for (const building of buildingsByType[type]) {
            const costText = getCostText(building);
            bDiv.innerHTML += `
                <div>
                    <div class="tooltip">
                        <span class="tooltiptext">${building.tooltip}</span>
                        <strong>${format(building.name)}</strong>
                    </div> - <span id="${building.name}_count">${building.count}</span>
                    <br><button onclick="build('${building.name}')">Build (${formatCost(building.buildCost)}${costText})</button>
                    <button onclick="destroy('${building.name}')">Destroy</button>                   
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
            <div class="tooltip">
            <span class="tooltiptext">${item.tooltip}</span>
            <strong>${item.name}</strong></div>: ${item.description}
            <br>Cost: ${formatCost(item.cost)}
            <br><button onclick="performResearch('${key}')">Research</button>
        </div>
        <hr style="margin: 4px 0; border: none; border-top: 1px solid #ccc;">
    `;
    }

}

function getProductionBreakdown(resourceName) {
    let breakdown = [];
    const res = gameData.resources[resourceName];

    // Positive production
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.type === resourceName && building.count > 0 && building.production > 0) {
            const gain = building.count * building.level * building.production;
            breakdown.push(`+${gain} ${resourceName}/s (${bName})`);
        }
    }

    // Manual collection
    if (gameData.collecting === resourceName) {
        breakdown.push(`+1 ${resourceName}/s (manual collection)`);
    }

    // Negative consumption
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.resourcePrice && building.resourcePrice[resourceName]) {
            const loss = building.count * building.resourcePrice[resourceName];
            if (loss > 0) {
                breakdown.push(`-${loss} ${resourceName}/s (${bName})`);
            }
        }
    }

    if (breakdown.length === 0) {
        return `You get no ${resourceName} idiot.`;
    }

    return breakdown.join('<br>');
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

function destroy(buildingName) {
    const building = gameData.buildings[buildingName];

    if (building.count < 1) {
        alert('How the hell you gonna destroy you got none');
        return;
    }

    // Simulate the new building count after destruction
    const newCount = building.count - 1;

    // Collect all affected resources
    const affectedResources = new Set(Object.keys(building.resourcePrice));

    // Add any other resources consumed by other buildings
    for (const otherBuilding of Object.values(gameData.buildings)) {
        if (otherBuilding.resourcePrice) {
            for (const res in otherBuilding.resourcePrice) {
                affectedResources.add(res);
            }
        }
    }

    for (const resource of affectedResources) {
        let newTotalConsumption = 0;

        for (const [bName, b] of Object.entries(gameData.buildings)) {
            const price = b.resourcePrice?.[resource] || 0;
            const count = (bName === buildingName) ? newCount : b.count;
            newTotalConsumption += price * count;
        }

        let newTotalProduction = 0;
        for (const b of Object.values(gameData.buildings)) {
            const isProducer = b.type === resource;
            const producerCount = (b === building && b.type === resource) ? newCount : b.count;
            if (isProducer) {
                newTotalProduction += producerCount * b.level * b.production;
            }
        }

        if (newTotalProduction < newTotalConsumption) {
            alert(`You cannot destroy a ${buildingName} because it would reduce ${resource} production below consumption. Required: ${newTotalConsumption}/s, Available: ${newTotalProduction}/s`);
            return;
        }
    }

    // All checks passed, safe to destroy
    building.count -= 1;
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
            
            let totalLoss = (building.count + 1) * costPerBuilding;
            for (const otherBuilding of Object.values(gameData.buildings)) {
                if (otherBuilding !== building && otherBuilding.resourcePrice && otherBuilding.resourcePrice[resource]) {
                    totalLoss += otherBuilding.count * otherBuilding.resourcePrice[resource];
                }
            }
    
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
        if (building.production != 0) {
            const gain = (building.count * building.level * building.production) - gameData.resources[building.type].loss;
            gameData.resources[building.type].gain += gain;
        }

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
        res.max += 100000;
        res.amount += 100000;
    }
    updateUI();
    console.log("All resources set to 100,000 for debugging.");
}

function format(name) {
    return name
        .replace(/([a-z])([A-Z])/g, '$1 $2')  // insert space before capital letters
        .replace(/^./, str => str.toUpperCase());  // capitalize first letter
}

function darkModeToggle() {
    document.body.classList.toggle("dark-mode");

    // Optional: save preference in localStorage
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "on" : "off");
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
    for (const building of Object.values(gameData.buildings)) {
        if (building.buildingProd) {
            for (const build in building.buildingProd) {
                const prod = building.buildingProd[build];
                gameData.buildings[build].count += prod * building.count;
            }
        }
    }
    updateGains();
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
            deepMerge(gameData, parsed);
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

function deepMerge(target, source) {
    for (const key in source) {
        const sourceVal = source[key];
        const targetVal = target[key];

        if (
            sourceVal &&
            typeof sourceVal === 'object' &&
            !Array.isArray(sourceVal)
        ) {
            if (!targetVal || typeof targetVal !== 'object' || Array.isArray(targetVal)) {
                target[key] = {};
            }
            deepMerge(target[key], sourceVal);
        } else {
            target[key] = sourceVal; // Overwrite primitives and arrays or add new fields
        }
    }
}

function saveGame() {
    localStorage.setItem("gameSave", JSON.stringify(gameData));
    alert("Game saved!");
}

function loadGame() {
    const savedData = localStorage.getItem("gameSave");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        deepMerge(gameData, parsedData);
        alert("Game loaded!");
        updateUI();
    } else {
        alert("No save found.");
    }
}



initGame();
