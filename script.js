let coordinateSX;
let coordinateSY; 
let coordinateNX; 
let coordinateNY; 


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
var mapWidth = 500;

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
*/
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
  
let map = document.getElementById("map");


//Set width, height, and color of the map background
var mapHeight = 500;
var mapWidth = 500;

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
*/
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


setInterval(updateCoordinatesAndRedraw, 60000);