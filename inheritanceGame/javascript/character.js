var makeCharacter = function(top, left, timeBetweenSteps, img) {
  return new Character(top, left, timeBetweenSteps, img); 
};

var Character  = function(top, left, timeBetweenSteps, img) {
  this.nodeText = this.makeNodeText(img);
  this.$node = $(this.nodeText);
  this.setPosition(top, left);
  this.gravityMultipler = 1;
  this.isJumping = false;
  this.slideMultiplier = 1;
  this.isSliding = false;
  this.direction = -1;
  this.isFiring = false;
  //this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  // health bar
  this.healthBar = 100;
  //If we need to flip the player
  if(this.flippedLeft){
    this.$node.css({transform: "rotateY(180deg)"});
    this.direction = 1;
  }
};

Character.prototype.constructor = Character.prototype;
Character.prototype.makeNodeText = function(img) {
  var tempString = '<span class="character">';
  tempString += '<img src="' + img + '" height="150" width="150"/>';
  tempString  += '<div class="healthBar"></div>';
  tempString += '</span>';
  return tempString;
}

Character.prototype.step = function() {
  var that = this;
  setTimeout(function(){that.step();}, that.timeBetweenSteps);
};

Character.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    position: "absolute"
  };
  this.$node.css(styleSettings);
};

//Jump funciton
Character.prototype.jump = function(mult){
  var that = this;
  if(!mult)
    mult = that.gravityMultipler;
  console.log(that.isJumping);
  //If we're not jumping
  if(!that.isJumping){
    //Jump
    that.isJumping = true;
    that.$node.animate({"top": "-=" + 150/mult + "px"},
    "medium",
    function(){
      that.$node.animate({"top": "+=" + 150/mult + "px"},
    "medium");
      that.isJumping = false;
    });
  }
};

//Move function
Character.prototype.slide = function(dir){
  //Slide in the direction we're moving
  if(!this.isSliding){
    //Slide
    this.isSliding = true;
    //this.$node.animate({"left": "+=" + direction*this.slideMultiplier*10 + "px"}, 50);
    /*console.log(Number(this.$node.css("left").replace("px", ""))
      + direction*this.slideMultiplier*10);*/
    this.$node.css("left", Number(this.$node.css("left").replace("px", ""))
      + dir*this.slideMultiplier*10);
    //If the character was facing in the opposite direction
    if(this.direction !== dir){
      //If left facing character
      if(!this.flippedLeft){
        //Flip character left
        if(dir === -1){
          this.$node.css({transform: "rotateY(180deg)"});
        }
        //Flip character right
        else if(dir === 1){
          this.$node.css({transform: "rotateY(0deg)"});
        }
      }
      else{
        //Flip character left
        if(dir === 1){
          this.$node.css({transform: "rotateY(180deg)"});
        }
        //Flip character right
        else if(dir === -1){
          this.$node.css({transform: "rotateY(0deg)"});
        }
      }
    }
    //Change player direction
    this.direction = dir;
    //Done
    this.isSliding = false;
  }
};

Character.prototype.shoot = function(bullet) {
  // check for direction of player
  var tempBullet = makeBullet("http://vignette4.wikia.nocookie.net/nintendo/images/f/fb/Bullet_Bill_(New_Super_Mario_Bros_Wii).png/revision/latest?cb=20120916120335&path-prefix=en",
    Number(this.$node.css("left").replace("px", "")),
    Number(this.$node.css("top").replace("px", "")),
    this.direction);
};

var makeBullet = function(bullet, playerX, playerY, dir) {
  return new Bullet(bullet, playerX, playerY, dir);
}

var Bullet = function(bullet, startX, startY, dir) {
  this.nodeText = this.makeNodeText(bullet);
  this.startX = startX;
  this.startY = startY;
  this.$node = $(this.nodeText);
  this.direction = dir;
  this.fireBullet(1);
};

Bullet.prototype.makeNodeText = function(img) {
  var tempString = '<span class="bullet">';
  tempString += '<img src="' + img + '" height="25" width="25"/>';
  tempString += '</span>';
  return tempString;
}

Bullet.prototype.fireBullet = function() {
  var that = this;
  // setup bullet at player's position
  that.$node.css({
    top: that.startY,
    left: that.startX,
    position: "absolute",
  });
  //If facing right
  if(this.direction === 1)
    that.$node.css({transform: "rotateY(180deg)"});

  $("body").append(this.$node);
  // animate once
  this.$node.animate({
    left: this.startX + $(window).width() * 1.25 * this.direction
  }, 2000, function() {that.$node.remove();})

  // when 100px off screen, remove
}

