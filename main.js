//**Main .js ka khel */
v1=""
status=""
objects=[]

function preload(){
v1=createVideo("video.mp4")


}
function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    v1.hide()
}


function start(){
    mymodel=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="started detecting"
}
 
function modelLoaded(){
    console.log("model has loaded")
    status=true
    v1.speed(1)
    v1.loop()
    v1.volume(0)
}

function gotResult(error,results){
    if(error){
            console.log(error)}
            else{
                console.log("no one to send to jesus"+results)
                objects=results
            }
}

function draw(){
    image (v1,0,0,500,500)
    if(status !=""){
        mymodel.detect(v1,gotResult)
        for(i=0;i<objects.length;i++){
            //**major work is abt to start */
            document.getElementById("status").innerHTML="DETECTED )IN ASIAN ACCETENT).............";
        document.getElementById("number").innerHTML="Number of objects: "+objects.length;
        ac=floor(objects[i].confidence*100)
        stroke ("red")
        text (objects[i].label+" "+ac+" %",objects[i].x+15,objects[i].y+15) 
        noFill()
        stroke ("white")
    rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height+15)    
    }
    }
    }