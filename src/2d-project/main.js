let CANVAS_WIDTH	= 600; // Canvasの幅
let CANVAS_HEIGHT	= 600; // Canvasの高さ
let BLOCK_WIDTH = 4;
let BLOCK_HEIGHT = 4;
let FIELD_WIDTH		= 12; // フィールドの幅（マス）
let FIELD_HEIGHT	= 22; // フィールドの高さ（マス）

let FIELD_X			= 40; // フィールドのCanvas内のX座標
let FIELD_Y			= 40; // フィールドのCanvas内のY座標

let KEY_RIGHT		= 0; // 右キー
let KEY_LEFT		= 1; // 左キー
let KEY_UP			= 2; // 上キー
let KEY_DOWN		= 3; // 下キー
let KEY_SPACE		= 4; // スペースキー
var key = Array(5); // キー判定用変数
key[KEY_RIGHT]	= 0;
key[KEY_LEFT]	= 0;
key[KEY_UP]		= 0;
key[KEY_DOWN]	= 0;
key[KEY_SPACE]	= 0;

let block = [ // ブロックの定義
    [	//	block type 0
        [
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
    ],
    [	//	block type 1
        [
            [0, 0, 0, 0,],
            [1, 1, 1, 1,],
            [0, 0, 0, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [1, 1, 1, 1,],
            [0, 0, 0, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
        ],
    ],
    [	//	block type 2
        [
            [0, 0, 0, 0,],
            [0, 0, 1, 1,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [0, 0, 1, 1,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,],
        ],
    ],
    [	//	block type 3
        [
            [0, 0, 0, 0,],
            [1, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 1, 0,],
            [0, 1, 1, 0,],
            [0, 1, 0, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [1, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 1, 0,],
            [0, 1, 1, 0,],
            [0, 1, 0, 0,],
            [0, 0, 0, 0,],
        ],
    ],
    [	//	block type 4
        [
            [0, 0, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 1, 1,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 1, 1, 0,],
            [0, 1, 0, 0,],
            [0, 1, 0, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [1, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
    ],
    [	//	block type 5
        [
            [0, 0, 0, 0,],
            [0, 0, 1, 0,],
            [1, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 1, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [0, 1, 1, 1,],
            [0, 1, 0, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,],
        ],
    ],
    [	//	block type 6
        [
            [0, 0, 0, 0,],
            [0, 1, 1, 1,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 0, 0, 0,],
            [0, 0, 1, 0,],
            [0, 1, 1, 1,],
            [0, 0, 0, 0,],
        ],
        [
            [0, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 0, 0,],
            [0, 0, 0, 0,],
        ],
    ],
];

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var field;

var btype, brot;
var bx, by;

var cnt;

var bflag;//フラッグの着地フラグ
var delflag;//ブロックの削除フラグ
var dropflag;//行削除後のブロック落下フラグ
/***
 * 処理関数
 * function
*/
function init() { //初期関数
    cnt = 1;//カウンタ変数
    field = [ // Fieldの内容
        [9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
    ];
	bx = 4; // ブロックのX座標（マス）
	by = 0; // ブロックのY座標（マス）
	btype = 3; // ブロックの種類
    brot = 1; // ブロックの回転種類
    
    delflag = Array(FIELD_HEIGHT); // 配列として定義
    dropflag = false; // 行削除後のブロック落下フラグ
}

//	「何もない行」かどうか判定
function rowJudge(num) {
	var flag = true;
	
	for(var i = 1;i < FIELD_WIDTH - 1;i++) {
		if(field[num][i] != 0) { // １つでもブロックが埋まっていたらフラグをオフにして処理を終了する
			flag = false;
			break;
		}
	}
	
	return flag;
}

function update(){
    if(cnt%30==0){
        if(dropflag) { // 落下フラグがオンなら
			var num = 0; // 削除された行の番号
			
			for(var i = FIELD_HEIGHT - 2;i > 0;i--) {
				if(rowJudge(i)) { // 削除された行かどうか判定
					num = i; // 削除された行なら「num」に代入してループを抜ける
					break;
				}
			}
			
			for(var i = num;i > 1;i--) { // 「num」番目の行より上にあるブロックを対象に落下させる
				for(var j = 1;j < FIELD_WIDTH -1;j++) {
					field[i][j] = field[i - 1][j]; // １つ上の行と全く同じ内容にする
				}
			}
			for(var i = 1;i < FIELD_WIDTH - 1;i++) { // 「１」行目は必ず空白になるので、削除する
				field[1][i] = 0;
			}
			
			var flag = false;
			
			for(var i = FIELD_HEIGHT - 2;i > 1;i--) {
				if(rowJudge(i)) { // 下から順に見て、一番最初の空白行を「num」に代入
					flag = true; // フラグをオンにする
					num = i;
					break;
				}
			}
			
			if(flag) { // フラグがオンなら（空白行があるなら）
				dropflag = false;
				for(var i = 2;i < num;i++) {
					if(!rowJudge(i)) { // 2〜「num」までの間に空白があるなら落下処理を続行させる
						dropflag = true;
						break;
					}
				}
			}
			else if(!flag) { // 空白行がないなら落下フラグをオフにする
				dropflag = false;
			}
		}
		else if(!dropflag) {

            by ++;
            var breakflag = false;
            for(var i = 0;i < BLOCK_HEIGHT;i++) {
                for(var j = 0;j < BLOCK_WIDTH;j++) {
                    //	配列番号がおかしい場合は処理しない
                    if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
                        by + i < 0 || by + i >= FIELD_HEIGHT) continue;
                    
                    //	同じ座標（マス）にブロックとブロック・壁が重なったら
                    if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
                        bflag = true;//ブロックの着地フラグをオンにする
                        by--; // 移動距離分を戻す
                        breakflag = true; // ループを抜ける
                        break;
                    }
                }
                if(breakflag) break;
            }
        }
    }
}

//	落下ブロックの登録
function enterBlock() {
	if(!bflag) return;
	
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
				by + i < 0 || by + i >= FIELD_HEIGHT) continue;
			
			//	ブロックが「０」なら処理しない
			if(block[btype][brot][i][j] == 0) continue;
			
			//	ブロックをフィールドに登録
            field[by + i][bx + j] = 1;
		}
    }
    deleteJudge(); // 削除行を検索

    bflag = false; // ブロック着地フラグを解除
	bx = 4; // ブロックのX座標
	by = -4; // ブロックのY座標
	
	btype = 0; // ブロックの種類
	brot = 0; // ブロックの回転種類
}
//	ブロック行の削除判定
function deleteJudge() {
	for(var i = 1;i < FIELD_HEIGHT - 1;i++) { // 壁は含まないので「1〜FIELD_HEIGHT - 1」の間になります。
		for(var j = 1;j < FIELD_WIDTH - 1;j++) {
			if(field[i][j] != 0) {
				delflag[i] = true;
			}
			else if(field[i][j] == 0) { // 行内に１つでも空白があったら削除フラグは立てずに、ループを抜ける
				delflag[i] = false;
				break;
			}
		}
	}
	
	for(var i = 1;i < FIELD_HEIGHT - 1;i++) {
        if(!delflag[i]) continue; // 削除フラグが立っていなかったら処理しない
        
        if(!dropflag) dropflag = true; // 落下フラグがオフならオンにする
		
		//	ブロック行を削除
		for(var j = 1;j < FIELD_WIDTH - 1;j++) field[i][j] = 0;
	}
	
	//	delflag の初期化
	for(var i = 0;i < FIELD_HEIGHT;i++) delflag[i] = false;
}


//	落下ブロックの描画
function drawBlock() {
	context.fillStyle = "rgba(255, 100, 100, 1.0)"; // 赤色に設定
	//	ブロックを描画
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(block[btype][brot][i][j] == 1) {
				context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
			}
		}
	}
}
//	フィールド描画
function drawField() {
	for(var i = 0;i < FIELD_HEIGHT;i++) {
		for(var j = 0;j < FIELD_WIDTH;j++) {
            if(field[i][j] == 0) continue; // 「０」なら描画しない
                var str;
                switch(field[i][j]) {
                case 1: str = "rgba(255, 100, 100, 1.0)"; break; // 赤に設定
                case 9: str = "rgba(150, 150, 150, 1.0)"; break; // グレーに設定
                }
                context.fillStyle = str;
                context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25); // 25×25の矩形（マス）を描画
		}
	}
}
//	フィールド枠描画
function drawFrame() {
	context.fillStyle = "rgba(128, 128, 128, 1.0)"; // 塗り潰し色をグレーに設定
	//	縦線を描画(グリッドのこと)
	for(var i = 0;i < FIELD_WIDTH + 1;i++) {
        context.fillRect(FIELD_X + i * 25, FIELD_Y, 1, 25 * FIELD_HEIGHT);
        // contenxt.fillRect(x座標,y座標,幅,高さ)
	}
	//	横線を描画
	for(var i = 0;i < FIELD_HEIGHT + 1;i++) {
		context.fillRect(FIELD_X, FIELD_Y + i * 25, 25 * FIELD_WIDTH, 1);
	}
}
//キー操作関数
function keyCtrl() {
	if(key[KEY_RIGHT] <= 1 && key[KEY_LEFT] <= 1) {
		bx += key[KEY_RIGHT] - key[KEY_LEFT]; // 横移動
		
		var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
					by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				// 当たり判定
				if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
					bx -= key[KEY_RIGHT] - key[KEY_LEFT]; // 移動距離分を戻す
					breakflag = true; // ループを抜ける
					break;
				}
			}
			if(breakflag) break;
		}
		// キーの状態を更新
		if(key[KEY_RIGHT] == 1) key[KEY_RIGHT]++;
		else if(key[KEY_LEFT] == 1) key[KEY_LEFT]++;
	}
	
	if(key[KEY_DOWN] <= 1 && key[KEY_UP] <= 1) {
		brot += key[KEY_DOWN] - key[KEY_UP]; // 回転
		if(brot < 0) brot = 3;
		else if(brot > 3) brot = 0;
		
		var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH ||
						by + i < 0 || by + i >= FIELD_HEIGHT) continue;
				
				// 当たり判定
				if((field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) ||
					(block[btype][brot][i][j] == 1 && by + i < 0)) {
					brot -= key[KEY_DOWN] - key[KEY_UP]; // 回転を戻す
					if(brot < 0) brot = 3;
					else if(brot > 3) brot = 0;
					breakflag = true; // ループを抜ける
					break;
				}
			}
			if(breakflag) break;
		}
		
		// キーの状態を更新
		if(key[KEY_DOWN] == 1) key[KEY_DOWN]++;
		else if(key[KEY_UP] == 1) key[KEY_UP]++;
	}
}

/***
 * キーイベント
 */
document.addEventListener("keydown", e => { // キー押下処理
	var keyCode = e.keyCode; // キーコードの取得
	switch(keyCode) {
	case 39: key[KEY_RIGHT]++;	break;
	case 37: key[KEY_LEFT]++;	break;
	case 38: key[KEY_UP]++;		break;
	case 40: key[KEY_DOWN]++;	break;
	case 32: key[KEY_SPACE]++;	break;
    }
});
document.addEventListener("keyup", e => { // キー離上処理
	var keyCode = e.keyCode; // キーコードの取得
	switch(keyCode) {
	case 39: key[KEY_RIGHT]	= 0; break;
	case 37: key[KEY_LEFT]	= 0; break;
	case 38: key[KEY_UP]	= 0; break;
	case 40: key[KEY_DOWN]	= 0; break;
	case 32: key[KEY_SPACE]	= 0; break;
    }
});

/***
 * 実行部分
 */

init();
requestAnimationFrame(main);
function main() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 画面クリア

    keyCtrl();
    update();
    enterBlock();

    drawBlock();
    drawField(); // フィールドを描画
    drawFrame();

    cnt++;

    requestAnimationFrame(main); // ループさせる

}
