canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover1_width=100;
rover1_height=100;
background_image="backround.jpg";
rover1_image="car1.jpg";
rover1_x=10;
rover1_y=10;
function add(){
    background_image1=new Image();
    background_image1.onload=uploadbackground;
    background_image1.src=background_image;
    background_image2=new Image();
    background_image2.onload=uploadrover1;
    background_image2.src=rover1_image;

}
function uploadbackground(){
    ctx.drawImage(background_image1,0,0,canvas.width,canvas.height);
}



canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
background_image="backround.jpg";
rover_image="car2.jpg";
rover2_x=11;
rover2_y=11;
function add(){
    background_image1=new Image();
    background_image1.onload=uploadbackground;
    background_image1.src=background_image;
    background_image2=new Image();
    background_image2.onload=uploadrover2;
    background_image2.src=rover2_image;

}
function uploadbackground(){
    ctx.drawImage(background_image1,0,0,canvas.width,canvas.height);
}



function car1_up(){
    if(rover1_y >=0){
        rover1_y=rover1_y-10;
        console.log("When up arrow is pressed, x = " + rover1_x +" | y = " + rover1_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

function car1_down(){
    if(rover1_y >=500){
        rover1_y=rover1_y+10;
        console.log("When up down is pressed, x = " + rover1_x +" | y = " + rover1_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

function car1_left(){
    if(rover1_x >=0){
        rover1_x=rover1_x-10;
        console.log("When up LEFT is pressed, x = " + rover1_x +" | y = " + rover1_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

function car1_right(){
    if(rover1_x <=500){
        rover1_x=rover1_x+10;
        console.log("When up RIGHT is pressed, x = " + rover1_x +" | y = " + rover1_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}




function car2_up(){
    if(rover2_y >=0){
        rover2_y=rover2_y-10;
        console.log("When up arrow is pressed, x = " + rover2_x +" | y = " + rover2_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

function car2_down(){
    if(rover2_y >=500){
        rover2_y=rover2_y+10;
        console.log("When up down is pressed, x = " + rover2_x +" | y = " + rover2_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

function car2_left(){
    if(rover2_x >=0){
        rover2_x=rover2_x-10;
        console.log("When up LEFT is pressed, x = " + rover2_x +" | y = " + rover2_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

function car2_right(){
    if(rover2_x <=500){
        rover2_x=rover2_x+10;
        console.log("When up RIGHT is pressed, x = " + rover2_x +" | y = " + rover2_y);
        uploadbackground();
        uploadrover1();
        uploadrover2();
    }
}

if(rover1_x > 700){
    console.log("HOLDEN TIME ATTACK CONCEPT HAS WON!!");
document.getElementById("game_status").innerHTML = "HOLDEN TIME ATTACK CONCEPT HAS WON THE Repco Supercars Championship TOURNAMENT!!"
}

if(rover2_x > 700){
    console.log("ROBOCAR HAS WON!!");
document.getElementById("game_status").innerHTML = "HOLDEN TIME ATTACK CONCEPT HAS WON THE Repco Supercars Championship TOURNAMENT!!"
}
