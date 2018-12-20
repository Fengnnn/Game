var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Invader = /** @class */ (function () {
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
var AliveInvader = /** @class */ (function (_super) {
    __extends(AliveInvader, _super);
    function AliveInvader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AliveInvader;
}(Invader));
//# sourceMappingURL=Invader.js.map