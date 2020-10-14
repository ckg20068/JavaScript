// 使用する変数（グローバル変数）
// 全ての関数で共通に使うものは、関数の外で宣言する
var ary
var CONST_WALL = 1
var CONST_STREET = 0
var RAND_MAX = 4
var RAND_MIN = 1
var MAZE_AREA_SIZE = 100

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
    ary = new Array(100)
    for (var index = 0; index < ary.length; index++) {
        ary[index] = new Array(100)
    }
    //  initilal wall
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            ary[i][j] = 100
        }
    }
    //  inner area is street
    for (var i = 1; i < 99; i++) {
        for (var j = 1; j < 99; j++) {
            ary[i][j] = 100
        }
    }
    //  make 柱

    //  make wall
    
    var item = document.getElementById("myCanvas")
    context = item.getContext("2d")
    if (item.getContext) {
        // 迷路の画面描画

    }
}
// 自分のキャラクタを移動させるには、x[ms]に1度画面を書き換える操作が必要になる。
// このために必要になる昨日は、タイマーという機能
