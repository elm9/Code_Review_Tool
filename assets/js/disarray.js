// ----------------------------------------------------------------------------------------------------
// (i) store the q+a arrays 
// ----------------------------------------------------------------------------------------------------
// ---------(Landing page)

//Grab the json file data into array
var moduleJson = [];


// ---------(notLanding page)

//array for review again card data
var reviewArr = [];

//array for  i understand card data
var understandArr = [];

//use count for next/previous flashcard function
var count = 0;

var moduleApi = "./assets/data/module-api.json";

// ----------------------------------------------------------------------------------------------------
// (ii) initializing functions
// ----------------------------------------------------------------------------------------------------

//getJSON
//put if statements here to get correct module (html, css, etc) to get correct json module file
//for now only API

// $.getJSON(moduleApi, function (json) { //change direct link to json file w variable. to change what it gets on category button click
//   moduleJson = json.cards;
//   console.log(moduleJson);
//   //display initial question
//   $('div.question').html("Question: " + moduleJson[count].question);
//   //testing function for now
//   getModule();
// });


// getModule function for now, for testing
function getModule() {
  for (var i = 0; i < moduleJson.length; i++) {
    console.log(i, "-", moduleJson[i].id);
    console.log(i, "-", moduleJson[i].question);
    console.log(i, "-", moduleJson[i].answer);
  }
}

//function to toggle between question/answer on click
function cardToggle() {
  //question div is hidden bc right now placeholder start text is in html .answer div, on click goes  shows .question div first
  $('div.answer').hide();
  //on click to toggle q & a divs
  $('div.question, div.answer').on('click', function () {
    //output html to card
    $("div.question").html("Question: " + moduleJson[count].question);
    $("div.answer").html("Answer: " + moduleJson[count].answer);
    console.log(moduleJson[count].answer);
    console.log(moduleJson[count].question);
    //toggle between question and answer div
    //$.toggle does the business
    $('div.answer, div.question').toggle()
  });
}

// ----------------------------------------------------------------------------------------------------
// (iii) other functions
// ----------------------------------------------------------------------------------------------------

//***this function switches the overall view between the two main containers
function changeState() {
  var x = document.getElementById('Landing');
  var y = document.getElementById('notLanding');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none';
  } else {
    x.style.display = 'none';
    y.style.display = 'block';
  }
}

//on click toggle between question and answer state

cardToggle();


// ----------------------------------------------------------------------------------------------------
// (iv) button clicks filled with the correct functions
// ----------------------------------------------------------------------------------------------------
//          (A) Landing page
// when user clicks on a category button:
// fill Q+A array with Review Again[category that was clicked] array
// display Q[0] in the Q+A box on notLanding page
// change state to notLanding page
// when user clicks on a category I Understand This button:
// fill Q+A array with I Understand This[category that was clicked] array
// display Q[0] in the Q+A box on notLanding page
// change state to notLanding page
//          (B) notLanding page
// when user clicks on the Q+A box:
// switch between Q[i] and A[i]
// when user clicks on Review Again:
// adjust Q+A display by i++ to display the next Q
// if there are no more Questions left in the array: display an alert and go back to the Landing Page
// when user clicks on I Understand This:
// take Q[i] and A[i] out of Review Again array and append to I Understand This array
// adjust Q+A display by i++ to display the next Q
// if there are no more Questions left in the array: display an alert and go back to the Landing Page


$("#Landing :Button").on("click", function () {
  // alert(this.id + "was just clicked!")

  var module = this.id;
  console.log(module);
  var getthatmodule = ("/assets/data/" + module + ".json");
  console.log(getthatmodule);

  $.getJSON(getthatmodule, function (json) {
    moduleJson = json.cards;
    console.log(moduleJson);
    //display initial question
    $('div.question').html("Question: " + moduleJson[count].question);
    //testing function for now
    getModule();
  });
  changeState();
});




//review and understand button/div functionality -- need to put in functions and clean up?
$("#reviewContain").on("click", "#review, #understand", function (event) {

  event.stopPropagation();
  // console.log(moduleJson[count]);
  // console.log("json array length " + moduleJson.length);
  $('div.answer').hide();
  $('div.question').show();
  var id = $(this).attr('id');
  console.log("target id = " + id);

  if (id === "review") {
    reviewArr.push(moduleJson[count]);
    console.log(reviewArr);
  }
  else if (id === "understand") {
    understandArr.push(moduleJson[count]);
    console.log(understandArr);

    //takes current array index out of the main moduleJson array
    moduleJson.splice(count, 1);
    console.log(moduleJson);

    if (moduleJson.length == 0) {
      $("#cardContain").html("Display categories here!");

      alert("You've completed this category!");
    }
  }
  // console.log(count);
  count++;

  if (moduleJson.length > count) {

    $("div.question, div.answer").empty();
    $("div.question").html("Question: " + moduleJson[count].question);
    $("div.answer").html("Answer: " + moduleJson[count].answer);

    console.log("count after: " + count);
  } else if (moduleJson.length <= count) {
    count = 0;
    $("div.question").html("Question: " + moduleJson[count].question);
    $("div.answer").html("Answer: " + moduleJson[count].answer);
  }
});







