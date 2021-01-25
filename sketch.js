var bg_Img,bg;
var box_Img,box;
var bwish_Img;
var click_Img,click;
var kid_Img,kid;
var teacher,tImg;
function preload(){
 bg_Img=loadImage("background.jpg") ;
  
 box_Img=loadImage("giftBox.png") ;
  bwish_Img=loadImage("B1.png");
  click_Img=loadImage("click.png");
  kid_Img=loadImage("Chirag.png");
  tImg=loadImage("Teacher.png");
}

function setup() {
  createCanvas(500, 400);
  
  bg=createSprite(200,200,window.width,window.height);
  bg.addImage("bg1",bg_Img);
  bg.scale=1;
  
  box=createSprite(210,270,20,20);
  box.addImage("giftBox",box_Img);
  
  box.scale=0.3;
  
  kid=createSprite(230,150,20,20);
  kid.addImage("kid",kid_Img);
  kid.scale=0.7;
  
  click=createSprite(270,190,20,20);
  click.addImage("click",click_Img);
  
  click.visible=true;
  click.scale=0.25;
  
  wish=createSprite(200,200,20,20);
  wish.addImage("bwish",bwish_Img);
  wish.visible=false;
  
  teacher=createSprite(370,215,20,20);
  teacher.addImage("teacher",tImg);
  teacher.scale=0.5;
  teacher.visible=false;
}

function draw() {
  background("blue");
  
  drawSprites();
  textSize(30);
  fill("pink");
  stroke("black");
  strokeWeight(4);
  //text("Hi Chirag!",150,110);
  textSize(20);
 // text("Click on Box",170,290);
  
  if(mousePressedOver(box)){
    click.visible=false;
    
    kid.visible=false;
    box.visible=false;
    wish.visible=true;
    teacher.visible=true;
    
     }

}