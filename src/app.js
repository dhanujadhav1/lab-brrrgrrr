// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;


//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  let patty1 = document.getElementById("items1");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
    patty1.style.display = "inherit";

  } else {
    $patty.style.display = "none";
    patty1.style.display = "none";


  }
}

function renderCheese() {
  let cheeseid = document.querySelector("#cheese");
  let patty1 = document.getElementById("items2");


  if (state.Cheese) {
    cheeseid.style.display = "inherit";
    patty1.style.display = "inherit";

  }
  else {
    cheeseid.style.display = "none";
    patty1.style.display = "none";
  }
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
}

function renderTomatoes() {
  let tomatoid = document.querySelector("#tomato");
  let patty1 = document.getElementById("items3");
  if (state.Tomatoes) {
    tomatoid.style.display = "inherit";
    patty1.style.display = "inherit";

  }
  else {
    tomatoid.style.display = "none";
    patty1.style.display = "none";
  }
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  let onionid = document.getElementById("onion");
  let patty1 = document.getElementById("items4");
  if (state.Onions) {
    onionid.style.display = "inherit";
    patty1.style.display = "inherit";

  }
  else {
    onionid.style.display = "none";
    patty1.style.display = "none";
  }
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  let lettuceid = document.getElementById("lettuce");
  let patty1 = document.getElementById("items5");

  if (state.Lettuce) {
    lettuceid.style.display = "inherit";
    patty1.style.display = "inherit";

  }
  else {
    lettuceid.style.display = "none";
    patty1.style.display = "none";
  }
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};



// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  var totalamount = 0;
  if (state.Patty)
    totalamount = totalamount + ingredients.Patty;
  else if (state.Tomatoes)
    totalamount = totalamount + ingredients.Tomatoes;
  else if (state.Cheese)
    totalamount = totalamount + ingredients.Cheese;
  else if (state.Onions)
    totalamount = totalamount + ingredients.Onions;
  else if (state.Lettuce)
    totalamount = totalamount + ingredients.Lettuce;
  console.log("hello");

}