$(document).ready(function(){

  window.dancers = [];
  window.mapImages = [];
  window.mapImageIndex = -1;

  //Game state bools
  window.playing = true;
  window.playersReady = false;

  //Create player 1 and append
  window.player1 = $("");
  $("body").append(player1);
  window.players = [];

  $(".addDancerButton").on("click", function(event){
      /* This function sets up the click handlers for the create-dancer
       * buttons on dancefloor.html. You should only need to make one small change to it.
       * As long as the "data-dancer-maker-function-name" attribute of a
       * class="addDancerButton" DOM node matches one of the names of the
       * maker functions available in the global scope, clicking that node
       * will call the function to make the dancer.
       */

      /* dancerMakerFunctionName is a string which must match
       * one of the dancer maker functions available in global scope.
       * A new object of the given type will be created and added
       * to the stage.
       */
      var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];
      // make a dancer with a random position

      var dancer = dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer.$node);
  });
  
  $(".lineupDancers").on("click", function(event) {
    console.log(window.dancers)
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].animate({"left": 100});
    }
  });

  $(".changeCharacter").on("click", function(event){
    //If we dont have 2 players
    if(window.players.length < 2){
      var charMakerFunctionName = $(this).data("character-maker-function-name");
      var charMakerFunction = window[charMakerFunctionName];
      var player = charMakerFunction(
        $(window).height() - 200,
        500,
        100);
      $("body").append(player.$node);
      window.players.push(player);
      player.$node["pid"] = window.players.length;
      if(window.players.length === 2) {
        window.playersReady = true;
        cssInitializer();
      }
    }
  });

  (function(){
    window.mapImages.push("http://media.moddb.com/images/articles/1/108/107209/fy_continuum_go20120.jpg");
    window.mapImages.push("http://www.auntiepixelante.com/wp-content/uploads/2009/07/supermariobrosbeginning_bigger.png");
    window.mapImages.push("http://7-themes.com/data_images/out/23/6848519-african-safari.jpg");
    window.mapImageIndex = 0;
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-size", "" + $(window).width() + "px " + $(window).height() + "px");
    $("body").css("background-image", "url(" + window.mapImages[window.mapImageIndex % window.mapImages.length] + ")");
  })();

  //Change map button
  $(".changeMapButton").on("click", function(event){
    console.log($("body").css("background-image"));
    console.log(window.mapImages[window.mapImageIndex]);
    window.mapImageIndex++;
    $("body").css("background-image", "url(" + window.mapImages[window.mapImageIndex % window.mapImages.length] + ")");
  });

  //Check for key inputs
  var keys = {};
  document.onkeydown = function(e){
    keys[e.which] = true;
  };
  document.onkeyup = function(e){
    delete keys[e.which];
  };

   //Game loop
  function gameLoop(){
    // Start game when players are ready
    if(window.playersReady === true) {

      //Player 1 controls
      //If up arrow
      if(keys[87]){
        window.players[0].jump();
      }
      //If down arrow

      //If left arrow
      if(keys[65]){
        window.players[0].slide(-1);
      }
      if(keys[68]){
        window.players[0].slide(1);
      }
      //If left command
      if(keys[91]){
        window.players[0].shoot(/*replace me*/);
        delete keys[91];
      }


      //Player 2 controls
      //If up arrow
      if(keys[38]){
        window.players[1].jump();
      }
      //If down arrow
      //If left arrow
      if(keys[37]){
        window.players[1].slide(-1);
      }
      //If right arrow
      if(keys[39]){
        window.players[1].slide(1);
      }
      //If right command
      if(keys[93]){
        window.players[1].shoot(/*replace me*/);
        delete keys[93];
      }
    }
    setTimeout(gameLoop, 50);
  };
  gameLoop();
});


function cssInitializer() {
  $(".healthBar").css({
    position: "relative",
    width: "60%",
    margin: "0 auto",
    top: -180,
    // width: Number($(window)./*css("width").replace("px", "")*/width()) * .05,
    height: Number($(window)./*css("height").replace("px", "")*/height()) * .025,
    "background-color": "red",
    opacity: 0.5,
    "border-radius": "15%"
  });
};

