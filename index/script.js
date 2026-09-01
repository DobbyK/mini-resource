// Game Configuration
const gameData = {
    collecting: null,
    resources: {
        money: {
            max: 10000, amount: 0, gain: 0, loss: 0, worth: 1,
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Money... Capitalism... Sell Stuff To get Money"
        },
        territory: {
            max: 1000, amount: 0, gain: 0, loss: 0, worth: 700,
            unlocked: false, collectible: false, sellable: false,
            tooltip: "And thats land! - bill wurtz"
        },
        human: {
            max: 10, amount: 0, gain: 0, loss: 0, worth: 50,
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Weird creatures with 2 legs and 'brains'. Maybe they could do something, or be sold- i mean uh."
        },
        family: {
            max: 10, amount: 0, gain: 0, loss: 0, worth: 500,
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Not Yet Nuclear"
        },
        soldier: {
            max: 200, amount: 0, gain: 0, loss: 0, worth: 600,
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Honor veterans"
        },
        rat: {
            max: 20, amount: 0, gain: 0, loss: 0, worth: 100,
            unlocked: false, collectible: false, sellable: false,
            tooltip: "Offspring of ratsareamazing. Chef"
        },
        cow: {
            max: 40, amount: 0, gain: 0, loss: 0, worth: 20,
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Not To Eat"
        },
        science: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 0,
            unlocked: false, collectible: true, sellable: false,
            tooltip: "Knowledge is power. You need this to research most things"
        },
        wheat: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 1,
            unlocked: false, collectible: true, sellable: false,
            tooltip: "Consumables"
        },
        meat: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 100,
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Don't beat this, eat it"
        },
        milk: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 50,
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Not safe for babies? Too bad"
        },
        tomato: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 10,
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Fruit or Veggie"
        },
        meal: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 150,
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Combination of wheat and meat. A sandwich?"
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
        iron: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 70,
            unlocked: false, collectible: true, sellable: true,
            tooltip: "Fe(iend), specific metal"
        },
        coal: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 50,
            unlocked: false, collectible: true, sellable: true,
            tooltip: "Oh brother lets go down lets go down"
        },
        clay: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 30,
            unlocked: false, collectible: true, sellable: true,
            tooltip: "AP Cermaics class"
        },
        leather: {
            max: 100, amount: 0, gain: 0, loss: 0, worth: 100,
            unlocked: false, collectible: true, sellable: true,
            tooltip: "I don't remember anyone ever making leather armor"
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
        armor: {
            max: 50, amount: 0, gain: 0, loss: 0, worth: 300,
            unlocked: false, collectible: false, sellable: true,
            tooltip: "Not Dyable"
        }
    },
    buildings: {
        coalMine: {
            type: "coal", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 1,
            buildCost: { territory: 350, stone: 800, metal: 750, pickaxe: 20 },
            resourcePrice: { },
            buildingBoost: {},
            scale: { territory: 1.05, stone: 1.05, metal: 1.05, pickaxe: 1 },
            tooltip: "You need a new mine for god knows what reason "
        },
        clayFinder: {
            type: "clay", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 1,
            buildCost: { territory: 200, wood: 1000, metal: 500 },
            resourcePrice: { },
            buildingBoost: {},
            scale: { territory: 1.05, wood: 1.05, metal: 1.05 },
            tooltip: "You need a new mine for god knows what reason "
        },
        ironMine: {
            type: "iron", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 1,
            buildCost: { territory: 100, stone: 200, metal: 500, pickaxe: 10 },
            resourcePrice: { },
            buildingBoost: {},
            scale: { territory: 1.05, stone: 1.05, metal: 1.05, pickaxe: 1 },
            tooltip: "You need a new mine for god knows what reason "
        },
        garden: {
            type: "tomato", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 1,
            buildCost: { territory: 50, wheat: 500, leather: 50 },
            resourcePrice: { },
            buildingBoost: {},
            scale: { territory: 1.05, wheat: 1.05, leather: 1.05 },
            tooltip: "Grown Organically"
        },
        leatherSmith: {
            type: "armor", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 1,
            buildCost: { wood: 800, stone: 600, leather: 20 },
            resourcePrice: { leather: 2, human: 1 },
            buildingBoost: {},
            scale: { wood: 1.05, stone: 1.05, leather: 1.05 },
            tooltip: "Turns hide into pride"
        },
        barracks: {
            type: "soldier", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 1,
            buildCost: { wood: 3000, metal: 600, milk: 5 },
            resourcePrice: { armor: 1, family: 1, meal: 2 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05, milk: 1.05 },
            tooltip: "Make war not love"
        },
        pentagon: {
            type: "territory", count: 0, gain: 0, unlocked: false, maxBoost: 100, production: 1,
            buildCost: { metal: 800, stone: 1000 },
            resourcePrice: { soldier: 2 },
            buildingBoost: {},
            scale: { metal: 1.05, stone: 1.05 },
            tooltip: "jessie wake up"
        },
        pen: {
            type: "cow", count: 0, gain: 0, unlocked: false, maxBoost: 20, production: 1,
            buildCost: { wood: 2000, stone: 1500, wheat: 900 },
            resourcePrice: { human: 1, wheat: 5 },
            buildingBoost: {},
            scale: { wood: 1.05, stone: 1.05, wheat: 1.05 },
            tooltip: "Moo"
        },
        tannery: {
            type: "leather", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 2500, metal: 750 },
            resourcePrice: { human: 1, cow: 1 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05 },
            tooltip: "Moo-but dead (no meat)"
        },
        butcher: {
            type: "meat", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 2500, metal: 750 },
            resourcePrice: { human: 1, cow: 1 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05 },
            tooltip: "Moo-but dead (no leather)"
        },
        parlor: {
            type: "milk", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 2500, metal: 750 },
            resourcePrice: { human: 1, cow: 1 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05 },
            tooltip: "Violate the cows"
        },
        church: {
            type: "family", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { meal: 20, wood: 500, metal: 150, stone: 200 },
            resourcePrice: { human: 4, wood: 6, meal: 2 },
            buildingBoost: {},
            scale: { meal: 1, wood: 1.05, metal: 1.05, stone: 1.05 },
            tooltip: "Non-religious"
        },
        house: {
            type: "family", count: 0, gain: 0, unlocked: false, maxBoost: 10, production: 0,
            buildCost: { stone: 100, metal: 600, wheat: 2000 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { stone: 1.05, metal: 1.05, wheat: 1.05 },
            tooltip: "Only people happily married get the right not to live in huts"
        },
        hammerMaker: {
            type: "hammer", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 300, metal: 150, stone: 200 },
            resourcePrice: { human: 1, wood: 2, metal: 2 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05, stone: 1.05 },
            tooltip: "The 50 billionth type of toolsmith"
        },
        autoHammerer: {
            type: "stone", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 0,
            buildCost: { hammer: 10, wood: 100, metal: 250, money: 300 },
            resourcePrice: { hammer: 2, human: 2, wheat: 4, wood: 2, money: 8 },
            buildingBoost: { "quarry": 2 },
            scale: { hammer: 1, wood: 1.05, metal: 1.05, money: 1.05 },
            tooltip: "Teach a man to hammer, get infinite rocks"
        },
        pickaxeMaker: {
            type: "pickaxe", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 400, metal: 300, stone: 300 },
            resourcePrice: { human: 1, wood: 4, metal: 3 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05, stone: 1.05 },
            tooltip: "Not a crafting table?"
        },
        autoPicker: {
            type: "metal", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 0,
            buildCost: { pickaxe: 10, wood: 150, stone: 150, metal: 300, money: 400 },
            resourcePrice: { pickaxe: 2, human: 2, stone: 3, wood: 4 },
            buildingBoost: { "mine": 2 },
            scale: { pickaxe: 1, wood: 1.05, stone: 1.05, metal: 1.05, money: 1.05 },
            tooltip: "Redstone..."
        },
        axeSmith: {
            type: "axe", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { metal: 400, money: 150, stone: 200 },
            resourcePrice: { human: 1, metal: 2, wood: 2 },
            buildingBoost: {},
            scale: { metal: 1.05, money: 1.05, stone: 1.05 },
            tooltip: "Train some dude to strike together some axes"
        },
        ratTrainer: {
            type: "rat", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wheat: 400, wood: 400, stone: 100, money: 100 },
            resourcePrice: { human: 2, wheat: 3, stone: 1 },
            buildingBoost: {},
            scale: { wheat: 1.05, wood: 1.05, stone: 1.05, money: 1.05 },
            tooltip: "Use wheat to train rats who in turn make wheat better. And some traping"
        },
        kitchen: {
            type: "meal", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wheat: 200, metal: 400, stone: 100 },
            resourcePrice: { rat: 2, human: 1, wheat: 5, meat: 1 },
            buildingBoost: {},
            scale: { wheat: 1.05, metal: 1.05, stone: 1.05 },
            tooltip: "Wheat+Meat+Rats+Human Slave = Better food?"
        },
        AutoHoer: {
            type: "wheat", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 0,
            buildCost: { wheat: 500, hoe: 20, wood: 100, metal: 300, money: 400 },
            resourcePrice: { hoe: 2, human: 2 },
            buildingBoost: { "farm": 2 },
            scale: { wheat: 1.05, hoe: 1, wood: 1.05, metal: 1.05, money: 1.05 },
            tooltip: "Peak Human Integunity. (no spell check)"
        },
        hoeMaker: {
            type: "hoe", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 200, metal: 100 },
            resourcePrice: { human: 1, wood: 2, stone: 1 },
            buildingBoost: {},
            scale: { wood: 1.05, metal: 1.05 },
            tooltip: "Use unpaid labor to make hoes! And some wood & stone"
        },
        formulaFactory: {
            type: "human", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 0,
            buildCost: { wood: 800, stone: 200, metal: 50, milk: 20, cow: 15 },
            resourcePrice: { milk: 4, wheat: 2 },
            buildingBoost: { "nursery": 2 },
            scale: { wood: 1.05, stone: 1.05, metal: 1.05, milk: 1.05, cow: 1.05 },
            tooltip: "If you don't like sucking naturally"
        },
        nursery: {
            type: "human", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 100, stone: 50, metal: 20 },
            resourcePrice: { wheat: 2 },
            buildingBoost: {},
            scale: { wood: 1.05, stone: 1.05, metal: 1.05 },
            tooltip: "If you feed some humans, they'll be birds & bees."
        },
        hut: {
            type: "human", count: 0, gain: 0, unlocked: false, maxBoost: 10, production: 0,
            buildCost: { wood: 50, stone: 25 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { wood: 1.05, stone: 1.05 },
            tooltip: "The homeless rates are going down"
        },
        school: {
            type: "science", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 20, wheat: 5 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { wood: 1.05, wheat: 1.05 },
            tooltip: "Expires in the summer time. Makes science, somehow"
        },
        farm: {
            type: "wheat", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wheat: 10 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { wheat: 1.05 },
            tooltip: "Agiliculture. Make the wheat, become the wheat."
        },
        silo: {
            type: "wheat", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { wood: 20 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { wood: 1.05 },
            tooltip: "All that wheat you got gotta go somewhere"
        },
        lumbermill: {
            type: "wood", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { money: 15, wheat: 5, wood: 5 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { money: 1.05, wheat: 1.05, wood: 1.05 },
            tooltip: "Industiral Climate Change"
        },
        woodyard: {
            type: "wood", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 50, stone: 5 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { money: 1.05, stone: 1.05 },
            tooltip: "Put chopped trees in a field for later use"
        },
        superAxeHacker: {
            type: "wood", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { metal: 500, wood: 200, stone: 300, money: 1000, axe: 20 },
            resourcePrice: { human: 2, axe: 2, money: 4, wheat: 5 },
            buildingBoost: { "lumbermill": 2 },
            scale: { metal: 1.05, wood: 1.05, stone: 1.05, money: 1.05, axe: 1 },
            tooltip: "How bad could I possibly be?"
        },
        quarry: {
            type: "stone", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { wood: 50, money: 100 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { wood: 1.05, money: 1.05 },
            tooltip: "Choose one place randomly you'll get stone faster if you dont do it randomly"
        },
        stonepit: {
            type: "stone", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 75, metal: 20 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { money: 1.05, metal: 1.05 },
            tooltip: "Throw that stone in a new area, for later use"
        },
        mine: {
            type: "metal", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { stone: 50, wood: 25 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { stone: 1.05, wood: 1.05 },
            tooltip: "Don't mine straight down. Or up. Get Metal."
        },
        scrapyard: {
            type: "metal", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { money: 80, wheat: 30 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { money: 1.05, wheat: 1.05 },
            tooltip: "Find another places you can throw all that stuff you found."
        },
        market: {
            type: "money", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 1,
            buildCost: { stone: 10, wood: 5 },
            resourcePrice: { wheat: 1 },
            buildingBoost: {},
            scale: { stone: 1.05, wood: 1.05 },
            tooltip: "Sell wheat, Get Cash. Yum"
        },
        lumberCompany: {
            type: "money", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 2,
            buildCost: { stone: 50, wood: 40, metal: 40 },
            resourcePrice: { wood: 1 },
            buildingBoost: {},
            scale: { stone: 1.05, wood: 1.05, metal: 1.05 },
            tooltip: "Sell Lumber Large Scale Baby"
        },
        rockDealer: {
            type: "money", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 5,
            buildCost: { wheat: 50, wood: 90, metal: 40 },
            resourcePrice: { stone: 1 },
            buildingBoost: {},
            scale: { wheat: 1.05, wood: 1.05, metal: 1.05 },
            tooltip: "Don't get stoned"
        },
        metalRidder: {
            type: "money", count: 0, gain: 0, unlocked: false, maxBoost: 0, production: 10,
            buildCost: { stone: 100, wood: 180, wheat: 400 },
            resourcePrice: { metal: 1 },
            buildingBoost: {},
            scale: { stone: 1.05, wood: 1.05, wheat: 1.05 },
            tooltip: "No Alchemy?"
        },
        bank: {
            type: "money", count: 0, gain: 0, unlocked: false, maxBoost: 5000, production: 0,
            buildCost: { money: 20, metal: 30, stone: 20 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { money: 1.05, metal: 1.05, stone: 1.05 },
            tooltip: "The Bank of ${GameName}. :) Store your money here!!!"
        },
        library: {
            type: "science", count: 0, gain: 0, unlocked: false, maxBoost: 50, production: 0,
            buildCost: { human: 20, money: 100, stone: 200 },
            resourcePrice: {},
            buildingBoost: {},
            scale: { human: 1.05, money: 1.05, stone: 1.05 },
            tooltip: "Some inspirational quote for why it costs humans - DobbyK"
        },
    },
    research: {
        unlockClayFinder: {
            name: "Time for Pottery", 
            description: "Resist the urge to break it, or just call it pot(ion)",
            cost: { science: 1400, tomato: 200, human: 200, money: 7500, territory: 150 },
            effect: () => {
                gameData.buildings.clayFinder.unlocked = true;
                gameData.resources.clay.unlocked = true;
            },
            completed: false,
            requires: ["unlockCoalMine"],
            tooltip: "Unlock Clay & Clay Finder"
        },
        unlockCoalMine: {
            name: "Yet Another Mine (Not yours)",
            description: "You somehow had advanced machinery before",
            cost: { science: 1200, stone: 1250, leather: 200, money: 7500, territory: 50, pickaxe: 50 },
            effect: () => {
                gameData.buildings.coalMine.unlocked = true;
                gameData.resources.coal.unlocked = true;
            },
            completed: false,
            requires: ["unlockIronMine"],
            tooltip: "Unlock Coal & Coal Mines"
        },
        unlockIronMine: {
            name: "Metal Squared",
            description: "No clothing here to iron, or steel. (thanks dad)",
            cost: { science: 1000, stone: 2000, wheat: 1750, rat: 100, money: 5000, territory: 10, family: 50 },
            effect: () => {
                gameData.buildings.ironMine.unlocked = true;
                gameData.resources.iron.unlocked = true;
            },
            completed: false,
            requires: ["unlockGarden"],
            tooltip: "Unlock Iron & Iron Mines"
        },
        unlockGarden: {
            name: "New Croping tool",
            description: "Photoshop v1.1: Tomato Revoultion",
            cost: { science: 800, stone: 1500, wheat: 1750, milk: 100, money: 5000, territory: 10, family: 50 },
            effect: () => {
                gameData.buildings.garden.unlocked = true;
                gameData.resources.tomato.unlocked = true;
            },
            completed: false,
            requires: ["unlockWar"],
            tooltip: "Unlock Tomatoes & Gardens"
        },
        unlockArmor: {
            name: "Wear Cows",
            description: "I ain't wearing my food, you are!",
            cost: { science: 500, stone: 1000, wheat: 1000, leather: 100, money: 2000 },
            effect: () => {
                gameData.buildings.leatherSmith.unlocked = true;
                gameData.resources.armor.unlocked = true;
            },
            completed: false,
            requires: ["unlockMilk", "unlockLeather", "unlockMeat"],
            tooltip: "Unlock Leather Smith"
        },
        unlockDraft: {
            name: "College Students",
            description: "Take young 18yos from families and force them to fight",
            cost: { science: 550, money: 5000 },
            effect: () => {
                gameData.buildings.barracks.unlocked = true;
                gameData.resources.soldier.unlocked = true;
            },
            completed: false,
            requires: ["unlockArmor"],
            tooltip: "Unlock Barracks (produces Soldiers from Armor + Families)"
        },
        unlockWar: {
            name: "War",
            description: "Weapons for WW3 not known, the next with di-sticks and stones - Einstein (paraphrased from memory)",
            cost: { science: 600, armor: 20, family: 50, money: 6000 },
            effect: () => {
                gameData.buildings.pentagon.unlocked = true;
                gameData.resources.territory.unlocked = true;
            },
            completed: false,
            requires: ["unlockDraft"],
            tooltip: "Unlock Pentagon"
        },
        unlockStoneDealer: {
            name: "Pure Dopamine",
            description: "Maybe some idiot will buy some rocks. Get Stoned. (also still play dwarf fortress)",
            cost: { science: 225, wheat: 1000, stone: 750, human: 30 },
            effect: () => {
                gameData.buildings.rockDealer.unlocked = true;
            },
            completed: false,
            requires: ["unlockLumberCompany"],
            tooltip: "Unlock rock Dealer"
        },
        unlockMetalRidder: {
            name: "Metal of Honor",
            description: "To get rid of not ridder, we ain't riding metal. We ain't that fat",
            cost: { science: 375, wheat: 1500, metal: 750 },
            effect: () => {
                gameData.buildings.metalRidder.unlocked = true;
            },
            completed: false,
            requires: ["unlockStoneDealer"],
            tooltip: "Unlock Formula Factory"
        },
        unlockFormula: {
            name: "2% Fat",
            description: "You look like you were raised on baby formula lil bro. :|",
            cost: { science: 175, wheat: 1000, stone: 750, cow: 40 },
            effect: () => {
                gameData.buildings.formulaFactory.unlocked = true;
            },
            completed: false,
            requires: ["unlockAutoHoe", "unlockMilk"],
            tooltip: "Unlock Formula Factory"
        },
        unlockCows: {
            name: "Knock Knock",
            description: "Who's there, interupting cow, interupting c- MOOOOO BIT-",
            cost: { science: 250, wheat: 1000, wood: 750 },
            effect: () => {
                gameData.resources.cow.unlocked = true;
                gameData.buildings.pen.unlocked = true;
            },
            completed: false,
            requires: ["unlockLumberCompany"],
            tooltip: "Unlock Cow & Pen"
        },
        unlockLeather: {
            name: "I'm loving it",
            description: "I don't know why i thought of mcdonalds. see tooltip.",
            cost: { science: 300, stone: 700, metal: 500 },
            effect: () => {
                gameData.resources.leather.unlocked = true;
                gameData.buildings.tannery.unlocked = true;
            },
            completed: false,
            requires: ["unlockCows"],
            tooltip: "Unlock Leather and Tannery"
        },
        unlockMilk: {
            name: "Cowlcium",
            description: "Don't tell anyone what you were doing to the cows to get this.",
            cost: { science: 300, stone: 700, metal: 500 },
            effect: () => {
                gameData.resources.milk.unlocked = true;
                gameData.buildings.parlor.unlocked = true;
            },
            completed: false,
            requires: ["unlockCows"],
            tooltip: "Unlock Milk and Parlor"
        },
        unlockMeat: {
            name: "Fast Food Nation",
            description: "Arby's we have the meats (i have never been to an arby's and never will",
            cost: { science: 300, stone: 700, metal: 500 },
            effect: () => {
                gameData.resources.meat.unlocked = true;
                gameData.buildings.butcher.unlocked = true;
            },
            completed: false,
            requires: ["unlockCows"],
            tooltip: "Unlock Meat and Butcher"
        },
        unlockFamilies: {
            name: "Everybody needs one",
            description: "Maybe humans need each other, eh nah",
            cost: { science: 300, wheat: 500, wood: 300 },
            effect: () => {
                gameData.resources.family.unlocked = true;
            },
            completed: false,
            requires: ["unlockPickaxe"],
            tooltip: "Unlock Families as a resource"
        },
        unlockHouse: {
            name: "Better homes",
            description: "Waste, cause what if single moms",
            cost: { science: 400, stone: 300, metal: 200 },
            effect: () => {
                gameData.buildings.house.unlocked = true;
            },
            completed: false,
            requires: ["unlockFamilies"],
            tooltip: "Unlock House building"
        },
        unlockChurch: {
            name: "Marriage",
            description: "I now pronounce you hʌzbənd ænd waɪf",
            cost: { science: 550, wood: 600, metal: 300, meal: 40 },
            effect: () => {
                gameData.buildings.church.unlocked = true;
            },
            completed: false,
            requires: ["unlockFamilies"],
            tooltip: "Unlock Church building"
        },
        unlockHammer: {
            name: "Now We're getting somewhere",
            description: "The hammer is flat just like you",
            cost: { science: 200, wheat: 300, stone: 200, metal: 150, wood: 200 },
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
            cost: { science: 400, wheat: 500, stone: 300, metal: 250 },
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
            cost: { science: 300, wheat: 400, stone: 300, metal: 200 },
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
            cost: { science: 500, wheat: 600, metal: 400, money: 300 },
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
            cost: { science: 400, wheat: 600, stone: 300, metal: 200 },
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
            cost: { science: 200, wheat: 800, stone: 150 },
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
            cost: { science: 150, wheat: 100, stone: 150 },
            effect: () => {
                gameData.resources.axe.unlocked = true;
                gameData.buildings.axeSmith.unlocked = true;
            },
            completed: false,
            requires: ["unlockHoe"],
            tooltip: "Unlock Axe"
        },
        unlockMeals: {
            name: "Make The wheat Better?",
            description: "The Humans think the rats are smart. make wheat???",
            cost: { science: 500, wheat: 1000, metal: 350 },
            effect: () => {
                gameData.buildings.kitchen.unlocked = true;
                gameData.resources.meal.unlocked = true;
            },
            completed: false,
            requires: ["unlockRat", "unlockMeat"],
            tooltip: "Unlock Meals & Kitchen"
        },
        unlockRat: {
            name: "Anyone Can Cook",
            description: "see title",
            cost: { science: 400, wheat: 500, human: 40 },
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
            cost: { science: 100, wheat: 50, money: 500 },
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
            cost: { science: 200, stone: 500, wheat: 750, metal: 300, money: 200 },
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
            cost: { science: 100, stone: 200, wheat: 100, metal: 100 },
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
            cost: { science: 50, stone: 50, wheat: 100 },
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
            cost: { science: 40, wheat: 100 },
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
            cost: { science: 50, wood: 100, wheat: 250 },
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

        unlockWheat: {
            name: "Unlock wheat",
            description: "You are literally an empty void. So Eat",
            cost: { wheat: 0 },
            effect: () => { gameData.resources.wheat.unlocked = true; },
            completed: false,
            requires: [],
            tooltip: "Unlock wheat"
        },

        unlockFarm: {
            name: "Agiliculture",
            description: "Somehow you figure out you don't have to rummage around in the trash.",
            cost: { wheat: 5 },
            effect: () => { gameData.buildings.farm.unlocked = true; },
            completed: false,
            requires: ["unlockWheat"],
            tooltip: "Unlock Farm"
        },

        unlockMoney: {
            name: "Economy",
            description: "Here comes the money. $$$",
            cost: { wheat: 5 },
            effect: () => {
                gameData.resources.money.unlocked = true;
                gameData.resources.wheat.sellable = true;
            },
            completed: false,
            requires: ["unlockWheat", "unlockFarm"],
            tooltip: "Unlock Money"
        },

        unlockSilo: {
            name: "Unlock Silos",
            description: "You are swimming in wheat (I think)",
            cost: { science: 10, wheat: 50 },
            effect: () => { gameData.buildings.silo.unlocked = true; },
            completed: false,
            requires: ["unlockFarm"],
            tooltip: "Unlock Silo"
        },

        unlockYard: {
            name: "Unlock a Yard",
            description: "You've chopped a crap ton of trees down",
            cost: { science: 20, wheat: 50 },
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
            requires: ["unlockWheat", "unlockMoney"],
            tooltip: "Unlock Wood"
        },

        unlockLumbermill: {
            name: "Deforstation",
            description: "Unlocks building lumbermills. Now you can turn taking down plants industrially",
            cost: { money: 30, wheat: 10, science: 20 },
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
            name: "Get Selling ( well just wheat :( )",
            description: "Capitalism at its finest, but people won't buy stuff besides wheat yet.",
            cost: { money: 50, wood: 100, wheat: 100, science: 20 },
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
        <a target="_blank" href="changelog.html">v0.0.13</a>
    </div>

    <div id="main-layout">
        <!-- LEFT: Resources (always visible) -->
        <div id="resources-panel">
            <div id="resources"></div>
        </div>

        <!-- RIGHT: Tabs -->
        <div id="right-panel">

            <div id="tabs">
                <button id="tab-buildings" onclick="switchRightTab('buildings')" class="active-tab">Buildings</button>
                <button id="tab-research" onclick="switchRightTab('research')">Research</button>
            </div>

            <div id="buildings" class="tab-content"></div>
            <div id="research" class="tab-content" style="display:none;"></div>

        </div>
    </div>
`;

renderStaticUI();
requestAnimationFrame(gameLoop);
    renderStaticUI();
    requestAnimationFrame(gameLoop);
}

function switchRightTab(tabName) {
    const tabs = ["buildings", "research"];

    for (const tab of tabs) {
        const div = document.getElementById(tab);
        const btn = document.getElementById(`tab-${tab}`);

        const active = tab === tabName;

        if (div) div.style.display = active ? "block" : "none";
        if (btn) btn.classList.toggle("active-tab", active);
    }
}

// Update UI Dynamically
function renderStaticUI() {
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
                        <strong>
                            <a onclick="scrollToBuildingCategory('${name}')">${format(name)}</a>
                        </strong>:
                    </div>
                    <span id="${name}_amount">${res.amount}/${res.max}</span> 
                    <div class="tooltip">
                        <span class="tooltiptext" id="${name}_tip">${getProductionBreakdown(name)}</span>
                        (+<span id="${name}_gain">${res.gain}</span>/s)
                    </div><br>
                    ${res.collectible ? `<button onclick="collect('${name}')">Collect</button>` : ''}
                    ${res.sellable ? `<button onclick="sell('${name}')">Sell $${res.worth}</button>` : ''}
                </div>
                <hr style="margin: 4px 0; border: none; border-top: 1px solid #ccc;">
            `;
        }
    }

    bDiv.innerHTML = '<h3>Buildings</h3>';
    const buildingsByType = {};

    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.unlocked && gameData.resources[building.type]?.unlocked) {
            if (!buildingsByType[building.type]) buildingsByType[building.type] = [];
            buildingsByType[building.type].push({ name: bName, ...building });
        }
    }

    const sortedTypes = Object.keys(buildingsByType).sort();
    for (const type of sortedTypes) {
        bDiv.innerHTML += `
            <hr>
            <h4 id="building_category_${type}">${type.charAt(0).toUpperCase() + type.slice(1)} Buildings</h4>
        `;
        for (const building of buildingsByType[type]) {
            bDiv.innerHTML += `
                <div>
                    <div class="tooltip">
                        <span class="tooltiptext">${building.tooltip}</span>
                        <strong>${format(building.name)}</strong>
                    </div> - <span id="${building.name}_count">${building.count}</span>
                    <br>
                    <button id="${building.name}_cost" onclick="build('${building.name}')">Build (${formatCost(building.buildCost)}${getCostText(building)})</button>
                    <button onclick="destroy('${building.name}')">Destroy</button>
                </div>
            `;
        }
    }

    researchDiv.innerHTML = "<h3>Research</h3>";
    for (const [key, item] of Object.entries(gameData.research)) {
        if (item.completed || !item.requires.every(reqKey => gameData.research[reqKey]?.completed)) continue;

        researchDiv.innerHTML += `
            <div>
                <div class="tooltip">
                    <span class="tooltiptext">${item.tooltip}</span>
                    <strong>${item.name}</strong>
                </div>: ${item.description}
                <br>Cost: <span id="${key}_cost">${formatCost(item.cost)}</span>
                <br><button onclick="performResearch('${key}')">Research</button>
            </div>
            <hr>
        `;
    }
}

function scrollToBuildingCategory(resourceType) {
    const elem = document.getElementById(`building_category_${resourceType}`);
    if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


function updateDynamicUI() {
    for (const [name, res] of Object.entries(gameData.resources)) {
        if (res.unlocked) {
            const amountElem = document.getElementById(`${name}_amount`);
            const gainElem = document.getElementById(`${name}_gain`);
            if (amountElem) amountElem.innerHTML = `${res.amount.toFixed()}/${res.max}`;
            if (gainElem) gainElem.innerHTML = res.gain.toFixed();
        }
    }

    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.unlocked) {
            const countElem = document.getElementById(`${bName}_count`);
            if (countElem) countElem.innerHTML = building.count.toFixed();
            const costElem = document.getElementById(`${bName}_cost`);
            if (costElem) costElem.innerHTML = `<span style="pointer-events: none;"> Build (${formatCost(building.buildCost)}${getCostText(building)})</span>`;
        }


    }

    for (const [name, res] of Object.entries(gameData.resources)) {
        if (res.unlocked) {
            const tip = document.getElementById(`${name}_tip`);
            if (tip) tip.innerHTML = getProductionBreakdown(name);
        }
    }

    for (const [key, item] of Object.entries(gameData.research)) {
        if (item.completed || !item.requires.every(reqKey => gameData.research[reqKey]?.completed)) continue;

        const researchCostElem = document.getElementById(`${key}_cost`);
        if (!researchCostElem) continue;

        const canAfford = Object.entries(item.cost).every(([res, amt]) =>
            gameData.resources[res]?.amount >= amt
        );

        researchCostElem.innerHTML = formatCost(item.cost);
        researchCostElem.style.color = canAfford ? "green" : "red";
    }

}


function getProductionBreakdown(resourceName) {
    let breakdown = [];
    const res = gameData.resources[resourceName];

    // Positive production
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.type === resourceName && building.count > 0 && building.production > 0) {
            const gain = building.count * building.production;
            breakdown.push(`+${gain.toFixed()} ${resourceName}/s (${bName})`);
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
                breakdown.push(`-${loss.toFixed()} ${resourceName}/s (${bName})`);
            }
        }
    }

    if (breakdown.length === 0) {
        return `You get no ${resourceName} idiot.`;
    }

    return breakdown.join('<br>');
}


