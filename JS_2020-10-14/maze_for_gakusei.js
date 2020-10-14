// 使用する変数（グローバル変数）
// 全ての関数で共通に使うものは、関数の外で宣言する
var ary
var CONST_WALL = 1
var CONST_STREET = 0
var RAND_MAX = 4
var RAND_MIN = 1
var MAZE_AREA_SIZE = 101

// 原点の描画位置を変更
function ConvertX(parameterX) {
    return parameterX + 200
}
function ConvertY(parameterY) {
    return 390 - parameterY
}
// 乱数の作成
function makeRandom4() {
    var num = Math.floor(4 * Math.random() + 1)
    return num
}
// ボタン押下時の処理
function pushButton() {
    // alert( "ok")
    //  initial array.
    ary = new Array(MAZE_AREA_SIZE)
    for (var index = 0; index < ary.length; index++) {
        ary[index] = new Array(MAZE_AREA_SIZE)
    }
    //  initilal wall
    for (var i = 0; i < MAZE_AREA_SIZE; i++) {
        for (var j = 0; j < MAZE_AREA_SIZE; j++) {
            ary[i][j] = CONST_WALL
        }
    }
    //  inner area is street
    for (var i = 1; i < MAZE_AREA_SIZE - 1; i++) {
        for (var j = 1; j < MAZE_AREA_SIZE - 1; j++) {
            ary[i][j] = CONST_STREET
        }
    }
    //  make 柱
    for (var i = 2; i < MAZE_AREA_SIZE; i += 2) {
        for (var j = 2; j < MAZE_AREA_SIZE; j += 2) {
            ary[i][j] = CONST_WALL
        }
    }
    //  make wall
    for (var i = 2; i < MAZE_AREA_SIZE - 1; i += 2) {
        for (var j = 2; j < MAZE_AREA_SIZE - 1; j += 2) {
            var houkou = makeRandom4()
            switch (houkou) {
                case 1:
                    ary[i - 1][j] = CONST_WALL
                    break
                case 2:
                    ary[i + 1][j] = CONST_WALL
                    break
                case 3:
                    ary[i][j - 1] = CONST_WALL
                    break
                case 4:
                    ary[i][j + 1] = CONST_WALL
                    break
            }
        }
    }
    var item = document.getElementById("myCanvas")
    context = item.getContext("2d")
    if (item.getContext) {
        // 迷路の画面描画
        for (var i = 0; i < MAZE_AREA_SIZE; i++) {
            for (var j = 0; j < MAZE_AREA_SIZE; j++) {
                if (ary[i][j] == CONST_WALL) {
                    context.fillStyle="black"
                    context.fillRect(ConvertX(i * 2), ConvertY(j * 2), 2, 2)
                } else {
                    context.fillStyle = "rgb(255,255,255)"
                    context.fillRect(ConvertX(i * 2), ConvertY(j * 2), 2, 2)
                }

            }
        }
    }
}
// 自分のキャラクタを移動させるには、x[ms]に1度画面を書き換える操作が必要になる。
// このために必要になる昨日は、タイマーという機能
