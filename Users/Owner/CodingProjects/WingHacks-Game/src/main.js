// Step 1
import {Application} from 'pixi.js';

(async() => {
  
  // Step 2
  const app = new Application();

  // Step 3
  await app.init({
    resizeTo: window,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00,
    //antialias: true, - only use if absolutly necessary
});
  app.renderer.background.alpha = 0.3;
  app.canvas.style.position = 'absolute';

  // Step 4
  document.body.appendChild(app.canvas);

})();