function formatCost(costObj) {
    return Object.entries(costObj).map(([res, amt]) => {
        const canBuy = gameData.resources[res]?.amount >= amt;
        const color = canBuy ? "green" : "red";
        return `<span style="color:${color}">${amt} ${res}</span>`;
    }).join(', ');
}


function getCostText(building) {
    if (!building.resourcePrice || Object.keys(building.resourcePrice).length === 0) return '';

    const parts = Object.entries(building.resourcePrice).map(([resource, costPerSecond]) => {
        let totalProduction = 0;
        let totalLoss = 0;

        for (const b of Object.values(gameData.buildings)) {
            if (b.production && b.type === resource) {
                totalProduction += b.count * b.production;
            }

            if (b.resourcePrice && b.resourcePrice[resource]) {
                totalLoss += b.count * b.resourcePrice[resource];
            }
        }

        const netAvailable = totalProduction - totalLoss;
        const color = netAvailable >= costPerSecond ? "green" : "red";

        return `<span style="color:${color}">${costPerSecond.toFixed()} ${resource}/s</span>`;
    });

    return parts.length > 0 ? ` | Cost: ${parts.join(', ')}` : '';
}





function getgainPrice(building) {
    return Math.floor(building.baseUpgrade * Math.pow(1.5, building.gain - 1));
}

