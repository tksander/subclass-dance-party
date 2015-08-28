var makeKangarooCharacter = function(top, left, timeBetweenSteps, img) {
  return new KangarooCharacter(top, left, timeBetweenSteps, img);
};

var KangarooCharacter = function(top, left, timeBetweenSteps, img){
  this.bounced = false;
  this.isBouncing = false;
  Character.call(this, top, left, timeBetweenSteps,
    "http://princesitairene.webcindario.com/canguro-06.gif");
  this.gravityMultiplier = .6;
  this.charName = "roo";
  //this.$node.html('<span class="character"><img src="http://www.ltisdschools.org/cms/lib09/TX21000349/Centricity/Domain/47/kangaroo3.gif" height="150" width="150"/></span>');
};

// Default to Character for failed lookups
KangarooCharacter.prototype = Object.create(Character.prototype);
KangarooCharacter.prototype.constructor = KangarooCharacter;
KangarooCharacter.prototype.step = function() {
  Character.prototype.step.call(this);

  var that = this;
  //If the node isn't bouncing
  if(!this.isBouncing){
    this.isBouncing = true;
    //If bouncing 
    if(!this.bounced){
      console.log("jumping");
      //Animate up
      (this.$node).animate({"top": "-=25px"},
        "medium",
        function(){
          that.bounced = true;
          that.isBouncing = false;
        });
    }
    //If bounced
    else{
      console.log("falling");
      //Animate down
      (this.$node).animate({"top": "+25px"},
        "medium",
        function(){
          that.bounced = false;
          that.isBouncing = false;
        });
    }
  }

};

KangarooCharacter.prototype.jump = function(){
  Character.prototype.jump.call(this, this.gravityMultiplier);
};