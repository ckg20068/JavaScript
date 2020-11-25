// 壁に衝突した時にどこに当たったかを表すフラグ
var HIT_BOTTOM = 4
var HIT_LEFT = 3
var HIT_RIGHT = 2
var HIT_TOP = 1
// 壁の厚み
var WALL_THICKNESS = 5
// キャンバスのサイズ
var screenH
var screenW
// ラケットの位置
var pos_Racket_x
var pos_Racket_y
// ラケットサイズ
var racket_h = 5
var racket_w = 40
// ボールの座標
var ballx = 200
var bally = 100
// ボールの移動量
var balldx = -1
var balldy = 1
// ボールの半径
var ball_radius = 5
// タイマーの制御用
var timer = null

document.addEventListener('keydown', (event) => {
    var keyName = event.code
    switch (keyName) {
        case "ArrowRight":
            clearRacket()
            pos_Racket_x += 5
            drawRacket()
            break
        case "ArrowLeft":
            clearRacket()
            pos_Racket_x -= 5
            drawRacket()
            break
    }

})
function checkRacket() {
    if (bally + ball_radius >= pos_Racket_y) {

    }
}
function init() {
    // キャンバスからスクリーンサイズを取得する
    var item = document.getElementById("myCanvas")
    screenW = item.getAttribute("width").replace("px", "") * 1
    screenH = item.getAttribute("height").replace("px", "") * 1
    console.log(screenW)
    pos_Racket_x = screenW / 2
    pos_Racket_y = screenH - WALL_THICKNESS * 4
    drawWall()  //  壁を描く
    drawRacket()    //  ラケットを絵が開く
    drawBall()      //  ボールを描く
    var item2 = document.getElementById("secGameOver")
    item2.style.display = "none"
}

function drawWall() {
    console.log("drawWall() called.")
    var item = document.getElementById("myCanvas")
    if (item.getContext) {
        var ctx = item.getContext('2d');
        // ここから下は参考情報
        // ctx.fillRect(50,50,300,260); //  塗りつぶし長方形を描く
        // ctx.clearRect(120,80,200,180);   //  長方形の輪郭を描く
        // ctx.strokeRect(180,20,180,180);  //  指定された領域を消去し透明にする
        // 右の壁を描く

        // 上の壁を描く
        ctx.fillStyle = "rgb(10,100,50)"
        ctx.fillRect(0, 0, screenW, WALL_THICKNESS - 1)
        // 左の壁を描く
        ctx.fillRect(0, 0, WALL_THICKNESS, screenH)
        // 外周を描く

        //  ？？
        ctx.fillRect(0 + screenW - WALL_THICKNESS, 0, WALL_THICKNESS, screenH)
    }
}
function drawRacket() {
    console.log("drawRacket() called.")
    var item = document.getElementById("myCanvas")
    if (item.getContext) {
        var ctx = item.getContext('2d')
        //  ラケットを描く　
        // 座標（pos_racket_x, pos_racket_y)
        ctx.fillStyle = "black"
        ctx.fillRect(pos_Racket_x, pos_Racket_y, racket_w, racket_h)
    }
}
function clearRacket() {
    console.log("clearRacket() called.")
    var item = document.getElementById("myCanvas")
    if (item.getContext) {
        var ctx = item.getContext('2d')
        ctx.fillStyle = "white"
        ctx.fillRect(pos_Racket_x, pos_Racket_y, racket_w, racket_h)
    }
}
function doStart() {
    var log = function () {
        // ボールの位置は、(ballx,bally)。
        // x方向の移動量はballdx
        // y方向の移動量はballdy
        ballx += balldx
        bally += balldy
        // デバッグ用
        console.log("ballx:" + ballx + " bally:" + bally)
        flag = checkWall(ballx, bally)
        switch (flag) {
            case HIT_TOP:

            case HIT_BOTTOM:

            case HIT_LEFT:

            case HIT_RIGHT:

        }
        clearBall()
        drawBall()
    }
    timer = setInterval(log, 10)

}
function drawBall() {
    var item = document.getElementById("myCanvas")
    if (item.getContext) {
        var ctx = item.getContext("2d")

        ctx.beginPath();
        ctx.fillStyle = "black"
        // ctx.fillStyle="green"
        ctx.arc(ballx, bally, ball_radius, 0, Math.PI * 2.0, true);
        ctx.fill();
    }
}
function clearBall() {
    var item = document.getElementById("myCanvas")
    if (item.getContext) {
        var ctx = item.getContext("2d")
        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(ballx - balldx, bally - balldy, ball_radius + 1, 0, Math.PI * 2.0, true);
        ctx.fill();
    }
}
function checkWall() {
    // 上の壁に当たったら、跳ね返る
    if (bally <= WALL_THICKNESS * 2) {
        balldy = balldy * (-1)
    }
    // 右の壁に当たったら、跳ね返る
    if (ballx >= screenW - WALL_THICKNESS * 2) {
        balldx = balldx * (-1)
    }
    // 左の壁に当たったら、跳ね返る
    if (ballx <= WALL_THICKNESS + ball_radius + 1) {
        balldx = balldx * (-1)
    }
    if (balldy > 0) {
        if ((bally + ball_radius > pos_Racket_y) && (ballx + ball_radius > pos_Racket_x) && (ballx < pos_Racket_x + racket_w)) {
            balldy = balldy * (-1)
        }
    }
    if (bally > screenH - WALL_THICKNESS * 2) {
        gameovar()
    }

}
function gameovar() {
    //ゲームオーバー画面を表示する
    var item = document.getElementById("secGameOver")
    item.style.display = "block"
    //キャンバスを消す
    var item2 = document.getElementById("myCanvas")
    item2.style.display = "none"
}
function stopGame() {
    if (timer != null) {
        clearInterval(timer)
    }
}
function hitkey() {
    var item = windows.event.keyCode
}
function ring() {
    document.getElementById("GameOverSound").play();
}