//universal functions
function addId(params, element) {
  element.setAttribute('id', params);
}

function removeId(element) {
  element.removeAttribute('id');
}

function getClick(element) {
  //remove and add Id
  if (element.hasAttribute('id') == false) {
    addId('active', element);
  } else {
    removeId(element);
  }

}

//randomizer, min and max excluded to include them use, number higher or lower
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//card loader 
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let probability;
let cardStack = [];

function cardLoader() {
  let totalCards = 5;
  let loadedCards = randomInt(1, 6);
  let attackCards, defenseCards, specialCards;
  if (loadedCards == totalCards) {
    attackCards = loadedCards - randomInt(0, 4);
  } else {
    attackCards = loadedCards;
  }
  if (attackCards <= 3) {
    let maxRange = totalCards - attackCards + 1;
    defenseCards = randomInt(1, maxRange);
    specialCards = maxRange - defenseCards;
  } else {
    defenseCards = totalCards - attackCards;
    specialCards = totalCards - defenseCards - attackCards;
  }
  probability = randomInt(1, 5)
  if (probability == 2) {
    if (defenseCards < specialCards || defenseCards == specialCards) {
      defenseCards += 1;
      specialCards -= 1;
    }
  }
  if (defenseCards < specialCards) {
    defenseCards += 1;
    specialCards -= 1;
  }
  cardStack = [attackCards, defenseCards, specialCards]
  return cardStack;
}

for (let i = 1; i <= 5; i++) {
  console.log(`Loop runs for ${i} count`)
  console.log(cardLoader());
}

class Perk {
  static PERKS = [Perk(1, 'fear', 'dewaefds')];
  id;
  name;
  description;
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}



var perks = {
  1: {
    name: 'fear',
    description: 'increases chances of enemy missing his next hit'
  },
  2: {
    name: 'weakened',
    description: '-2 from enemies attack per round'
  },
  3: {
    name: 'bleed',
    description: 'enemy looses 2 health per round'
  },
  4: {
    name: 'killer stare',
    description: 'plus 3 attack per round'
  }
}
var attackCards = {
  1: {
    name: 'light punch',
    imgPath: 'pathToImage',
    value: 2,
    hasPerks: false,
    perks: 0
  },
  2: {
    name: 'heavy punch',
    imgPath: 'pathToImage',
    value: 4,
    perks: false
  },
  3: {
    name: 'backhand slap',
    imgPath: 'pathToImage',
    value: 3,
    perks: false
  },
  4: {
    name: 'heavy slap',
    imgPath: 'pathToImage',
    value: 5,
    perks: false
  },
  5: {
    name: 'claw',
    imgPath: 'pathToImage',
    value: 3,
    perks: false
  },
  6: {
    name: 'uppercut',
    imgPath: 'pathToImage',
    value: 4,
    perks: false
  },
  7: {
    name: 'scream',
    imgPath: 'pathToImage',
    value: 1,
    perks: 1
  },
  8: {
    name: 'choke hold',
    imgPath: 'pathToImage',
    value: 6,
    perks: 2
  },
  9: {
    name: 'headbutt',
    imgPath: 'pathToImage',
    value: 5,
    perks: 3
  },
  10: {
    name: 'killer stare',
    imgPath: 'pathToImage',
    value: 2,
    perks: 4
  }
}



var player = {
  level: 1,
  totalStamina: 20,
  totalHealth: 0
}
var health = 20 + (player.level + player.totalHealth);
var stamina = 20 + (player.level + player.totalStamina);

var currentPlayerHealth;
var currentPlayerStamana;
var currentBossHealth;

var battle = false;

var playerDamage = false;

var computer = {
  level: 1,
  health: 20 + this.level * 5
}