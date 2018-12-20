var NewGame = (function () {
    function NewGame(rule, ctx) {
        //hold all the   values that should persistent through the  one round of game
        this._allInvaderList = new Array();
        this._rule = rule;
        this._aliveInavderNumber = rule._numOfLiveInvader;
        this._ctx = ctx;
    }
    NewGame.prototype.setAllInvaderList = function (allInvaderList) {
        this._allInvaderList = allInvaderList;
    };
    return NewGame;
}());
//# sourceMappingURL=NewGame.js.map