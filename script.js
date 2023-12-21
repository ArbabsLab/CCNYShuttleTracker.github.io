



/*
function updateCoordinatesAndRedraw() {
  fetch('coordinates.json')
    .then(response => response.json())
    .then(data => {
      // Update coordinates
      coordinateSX = data[0].x;
      coordinateSY = data[0].y;
      coordinateNX = data[1].x;
      coordinateNY = data[1].y;

      // Redraw the map based on the updated coordinates
      redrawMap();
    });
}

function redrawMap() {
 
let map = document.getElementById("map");

map.clearRect(0, 0, map.width, map.height);
//Set width, height, and color of the map background
var mapHeight = 500;
var mapWidth = 650;

map.width = mapWidth;
map.height = mapHeight;
map.style.background = "#fcf8ee";

//initialize nodes
let node = map.getContext("2d");
let node2 = map.getContext("2d");
let node3 = map.getContext("2d");
let node4 = map.getContext("2d");
let node5 = map.getContext("2d");
let node6 = map.getContext("2d");

var colorFill = "red";
var colorEmpty = "#89b1b5";
var NX = coordinateNX;
var NY = coordinateNY;
var SX = coordinateSX;
var SY = coordinateSY;

//node 1(Marshak)
/*node.beginPath();
node.strokeStyle = "#172e51";
if (x == 5) {
  node.fillStyle = colorFill;
}
else{
  node.fillStyle = colorEmpty;
}
node.lineWidth = 3;
node.arc(250, 300, 10, 0, Math.PI * 2, false);
node.stroke();
node.fill();
node.closePath();

//node 2(NAC)
node2.beginPath();
node2.strokeStyle = "#172e51";

node2.lineWidth = 3;
node2.arc(250, 200, 10, 0, Math.PI * 2, false);
node2.stroke();
if (SX > 40.81700 || NX < 40.8200) {
  node2.fillStyle = colorFill;
  node2.fill();
}
else{
  node2.fillStyle = colorEmpty;
  node2.fill();
}
node2.closePath();

//node 3(125)
node3.beginPath();
node3.strokeStyle = "#172e51";
node3.lineWidth = 3;
node3.arc(100, 350, 10, 0, Math.PI * 2, false);
node3.stroke();
if (SY > -73.95200) {
  node3.fillStyle = colorFill;
  node3.fill();
}
else{
  node3.fillStyle = colorEmpty;
  node3.fill();
}
node3.closePath();

//node 4(145)
node4.beginPath();
node4.strokeStyle = "#172e51";
node4.lineWidth = 3;
node4.arc(400, 350, 10, 0, Math.PI * 2, false);
node4.stroke();
if (NY > -73.95200) {
  node4.fillStyle = colorFill;
  node4.fill();
}
else{
  node4.fillStyle = colorEmpty;
  node4.fill();
}
node4.closePath();

//node 5(125N)
node5.beginPath();
node5.strokeStyle = "#172e51";
node5.lineWidth = 3;
node5.arc(100, 200, 10, 0, Math.PI * 2, false);
node5.stroke();
if (SX < 40.8170) {
  node5.fillStyle = colorFill;
  node5.fill();
}
else{
  node5.fillStyle = colorEmpty;
  node5.fill();
}
node5.closePath();

//node 6(145N)
node6.beginPath();
node6.strokeStyle = "#172e51";
node6.lineWidth = 3;
node6.arc(400, 200, 10, 0, Math.PI * 2, false);
node6.stroke();
if (NX > 40.8200) {
  node6.fillStyle = colorFill;
  node6.fill();
}
else{
  node6.fillStyle = colorEmpty;
  node6.fill();
}
node6.closePath();

// Lines connecting nodes
let connectNodes = map.getContext("2d");

connectNodes.beginPath();
connectNodes.strokeStyle = "#172e51";
connectNodes.lineWidth = 3;

// Connect node 5 to node 2
connectNodes.moveTo(240, 200);
connectNodes.lineTo(110, 200);

// Connect node 5 to node 3
connectNodes.moveTo(100, 340);
connectNodes.lineTo(100, 210);

// Connect node 2 to node 6
connectNodes.moveTo(260, 200);
connectNodes.lineTo(390, 200);

// Connect node 2 to node 3
connectNodes.moveTo(250, 210);
connectNodes.lineTo(110, 350);

// Connect node 6 to node 4
connectNodes.moveTo(400, 210);
connectNodes.lineTo(400, 340);

// Connect node 2 to node 4
connectNodes.moveTo(390, 350);
connectNodes.lineTo(250, 210);

connectNodes.stroke();
connectNodes.closePath();


}
*/


