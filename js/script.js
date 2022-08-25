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
    cardFace: '../assets/Ancients/Azathoth.jpg',
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
    cardFace: '../assets/Ancients/Cthulthu.jpg',
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
    cardFace: '../assets/Ancients/IogSothoth.jpg',
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
    cardFace: '../assets/Ancients/ShubNiggurath.jpg',
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
    cardFace: 'assets/MythicCards/blue/blue1.jpg',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    cardFace: 'assets/MythicCards/blue/blue2.jpg',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    cardFace: 'assets/MythicCards/blue/blue3.jpg',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    cardFace: 'assets/MythicCards/blue/blue4.jpg',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    cardFace: 'assets/MythicCards/blue/blue5.jpg',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    cardFace: 'assets/MythicCards/blue/blue6.jpg',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    cardFace: 'assets/MythicCards/blue/blue7.jpg',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8', 
    cardFace: 'assets/MythicCards/blue/blue8.jpg',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    cardFace: 'assets/MythicCards/blue/blue9.jpg',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    cardFace: 'assets/MythicCards/blue/blue10.jpg',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    cardFace: 'assets/MythicCards/blue/blue11.jpg',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    cardFace: 'assets/MythicCards/blue/blue12.jpg',
    difficulty: 'normal',
    color:'blue'
  },
]


const brownCardsData = [
  {
    id: 'brown1',
    cardFace: 'assets/MythicCards/brown/brown1.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    cardFace: 'assets/MythicCards/brown/brown2.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    cardFace: 'assets/MythicCards/brown/brown3.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    cardFace: 'assets/MythicCards/brown/brown4.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    cardFace: 'assets/MythicCards/brown/brown5.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    cardFace: 'assets/MythicCards/brown/brown6.jpg',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    cardFace: 'assets/MythicCards/brown/brown7.jpg',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    cardFace: 'assets/MythicCards/brown/brown8.jpg',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    cardFace: 'assets/MythicCards/brown/brown9.jpg',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    cardFace: 'assets/MythicCards/brown/brown10.jpg',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    cardFace: 'assets/MythicCards/brown/brown11.jpg',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    cardFace: 'assets/MythicCards/brown/brown12.jpg',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    cardFace: 'assets/MythicCards/brown/brown13.jpg',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    cardFace: 'assets/MythicCards/brown/brown14.jpg',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    cardFace: 'assets/MythicCards/brown/brown15.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    cardFace: 'assets/MythicCards/brown/brown16.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    cardFace: 'assets/MythicCards/brown/brown17.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    cardFace: 'assets/MythicCards/brown/brown18.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    cardFace: 'assets/MythicCards/brown/brown19.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    cardFace: 'assets/MythicCards/brown/brown20.jpg',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    cardFace: 'assets/MythicCards/brown/brown21.jpg',
    difficulty: 'easy',
    color:'brown'
  },
]

const greenCardsData = [
  {
    id: 'green1',
    cardFace: 'assets/MythicCards/green/green1.jpg',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    cardFace: 'assets/MythicCards/green/green2.jpg',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    cardFace: 'assets/MythicCards/green/green3.jpg',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    cardFace: 'assets/MythicCards/green/green4.jpg',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    cardFace: 'assets/MythicCards/green/green5.jpg',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    cardFace: 'assets/MythicCards/green/green6.jpg',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    cardFace: 'assets/MythicCards/green/green7.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    cardFace: 'assets/MythicCards/green/green8.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    cardFace: 'assets/MythicCards/green/green9.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    cardFace: 'assets/MythicCards/green/green10.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    cardFace: 'assets/MythicCards/green/green11.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    cardFace: 'assets/MythicCards/green/green12.jpg',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    cardFace: 'assets/MythicCards/green/green13.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    cardFace: 'assets/MythicCards/green/green14.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    cardFace: 'assets/MythicCards/green/green15.jpg',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    cardFace: 'assets/MythicCards/green/green16.jpg',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    cardFace: 'assets/MythicCards/green/green17.jpg',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    cardFace: 'assets/MythicCards/green/green18.jpg',
    difficulty: 'easy',
    color:'green'
  },
]

