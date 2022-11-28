var patitoImg;
var perritoImg;
var fondo;

var piso;



function preload(){

 patitoImg = loadAnimation ("patito 1.png","patito 2.png","patito 3.png");
 fondoImg=loadImage("fondo.png");
  
perritoImg = loadAnimation("chihuahua_1.png","chihuahua_2.png");

 baldeImg=loadImage("balde.png");
 chanclasImg=loadImage("chanclas.png");

 volacionImg = loadAnimation("pato_volando.png");
 
 garrasImg =loadImage("garras.png");

}

function setup() {
  createCanvas(800,500);

fondo = createSprite (90,260);
patito = createSprite (400,446,19,19);
perrito =createSprite(730,431,60,60);


piso = createSprite (450,500,200,20);

piso.visible =false;



fondo.addImage(fondoImg);
patito.addAnimation("imagenPatito",patitoImg);
patito.addAnimation("imagenvolacion",volacionImg);
perrito.addAnimation("imagenperro",perritoImg);

/*patito.scale= 0.20;
*/
perrito.scale=1.6;

fondo.velocityX=4;

}

function draw() 
{
  background(30);

if(fondo.x>2500){
fondo.x=fondo.x/2;
}

if(keyDown("space")&& patito.y>=362){
  patito.velocityY= -12;
 patito.changeAnimation("imagenvolacion",volacionImg);
  
}
patito.velocityY=patito.velocityY+0.8;

patito.collide(piso);

console.log(patito.y)

if(keyWentUp("space")){
patito.changeAnimation("imagenPatito",patitoImg);
}

obstacles ();


  drawSprites();
}


//condicion , framecount , sprite viisible , velocidad en X







function obstacles (){
 
  if(frameCount%60==0){
  
  
  var juan = createSprite (10,400,40,10);
  
  juan.velocityX= 6;
  
  var mugrero = Math.round(random(1,3));
  
  switch(mugrero){
    case 1:juan.addImage(baldeImg);
    juan.scale=0.3;
    break;
    case 2:juan.addImage(chanclasImg);
    juan.scale=1.5;
    break;
  }
  
  
  juan.y=Math.round(random(420,490));
  }
  
  }


