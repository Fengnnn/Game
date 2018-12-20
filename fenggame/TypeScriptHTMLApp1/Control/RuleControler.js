//show invaders
//hide invaders
//reset invaders
//check if any match invader
//update score
var GameControler = (function () {
    function GameControler(rule, canvas) {
        this._LastLiveInvaderClicked = false;
        this._invaderControler = new InvaderControler(rule);
        this._ctx = canvas;
    }
    GameControler.prototype.onClick = function (event) {
        if (this._LastLiveInvaderClicked) {
        }
    };
    GameControler.prototype.initCanvas = function () {
        this._ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        this.initInvaders();
    };
    GameControler.prototype.drawAnimation = function () {
        this._ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        this.refreshInvaders();
    };
    GameControler.prototype.initInvaders = function () {
        var lastX = 10;
        var lastY = 100;
        this._invaderControler._invaderList.forEach(function (invader, index) {
            invader.setXYPosition(lastX, lastY);
            if (invader._isAlive) {
                lastX += this._invaderControler._drawLength - GameSetting.SPACE_BETWEEN;
                invader._isMovedRight = true;
            }
            else {
                lastX += this._invaderControler._drawLength;
            }
            this.drawInvader(lastX, lastY);
            //update x, y
            if (lastX > this._ctx.width) {
                lastX = 0;
                lastY += this._invaderControler._drawLength;
            }
        });
    };
    GameControler.prototype.drawInvader = function (x, y) {
        this._ctx.save();
        this._ctx.drawImage(GameSetting.getImage(), x, y);
        this._ctx.restore();
    };
    GameControler.prototype.refreshInvaders = function () {
        this._invaderControler._invaderList.forEach(function (invader, index) {
            if (invader._isAlive) {
                if (invader._isMovedRight) {
                    invader._x = invader._x + GameSetting.MOVE_DISTANCE + GameSetting.MOVE_DISTANCE;
                    invader._isMovedRight = false;
                }
                else {
                    invader._x = invader._x - GameSetting.MOVE_DISTANCE - GameSetting.MOVE_DISTANCE;
                    invader._isMovedRight = true;
                }
            }
            this.drawInvader(invader._x, invader._y);
        });
    };
    return GameControler;
}());
//# sourceMappingURL=RuleControler.js.map