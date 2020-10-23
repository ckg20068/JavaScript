function translateX(param) {

}
function translateY(param) {

}
// Global variable
var maze;

var mainX, mainY

function random4() {
    var houkou = Math.floor(Math.random() * 4 + 1)
    return houkou
}
function init() {

    // alert( "makedata...")
    // 迷路の二次元配列を作る

    // 全て道にする
    for (var i = 0; i < 51; i++) {
        for (var j = 0; j < 51; j++) {
            maze[i][j] = 0
        }
    }
    // 外周部を壁にする
    for (var i = 0; i < 51; i++) {


    }
    //  通れない壁を設定する
    for (var i = 2; i < 51 - 2; i += 2) {
        for (var j = 2; j < 51 - 2; j += 2) {
            maze[i][j] = 1
        }
    }
    // 壁を作る
    for (var i = 2; i < 51 - 2; i += 2) {
        for (var j = 2; j < 51 - 2; j += 2) {
            var houkou = random4()
            switch (houkou) {

                default:
                    alert("error")
            }
        }
    }
    maze[0][0] = maze[1][0] = maze[1][1] = maze[0][1] = 0
    maze[51 - 1][51 - 1] = maze[51 - 1 - 1][51 - 1] = maze[51 - 1][51 - 1 - 1] = maze[51 - 1 - 1][51 - 1 - 1] = 0
    
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
        for (var i = 0; i < 51; i++) {
            for (var j = 0; j < 51; j++) {
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
    for (var i = 0; i < 51; i++) {
        for (var j = 0; j < 51; j++) {
            str = str + maze[i][j]
        }
        str = str + "\n"
    }
    // alert( str)
    console.log(str)
}
function drawMaze() {
    // alert("button start ...")
    for (var i = 0; i < 51; i++) {
        for (var j = 0; j < 51; j++) {
            drawBlock(i, j)
        }
    }
    // alert("button end.")

}
function hitkey() {
    var item = window.event.keyCode

}