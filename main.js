noseX = 0;
noseY=0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialised!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
        
       leftWristX = reults[0].pose.leftwrist.x; 
       rightWristX = reults[0].pose.rightwrist.x; 
       difference = floor(leftWrist - rightWrist);

       console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "width and height of a square will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square('#F90093');
    square(noseX, noseY, difference);
}