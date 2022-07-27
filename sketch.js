var reloadNowButton;

var time = 6;

const redirection = "https://viniciustdaik.github.io/Canguru-Na-Selva";

function setup(){
  createCanvas(windowWidth, windowHeight);

  reloadNowButton = createButton("Redirecionar Agora");
  reloadNowButton.position(width/2-65, height/2+50);
  reloadNowButton.class("Button");
  reloadNowButton.size(130, 90);
  reloadNowButton.mousePressed(reload);

  setTimeout(() => {
    //console.log("Redirecionando!");
    //location.reload("https://viniciustdaik.github.io/Canguru-Na-Selva/");
    reload();
  }, 5000);//5 Segundos
  
  
}

function draw(){
  background("orange");

  
  textAlign("center");
  fill("cyan");
  stroke("yellow");
  //textSize(45);
  //text("O link deste Jogo mudou, Você Será Redirecionado Ao Jogo Em", width/2, height/2-100);
  textSize(65);
  text("O link Deste Jogo Mudou", width/2, height/2-200);
  text("Você Será Redirecionado Ao Jogo", width/2, height/2-150);
  text("Em", width/2, height/2-100)
  textSize(105);
  if(time > 0){
    time = time - 0.038;
  }
  if(time <= 6 && time >= 5){
    text("5", width/2, height/2);
  }
  if(time <= 5 && time >= 4){
    text("4", width/2, height/2);
  }
  if(time <= 4 && time >= 3){
    text("3", width/2, height/2);
  }
  if(time <= 3 && time >= 2){
    text("2", width/2, height/2);
  }
  if(time <= 2 && time >= 1){
    text("1", width/2, height/2);
  }
  if(time <= 1 && time >= 0){
    text("Redirecionando!", width/2, height/2);
  }
}

function reload(){
  console.log("Redirecionando!");
  location.replace(redirection);
}