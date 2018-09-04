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

//array for review again card data
var reviewArr = [];

//array for  i understand card data
var understandArr = [];

//use count for next/previous flashcard function
var count = 0;


//getJSON
//put if statements here to get correct module (html, css, etc) to get correct json module file
//for now only API
$.getJSON("./assets/data/module-api.json", function(json) { //change direct link to json file w variable. to change what it gets on category button click
  moduleJson = json.cards;
  console.log(moduleJson);

  //display initial question
  $('div.question').html("Question: " + moduleJson[count].question);

  //testing function for now
  getModule();

});


//TODO: ignore getModule function for now, for testing
//TODO: change function name! to reflect what it actually does
//use this function to make next/previous question functionality?
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

  $('div.answer').hide();


//on click to toggle q & a divs
  $('div.question, div.answer').on('click', function() {
    //output html to card
    $("div.question").html("Question: " + moduleJson[count].question);
    $("div.answer").html("Answer: " + moduleJson[count].answer);
    console.log(moduleJson[count].answer);
    console.log(moduleJson[count].question);


    //toggle between question and answer div
    //$.toggle does the business
      $('div.answer, div.question').toggle()
    }
  );
}


//probably more functions needed
//on clicks needed



//on click toggle between question and answer state

cardToggle();




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
      moduleJson.splice(count,1);
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



//need else statement here to go to categories page?

    //TODO: ignore these comments

    //get current array index items moduleJson[i] and push it to reviewArray
//use count++ to control index
    //clear #flashcards container
    //    $("#cardContain").empty();
       //gen next flashcard array item
    //use function getModule? but rename to getQuestion or something?
    //

  }); //end onclick


//TODO: onclick dont need!

// doesnt do anything yet, make another for cardPrev, need to make html divs with id cardNext, and cardPrev on each side of flash card output
// use count++ on next to go through array like.. moduleJson[count].answer/question/etc
$("#cardNext").on("click", "#flashCards", function() {
  //clear #flashcards container

  //use function getModule? but rename to getQuestion or something?

}); //end onclick


