left_Wrist_x=0;
right_Wrist_x=0;
difference=0;
function setup(){
    canvas=createCanvas(700,500);
    canvas.position(400,150);

    video=createCapture(VIDEO);
    video.size(500,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model is Initialized!');
}
function draw(){
    background('#42f5dd');
    document.getElementById("font-size").innerHTML="Font Size of the Text will be = "+difference+"px";
    fill("blue");
    textSize(difference);
    text('Baidantika',50,400);
}
function gotPoses(results,error){
    if(error){
        console.error(error);
    }
  if(results.length>0){
    console.log(results); 
    right_Wrist_x=results[0].pose.rightWrist.x;
    left_Wrist_x=results[0].pose.leftWrist.x;

    difference=floor(left_Wrist_x-right_Wrist_x);
console.log("rightwrist_x="+results[0].pose.rightWrist.x+" rightwrist_y="+results[0].pose.rightWrist.y);
console.log("leftwrist_x="+results[0].pose.leftWrist.x+"  leftwrist_y="+results[0].pose.leftWrist.y);
}}