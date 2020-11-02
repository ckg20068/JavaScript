startX = 300
startY = 200
var SCALE = 50
WIDTH = 600
HEIGHT = 400
var timer = null

function makeTheta() {

}
function doAction() {
    var log = function () {
        var dx, dy  //  1回あたりの移動量を計算する
        // 移動量の計算

        // キャンバスの取得と、描画の準備
        var item = document.getElementById("myCanvas")
        var context = item.getContext("2d")
        if (item.getContext) {
            // ペンを使用する
            context.beginPath()
            // ペンの始点の移動
            context.moveTo(startX, startY)
            // 画面サイズをオーバーするときの処理
            
            // ログ出力
            //    console.log( "   :"+startX+ ", startY:"+startY)
            // ペンの終点の移動
            
            // 次の支店の移動

            // ペン処理の終了
            context.closePath()
            // 描画
            context.stroke()
        }
        //    console.log  ("test")
    }
    timer = setInterval(log, 10)
}
function stopAction() {
    // タイマーが実行されている場合には、nullではない
    if (null != timer) {
        clearInterval(timer)
    }
}