let map = document.getElementById("map");


//Set width, height, and color of the map background
var mapHeight = 600;
var mapWidth = 750;

map.width = mapWidth;
map.height = mapHeight;
map.style.background = "#f3f8ff";

//initialize nodes
let node = map.getContext("2d");
let node2 = map.getContext("2d");
let node3 = map.getContext("2d");
let node4 = map.getContext("2d");
let node5 = map.getContext("2d");
let node6 = map.getContext("2d");

var colorFill = "rgb(73, 16, 139)";
var colorEmpty = "rgb(73, 16, 139, 0.2)";

/*
let coordinateSX;
let coordinateSY; 
let coordinateNX; 
let coordinateNY;

let NX = coordinateNX;
let NY = coordinateNY;
let SX = coordinateSX;
let SY = coordinateSY;
*/
let context = map.getContext("2d");

function clearCanvas() {
    context.clearRect(0, 0, map.width, map.height);
}

let randomNumber = 0;
let randomNumber2 = 3;

// Get the element by its ID
let Stime = document.getElementById("Stime");
let Ntime = document.getElementById("Ntime");
let CStime = document.getElementById("CStime");
let CNtime = document.getElementById("CNtime");


function Draw(cnt, cnt2){

clearCanvas();

//node 1(Marshak)
node.beginPath();
node.strokeStyle = "#172e51";
node.lineWidth = 3;
node.arc(400, 300, 10, 0, Math.PI * 2, false);
node.stroke();
if (cnt == 0 || cnt2 == 0) {
  node.fillStyle = colorFill;
  node.fill();
  Stime.textContent = "7";
  Ntime.textContent = "7";
}
else{
  node.fillStyle = colorEmpty;
  node.fill();
}
node.closePath();

//node 2(NAC)
node2.beginPath();
node2.strokeStyle = "#172e51";

node2.lineWidth = 3;
node2.arc(400, 200, 10, 0, Math.PI * 2, false);
node2.stroke();
//SX > 40.81700 || NX < 40.8200
if (cnt == 3 || cnt2 == 3) {
  node2.fillStyle = colorFill;
  node2.fill();
  Stime.textContent = "7";
  Ntime.textContent = "7";
  CStime.textContent = "0";
  CNtime.textContent = "0";
}
else{
  node2.fillStyle = colorEmpty;
  node2.fill();
}
node2.closePath();

//node 3(145 corner)
node3.beginPath();
node3.strokeStyle = "#172e51";
node3.lineWidth = 3;
node3.arc(700, 300, 7.5, 0, Math.PI * 2, false);
node3.stroke();
//SY > -73.95200
if (cnt == 1 || cnt2 == 1) {
  node3.fillStyle = colorFill;
  node3.fill();
  Ntime.textContent = "2";
  CNtime.textContent = "9";
}
else{
  node3.fillStyle = colorEmpty;
  node3.fill();
}
node3.closePath();

//node 4(124 corner)
node4.beginPath();
node4.strokeStyle = "#172e51";
node4.lineWidth = 3;
node4.arc(50, 300, 7.5, 0, Math.PI * 2, false);
node4.stroke();
if (cnt == 4 || cnt2 == 4) {
  node4.fillStyle = colorFill;
  node4.fill();
  Stime.textContent = "3";
  CStime.textContent = "10";
}
else{
  node4.fillStyle = colorEmpty;
  node4.fill();
}
node4.closePath();

//node 5(125N)
node5.beginPath();
node5.strokeStyle = "#172e51";
node5.lineWidth = 3;
node5.arc(75, 500, 10, 0, Math.PI * 2, false);
node5.stroke();
if (cnt == 5 || cnt2 == 5) {
  node5.fillStyle = colorFill;
  node5.fill();
  Stime.textContent = "0";
  CStime.textContent = "7";
}
else{
  node5.fillStyle = colorEmpty;
  node5.fill();
}
node5.closePath();

//node 6(145N)
node6.beginPath();
node6.strokeStyle = "#172e51";
node6.lineWidth = 3;
node6.arc(650, 500, 10, 0, Math.PI * 2, false);
node6.stroke();
//NX > 40.8200
if (cnt == 2 || cnt2 == 2) {
  node6.fillStyle = colorFill;
  node6.fill();
  Ntime.textContent = "0";
  CNtime.textContent = "7";
}
else{
  node6.fillStyle = colorEmpty;
  node6.fill();
}
node6.closePath();

// Lines connecting nodes
let connectNodes = map.getContext("2d");

connectNodes.beginPath();
connectNodes.strokeStyle = "#172e51";
connectNodes.lineWidth = 3;


connectNodes.moveTo(400, 300);
connectNodes.lineTo(700, 300);


connectNodes.moveTo(500, 500);
connectNodes.lineTo(700, 500);


connectNodes.moveTo(50, 500);
connectNodes.lineTo(150, 500);


connectNodes.moveTo(50, 300);
connectNodes.lineTo(50, 500);


connectNodes.moveTo(400, 200);
connectNodes.lineTo(500, 200);


connectNodes.moveTo(400, 200);
connectNodes.lineTo(50, 300);

connectNodes.moveTo(500, 200);
connectNodes.lineTo(500, 500);

connectNodes.moveTo(150, 500);
connectNodes.lineTo(150, 400);

connectNodes.moveTo(150, 400);
connectNodes.lineTo(400, 300);

connectNodes.moveTo(700, 300);
connectNodes.lineTo(700, 500);

connectNodes.stroke();
connectNodes.closePath();

let text = map.getContext("2d");
text.fillStyle = "#49108B";
text.font = "30px Trebuchet MS";
text.fillText("SHUTTLE MAP", 325, 50);

let text2 = map.getContext("2d");
text.fillStyle = "red";
text.font = "30px Trebuchet MS";
text.fillText("LIVE", 262, 50);

let liveDot = map.getContext("2d");
liveDot.beginPath();
liveDot.strokeStyle = "#172e51";
liveDot.lineWidth = 3;
liveDot.arc(250, 40, 5, 0, Math.PI * 2, false);
liveDot.fillStyle = "red";
liveDot.stroke();
liveDot.fill();
liveDot.closePath();


let NACLabel = map.getContext("2d");
NACLabel.fillStyle = "#49108B";
NACLabel.font = "20px Trebuchet MS";
NACLabel.fillText("North Academic Center", 295, 175);

let MARLabel = map.getContext("2d");
MARLabel.fillStyle = "#49108B";
MARLabel.font = "20px Trebuchet MS";
MARLabel.fillText("Marshak", 355, 335);

let SouthLabel = map.getContext("2d");
SouthLabel.fillStyle = "#49108B";
SouthLabel.font = "20px Trebuchet MS";
SouthLabel.fillText("125th Station", 50, 535);

let SouthCornerLabel = map.getContext("2d");
SouthLabel.fillStyle = "#49108B";
SouthLabel.font = "15px Trebuchet MS";
SouthLabel.fillText("124th St Corner", 30, 270);

let NorthLabel = map.getContext("2d");
NorthLabel.fillStyle = "#49108B";
NorthLabel.font = "20px Trebuchet MS";
NorthLabel.fillText("145th Station", 600, 535);

let NorthCornerLabel = map.getContext("2d");
SouthLabel.fillStyle = "#49108B";
SouthLabel.font = "15px Trebuchet MS";
SouthLabel.fillText("145th St Corner", 625, 270);




}

