var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50;
var Ghost1Img,Ghost2Img,Ghost3Img,PacmanImg; 
var Ghost1,Ghost2,Ghost3,Pacman;
var coinGroup; 


function preload(){
  Ghost1Img=loadImage("Images/Ghost1.png")
  Ghost2Img=loadImage("Images/Ghost2.png")
  Ghost3Img=loadImage("Images/Ghost3.png")
  PacmanImg=loadImage("Images/Pacman.png ")
}



function setup() {
  createCanvas(500,600);
  var maze=createGroup();

  maze.add(createSprite(40,90,8,150));
  maze.add(createSprite(247,20,420,10));
  maze.add(createSprite(453,90,8,150));
  maze.add(createSprite(246,60,8,75));
  maze.add(createSprite(86,170,100,10));
  maze.add(createSprite(131,215,10,80));
  maze.add(createSprite(86,260,100,10));
  maze.add(createSprite(407,170,100,10));
  maze.add(createSprite(357,210,10,90));
  maze.add(createSprite(402,260,100,10));
  maze.add(createSprite(86,303,100,10));
  maze.add(createSprite(134,343,10,90));
  maze.add(createSprite(86.5,388,105,10));
  maze.add(createSprite(38,468,8,170));
  maze.add(createSprite(241.5,555,415,10));
  maze.add(createSprite(450,479,8,163));
  maze.add(createSprite(401.5,397,105,10));
  maze.add(createSprite(350,357,10,90));
  maze.add(createSprite(400,314,110,10));
  maze.add(createSprite(164,201,8,130));
  maze.add(createSprite(190,200,50,10));
  maze.add(createSprite(323,201,8,130));
  maze.add(createSprite(297,201,50,10));
  maze.add(createSprite(244,183,8,45));
  maze.add(createSprite(320,355,10,95));
  maze.add(createSprite(164,348,10,95));
  
  maze.add(createSprite(128,426,45,8));
  
  maze.add(createSprite(147,445.5,8,45));
  
  maze.add(createSprite(57,472,45,8));
  
  maze.add(createSprite(75.8 ,483,8,25));
  
  maze.add(createSprite(57,495,45,8));
  
  maze.add(createSprite(190,491,8,50));
  
  maze.add(createSprite(160,520,110,10));
  
  maze.add(createSprite(198,425,35,8));
  
  maze.add(createSprite(301,425,35,8));
 
  maze.add(createSprite(387,425,45,8));
  
  maze.add(createSprite(366.5,444,8,45));
  
  maze.add(createSprite(425,480,45,8));
 
  maze.add(createSprite(406 ,489,8,25));
 
  maze.add(createSprite(426,498,45,8));
 
  maze.add(createSprite(330,491,8,50));
  
  maze.add(createSprite(345,520,110,10));
  
maze.add(createSprite(254,502,8,45));
  
 
  maze.add(createSprite(100,60,60,25));

  maze.add(createSprite(190,60,60,25));
 
  maze.add(createSprite(350,110,100,20));
  
  maze.add(createSprite(320,60,60,25));

  maze.add(createSprite(140,110,100,20));
  
  maze.add(createSprite(245,250,100,20));
 
  maze.add(createSprite(245,370,100,20));

  maze.setColorEach(rgb(72,146,255));

  
  Ghost1=createSprite(183,315,20,20)
  Ghost1.addImage(Ghost1Img);
  Ghost2=createSprite(215,315,20,20)
  Ghost2.addImage(Ghost2Img);
  Ghost3=createSprite(247,315,20,20)
  Ghost3.addImage(Ghost3Img);
  Pacman=createSprite(410,58,20,20)
  Pacman.addImage(PacmanImg);
  
  coinGroup=createGroup();
  centre=createSprite(236,290,72,35)
  centre.shapeColor="black";
  for(var i=50;i<=445;i+=25){
    for(var j=33;j<=565;j+=20){
      var coin=createSprite(i,j,5,5);
      coin.shapeColor="yellow";
      if(coin.overlap(centre)|| coin.overlap(maze)){
      coin.visible=false;
    }
    else{coinGroup.add(coin)}
  }
  }

   }


function draw() {
  background("black");  
  drawSprites();
   text(mouseX + " " + mouseY,233,347);
 
  pacMovement();

}

   
function pacMovement(){
  if(keyDown("up")){
    Pacman.y-=3;
    Pacman.rotation=-90;
  }

  
  if(keyDown("down")){
    Pacman.y+=3;
    Pacman.rotation=90;
  }

    
  if(keyDown("left")){
    Pacman.x-=3;
    Pacman.rotation=180;
  }
    
  if(keyDown("right")){
    Pacman.x+=3;
    Pacman.rotation=0;
  }
}