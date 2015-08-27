var makeGhostDancer = function(top, left, timeBetweenSteps) {
  return new GhostDancer(top, left, timeBetweenSteps);
};

var GhostDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}
// Default to Dancer for failed lookups
GhostDancer.prototype = Object.create(Dancer.prototype);
GhostDancer.prototype.constructor = GhostDancer;
GhostDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //If node is faded out
  if(this.$node.css("display") === "none"){
    this.$node.fadeIn();
  }
  //If the node is faded in
  else{
    this.$node.fadeOut();
  }
};