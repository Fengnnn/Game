//show invaders
//hide invaders
//reset invaders
//check if any match invader
//update score
class GameControler {
    private _ctx: any;
    private _invaderControler: InvaderControler;
    private _LastLiveInvaderClicked = false;
   
  

    constructor(game: NewGame) {
        this._invaderControler = new InvaderControler(game);
        this._ctx = game._ctx;
    }

    public onClick(event: Event) {
        if (this._LastLiveInvaderClicked) {
        }
    }

    public static getCanvasElement(): HTMLCanvasElement{
        let canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.setAttribute('id', GameSetting.CANVAS_ID);
        canvas.setAttribute('height', GameSetting.Canvas_Length.toString());
        canvas.setAttribute('width', GameSetting.Canvas_Length.toString());
        return canvas;
    }
    public static getctx() {
        let canvas = <HTMLCanvasElement>document.getElementById(GameSetting.CANVAS_ID);
        let ctx = canvas.getContext('2d');
        return ctx;
    }
    public static showWinGUI() {
       let ctx = GameControler.getctx();
        ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        ctx.font = "30px Arial";
        ctx.fillText("YOU WIN", 200, 300);

    }
    public static isClickedOnLive(x, y) {
       
        game._allInvaderList.forEach(function (invader) {
          
            if (invader._isAlive &&GameControler.isInRange(x, y, invader) ) {
                invader._isAlive = false;
                game._aliveInavderNumber -= 1;
                if (game._aliveInavderNumber == 0) {
                    GameControler.showWinGUI();

                }
                return;
            }
        });
      
    }

    public static isInRange(x, y, invader: Invader): boolean {
        if (x > invader._x && x < invader._x + 30) {
        } else {
            return false;
        }
        if (y > invader._y && y < invader._y + 30) {
            return true;
        } 
        return false;


    }
    public static onClick(e:any) {
        let x = e.layerX;
        let y = e.layerY;
        GameControler.isClickedOnLive(x, y);

    }
    public initCanvas() {
        this._ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        game.setAllInvaderList(this._invaderControler.populateInvaderList());
        this.initInvaders();
    }
    public drawAnimation() {
        this._ctx.clearRect(0, 0, GameSetting.Canvas_Length, GameSetting.Canvas_Length);
        this.refreshInvaders();

    }
    public  initInvaders() {
       
        let lastX = 0;
        let lastY = 0;
        let _this = this;
        let controler = this._invaderControler;
        game._allInvaderList.forEach(function (invader, index) {
           
            let x = lastX;
            if (invader._isAlive) {
                if (index % 2 == 0) {
                    x = lastX + GameSetting.MOVE_DISTANCE * 2;
                    invader._isMovedRight = true;
                } else {
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
            
        }
        );   
    }

    private drawInvader(x, y) {        
        this._ctx.save();
        this._ctx.drawImage(GameSetting.getImage(), x, y,30,30);
        this._ctx.restore();
    }



    private refreshInvaders() {
        let _this = this;
        game._allInvaderList.forEach(function (invader, index) {

            if (invader._isAlive) {
                if (invader._isMovedRight) {
                    invader._x = invader._x - GameSetting.MOVE_DISTANCE*4;
                   
                    invader._isMovedRight = false;
                } else {
                    invader._x = invader._x + GameSetting.MOVE_DISTANCE *4;
                    invader._isMovedRight = true;
                }
            }
            _this.drawInvader(invader._x, invader._y);          
        }
        );  
    }

  

}