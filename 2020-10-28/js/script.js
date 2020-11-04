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
            context.fillStyle="rgb(255,255,255)"
            context.fillRect( i*10,10 * (array[i]+1), 10, 100) 
            context.fillStyle="rgb(0,0,0)"
        }
    }
}
function merge(  a1,  a2){
    var i =0, j=0
    var a = new Array( a1.length+a2.length+2)
    while( i<a1.length || j <a2.length){
        if (j>a2.length || (i<a1.length&&a1[i]<a2[j])){
            a[i+j]=a1[i]
            i++
        }else {
            a[i+j]=a2[j]
            j++
        }
    }
}
function mergeSort( ar){
    if( ar.length>1){
        var m = ar.length/2
        var n = ar.length-m
        var a1 = new Array(m)
        var a2 = new Array(n)
        for ( var i =0; i<m;i++){
            a1[i]=ar[i]
        }
        for (var i=0; i<n;i++){
            a2[i]=ar[m+i]
            mergeSort( a1)
            mergeSort(a2)
            ar = mergeSort( a1,a2)
        }
    }
}
function bubbleSort(){
    for ( var  i = 0 ; i < array.length; i++){
        for ( var j =i+1 ; j<array.length; j++){
            if ( array[i]>array[j]){
                var tmp = array[i]
                array[i]=array[j]
                array[j]=tmp
                return
            }
        }
    }
}

function startSort() {
    // drawArray()
    var log = function () {
        drawArray()
        bubbleSort()
        // mergeSort( array)
    }
    var timer = setInterval(log, 100)
}