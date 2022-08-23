import difficulties from '../data/difficulties.js';
import ancientsData from '../data/ancients.js';
import cards from '../assets/MythicCards/blue/index.js'

$('.ancients__person').on('click', function() {
  console.log( 'ancient =', $( this ).index() );

})

$('.button').on('click', function() {
  console.log( $( this ).index() );
  console.log( 'level =', $( this ).index() );
})

let deck = cards;

console.log( difficulties );
console.log( ancientsData );
console.log( cards);