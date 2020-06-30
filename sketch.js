var mball;
var database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    mball = createSprite(250,250,10,10);
    mball.shapeColor = "green";
var mballposition=database.ref("ball/position");
mballposition.on("value" , readposition , showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(X,Y){
   database.ref("ball/position").set({
       X:position.X+X,
       Y:position.Y+Y
   })
}
function readposition(data){
    position=data.val();
 //   console.log(position);
    mball.x=position.x;
mball.y=position.y;
}
function showerror(){
    console.log("error in writing database");
}
