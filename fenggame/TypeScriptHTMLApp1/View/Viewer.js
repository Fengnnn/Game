var GameView = (function () {
    function GameView() {
        var _this = this;
        //YL: let instead of var
        this.run = function () {
            var that = _this;
            var int1 = window.setInterval(function () {
                //YL: use === instead of ==
                if (that.game._aliveInavderNumber == 0) {
                    window.clearInterval(int1);
                    return;
                }
                that.updateInvaderList();
            }, GameSetting.ADD_INVADER_INTERVAL);
            var int2 = window.setInterval(function () {
                //YL: use === instead of ==
                if (that.game._aliveInavderNumber == 0) {
                    window.clearInterval(int2);
                    return;
                }
                that.draw();
            }, 500);
        };
        this.updateInvaderList = function () {
            this.game._aliveInavderNumber += 1;
            //this.gameControler = new GameControler(this.game);
            this.gameController.initCanvas();
        };
        this.draw = function () {
            var ctx = this.gameController.getctx();
            //this.gameControler = new GameControler(this.game);
            this.gameController.drawAnimation();
        };
        this.init = function () {
            var body = document.getElementsByTagName('body')[0];
            if (!body) {
                return;
            }
            var canvas = this.getCanvasElement();
            body.appendChild(canvas);
            var ctx = canvas.getContext('2d');
            GameSetting.IMAGE_SRC = document.getElementsByTagName('img')[0];
            GameSetting.RULE = new BaseRule(GameSetting.TOTAL_ALIVE_INVADERS, GameSetting.TOTAL_INVADERS);
            this.game = new NewGame(GameSetting.RULE, ctx);
            this.gameController = new GameControler(this.game);
            canvas.addEventListener('click', function (e) {
                this.gameController.onClick(e);
            }.bind(this), false);
            this.updateInvaderList();
        };
    }
    GameView.prototype.getCanvasElement = function () {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', GameSetting.CANVAS_ID);
        canvas.setAttribute('height', GameSetting.Canvas_Length.toString());
        canvas.setAttribute('width', GameSetting.Canvas_Length.toString());
        return canvas;
    };
    return GameView;
}());
window.onload = function () {
    var gameView = new GameView();
    gameView.init();
    gameView.run();
};
//# sourceMappingURL=Viewer.js.map