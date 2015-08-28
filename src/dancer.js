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
  setTimeout(function(){that.step();}, that.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

