//get invader list by how many types and numbers
//list of clicked invader
//remove all invader
//reset invader
//on invader clicked
//on invader matched
class InvaderControler {
    private _game: NewGame;
  
    private _aliveInvaderPosition: Array<number>;
    private _image = GameSetting.getImage();
    public _drawLength: number;
    constructor(game: NewGame) {
        this._game = game;
        this._aliveInvaderPosition = new Array(this._game._aliveInavderNumber);
        this.getAliveInvaderPosition();
       
        this.caculateDrawLength();
    }
  
    public caculateDrawLength() {
        this._drawLength = this._image.width + GameSetting.SPACE_BETWEEN*2;
    }

   
    public populateInvaderList() {
        let invaderList = new Array();
        for (let i = 0; i < this._game._rule._numOfTotalInvader; i++) {         
            invaderList[i] = this.getInvader(i);           
        }
        return invaderList;

    }

    private getInvader(postion: number): Invader {
       return  this.isAliveInvaderPosition(postion) ? this.getAliveInvader() : this.getNormalInvader();
    }

    private isAliveInvaderPosition(postion: number): boolean {
        return this._aliveInvaderPosition.indexOf(postion) > -1;
    }
    private getAliveInvader(): Invader {
       return  new Invader(this._image, true);
    }

    private getNormalInvader() {
        return new Invader(this._image, false);
    }

    private getAliveInvaderPosition() {
        for (let i = 0; i < this._game._aliveInavderNumber; i++){
            this._aliveInvaderPosition[i] = this.getRandomNumber();
        }
    }

    private getRandomNumber(): number {
        let position = Math.floor(Math.random() * this._game._rule._numOfTotalInvader);
     
            if (this._aliveInvaderPosition && this._aliveInvaderPosition.indexOf(position) > -1) {//if already exsist 
            position = this.getRandomNumber();
        }
        return position;       
    }
}