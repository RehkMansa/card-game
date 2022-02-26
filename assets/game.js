//universal functions
function addId(params, element){
    element.setAttribute('id', params);
}
function removeId(element){
    element.removeAttribute('id');
}
function getClick(element){
    //remove and add Id
    if(element.hasAttribute('id') == false){
        addId('active', element);
        console.log('Id added')
        console.log(element)
    }else{
        removeId(element)
        console.log(element)
        console.log('Id removed')
    }
   
}

var perks = {
    1:{
        name: 'fear',
        description: 'increases chances of enemy missing his next hit'
    },
    2:{
        name: 'weakened',
        description: '-2 from enemies attack per round'
    },
    3:{
        name: 'bleed',
        description: 'enemy looses 2 health per round'
    },
    4:{
        name: 'killer stare',
        description: 'plus 3 attack per round'
    }
}
var attackCards = {
    1:{
        name:  'light punch', imgPath: 'pathToImage', value: 2, perks: false
    },
    2:{
        name:  'heavy punch', imgPath: 'pathToImage', value: 4, perks: false
    },
    3:{
        name:  'backhand slap', imgPath: 'pathToImage', value: 3, perks: false
    },
    4:{
        name:  'heavy slap', imgPath: 'pathToImage', value: 5, perks: false
    },
    5:{
        name:  'claw', imgPath: 'pathToImage', value: 3, perks: false
    },
    6:{
        name:  'uppercut', imgPath: 'pathToImage', value: 4, perks: false
    },
    7:{
        name:  'scream', imgPath: 'pathToImage', value: 1, perks: 1
    },
    8:{
        name:  'choke hold', imgPath: 'pathToImage', value: 6, perks: 2
    },
    9:{
        name:  'headbutt', imgPath: 'pathToImage', value: 5, perks: 3
    },
    10:{
        name:  'killer stare', imgPath: 'pathToImage', value: 2, perks: 4
    }
}
console.log(attackCards);



var player = {
    level: 1,
    totalStamina: 20,
    totalHealth:0
}
var health = 20 + (player.level + player.totalHealth) ;
var stamina = 20 + (player.level + player.totalStamina) ;

var currentplayerhealth;
var currentplayerStamana;
var currentbosshealth;

var battle = false;

var playerDamage = false;

var computer = {
    level: 1,
    health: 20 + this.level * 5
}