function collect(resource) {
    const prev = gameData.collecting;
    gameData.collecting = resource;

    if (prev) {
        gameData.resources[prev].gain -= 1;
    }

    gameData.resources[resource].gain += 1;
}

function sell(resource) {
    const res = gameData.resources[resource];
    if ((gameData.resources.money.amount + res.worth) >= gameData.resources.money.max) { return; }
    if (res.amount > 0) {
        res.amount -= 1;
        gameData.resources.money.amount += res.worth;
    } else {
        return;
    }
}

function destroy(buildingName) {
    const building = gameData.buildings[buildingName];

    if (building.count < 1) {
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
                newTotalProduction += producerCount * b.production;
            }
        }

        if (newTotalProduction < newTotalConsumption) {
            return;
        }
    }

    if (building.buildingBoost) {
        for (const target in building.buildingBoost) {
            const boost = building.buildingBoost[target];
            if (gameData.buildings[target]) {
                gameData.buildings[target].production /= boost;
            }
        }
    }

    for (const [resource, cost] of Object.entries(building.buildCost)) {
        let scaletest = (Math.floor(building.buildCost[resource] / building.scale[resource]) == building.buildCost[resource]) ? true : false;
        if (!scaletest) { building.buildCost[resource] = Math.floor(building.buildCost[resource] / building.scale[resource]); }
        else { building.buildCost[resource] -= 1; }
    }

    // All checks passed, safe to destroy
    gameData.resources[building.type].max -= building.maxBoost;
    if (gameData.resources[building.type].amount > gameData.resources[building.type].max) gameData.resources[building.type].amount = gameData.resources[building.type].max;
    building.count -= 1;
}


