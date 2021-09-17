var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["280f2b76-c28c-41ba-bed7-41fafa227626","a7d11918-c782-4470-8bd5-f184f843968e","68888725-4d7b-4b74-97cf-99d60645bd26","57a8183b-d9b2-4e97-8cf5-63b321c10057","a673d0b5-75d2-447e-aced-360f79f3b62a"],"propsByKey":{"280f2b76-c28c-41ba-bed7-41fafa227626":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/hxPYRrnxQSj9Ij9H0kuWDKUh_uWOHXeC/category_animals/tropicalfish_14.png","frameSize":{"x":395,"y":353},"frameCount":1,"looping":true,"frameDelay":2,"version":"hxPYRrnxQSj9Ij9H0kuWDKUh_uWOHXeC","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":353},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hxPYRrnxQSj9Ij9H0kuWDKUh_uWOHXeC/category_animals/tropicalfish_14.png"},"a7d11918-c782-4470-8bd5-f184f843968e":{"name":"car2","sourceUrl":null,"frameSize":{"x":393,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"pjxLHR4P2rpV10IZAIn1UYgj_GrqVIvh","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":240},"rootRelativePath":"assets/a7d11918-c782-4470-8bd5-f184f843968e.png"},"68888725-4d7b-4b74-97cf-99d60645bd26":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png","frameSize":{"x":393,"y":240},"frameCount":1,"looping":true,"frameDelay":2,"version":"TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":240},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png"},"57a8183b-d9b2-4e97-8cf5-63b321c10057":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png","frameSize":{"x":393,"y":240},"frameCount":1,"looping":true,"frameDelay":2,"version":"TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":240},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png"},"a673d0b5-75d2-447e-aced-360f79f3b62a":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png","frameSize":{"x":393,"y":240},"frameCount":1,"looping":true,"frameDelay":2,"version":"TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":240},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TwfhSb9Mrd7cO1Iy7KKORTp4rNWtdLKn/category_animals/crab2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
 

  boundary1 = createSprite(250,120,420,3);
  boundary2 = createSprite(250,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  ;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
 
 
//add the velocity to make the car move.
car1.velocityY=7;
car2.velocityY=7;
car3.velocityY=-7;
car4.velocityY=-7;





function draw() {
  background("lightblue");
   
   text("Lives: " + life,200,100);
   strokeWeight(0);
  fill("red");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4))
{
  playSound("assets/category_alerts/airy_bell_notification.mp3")
}

 
 
  car1.bounceOff(boundary1);
car1.bounceOff(boundary2);

car2.bounceOff(boundary1);
car2.bounceOff(boundary2);

car3.bounceOff(boundary1);
car3.bounceOff(boundary2);

car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
if(keyDown("right")){
  sam.x=sam.x+2;
}  
if(keyDown("left")){
  sam.x=sam.x-2;
}  


//Add the condition to reduce the life of sam if it touches the car.
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4))
{
  sam.x=20;
  sam.y=190;
  life=life+1
}
 
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
