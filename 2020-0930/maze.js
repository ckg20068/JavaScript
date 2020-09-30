"use strict";

// 迷路生成（棒倒し法）
// http://www5d.biglobe.ne.jp/~stssk/maze/make.html

window.addEventListener("load", ev => {

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  document.body.appendChild(canvas);
  const c2d = canvas.getContext("2d");

  // 乱数生成
  function rand(n) {
    return Math.floor(Math.random() * n);
  }

  // 迷路の横幅と高さを指定（奇数）
  const width = 33, height = 33;
  const maze = [];

  // 迷路の2次元配列作成　壁は1、通路は0
  function createMazeArray(height, width){
    // 迷路のベースを作る
    for(let y = 1; y < height+1; y++){
      maze[y] = [];
      for(let x = 1; x < width+1; x++){
        // 1行目と最終行、1列目と最終列は1
        if(y == 1 || y == height || x == 1 || x == width){
        maze[y][x] = 1;
        }
        // 奇数行の奇数列は1
        else if(y % 2 == 1 && x % 2 == 1){
        maze[y][x] = 1;
        }
        // そのほかは0
        else{
        maze[y][x] = 0;
        }
      }
    }
    // // 奇数行の奇数列のみ処理
    // for(let y = 3; y < height; y+=2){
    //   for(let x = 3; x < width; x+=2){
    //     // 棒を倒せる方向を配列にする
    //     // 右と下は全パターンでOK
    //     const direction = ["right", "down"];
    //     // 1回目なら上もOK
    //     if(y == 3){
    //     direction.push("up");
    //     }
    //     // 左が壁じゃなければ左もOK
    //     if(maze[y][x-1] == 0){
    //     direction.push("left");
    //     }
    //     switch (direction[rand(direction.length)]) {
    //       case "up":
    //         maze[y-1][x] = 1;
    //         break;
    //       case "right":
    //         maze[y][x+1] = 1;
    //         break;
    //       case "down":
    //         maze[y+1][x] = 1;
    //         break;
    //       case "left":
    //         maze[y][x-1] = 1;
    //         break;
    //     }
    //   }
    // }
    
    // 入口と出口を作成
    maze[1][2] = 0;
    maze[height][width-1] = 0;
  }

  // 迷路を表示
  function displayMaze(){
    createMazeArray(height, width);
    // カンバスの大きさに合わせてサイズを拡大
    c2d.scale(canvas.width / width-1, canvas.width / width-1);
    for(let y = 1; y < height+1; y++){
      for(let x = 1; x < width+1; x++){
        if(maze[y][x] == 1){
          c2d.fillRect(x, y, 1, 1);
        }
      }
    }
  }

  displayMaze();

}, false);