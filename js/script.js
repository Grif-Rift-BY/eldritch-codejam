const difficulties = [
  {
    id: 'easy',
    name: 'Низкая'
  },
  {
    id: 'light',
    name: 'Лёгкая'
  },
  {
    id: 'normal',
    name: 'Средняя'
  },
  {
    id: 'high',
    name: 'Высокая'
  },
  {
    id: 'hard',
    name: 'Трудная'
  }
]

const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: '../assets/Ancients/Azathoth.png',
    firstStage: {
      greenCards: 1,
      brownCards: 2,
      blueCards: 1,
    },
    secondStage: {
      greenCards: 2,
      brownCards: 3,
      blueCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      brownCards: 4,
      blueCards: 0,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: '../assets/Ancients/Cthulthu.png',
    firstStage: {
      greenCards: 0,
      brownCards: 2,
      blueCards: 2,
    },
    secondStage: {
      greenCards: 1,
      brownCards: 3,
      blueCards: 0,
    },
    thirdStage: {
      greenCards: 3,
      brownCards: 4,
      blueCards: 0,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: '../assets/Ancients/IogSothoth.png',
    firstStage: {
      greenCards: 0,
      brownCards: 2,
      blueCards: 1,
    },
    secondStage: {
      greenCards: 2,
      brownCards: 3,
      blueCards: 1,
    },
    thirdStage: {
      greenCards: 3,
      brownCards: 4,
      blueCards: 0,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: '../assets/Ancients/ShubNiggurath.png',
    firstStage: {
      greenCards: 1,
      brownCards: 2,
      blueCards: 1,
    },
    secondStage: {
      greenCards: 3,
      brownCards: 2,
      blueCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      brownCards: 4,
      blueCards: 0,
    },
  },
]

const blueCardsData = [
  {
    id: 'blue1',
    cardFace: '../assets/MythicCards/blue/blue1.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    cardFace: '../assets/MythicCards/blue/blue2.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    cardFace: '../assets/MythicCards/blue/blue3.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    cardFace: '../assets/MythicCards/blue/blue4.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    cardFace: '../assets/MythicCards/blue/blue5.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    cardFace: '../assets/MythicCards/blue/blue6.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    cardFace: '../assets/MythicCards/blue/blue7.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    cardFace: '../assets/MythicCards/blue/blue8.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    cardFace: '../assets/MythicCards/blue/blue9.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    cardFace: '../assets/MythicCards/blue/blue10.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    cardFace: '../assets/MythicCards/blue/blue11.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    cardFace: '../assets/MythicCards/blue/blue12.png',
    difficulty: 'normal',
    color:'blue'
  },
]


const brownCardsData = [
  {
    id: 'brown1',
    cardFace: '../assets/MythicCards/blue/brown1.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    cardFace: '../assets/MythicCards/blue/brown2.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    cardFace: '../assets/MythicCards/blue/brown3.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    cardFace: '../assets/MythicCards/blue/brown4.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    cardFace: '../assets/MythicCards/blue/brown5.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    cardFace: '../assets/MythicCards/blue/brown6.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    cardFace: '../assets/MythicCards/blue/brown7.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    cardFace: '../assets/MythicCards/blue/brown8.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    cardFace: '../assets/MythicCards/blue/brown9.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    cardFace: '../assets/MythicCards/blue/brown10.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    cardFace: '../assets/MythicCards/blue/brown11.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    cardFace: '../assets/MythicCards/blue/brown12.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    cardFace: '../assets/MythicCards/blue/brown13.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    cardFace: '../assets/MythicCards/blue/brown14.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    cardFace: '../assets/MythicCards/blue/brown15.png',
    difficulty: 'easy',
    color:'brown'
  },
]

const greenCardsData = [
  {
    id: 'green1',
    cardFace: '../assets/MythicCards/green/green1.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    cardFace: '../assets/MythicCards/green/green2.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    cardFace: '../assets/MythicCards/green/green3.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    cardFace: '../assets/MythicCards/green/green4.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    cardFace: '../assets/MythicCards/green/green5.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    cardFace: '../assets/MythicCards/green/green6.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    cardFace: '../assets/MythicCards/green/green7.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    cardFace: '../assets/MythicCards/green/green8.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    cardFace: '../assets/MythicCards/green/green9.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    cardFace: '../assets/MythicCards/green/green10.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    cardFace: '../assets/MythicCards/green/green11.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    cardFace: '../assets/MythicCards/green/green12.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    cardFace: '../assets/MythicCards/green/green13.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    cardFace: '../assets/MythicCards/green/green14.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    cardFace: '../assets/MythicCards/green/green15.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    cardFace: '../assets/MythicCards/green/green16.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    cardFace: '../assets/MythicCards/green/green17.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    cardFace: '../assets/MythicCards/green/green18.png',
    difficulty: 'easy',
    color:'green'
  },
]

let currentAncient;
let mythsDeckCardsQuantity;
$( '.ancients__person' ).on( 'click', getAncientCardSheme );
function getAncientCardSheme() {
  // console.log( '=============== START getAncientCardSheme ===============' );
  currentAncient = ancientsData[ $( this ).index() ];
  // console.log( 'currentAncient =', currentAncient.name );
  let numberOfGreenCards = sumOfOneColorCards( 'greenCards' );
  let numberOfBrownCards = sumOfOneColorCards( 'brownCards' );
  let numberOfBlueCards = sumOfOneColorCards( 'blueCards' );
  function sumOfOneColorCards( colorOfCard ) {
    let numberOfCards = currentAncient.firstStage[ colorOfCard ] +
                        currentAncient.secondStage[ colorOfCard ] + 
                        currentAncient.thirdStage[ colorOfCard ];
    return numberOfCards;
  }
  mythsDeckCardsQuantity = {
    'greenCards': numberOfGreenCards,
    'brownCards': numberOfBrownCards,
    'blueCards': numberOfBlueCards
  }
  // console.log( 'cardsScheme' );
  // console.table( cardsScheme );
  // console.log( '=============== FINISH getAncientCardSheme ===============' );
  // console.log( '' );
  // console.log( '' );
};

$( '.button' ).on( 'click', dealDeck );
function dealDeck() {
  // console.log( '=============== START dealDeck ===============' );  
  let difficultyLevel = difficulties[ $( this ).index() ].id;
  // console.log( 'difficultyLevel =', difficultyLevel );
  switch ( difficultyLevel ) {
    case 'easy':
    getEasyLevelDeck();
      break;
    case 'light':
    getLightLevelDeck();
      break;
    case 'normal':
    getNormalLevelDeck();
      break;
    case 'high':
    getHighLevelDeck();
      break;
    case 'hard':
    getHardLevelDeck();
      break;
  }
  // console.log( '=============== FINISH dealDeck ===============' );
  // console.log( '' );
  // console.log( '' );
}

let firstStage = [];
let secondStage = [];
let thirdStage = [];
let greenCardsDeck = [];
let brownCardsDeck = [];
let blueCardsDeck = [];
function getEasyLevelDeck() {
  console.log( '=============== START getEasyLevelDeck ===============' );
  greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let firstPartOfDeck= addCards( cardsData, 'easy' );
    let secondPartOfDeck = addCards( cardsData, 'normal' );
    let finalDeck = [...firstPartOfDeck, ...secondPartOfDeck].slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  console.log( 'Easy deck');
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsDeck );
  // console.table( brownCardsDeck );
  // console.table( blueCardsDeck );
  outputDeckOnScreen( firstStage, secondStage, thirdStage );
  console.log( '=============== FINISH getEasyLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function getLightLevelDeck(){
  console.log( '=============== START getLightLevelDeck ===============' );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let finalDeck= removeCards( cardsData, 'hard' );
    finalDeck = finalDeck.slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  console.log( 'Light deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsLight );
  // console.table( brownCardsLight );
  // console.table( blueCardsLight );
  outputDeckOnScreen( firstStage, secondStage, thirdStage );
  console.log( '=============== FINISH getLightLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function getNormalLevelDeck() {
  console.log( '=============== START getNormalLevelDeck ===============' );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let finalDeck= shuffleCards( cardsData );
    finalDeck = finalDeck.slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  console.log( 'Normal deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsNormal );
  // console.table( brownCardsNormal );
  // console.table( blueCardsNormal );
  outputDeckOnScreen( firstStage, secondStage, thirdStage );
  console.log( '=============== FINISH getNormalLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
};

function getHighLevelDeck(){
  console.log( '=============== START getHighLevelDeck ===============' );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let finalDeck= removeCards( cardsData, 'easy' );
    finalDeck = finalDeck.slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  console.log( 'High deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsHigh );
  // console.table( brownCardsHigh );
  // console.table( blueCardsHigh );
  outputDeckOnScreen( firstStage, secondStage, thirdStage );
  console.log( '=============== FINISH getHighLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function getHardLevelDeck() {
  console.log( '=============== START getHardLevelDeck ===============' );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let firstPartOfDeck= addCards( cardsData, 'hard' );
    let secondPartOfDeck = addCards( cardsData, 'normal' );
    let finalDeck = [...firstPartOfDeck, ...secondPartOfDeck].slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  console.log( 'Hard deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsHard );
  // console.table( brownCardsHard );
  // console.table( blueCardsHard );
  outputDeckOnScreen( firstStage, secondStage, thirdStage );
  console.log( '=============== FINISH getHardLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck ) {
  firstStage = makeStageDeck( greenCardsDeck, brownCardsDeck, blueCardsDeck, firstStage , currentAncient.firstStage );
  secondStage = makeStageDeck( greenCardsDeck, brownCardsDeck, blueCardsDeck, secondStage, currentAncient.secondStage );
  thirdStage = makeStageDeck( greenCardsDeck, brownCardsDeck, blueCardsDeck, thirdStage, currentAncient.thirdStage );
}

function makeStageDeck( greenDeck, brownDeck, blueDeck, stage, scheme  ) {
  stage.length = 0;
  let green = greenDeck.splice( 0, scheme.greenCards );
  let brown = brownDeck.splice( 0, scheme.brownCards );
  let blue = blueDeck.splice( 0, scheme.blueCards );
  stage.push( brown );
  stage.push( green );
  stage.push( blue );
  stage = shuffleCards( stage.flat() );
  return stage;
}

function addCards( deck, difficulty ) {
  deck = shuffleCards( deck );
  return deck.filter( element => { if( element.difficulty == difficulty ) return true; } );
}

function removeCards( deck, difficulty ) {
  deck = shuffleCards( deck );
  return deck.filter( element => { if( element.difficulty == difficulty ) return false; return true } );
}

function shuffleCards( deck ) {  
  return deck.sort( () => { return ( Math.random() - 0.5) } );
}

function outputDeckOnScreen( firstStage, secondStage, thirdStage ) {
  for( let i = 0; i < firstStage.length; i++ ) {
    console.log( firstStage[i]['color'] );
  }
}