var canvas, backgroundImage;

var database;

var form,player;




function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
 form=new Form();

}


function draw(){
form.display();
}