setInterval(function(){
  Draw(randomNumber, randomNumber2);
  randomNumber = (randomNumber + 1) % 6;
  randomNumber2 = (randomNumber2 + 1) % 6;
}, 7000);




let text = map.getContext("2d");
text.fillStyle = "#49108B";
text.font = "30px Trebuchet MS";
text.fillText("SHUTTLE MAP", 325, 50);

let text2 = map.getContext("2d");
text.fillStyle = "red";
text.font = "30px Trebuchet MS";
text.fillText("LIVE", 262, 50);

let liveDot = map.getContext("2d");
liveDot.beginPath();
liveDot.strokeStyle = "#172e51";
liveDot.lineWidth = 3;
liveDot.arc(250, 40, 5, 0, Math.PI * 2, false);
liveDot.fillStyle = "red";
liveDot.stroke();
liveDot.fill();
liveDot.closePath();


let NACLabel = map.getContext("2d");
NACLabel.fillStyle = "#49108B";
NACLabel.font = "20px Trebuchet MS";
NACLabel.fillText("North Academic Center", 295, 175);

let MARLabel = map.getContext("2d");
MARLabel.fillStyle = "#49108B";
MARLabel.font = "20px Trebuchet MS";
MARLabel.fillText("Marshak", 355, 335);

let SouthLabel = map.getContext("2d");
SouthLabel.fillStyle = "#49108B";
SouthLabel.font = "20px Trebuchet MS";
SouthLabel.fillText("125th Station", 50, 535);

