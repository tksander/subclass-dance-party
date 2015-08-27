//Factory
var makeCarltonDancer = function(top, left, timeBetweenSteps){
  return new CarltonDancer(top, left, timeBetweenSteps);
};
//Carlton Class
var CarltonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<span class="dancer"><img src="http://www.reactiongifs.com/r/gjsxU0s.gif" height="100" width="100"/></span>');
  this.$node.css("border", "none");
  this.$node.children().css("border", "none");
};
CarltonDancer.prototype = Object.create(Dancer.prototype);
CarltonDancer.prototype.constructor = CarltonDancer;
CarltonDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};