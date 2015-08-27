var makeCharacter = function(top, left, timeBetweenSteps) {
  return new Character(top, left, timeBetweenSteps); 
};

var Character  = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="character"></span>');
  this.setPosition(top, left);
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
};

Character.prototype.step = function() {
  var that = this;
  setTimeout(function(){that.step();}, that.timeBetweenSteps);
};

Character.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    position: "relative"
  };
  this.$node.css(styleSettings);
}