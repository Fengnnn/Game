//draw canavas
//reset game
//onclick
//on finished

let game: NewGame;

var run = function () {
    let int1 = window.setInterval(function () {
        if (game._aliveInavderNumber == 0) {
            window.clearInterval(int1);
            return;
        }
        updateInvaderList();
    }, GameSetting.ADD_INVADER_INTERVAL);
    let int2 = window.setInterval(
        function () {
            if (game._aliveInavderNumber == 0) {
                window.clearInterval(int2);
                return;
            }
            draw();
        },
        500);

}
let updateInvaderList = function () {
    game._aliveInavderNumber += 1;
    let gameControler = new GameControler(game);
    gameControler.initCanvas();

}

let draw = function () {


    let ctx = GameControler.getctx();
    let gameControler = new GameControler(game);
    gameControler.drawAnimation();
}

let init = function () {
    let body = document.getElementsByTagName('body')[0];
    if (!body) {
        return;
    }
    let canvas = GameControler.getCanvasElement();
    body.appendChild(canvas);
    let ctx = canvas.getContext('2d');
    GameSetting.IMAGE_SRC = document.getElementsByTagName('img')[0];
    GameSetting.RULE = new BaseRule(GameSetting.TOTAL_ALIVE_INVADERS, GameSetting.TOTAL_INVADERS);
    game = new NewGame(GameSetting.RULE, ctx);
    canvas.addEventListener('click', GameControler.onClick);
    updateInvaderList();

}
window.onload = function () {
    init();
    run();
}


