function setup(){
    Can = createCanvas(500 , 425)
    Can.position(750 , 125)
    Vid = createCapture(VIDEO)
    Vid.position(30 , 150)
    myModel = ml5.poseNet(Vid , modelLoaded)
    myModel.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("myModel is loaded")
}
noseX = 0
noseY = 0
LWX = 0
RWX = 0
difference = 0

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        LWX = results[0].pose.leftWrist.x
        RWX = results[0].pose.rightWrist.x
        difference = floor(LWX-RWX)
        console.log("Size fo the text: ", difference)
        console.log("X position of my nose is: ", noseX)
        console.log("Y position of my nose is:", noseY)
        console.log("X position of my left wrist is:", LWX)
        console.log("X position of my right wrist is: ", RWX)
    }
}

function draw(){
    background("blue")
    stroke("white")
    text("Hello", noseX, noseY)
    textSize(difference)
}

