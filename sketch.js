function setup(){
  createCanvas(windowWidth,windowHeight)
}
function draw() {
  
}

function touchStarted(){
  getTouchInfo();
  text("X:" + touch.clientX,windowWidth/2,windowHeight/2)
}