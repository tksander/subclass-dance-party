// /*// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };*/



// //Pseuduoclassical makeDancer
// var makeDancer = function(top, left, timeBetweenSteps){
//   //Create jQuery node
//   this.$node = $('<span class="dancer"></span>');
//   //Invoke step
//   //this.step.bind(this);
//   //console.log("Prototype: " + makeDancer.prototype);
//   //makeDancer.prototype.step.bind(this);
//   this.step = function(){
//     var that = this;
//     //setTimeout.call(that, function(){/*console.log(that);*/that.step();}, that.timeBetweenSteps);
//   };
//   this.step();
//   //Set position
//   // makeDancer.prototype.setPosition.bind(this, top, left);
//   this.setPosition = function(top, left){
//     // console.log("setting position");
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   };
//   this.setPosition(top, left);
// };
// //Methods
// /*makeDancer.prototype.step = function(){
//   console.log("This: " + this);
//   setTimeout.bind(this, this.step, this.timeBetweenSteps);
// };*/
// // makeDancer.prototype.setPosition = function(top, left){
// //   console.log("setting position");
// //   var styleSettings = {
// //     top: top,
// //     left: left
// //   };
// //   this.$node.css(styleSettings);
// // };


var makeDancer = function(top, left, timeBetweenSteps){
  return new Dancer(top,left,timeBetweenSteps);
};

var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};
Dancer.prototype.step = function(){
  var that = this;
  setTimeout.call(that, function(){that.step();}, that.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};