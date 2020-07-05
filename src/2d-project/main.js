let CANVAS_WIDTH	= 600; // Canvasの幅
let CANVAS_HEIGHT	= 600; // Canvasの高さ
let BLOCK_WIDTH = 4;
let BLOCK_HEIGHT = 4;
let FIELD_WIDTH		= 12; // フィールドの幅
let FIELD_HEIGHT	= 22; // フィールドの高さ

let FIELD_X			= 40; // フィールドのCanvas内のX座標
let FIELD_Y			= 40; // フィールドのCanvas内のY座標

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
/***
 * 処理関数
 * function
*/
function init() { //初期関数
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
                context.fillStyle = "rgba(150, 150, 150, 1.0)"; // グレーに設定
                context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25); // 25×25の矩形（マス）を描画
		}
	}
}
//	フィールド枠描画
function drawFrame() {
	context.fillStyle = "rgba(230, 230, 230, 1.0)"; // 塗り潰し色を白色に設定
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

/***
 * 実行部分
 */

init();
requestAnimationFrame(main);
function main() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 画面クリア
    drawBlock();
    drawField(); // フィールドを描画
    drawFrame();
	requestAnimationFrame(main); // ループさせる
}