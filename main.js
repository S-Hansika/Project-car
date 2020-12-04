canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car_2_width= 170;
car_2_height=110;
car_2_img= "car3.png"
car_2_x= 250;
car_2_y= 480;

car_1_width=60;
car_1_height=110;
car_1_img= "car4.png"
car_1_x= 100;
car_1_y= 480;

background_img=  "racing.jpg";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_img;

    car_2_imgTag= new Image();
    car_2_imgTag.onload= uploadcar_2;
    car_2_imgTag.src= car_2_img;

    car_1_imgTag= new Image();
    car_1_imgTag.onload= uploadcar_1;
    car_1_imgTag.src= car_1_img;
}
 function uploadBackground(){
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }
 function uploadcar_2(){
     ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
 }
 function uploadcar_1(){
     ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
 }
  
 window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        car_2_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40'){
        car_2_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37'){
        car_2_left();
        console.log("left arrow key");
    }
    if(keyPressed == '39'){
        car_2_right();
        console.log("right arrow key");
    }
    if(keyPressed== '87'){
        car_1_up();
        console.log("key w");
    }
    if(keyPressed == '83'){
        car_1_down();
        console.log("key s");
    }
    if(keyPressed == '65'){
        car_1_left();
        console.log("key a");
    }
    if(keyPressed == "68"){
        car_1_right();
        console.log("key d");
    }
    if (car_2_y <= 10){
        console.log("car 2 won");
        document.getElementById("game_status").innerHTML="car 2 won !!!!";
    }
    if (car_1_y <= 10){
        console.log("car 1 won");
        document.getElementById("game_status").innerHTML="car 1 won !!!!";
    }
}

function car_2_up(){
    if(car_2_y >= 10){
        car_2_y -= 10;
        console.log("When up arrow key is pressed, x="+car_2_x+"and y="+car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}
function car_2_down(){
    if(car_2_y <= 480){
        car_2_y += 10;
        console.log("When down arrow key is pressed, x="+car_2_x+"and y="+car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}
function car_2_left(){
    if(car_2_x >= -40){
        car_2_x -= 10;
        console.log("When left arrow key is pressed, x="+car_2_x+"and y="+car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}
function car_2_right(){
    if(car_2_x <= 380){
        car_2_x += 10;
        console.log("When right arrow key is pressed, x="+car_2_x+"and y="+car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}

function car_1_up(){
    if(car_1_y >= 10){
        car_1_y -= 10;
        console.log("When W arrow key is pressed, x="+car_1_x+"and y="+car_1_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}
function car_1_down(){
    if(car_1_y <= 480){
        car_1_y += 10;
        console.log("When S arrow key is pressed, x="+car_1_x+"and y="+car_1_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}
function car_1_left(){
    if(car_1_x >= 10){
        car_1_x -= 10;
        console.log("When A arrow key is pressed, x="+car_1_x+"and y="+car_1_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}
function car_1_right(){
    if(car_1_x <= 420){
        car_1_x += 10;
        console.log("When D arrow key is pressed, x="+car_1_x+"and y="+car_1_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();
    }
}