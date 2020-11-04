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
            
        }
    }
}

function bubbleSort(){
    for ( var  i = 0 ; i < array.length; i++){
        for ( var j =i+1 ; j<array.length; j++){
            if ( array[i]>array[j]){
                // 交換したときに、処理をいったん中断する

                return
            }
        }
    }
}

function startSort() {
    // ある時間間隔で実行する処理を定義する

    // タイマーを使った処理の登録

}