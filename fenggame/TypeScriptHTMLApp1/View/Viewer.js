//draw canavas
//reset game
//onclick
//on finished
var game;
var run = function () {
    var int1 = window.setInterval(function () {
        if (game._aliveInavderNumber == 0) {
            window.clearInterval(int1);
            return;
        }
        updateInvaderList();
    }, GameSetting.ADD_INVADER_INTERVAL);
    var int2 = window.setInterval(function () {
        if (game._aliveInavderNumber == 0) {
            window.clearInterval(int2);
            return;
        }
        draw();
    }, 500);
};
var updateInvaderList = function () {
    game._aliveInavderNumber += 1;
    var gameControler = new GameControler(game);
    gameControler.initCanvas();
};
var draw = function () {
    var ctx = GameControler.getctx();
    var gameControler = new GameControler(game);
    gameControler.drawAnimation();
};
var init = function () {
    var body = document.getElementsByTagName('body')[0];
    if (!body) {
        return;
    }
    var canvas = GameControler.getCanvasElement();
    body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    GameSetting.IMAGE_SRC = document.getElementsByTagName('img')[0];
    GameSetting.RULE = new BaseRule(GameSetting.TOTAL_ALIVE_INVADERS, GameSetting.TOTAL_INVADERS);
    game = new NewGame(GameSetting.RULE, ctx);
    canvas.addEventListener('click', GameControler.onClick);
    updateInvaderList();
};
window.onload = function () {
    init();
    run();
};
//# sourceMappingURL=Viewer.js.map