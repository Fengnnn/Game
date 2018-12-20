var BaseRule = (function () {
    function BaseRule(numOfTrueInvader, numOfFalseInvader) {
        this._gameTime = 3 * 60;
        this._numOfLiveInvader = numOfTrueInvader;
        this._numOfTotalInvader = numOfFalseInvader;
    }
    BaseRule.prototype.setSpace = function (space) {
        this._space = space;
    };
    BaseRule.prototype.setGameTime = function (gameTime) {
        this._gameTime = gameTime;
    };
    return BaseRule;
}());
//# sourceMappingURL=BaseRule.js.map