var GameSetting = (function () {
    function GameSetting() {
        this.TOTAL_GAME_TIME = 60 * 60;
    }
    GameSetting.getImage = function () {
        return this.IMAGE_SRC;
    };
    GameSetting.TOTAL_INVADERS = 204;
    GameSetting.TOTAL_ALIVE_INVADERS = 4;
    GameSetting.SPACE_BETWEEN = 8;
    GameSetting.MOVE_DISTANCE = 1;
    GameSetting.Canvas_Length = 800;
    GameSetting.INVADER_SIZE = 30;
    //the time interval in ms to add one more invader to the list and redraw  all the invader position
    GameSetting.ADD_INVADER_INTERVAL = 5000;
    GameSetting.CANVAS_ID = 'game-canvas';
    return GameSetting;
}());
//# sourceMappingURL=GameSetting.js.map