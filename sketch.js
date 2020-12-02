 var fixedrectangle,movingrectangle
 function setup() {
  createCanvas(800,600);

  fixedrectangle=createSprite(500,500,50,50)
fixedrectangle.shapeColor=("red")


movingrectangle=createSprite(60,60,60,60)
movingrectangle.shapeColor=("darkblue")
}

 function draw() {
  background("pink"); 
  console.log(movingrectangle.x-fixedrectangle.x) 
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY
  
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
    &&fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2
    &&movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2
    &&fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2){
fixedrectangle.shapeColor=("yellow")
movingrectangle.shapeColor=("green")
  }
  else{
fixedrectangle.shapeColor=("red")
movingrectangle.shapeColor=("blue")

  }
  drawSprites();

}