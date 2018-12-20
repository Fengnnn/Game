class NewGame {
    //hold all the   values that should persistent through the  one round of game

    public _allInvaderList: Array<Invader> = new Array();
    public _rule;
    public _aliveInavderNumber;
    public _ctx;

    constructor(rule: BaseRule,ctx) {
        this._rule = rule;
        this._aliveInavderNumber = rule._numOfLiveInvader;
        this._ctx = ctx;
    }

    public setAllInvaderList(allInvaderList) {
        this._allInvaderList = allInvaderList;
    }


}