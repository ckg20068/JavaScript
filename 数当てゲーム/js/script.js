
var kotae
var score

function gameinit(){
    kotae=Math.floor(Math.random()*3+1)
    score=100
}
function number(p){

    var pname="p"+p
    var item=document.getElementById(pname)
    if(p==kotae){
        item.src="img/atari.jpg"
        alert("atari")
    }else{
        item.src="img/hazure.jpg"
        alert("hazure")
        score=100-50
    }
    var sc=document.getElementById("sc")
    sc.innerHTML="score;"+score
}