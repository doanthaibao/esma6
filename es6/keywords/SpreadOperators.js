var cats = ["Tabby", "Siamese", "Persian"];
var dogs = ["Golden Retriever", "Pug", "Schnauzer"];
var animals = ["Whale", "Giraffe", cats, "Snake", dogs, "Coyote"];
var animals2 = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"]
console.log(animals);
console.log(animals2); //print
// [ 'Whale',
//   'Giraffe',
//   'Tabby',
//   'Siamese',
//   'Persian',
//   'Snake',
//   'Golden Retriever',
//   'Pug',
//   'Schnauzer',
//   'Coyote' ]
