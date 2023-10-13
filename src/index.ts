import { Application, Graphics } from 'pixi.js';

const app = new Application<HTMLCanvasElement>();

window.onload = async () => {
    document.body.appendChild(app.view);

    const graphics = new Graphics();
    graphics.beginFill(0xFF0000);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();
    graphics.x = app.renderer.width / 2;
    graphics.y = app.renderer.height / 2;

    app.stage.addChild(graphics);
}