function build(buildingName) {
    const building = gameData.buildings[buildingName];

    // Check one-time costs
    for (const [resource, cost] of Object.entries(building.buildCost)) {
        if (gameData.resources[resource].amount < cost) {
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
                    passiveGain += b.count * b.production;
                }
            }

            if (passiveGain < totalLoss) {
                return;
            }
        }
    }


    // Deduct build cost
    for (const [resource, cost] of Object.entries(building.buildCost)) {
        gameData.resources[resource].amount -= cost;
        let scaletest = (Math.floor(building.buildCost[resource] * building.scale[resource]) == building.buildCost[resource]) ? true : false;
        if (!scaletest) { building.buildCost[resource] = Math.floor(building.buildCost[resource] * building.scale[resource]); }
        else { building.buildCost[resource] += 1; }
    }


    building.count += 1;
    if (building.buildingBoost) {
        for (const target in building.buildingBoost) {
            const boost = building.buildingBoost[target];
            if (gameData.buildings[target]) {
                gameData.buildings[target].production *= boost;
            }
        }
    }


    gameData.resources[building.type].max += building.maxBoost;
    updateGains();
    updateDynamicUI();
}


function updateGains() {
    for (const res of Object.values(gameData.resources)) {
        res.gain = 0;
        res.loss = 0;
    }

    for (const building of Object.values(gameData.buildings)) {
        if (building.production && building.count > 0) {
            gameData.resources[building.type].gain += building.count * building.production;
        }
    }

    for (const building of Object.values(gameData.buildings)) {
        if (building.resourcePrice) {
            for (const [resource, cost] of Object.entries(building.resourcePrice)) {
                gameData.resources[resource].loss += building.count * cost;
            }
        }
    }

    for (const res of Object.values(gameData.resources)) {
        res.gain -= res.loss;
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

    renderStaticUI();
}

function giveAllResourcesDebug() {
    for (const res of Object.values(gameData.resources)) {
        res.max += 100000;
        res.amount += 100000;
    }
    console.log("All resources set to 100,000 for debugging.");
}

function canAfford(costObj) {
    return Object.entries(costObj).every(([res, amt]) => gameData.resources[res]?.amount >= amt);
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
let lastTime = performance.now();

function gameLoop(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    for (const res of Object.values(gameData.resources)) {
        if (res.gain > 0) {
            res.amount += res.gain * deltaTime;
            if (res.amount > res.max) res.amount = res.max;
        }
    }

    for (const building of Object.values(gameData.buildings)) {
        building.count += building.gain * deltaTime;
    }

    updateGains();
    updateDynamicUI();

    requestAnimationFrame(gameLoop);
}

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
    reader.onload = function (e) {
        try {
            const parsed = JSON.parse(e.target.result);
            deepMerge(gameData, parsed);
            updateGains();
            renderStaticUI();
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
            target[key] = sourceVal; 
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
        renderStaticUI();
    } else {
        alert("No save found.");
    }
}



initGame();
