//show invaders
//hide invaders
//reset invaders
//check if any match invader
//update score
var GameControler = /** @class */ (function () {
    function GameControler(game) {
        this._LastLiveInvaderClicked = false;
        this._invaderControler = new InvaderControler(game);
        this._ctx = game._ctx;
    }
    GameControler.prototype.onClick = function (event) {
        if (this._LastLiveInvaderClicked) {
        }
    };
    GameControler.getCanvasElement = function () {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', GameSetting.CANVAS_ID);
        canvas.setAttribute('height', GameSetting.Canvas_Length.toString());
        canvas.setAttribute('width', GameSetting.Canvas_Length.toString());
        return canvas;
    };
    GameControler.getctx = function () {
        var canvas = document.getElementById(GameSetting.CANVAS_ID);
        var ctx = canvas.getContext('2d');
        return ctx;
    };
    GameControler.showWinGUI = function () {
        var ctx = GameControler.getctx();
        ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        ctx.font = "30px Arial";
        ctx.fillText("YOU WIN", 200, 300);
    };
    GameControler.isClickedOnLive = function (x, y) {
        game._allInvaderList.forEach(function (invader) {
            if (invader._isAlive && GameControler.isInRange(x, y, invader)) {
                invader._isAlive = false;
                game._aliveInavderNumber -= 1;
                if (game._aliveInavderNumber == 0) {
                    GameControler.showWinGUI();
                }
                return;
            }
        });
    };
    GameControler.isInRange = function (x, y, invader) {
        if (x > invader._x && x < invader._x + 30) {
        }
        else {
            return false;
        }
        if (y > invader._y && y < invader._y + 30) {
            return true;
        }
        return false;
    };
    GameControler.onClick = function (e) {
        var x = e.layerX;
        var y = e.layerY;
        GameControler.isClickedOnLive(x, y);
    };
    GameControler.prototype.initCanvas = function () {
        this._ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        game.setAllInvaderList(this._invaderControler.populateInvaderList());
        this.initInvaders();
    };
    GameControler.prototype.drawAnimation = function () {
        this._ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        this.refreshInvaders();
    };
    GameControler.prototype.initInvaders = function () {
        var lastX = 0;
        var lastY = 0;
        var _this = this;
        var controler = this._invaderControler;
        game._allInvaderList.forEach(function (invader, index) {
            var x = lastX;
            if (invader._isAlive) {
                if (index % 2 == 0) {
                    x = lastX + GameSetting.MOVE_DISTANCE * 2;
                    invader._isMovedRight = true;
                }
                else {
                    x = lastX - GameSetting.MOVE_DISTANCE * 2;
                    invader._isMovedRight = false;
                }
            }
            invader.setXYPosition(x, lastY);
            _this.drawInvader(x, lastY);
            lastX += controler._drawLength;
            //update x, y
            if (lastX + controler._drawLength > 800) {
                lastX = 0;
                lastY += _this._invaderControler._drawLength;
            }
        });
    };
    GameControler.prototype.drawInvader = function (x, y) {
        this._ctx.save();
        this._ctx.drawImage(GameSetting.getImage(), x, y, 30, 30);
        this._ctx.restore();
    };
    GameControler.prototype.refreshInvaders = function () {
        var _this = this;
        game._allInvaderList.forEach(function (invader, index) {
            if (invader._isAlive) {
                if (invader._isMovedRight) {
                    invader._x = invader._x - GameSetting.MOVE_DISTANCE * 4;
                    invader._isMovedRight = false;
                }
                else {
                    invader._x = invader._x + GameSetting.MOVE_DISTANCE * 4;
                    invader._isMovedRight = true;
                }
            }
            _this.drawInvader(invader._x, invader._y);
        });
    };
    return GameControler;
}());
//# sourceMappingURL=GameControler.js.map