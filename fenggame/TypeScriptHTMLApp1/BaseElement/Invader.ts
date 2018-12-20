class Invader{
    public _image: HTMLImageElement;
    public _isAlive: boolean;
    public _x: number;
    public _y: number;
    public _isMovedRight = false;
    constructor(image, isAlive) {
        this._image = image;
        this._isAlive = isAlive;
    }
    public isPositionSet() {
        return this._x != null;
    }
    public setXYPosition(x, y) {
        this._x = x;
        this._y = y;
    }
}


class AliveInvader extends Invader {
  
  
}