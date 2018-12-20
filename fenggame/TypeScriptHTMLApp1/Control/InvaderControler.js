//get invader list by how many types and numbers
//list of clicked invader
//remove all invader
//reset invader
//on invader clicked
//on invader matched
var InvaderControler = /** @class */ (function () {
    function InvaderControler(game) {
        this._image = GameSetting.getImage();
        this._game = game;
        this._aliveInvaderPosition = new Array(this._game._aliveInavderNumber);
        this.getAliveInvaderPosition();
        this.caculateDrawLength();
    }
    InvaderControler.prototype.caculateDrawLength = function () {
        this._drawLength = this._image.width + GameSetting.SPACE_BETWEEN * 2;
    };
    InvaderControler.prototype.populateInvaderList = function () {
        var invaderList = new Array();
        for (var i = 0; i < this._game._rule._numOfTotalInvader; i++) {
            invaderList[i] = this.getInvader(i);
        }
        return invaderList;
    };
    InvaderControler.prototype.getInvader = function (postion) {
        return this.isAliveInvaderPosition(postion) ? this.getAliveInvader() : this.getNormalInvader();
    };
    InvaderControler.prototype.isAliveInvaderPosition = function (postion) {
        return this._aliveInvaderPosition.indexOf(postion) > -1;
    };
    InvaderControler.prototype.getAliveInvader = function () {
        return new Invader(this._image, true);
    };
    InvaderControler.prototype.getNormalInvader = function () {
        return new Invader(this._image, false);
    };
    InvaderControler.prototype.getAliveInvaderPosition = function () {
        for (var i = 0; i < this._game._aliveInavderNumber; i++) {
            this._aliveInvaderPosition[i] = this.getRandomNumber();
        }
    };
    InvaderControler.prototype.getRandomNumber = function () {
        var position = Math.floor(Math.random() * this._game._rule._numOfTotalInvader);
        if (this._aliveInvaderPosition && this._aliveInvaderPosition.indexOf(position) > -1) { //if already exsist 
            position = this.getRandomNumber();
        }
        return position;
    };
    return InvaderControler;
}());
//# sourceMappingURL=InvaderControler.js.map