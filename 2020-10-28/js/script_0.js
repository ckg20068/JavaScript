var array = new Array(50)
var flag_init = 0
function arrayInit() {
    for (var i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 10 + 1)
    }
}
arrayInit()


function drawArray() {
    var item = document.getElementById("myCanvas")
    var context = item.getContext("2d")
    for (var i = 0; i < array.length; i++) {
        if (item.getContext) {
            context.fillRect(i * 10, 0, 10, 10 * array[i])
            context.fillStyle = "rgb(255,255,255)"
            context.fillRect(i*10,10*(array[i]+1),10,100)
            context.fillStyle = "rgb(0,0,0)"
        }
    }
}

function bubbleSort() {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                // 交換したときに、処理をいったん中断する
                var tmp = array[i]
                array[i] = array[j]
                array[j] = tmp
                return
            }
        }
    }
}

function startSort() {
    // ある時間間隔で実行する処理を定義する
    var rog = function (){
        drawArray()
        bubbleSort()
    }
    // タイマーを使った処理の登録
    var timer = setInterval(rog, 100)
}