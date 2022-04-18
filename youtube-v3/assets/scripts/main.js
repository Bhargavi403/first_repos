// Attaching Events 

// DOM Querying API 
document.getElementById("clickMeBtn").addEventListener("click", handleClickMe);

function handleClickMe(){
  console.log('Clicked');

  // detaching event
  document.getElementById("clickMeBtn").removeEventListener("click", handleClickMe);
} 

// Event Bubbling and Cancelling 
document.getElementById("sendBtn").addEventListener("click", handleSend );

function handleSend(event){// event object
  event.stopPropagation(); // cancelling the event bubbling
  console.log('Sending...');
}

document.getElementById("div1").addEventListener("click", handleDivClick );

function handleDivClick(){
  console.log('Div clicked...');
}

// document.body.addEventListener("click", function(){
//   console.log('Body Clicked');
// } );

// TODO: learn about event capturing. and the difference b/w event bubbling


document.getElementById('transferBtn').addEventListener('click', function(event){ // receiving event object
  console.log('transferring...');

  // 1. find the element in which the event click occured
  console.log(event.target);
  
  // 2. change the inner text 
  event.target.innerText = 'Transferring Money...';
  // TODO: disable the button on click
  event.target.disabled = true;
});

document.getElementById("colorizeBtn").addEventListener('click', function(event){
  // find the element 
  let el = document.getElementById("randomTextWrapper");
  el.style.backgroundColor = 'red';
  el.style.color = 'white';
  el.style.fontSize = '26px';
  // TODO: work on setting up border

});


// access user's location using geolocation api
function handleLocateMe(){
  navigator.geolocation.getCurrentPosition( showLocation, denyLocation);
}
// when location access is allowed
function showLocation(position){
  console.log(position);
  document.getElementById("latitude").innerText = "Latitude: " + position.coords.latitude;
  document.getElementById("longitude").innerText = "Longitude: " + position.coords.longitude;
}

// when location access is denied
function denyLocation(){
  document.getElementById("locationError").innerText = "Unable to access location";
}