let currentAncient;
let mythsDeckCardsQuantity;
$( '.ancients__person' ).on( 'click', getAncientCardSheme );
function getAncientCardSheme() {
  // console.log( 'START getAncientCardSheme ===============' );
  $( '.stack' ).html( '0' );
  $( '.ancients__person' ).removeClass( 'ancients__person--active' );
  $( '.button' ).removeClass( 'button--active' );
  $( '.stack-deck' ).removeClass( 'stack-deck--active' ); 
  $( '.buttons').addClass( 'buttons--active' );
  $( this ).addClass( 'ancients__person--active' );
  $( '.card-face').css( { 'background-image': 'url(assets/mythicCardBackground.jpg)' } );
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
  // console.log( 'FINISH getAncientCardSheme ===============' );
  // console.log( '' );
  // console.log( '' );
};

let difficultyLevel;
$( '.button' ).on( 'click', dealDeck );
function dealDeck() {
  // console.log( 'START dealDeck ===============' );
  $( '.button' ).removeClass( 'button--active' );
  $( this ).addClass( 'button--active' );
  $( '.stack-deck' ).addClass( 'stack-deck--active' );  
  difficultyLevel = difficulties[ $( this ).index() - 1 ].id;
  // console.log( 'difficultyLevel =', difficultyLevel );
  if ( difficultyLevel == 'easy' ) { getEasyLevelDeck(); outputAllStagesDecksOnScreen();  CARD_FACE.addEventListener( 'click', showMythsDeck );};
  if ( difficultyLevel == 'light' ) { getLightLevelDeck(); outputAllStagesDecksOnScreen(); CARD_FACE.addEventListener( 'click', showMythsDeck ); };
  if ( difficultyLevel == 'normal' ) { getNormalLevelDeck(); outputAllStagesDecksOnScreen();  CARD_FACE.addEventListener( 'click', showMythsDeck );};
  if ( difficultyLevel == 'high' ) { getHighLevelDeck(); outputAllStagesDecksOnScreen(); CARD_FACE.addEventListener( 'click', showMythsDeck ); };
  if ( difficultyLevel == 'hard' ) { getHardLevelDeck(); outputAllStagesDecksOnScreen(); CARD_FACE.addEventListener( 'click', showMythsDeck ); };
  // console.log( 'FINISH dealDeck ===============' );
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
  console.log( 'START getEasyLevelDeck ===============' );
  $( '.card-face').css( { 'background-image': 'url(assets/mythicCardBackground.jpg)' } );
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
  // console.log( 'Easy deck');
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsDeck );
  // console.table( brownCardsDeck );
  // console.table( blueCardsDeck );
  console.log( 'FINISH getEasyLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function getLightLevelDeck(){
  console.log( 'START getLightLevelDeck ===============' );
  $( '.card-face').css( { 'background-image': 'url(assets/mythicCardBackground.jpg)' } );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let finalDeck= removeCards( cardsData, 'hard' );
    finalDeck = finalDeck.slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  // console.log( 'Light deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsLight );
  // console.table( brownCardsLight );
  // console.table( blueCardsLight );
  console.log( 'FINISH getLightLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function getNormalLevelDeck() {
  console.log( 'START getNormalLevelDeck ===============' );
  $( '.card-face').css( { 'background-image': 'url(assets/mythicCardBackground.jpg)' } );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let finalDeck= shuffleCards( cardsData );
    finalDeck = finalDeck.slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  // console.log( 'Normal deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsNormal );
  // console.table( brownCardsNormal );
  // console.table( blueCardsNormal );
  console.log( 'FINISH getNormalLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
};

function getHighLevelDeck(){
  console.log( 'START getHighLevelDeck ===============' );
  $( '.card-face').css( { 'background-image': 'url(assets/mythicCardBackground.jpg)' } );
  let greenCardsDeck = formDeck( greenCardsData, 'greenCards' );
  let brownCardsDeck = formDeck( brownCardsData, 'brownCards' );
  let blueCardsDeck = formDeck( blueCardsData, 'blueCards' );
  function formDeck( cardsData, cardsQuantity ) {
    let finalDeck= removeCards( cardsData, 'easy' );
    finalDeck = finalDeck.slice( 0, mythsDeckCardsQuantity[ cardsQuantity ] );
    return finalDeck;
  }
  breakDeckIntoStages( greenCardsDeck, brownCardsDeck, blueCardsDeck );
  // console.log( 'High deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsHigh );
  // console.table( brownCardsHigh );
  // console.table( blueCardsHigh );
  console.log( 'FINISH getHighLevelDeck ===============' );
  console.log( '' );
  console.log( '' );
}

function getHardLevelDeck() {
  console.log( 'START getHardLevelDeck ===============' );
  $( '.card-face').css( { 'background-image': 'url(assets/mythicCardBackground.jpg)' } );
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
  // console.log( 'Hard deck' );
  console.table( firstStage );
  console.table( secondStage );
  console.table( thirdStage );
  // console.table( greenCardsHard );
  // console.table( brownCardsHard );
  // console.table( blueCardsHard );
  console.log( 'FINISH getHardLevelDeck ===============' );
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

function outputAllStagesDecksOnScreen() {
  outputStageDeckOnScreen( firstStage, 'FIRST_STAGE', );
  outputStageDeckOnScreen( secondStage, 'SECOND_STAGE', );
  outputStageDeckOnScreen( thirdStage, 'THIRD_STAGE', );
}

function outputStageDeckOnScreen( stage, output ) {
  // console.log( 'START outputStageDeckOnScreen ===============' );
  let counterGreen = 0;
  let counterBrown = 0;
  let counterBlue = 0;
  let element = document.getElementById( output );
  element.innerHTML = '';
  for( let i = 0; i < stage.length; i++ ) {
    if ( stage[i]['color'] == 'green' ) counterGreen++;
    if ( stage[i]['color'] == 'brown' ) counterBrown++;
    if ( stage[i]['color'] == 'blue' ) counterBlue++;
  }
  element.innerHTML = `<div class="stack-one stack">${ counterGreen }</div>
                        <div class="stack-two stack">${ counterBrown }</div>
                        <div class="stack-three stack">${ counterBlue }</div>`;
  // console.log( counterGreen );
  // console.log( counterBrown );
  // console.log( counterBlue );
  // console.log( 'FINISH outputStageDeckOnScreen ===============' );
  // console.log( '' );
  // console.log( '' );
}

let cardFaceElement = document.getElementById( 'CARD_FACE' );
function showMythsDeck() {
  // console.log( 'START showMythsDeck ===============' );
  let clickCounter = 1;
  if ( thirdStage.length == 0 && firstStage.length == 0 && secondStage.length == 0) {
    $( '.button' ).removeClass( 'button--active' );
    $( '.stack-deck' ).removeClass( 'stack-deck--active' );
    cardFaceElement.style.backgroundImage = `url( ${ 'assets/mythicCardBackground.jpg' } )`;
    outputAllStagesDecksOnScreen();
  }
  if ( firstStage.length > 0 ) {
    let currentCard = firstStage[ firstStage.length - 1 ];
    cardFaceElement.style.backgroundImage = `url( ${ currentCard.cardFace } )`;
    firstStage.pop(); outputStageDeckOnScreen( firstStage, 'FIRST_STAGE', );
    clickCounter = 0;
    // console.table( firstStage ); 
  }
  if ( secondStage.length > 0 && firstStage.length == 0 && clickCounter == 1 ) {
    let currentCard = secondStage[ secondStage.length - 1 ];
    cardFaceElement.style.backgroundImage = `url( ${ currentCard.cardFace } )`;
    secondStage.pop(); outputStageDeckOnScreen( secondStage, 'SECOND_STAGE', );
    clickCounter = 0;
    // console.table( secondStage );
  }
  if ( thirdStage.length > 0 && secondStage.length == 0 && clickCounter == 1 ) {
    let currentCard = thirdStage[ thirdStage.length - 1 ];
    cardFaceElement.style.backgroundImage = `url( ${ currentCard.cardFace } )`;
    thirdStage.pop(); outputStageDeckOnScreen( thirdStage, 'THIRD_STAGE', );
    clickCounter = 0;
    // console.table( thirdStage );
  }
  
  // if ( firstStage.length != 0 ) { firstStage.pop(); outputAllStagesDecksOnScreen(); console.table( firstStage ); }
  // if ( firstStage.length == 0 ) { secondStage.pop(); outputAllStagesDecksOnScreen(); console.table( secondStage ); }
  // if ( secondStage.length == 0 ) { thirdStage.pop(); outputAllStagesDecksOnScreen(); console.table( thirdStage ); }
  // console.log( 'FINISH showMythsDeck ===============' );
  // console.log( '' );
  // console.log( '' );
}