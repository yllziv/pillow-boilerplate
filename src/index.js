'use strict';

import * as pillow from 'pillowjs';

import Timer from './timer';
import Loader from './loader';

const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(navigator.userAgent);

const {
  Screen,
  Mouse,
  Img,
  RenderObjectModel,
} = pillow;

const math = pillow.Math;

var canvas = document.getElementById('screen');
var canvasW = 1000;
var canvasH = 600;
canvas.width = canvasW;
canvas.height = canvasH;

var screen = new Screen({
  container: canvas,
  width: canvasW,
  height: canvasH,
  x: 0,
  y: 0
});

screen.update(function () {

});

Loader.ready(resource => {

  var height = canvasH - resource['logo'].height;
  var num = 20;
  while(num--) {
    var container = new RenderObjectModel({
      x: 0,
      y: 0,
      width: resource['logo'].width,
      height: resource['logo'].height,
      debug: true,
      scaleX: 1,
      scaleY: 1,
      speed: math.getRandom(0,10) / 10,
      speedX: math.getRandom(10,100) / 10,
      vspeed: math.getRandom(0,10) / 10,
    });

    screen.append(container);

    var image = new Img({
      x: 0,
      y: 0,
      width: resource['logo'].width,
      height: resource['logo'].height,
      image: resource['logo'].image,
      debug: true,
    });

    container.append(image);

    container.update(function() {
      this.x += this.speedX;
      if (Math.abs(this.speed) <= 5 && this.y > (height - 10) ) {
        this.y = height;
        this.speed = 0;
        return;
      }
      else {
        if(this.speed <= 0) {
          this.vspeed = 1;
        }

        if(this.y >= height) {
          this.vspeed = -this.vspeed;
          this.speed = -this.speed + 5;
        }
        this.speed += this.vspeed;
        this.y += this.speed;
      }

    });

    image.on(isMobile ? 'touchstart' : 'mousedown', function() {
      this.scaleY += 0.1;
      this.scaleX += 0.1;
    })
  }

  

  new Mouse({
    screen: screen
  });

  var timer = Timer(() => {
    screen.run()
  });
});
