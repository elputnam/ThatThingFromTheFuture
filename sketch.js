//That Thing from the Future

let arc1 = ['collapse', 'discipline', 'grow', 'transformation'];
let arc2 = ['a few years', 'a decade', 'two generations', 'a century', 'a millenium'];
let terrain = ['agricutlure', 'the brain', 'childhood', 'citizenship', 'class', 'climate', 'cloning', 'communications', 'court', 'disease', 'drones', 'the economy', 'education', 'entertainment', 'equality', 'family', 'fashion', 'flight', 'forests', 'genetics', 'gender', 'governance', 'health', 'hobbies', 'home', 'identity', 'insects', 'intellectual property', 'journalism', 'justice', 'learning', 'memory', 'mining', 'the moon', 'music', 'oceans', 'oil', 'old age', 'pets', 'power', 'religion', 'robots', 'shopping', 'space', 'sports', 'theatre', 'travel', 'war', 'water', 'wealth', 'work', 'zombies', 'the zoo', 'wild card' ];
let object = ['advertisement', 'artwork', 'beverage', 'book', 'bottle', 'box', 'brochure', 'building', 'candy', 'clothing', 'corporation', 'device', 'document', 'event', 'festival', 'flag', 'game', 'gift', 'headline', 'implant', 'instrument', 'jewellery', 'kit', 'law', 'logo', 'lotion', 'machine', 'magazine cover', 'map', 'mask', 'monument', 'passport', 'pill', 'plant', 'postcard', 'poster', 'product', 'prosthetic', 'public service announcement', 'relic', 'ritual', 'show', 'slogan', 'snack', 'song', 'souvenir', 'statue', 'sticker', 'symbol', 't-shirt', 'tattoo', 'tool', 'toy', 'vehicle', 'video', 'weapon', 'wildcard'
] ;
let mood = ['admiration', 'alienation', 'amusement', 'anger', 'anxiety', 'awkwardeness', 'calm', 'charm', 'cheer', 'contentment', 'curiosity', 'decadence', 'delight', 'dignity', 'disgust', 'dread', 'embarrassment', 'excitement', 'exhilaration', 'fascination', 'fervor', 'frustration', 'gratitude', 'happiness', 'hilarity', 'hope', 'longing', 'malaise', 'melancholy', 'melodrama', 'nostalgia', 'optimism', 'outrage', 'pathos', 'pleasure', 'pride', 'rationality', 'relief', 'resentment', 'respect', 'sadness', 'satisfaction', 'serenity', 'shame', 'shock', 'sorrow', 'surprise', 'unease', 'warmth', 'weirdness', 'wellbeing', 'wonder', 'worry', 'zen']

 let labels = ['Arc', 'Terrain', 'Object', 'Mood' ]

let arcContent;
let a1;
let a2;
let terrainContent;
let t;
let objectContent;
let o;
let moodContent;
let m;

let xCoordinates;

let button1;
let button2;
let button3;

let guideA = 0;
let cardA = 100;
let flipA = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB, 360, 100, 100, 100);
  background(255);
  textFont('Roboto Mono');
  a1 = int(random(arc1.length));
  a2 = int(random(arc2.length));
  t = int(random(terrain.length));
  o = int(random(object.length));
  m = int(random(mood.length));
 xCoordinates = [width*.2, width*.4, width*.6, width*.8]
 cards();
  //instructions();
  //buttons

 button1 = createButton('guide');
 button1.position(width*.1, height*.85);
 button1.mousePressed(guide);
 button2 = createButton('shuffle');
 button2.position(width*.2, height*.85);
 button2.mousePressed(cards);
 button3 = createButton('show');
 button3.position(width*.3, height*.85);
 button3.mousePressed(flipCards);
//  button4 = createButton('shuffle');
//  button4.position(width*.55, height*.85);
//  button4.mousePressed(cards);

 
 


}

function draw() {
  // put drawing code here
 textSize(60);
 textAlign(CENTER);
 textFont('Roboto Mono');
fill(51, 255, 0);
 text('That Thing From the Future', width*.5, height*.1);
}

function instructions(){
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(60);
  text('Instructions', width/2, height*.1);
  textSize(40);
  text('The Thing From The Future is an imagination game for 1-6 players. The object of the game is to use the cards to generate the most interesting, funny or thought-provoking ideas for artifacts from the future.', width/2, height*.17, width*.8);
  text('Each round, click to turn each of the 4 cards to generate a creative prompt. Players then write a short description (and sketch, if they wish!) of an object that fits the constraints of the prompt.', width/2, height*.35, width*.8);

}

function guide(){
  rectMode(CORNER);
  noStroke();
  fill(40, 40, 40);
  rect(0, 0, width, height)
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(60);
  fill(51,255,0);
  text('Guide', width/2, height*.2);

  rectMode(CORNER);
  textAlign(LEFT);
  textSize(80);
  text('A', width*.2, height*.3);
  text('T', width*.2, height*.52);
  text('O', width*.2, height*.62);
  text('M', width*.2, height*.72)


  //Arc
  fill(51,255,0);
    textSize(30)
  text('ARC outlines the type of future world that the “thing” comes from, and how far away it is from today. There are four types of Arc:', width*.27, height*.26, width*.5);
  textSize(25);
  text('Growth - a future in which “progress” has continued', width*.32, height*.34)
  text('Collapse - a future in which society as we know it has come apart', width*.32, height*.37);
  text('Discipline - a future in which order is deliberately coordinated or imposed', width*.32, height*.4);
  text('Transformation – a future in which a profound historical evolution has occurred', width*.32, height*.43);

  //Terrain
  textSize(30)
  text('TERRAIN is the thematic context or location where this object could be found in that future.', width*.27, height*.49, width*.5)

  //Object
  text('OBJECT is the focus for your imagination: a specific cultural artifact that reveals something about how this future is different from today.', width*.27, height*.58, width*.5)

  //Mood
  text('MOOD suggests how it might feel to experience this thing from the future.', width*.27, height*.69, width*.5);
}

function cards(){
  background(40, 40, 40);
  a1 = int(random(arc1.length));
  a2 = int(random(arc2.length));
  t = int(random(terrain.length));
  o = int(random(object.length));
  m = int(random(mood.length));
  rectMode(CENTER);
  textSize(60);
  textAlign(CENTER);
  
 


  for (let i = 0; i < 4; i++){
    stroke(51,255,0);
    fill(40, 40, 40);
    rect(xCoordinates[i], height*.5, 500, 800, 50);
    fill(51, 255, 0);
    text(labels[i], xCoordinates[i], height*.5)
  }
}
function flipCards(){
  background(40, 40, 40);
  textAlign(CENTER);
   rectMode(CENTER);

  textAlign(CENTER);
  let content = [arc1[a1], terrain[t], object[o], mood[m]];
  let col = 50
   for (let i = 0; i < 4; i++){

    fill(51, 255, 0);
    rect(xCoordinates[i], height*.5, 500, 800, 50);
    fill(40, 40, 40);
    textSize(40);
    text(labels[i], xCoordinates[i], height*.35);
    textSize(55);
    text(content[i], xCoordinates[i], height*.5, 180);
    textSize(30);
    text(arc2[a2], xCoordinates[0], height*.55, 180);
  }
}

function shuffle(){  
  background(255);
  cards();
  
}




