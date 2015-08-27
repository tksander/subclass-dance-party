var makeLeftRightDancer = function(top, left, timeBetweenSteps){
  return new LeftRightDancer
};

var LeftRightDancer = function(top, left, timeBetweenSteps){
  this.shiftedLeft = true;
  this.shifting = false;
  Dancer.call(this, top, left, timeBetweenSteps);
};

//Default to dancer for failed lookups
LeftRightDancer.prototype = Object.create(Dancer.prototype);
LeftRightDancer.prototype.constuctor = LeftRightDancer;
LeftRightDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var that = this;
  //If the node isn't shifting
  if(!this.shifting){
    this.shifting = true;
    //If shifted left
    if(this.shiftedLeft){
      console.log("calling right");
      //Animate right
      (this.$node).animate({"margin-left": 500},
        "slow",
        function(){
          that.shiftedLeft = false;
          that.shifting = false;
        });
    }
    //If shifted right
    else{
      console.log("calling left");
      //Animate left
      this.$node.animate({"margin-left": 250},
        "slow",
        function(){
          that.shiftedLeft = true;
          that.shifting = false;
        });
    }
  }
};