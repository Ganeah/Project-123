noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,151);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}



function modelLoaded(){
    console.log("Pose net is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX +"Nose y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left wrist x coordinates = " + leftWristX + "Right wrist x coordinates = " + rightWristX);
    }
}

function draw(){
    background('red');
    document.getElementById("name_side").innerHTML = "Height and width of the name is =" + difference+"px";
    textSize(difference);
    text('Ganesh',noseX,noseY);
    fill('#FFE787');    
}