var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Invader = (function () {
    function Invader(image, isAlive) {
        this._isMovedRight = false;
        this._image = image;
        this._isAlive = isAlive;
    }
    Invader.prototype.isPositionSet = function () {
        return this._x != null;
    };
    Invader.prototype.setXYPosition = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return Invader;
}());
var AliveInvader = (function (_super) {
    __extends(AliveInvader, _super);
    function AliveInvader() {
        _super.apply(this, arguments);
    }
    return AliveInvader;
}(Invader));
//# sourceMappingURL=BaseInvaderImage.js.map