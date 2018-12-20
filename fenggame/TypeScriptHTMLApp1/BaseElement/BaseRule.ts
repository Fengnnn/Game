class BaseRule {
    public _numOfLiveInvader: number;
    public _numOfTotalInvader: number;
  
    public _space: number;//space that between each invaders
    public _gameTime: number = 3 * 60;
    constructor(numOfTrueInvader: number, numOfFalseInvader: number) {
        this._numOfLiveInvader = numOfTrueInvader;
        this._numOfTotalInvader = numOfFalseInvader;
      
    }
    public setSpace(space: number) {
        this._space = space;
    }

    public setGameTime(gameTime: number) {
        this._gameTime = gameTime;
    }

}