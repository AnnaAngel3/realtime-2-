function preload(){

}

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotResult);
}

function gotResult(result){
   if(result.length>0){
       console.log(result)
   }
}

function modelLoaded(){
    console.log("modelLoaded");
}


function draw(){
background("#84c3d1")
}