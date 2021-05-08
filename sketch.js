//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;

function preload()
{
	//load images here
  dog = loadImage("image/dogImg1.png");
  happyDog = loadImage("image/dogImg.png");
}

function setup() {
	createCanvas(800,700);
  foodStock=database.ref('food');
  foodStock.on("value",readstock);
}


function draw() {
  backgroung(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  fill("black");
  stroke(10);
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",600,600);
  textSize(20,20);


}

function readStock(data)
{
  foodS.val();
}

function writeStock(x)
{
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}


