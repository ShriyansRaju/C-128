song=""
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0

function preload(){
    song=loadSound("music.mp3")
}

function setup(){
canvas= createCanvas(625,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()

poseNet= ml5.poseNet(video, modelLoaded)

poseNet.on('pose', gotPoses)
}

function draw(){
    image(video,0,0,625,400)
}

function play(){
    song.play()
    song.setVolume(0.7)
    song.rate(3)
}

function mute(){
    song.setVolume(0)
}

function modelLoaded(){
    console.log("The Model is Loaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        console.log("Left wrist= "+leftWristX, leftWristY)
        rightWrist=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        console.log("Right wrist= "+rightWristX, rightWristY)

    }
}