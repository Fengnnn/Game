
class GameView {
    private game: NewGame;
    private gameController: GameControler;

    //YL: let instead of var
    run = () => {
        let that = this;
        let int1 = window.setInterval(function () {
            //YL: use === instead of ==
            if (that.game._aliveInavderNumber == 0) {
                window.clearInterval(int1);
                return;
            }
            that.updateInvaderList();
        }, GameSetting.ADD_INVADER_INTERVAL);
        let int2 = window.setInterval(
            function () {
                //YL: use === instead of ==
                if (that.game._aliveInavderNumber == 0) {
                    window.clearInterval(int2);
                    return;
                }
                that.draw();
            },
            500);

    }

    updateInvaderList = function () {
        this.game._aliveInavderNumber += 1;
        //this.gameControler = new GameControler(this.game);
        this.gameController.initCanvas();

    }

    draw = function () {
        let ctx = this.gameController.getctx();
        //this.gameControler = new GameControler(this.game);
        this.gameController.drawAnimation();
    }

    getCanvasElement(): HTMLCanvasElement {
        let canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.setAttribute('id', GameSetting.CANVAS_ID);
        canvas.setAttribute('height', GameSetting.Canvas_Length.toString());
        canvas.setAttribute('width', GameSetting.Canvas_Length.toString());
        return canvas;
    }

    init = function () {
        let body = document.getElementsByTagName('body')[0];
        if (!body) {
            return;
        }
        let canvas = this.getCanvasElement();
        body.appendChild(canvas);
        let ctx = canvas.getContext('2d');
        GameSetting.IMAGE_SRC = document.getElementsByTagName('img')[0];
        GameSetting.RULE = new BaseRule(GameSetting.TOTAL_ALIVE_INVADERS, GameSetting.TOTAL_INVADERS);
        this.game = new NewGame(GameSetting.RULE, ctx);
        this.gameController = new GameControler(this.game);
        canvas.addEventListener('click', function (e) {
            this.gameController.onClick(e);
        }.bind(this), false);
        this.updateInvaderList();
    }
}



window.onload = function () {
    let gameView = new GameView();
    gameView.init();
    gameView.run();
}
