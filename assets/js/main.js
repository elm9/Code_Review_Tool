//Code Review Tool.js
//
//Contributors: Nick, Emily, Emre, and Brandon
//
//
//import JSON file object! -google !
//
//Global Variables
//empty array to generate flash cards?
// var cardsArr = [];
// var questionsArr = [];
// var answersArr = [];

//put empty arrays here to store JSON data
//declare global vars needed
//reset some vars

//Functions needed

// function startModule () {
//   //initialize module on page-load and reset
// }
//
// function getJsonArray() { // change function title
//   //need a function for grabbing json data and putting into empty array? yes
// }
//
// function genCards () {
//   //generate flash cards from array, use $.map method
// }
//
// function showAnswer () {
//   //shows user Answer on click
// }

//Grab the json file data into array
var moduleJson = [];

//use count for next/previous flashcard function
var count = 0;


//getJSON
//put if statements here to get correct module (html, css, etc) to get correct json module file
//for now only API
$.getJSON("./assets/data/module-api.json", function(json) {
  moduleJson = json.cards;
  console.log(moduleJson);
  getModule();

});


//use this function to make next/previous question functionality?
//TODO: change function name! to reflect what it actually does
function getModule() {
  //use $.map instead of for loop ... will get there
  //how to use $.map to display first index, then add count oo
  // use if statement inside for loop? with var count = 0 (global), at end put count++, so if at index, go to next index
  // if statement
  // do something with count for NEXT function, use for loop to get next or prev index?

  for (var i = 0; i < moduleJson.length; i++) {
    console.log(i, "-", moduleJson[i].id);
    console.log(i, "-", moduleJson[i].question);
    console.log(i, "-", moduleJson[i].answer);
  }
}
//function to toggle between question/answer on click
function cardToggle() {
  //question div is hidden bc right now placeholder start text is in html .answer div, on click goes  shows .question div first

  $('div.question').hide();


//on click to toggle q & a divs
  $('div.question, div.answer').on('click', function() {
    //output html to card
    //need to assign count to something, right now default to 0 because of global var count
    $("div.question").html("Question: " + moduleJson[count].question);
    $("div.answer").html("Answer: " + moduleJson[count].answer);
    console.log(moduleJson[count].answer);
    console.log(moduleJson[count].question);

    //increase count on click
     //count++;

    //toggle between question and answer div
      $('div.answer, div.question').toggle()
    }
  );
}


//TODO: NEXT, need to use var count=0, use count to get index(0, 1, 2) on click next count++ (only use count++ after question/answer from ModuleJson array
// TODO: has been displayed

//probably more functions needed
console.log("working");
//on clicks needed



//on click toggle between question and answer state

cardToggle();

//doesnt do anything, make another for cardPrev, need to make html divs with id cardNext, and cardPrev
$("#cardNext").on("click", "#flashCards", function() {
  //clear #flashcards container

  //use function getModule? but rename to getQuestion or something?

}); //end onclick