let SouthCornerLabel = map.getContext("2d");
SouthLabel.fillStyle = "#49108B";
SouthLabel.font = "15px Trebuchet MS";
SouthLabel.fillText("124th St Corner", 30, 270);

let NorthLabel = map.getContext("2d");
NorthLabel.fillStyle = "#49108B";
NorthLabel.font = "20px Trebuchet MS";
NorthLabel.fillText("145th Station", 600, 535);

let NorthCornerLabel = map.getContext("2d");
SouthLabel.fillStyle = "#49108B";
SouthLabel.font = "15px Trebuchet MS";
SouthLabel.fillText("145th St Corner", 625, 270);

node.beginPath();
node.strokeStyle = "#172e51";
node.lineWidth = 3;
node.arc(400, 300, 10, 0, Math.PI * 2, false);
node.stroke();
node.fillStyle = colorEmpty;
node.fill();
node.closePath();

node2.beginPath();
node2.strokeStyle = "#172e51";
node2.lineWidth = 3;
node2.arc(400, 200, 10, 0, Math.PI * 2, false);
node2.stroke();
node2.fillStyle = colorEmpty;
node2.fill();
node2.closePath();

node3.beginPath();
node3.strokeStyle = "#172e51";
node3.lineWidth = 3;
node3.arc(700, 300, 10, 0, Math.PI * 2, false);
node3.stroke();
node3.fillStyle = colorEmpty;
node3.fill();
node3.closePath();

node4.beginPath();
node4.strokeStyle = "#172e51";
node4.lineWidth = 3;
node4.arc(50, 300, 10, 0, Math.PI * 2, false);
node4.stroke();
node4.fillStyle = colorEmpty;
node4.fill();
node4.closePath();

node5.beginPath();
node5.strokeStyle = "#172e51";
node5.lineWidth = 3;
node5.arc(75, 500, 10, 0, Math.PI * 2, false);
node5.stroke();
node5.fillStyle = colorEmpty;
node5.fill();
node5.closePath();

node6.beginPath();
node6.strokeStyle = "#172e51";
node6.lineWidth = 3;
node6.arc(650, 500, 10, 0, Math.PI * 2, false);
node6.stroke();
node6.fillStyle = colorEmpty;
node6.fill();
node6.closePath();



/*

change coordinates to fill color of node
*/
/*setTimeout(function () { 
  location.reload();
}, 6000);
*/