var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  return new BlinkyDancer(top, left, timeBetweenSteps);
};

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

//Default to for failed lookups
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};