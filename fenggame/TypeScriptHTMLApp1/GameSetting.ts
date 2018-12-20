 class GameSetting {
    public  static TOTAL_INVADERS = 204;
    public static  TOTAL_ALIVE_INVADERS = 4;
    public static SPACE_BETWEEN = 8;
    public static MOVE_DISTANCE= 1;
    public TOTAL_GAME_TIME = 60 * 60;
    public static Canvas_Length = 800;
    public static IMAGE_SRC;
    public static INVADER_SIZE = 30;
     //the time interval in ms to add one more invader to the list and redraw  all the invader position
    public static ADD_INVADER_INTERVAL = 5000;
    public static CANVAS_ID = 'game-canvas';
    public static RULE: BaseRule;

    public static getImage() {
        return this.IMAGE_SRC;
    }

     
}