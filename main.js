function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";

}

function draw(){
    background("pink")
    image(video,70,70,500,400);
    fill("red");
    rect(30, 20, 550, 55);
    rect(550, 30, 55, 550);
    rect(30, 450, 550, 55);
    rect(50,20, 55, 550);
    fill("green")
    circle(75,50,100);
    circle(75,450,100);
    circle(575,50,100);
    circle(575,450,100);
    
    
    
    tint(tint_color);
    
}

function applyFilter(){
    tint_color=document.getElementById("color").value;
}

function take_snapshot(){
    save("photo.png");
}