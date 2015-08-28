var makeAnxiousSamusCharacter = function(top, left, timeBetweenSteps, img){
  return new AnxiousSamusCharacter(top, left, timeBetweenSteps, img);
};

var AnxiousSamusCharacter = function(top, left, timeBetweenSteps, img){
  this.flippedLeft = true;
  Character.call(this, top, left, timeBetweenSteps,
    "http://rs364.pbsrc.com/albums/oo83/fruitsnax/samus/run_samus.gif~c200");
  // this.$node.html('<span class="character"><img src="http://rs364.pbsrc.com/albums/oo83/fruitsnax/samus/run_samus.gif~c200" height="150" width="150"/></span>');
  this.gravityMultiplier = 1.00;
  this.charName = "samus";

};

//Default failed lookups to Character
AnxiousSamusCharacter.prototype = Object.create(Character.prototype);
AnxiousSamusCharacter.prototype.constructor = AnxiousSamusCharacter;
AnxiousSamusCharacter.prototype.jump = function(){
  Character.prototype.jump.call(this, this.gravityMultiplier);
};