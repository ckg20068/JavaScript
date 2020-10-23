// Global variable
var maze;
var MAXSIZE = 51
var mainX, mainY
var MAZEWALL = 1
var MAZESTREET = 0
function random4() {
    var houkou = Math.floor(Math.random() * 4 + 1)
    return houkou
}
function init() {

    // alert( "makedata...")
    // 迷路の二次元配列を作る
    maze = new Array(MAXSIZE)
    for (var i = 0; i < MAXSIZE; i++) {
        maze[i] = new Array(MAXSIZE)
    }
    // 全て道にする
    for (var i = 0; i < MAXSIZE; i++) {
        for (var j = 0; j < MAXSIZE; j++) {
            maze[i][j] = MAZESTREET
        }
    }
    // 外周部を壁にする
    for (var i = 0; i < MAXSIZE; i++) {
        maze[0][i] = MAZEWALL
        maze[MAXSIZE - 1][i] = MAZEWALL
        maze[i][0] = MAZEWALL
        maze[i][MAXSIZE - 1] = MAZEWALL
    }
    //  通れない壁を設定する
    for (var i = 2; i < MAXSIZE - 2; i += 2) {
        for (var j = 2; j < MAXSIZE - 2; j += 2) {
            maze[i][j] = MAZESTREET
        }
    }
    // 壁を作る
    for (var i = 2; i < MAXSIZE - 2; i += 2) {
        for (var j = 2; j < MAXSIZE - 2; j += 2) {
            var houkou = random4()
            switch (houkou) {
                case 1:
                    maze[i - 1][j] = MAZEWALL
                    break
                case 2:
                    maze[i + 1][j] = MAZEWALL
                    break
                case 3:
                    maze[i][j - 1] = MAZEWALL
                    break
                case 4:
                    maze[i][j + 1] = MAZEWALL
                    break
                default:
                    alert("error")
            }
        }
    }
   maze[0][0] = maze[1][0] = maze[1][1] = maze[0][1] = 0
   maze[MAXSIZE - 1][MAXSIZE - 1] = maze[MAXSIZE - 1 - 1][MAXS7IZE - 1] = maze[MAXS7IZE - 1][MAXS7IZE - 1 - 1] = maze[MAXS7IZE - 1 - 1][MAXS77IZE - 1 - 1] = 0

    // 自分のキャラ位置を設定
    mainX = mainY = 0
    maze[mainX][mainY] = 2

    // alert("init ...end")
    dumpMaze()

    // イベント初期化
    var element = document.getElementById("myCanvas")
    element.onkeydown = function (event) {
        var keyEvent = event || window.event;

        alert(keyEvent.keyCode);

        // charCodeは存在する？ (IE9より前はcharCodeをサポートしない)
        if ('charCode' in keyEvent) {
            alert(keyEvent.charCode);
        }
    }
}

function drawBlock(x, y) {
    var item = document.getElementById("myCanvas")
    var context = item.getContext("2d")
    if (item.getContext) {
        for (var i = 0; i < MAXS77IZE; i++) {
            for (var j = 0; j < MAXS77IZE; j++) {
                switch (maze[x][y]) {
                    case 1:
                        context.fillStyle = "rgb(0, 0, 0)";
                        context.fillRect(10 * x, 10 * y, 10, 10)
                        break;
                    case 0:
                        context.fillStyle = "rgb(255, 255, 255)";
                        context.fillRect(10 * x, 10 * y, 10, 10)

                        break
                    case 2:
                        context.fillStyle = "rgb(255, 0, 0)";
                        context.fillRect(10 * x, 10 * y, 10, 10)

                        break
                    default:

                }
            }
        }

    }
}
function dumpMaze() {
    var str = ""
    for (var i = 0; i < MAXS77IZE; i++) {
        for (var j = 0; j < MAXS77IZE; j++) {
            str = str + maze[i][j]
        }
        str = str + "\n"
    }
    // alert( str)
    console.log(str)
}
function drawMaze() {
    // alert("button start ...")
    for (var i = 0; i < MAXS77IZE; i++) {
        for (var j = 0; j < MAXS77IZE; j++) {
            drawBlock(i, j)
        }
    }
    // alert("button end.")

}
function hitkey() {
    var item = window.event.keyCode

}