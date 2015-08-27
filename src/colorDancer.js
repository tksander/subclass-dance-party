var makeColorDancer = function(top, left, timeBetweenSteps) {
  return new ColorDancer(top, left, timeBetweenSteps);
};

var ColorDancer = function(top, left, timeBetweenSteps) {
  this.possibleColors = ["red", "blue", "green"];
  Dancer.call(this, top, left, timeBetweenSteps);
};

// Default to Dancer for failer lookups
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomIndex = Math.floor(Math.random() * this.possibleColors.length);
  console.log(this.possibleColors[randomIndex]);
  this.$node.css({"border-color": this.possibleColors[randomIndex]});
};

// var makeColorDancer = function(top, left, timeBetweenSteps){
//   return new ColorDancer(top, left, timeBetweenSteps);
// };

// var ColorDancer = function(top, left, timeBetweenSteps){
//   Dancer.call(this, top, left, timeBetweenSteps);
// };

// //Default to for failed lookups
// ColorDancer.prototype = Object.create(Dancer.prototype);
// ColorDancer.prototype.constructor = ColorDancer;
// ColorDancer.prototype.step = function(){
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };