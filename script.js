const wrapper = document.getElementById('wrapper');
const gameArea = document.getElementById('gameArea');
uaData = navigator.userAgentData;
var
    ua = navigator.userAgent,
    browser = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrome\W\d/.test(ua) ? 'gc' : /Chromium\W\d/.test(ua) ? 'oc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
    os = /Windows NT 10/.test(ua) ? "win10" : /Windows NT 6\.0/.test(ua) ? "winvista" : /Windows NT 6\.1/.test(ua) ? "win7" : /Windows NT 6\.\d/.test(ua) ? "win8" : /Windows NT 5\.1/.test(ua) ? "winxp" : /Windows NT [1-5]\./.test(ua) ? "winnt" : /Mac/.test(ua) ? "mac" : /Linux/.test(ua) ? "linux" : /X11/.test(ua) ? "nix" : "",
    mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
    tablet = /Tablet|iPad/i.test(ua),
    touch = 'ontouchstart' in document.documentElement;
console.log(navigator.userAgent)
console.log(navigator.userAgentData)
console.log("_____|", mobile, tablet, os)
body = document.body;
squaresMetrix = []
currentTetrimino = null;
const TETRIMINOS = [{
        name: "i_block",
        looks: {
            0: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ],
            1: [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ]
        },
        color: "rgba(0, 255, 255,1)"
    },
    {
        name: "o_block",
        looks: {
            0: [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1]
            ]
        },
        color: "rgba(255, 255, 0,1)"
    }, {
        name: "t_block",
        looks: {
            0: [
                [0, 1],
                [1, 0],
                [1, 1],
                [1, 2]
            ],
            1: [
                [0, 0],
                [1, 0],
                [2, 0],
                [1, 1]
            ],
            2: [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 1]
            ],
            3: [
                [0, 1],
                [1, 1],
                [2, 1],
                [1, 0]
            ]
        },
        color: "rgba(128, 0, 128,1)"
    },
    {
        name: "j_block",
        looks: {
            0: [
                [0, 1],
                [1, 1],
                [2, 1],
                [2, 0]
            ],
            1: [
                [0, 0],
                [1, 0],
                [1, 1],
                [1, 2]
            ],
            2: [
                [0, 0],
                [1, 0],
                [2, 0],
                [0, 1]
            ],
            3: [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2]
            ]
        },
        color: "rgba(0, 0, 255,1)"
    }, {
        name: "l_block",
        looks: {
            0: [
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1]
            ],
            1: [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 0]
            ],
            2: [
                [0, 0],
                [0, 1],
                [1, 1],
                [2, 1]
            ],
            3: [
                [1, 0],
                [1, 1],
                [1, 2],
                [0, 2]
            ]
        },
        color: "rgba(255, 127, 0,1)"
    }, {
        name: "s_block",
        looks: {
            0: [
                [0, 1],
                [0, 2],
                [1, 0],
                [1, 1]
            ],
            1: [
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1]
            ],
        },
        color: "rgba(0, 255, 0,1)"
    },
    {
        name: "z_block",
        looks: {
            0: [
                [0, 0],
                [0, 1],
                [1, 1],
                [1, 2]
            ],
            1: [
                [1, 0],
                [2, 0],
                [0, 1],
                [1, 1]
            ],
        },
        color: "rgba(255, 0, 0,1)"
    }
];

//classes
class Tetrimino {
    constructor(object) {
        this.name = object.name;
        this.looks = object.looks;
        this.color = object.color;
        this.currentLook = 0;
        this.currentCol = 0;
        this.currentRow = 0;
        this.currentBlocks = new Set()
        this.isSet = false;
    }

    canMove(offsetR, offsetC) {
        console.log("here***8", this.looks)
        var count = 0;

        for (let i = 0; i < this.looks[this.currentLook].length; i++) {
            r = this.looks[this.currentLook][i][0]
            c = this.looks[this.currentLook][i][1]
            r += offsetR
            c += offsetC
            console.log(r, c)
            if ((r < 0) || (r > 19) || (c < 0) || (c > 9)) {
                console.log("cant move")
                return false;
            }
        }
        return true;
    }

    resetSquare() {

        this.looks[this.currentLook].forEach(pair => {
            r = pair[0]
            c = pair[1]
            let square = squaresMetrix[r][c];
            console.log(square)
            square.classList.remove(...square.classList);
            square.classList.add("squares");
            square.style.background = resetSquareOg.style.background
        });
    }

    move(offsetR, offsetC) {
        for (let i = 0; i < this.looks[this.currentLook].length; i++) {
            this.looks[this.currentLook][i][0] += offsetR
            this.looks[this.currentLook][i][1] += offsetC
            r = this.looks[this.currentLook][i][0]
            c = this.looks[this.currentLook][i][1]
            let square = squaresMetrix[r][c];
            square.classList.add("tetrimino");
        }
    }
    
    rotate(){
        var len = this.looks[this.currentLook].length
        this.currentLook+=1;
        this.currentLook %= len;
        for (let i = 0; i < this.looks[this.currentLook].length; i++) {
            let  r = this.looks[this.currentLook][i][0] += this.currentRow
            let c = this.looks[this.currentLook][i][1] += this.currentCol
            squaresMetrix[r + x][c + y].classList.add("tetrimino")
        }

        // this.looks[this.currentLook].forEach(pair => {
        //     // pair[1]+=this.currentCol
        //     r = pair[0]
        //     c = pair[1]
        //     squaresMetrix[r + x][c + y].classList.add("tetrimino")
        // });

        

    }

    moveLeft() {
        if (this.canMove(0, -1)) {
            this.resetSquare()
            this.move(0, -1)
            this.currentCol-=1
        } else {
            console.log("outofbound l")
        }
    }

    moveRight() {
        if (this.canMove(0, 1)) {
            this.resetSquare()
            this.move(0, 1)
            this.currentCol+=1
        } else {
            console.log("outofbound r")
        }
    }

    moveDown() {
        if (this.canMove(1, 0)) {
            this.resetSquare()
            this.move(1, 0)
            this.currentCol+=1

        } else {
            console.log("outofbound r")
        }
    }
}


function setup() {
    if (uaData.mobile || !(mobile == 0) || tablet) {
        body.style.width = `${parseInt(window.screen.width)}px`;
        body.style.height = `${parseInt(window.screen.height)}px`;
        console.log("mobile/tablet")
    } else {
        body.style.width = `${parseInt(window.innerWidth)}px`;
        body.style.height = `${parseInt(window.innerHeight)}px`;
        console.log("desktop/laptop")
    }

    console.log("body (", document.body.style.width, ",", document.body.style.height, ")");

    gameArea.style.width = `${(parseInt(body.style.height) - 32) / (2)}px`;
    gameArea.style.height = `${parseInt(gameArea.style.width) * 2}px`;
    gameArea.style.left = `${(parseInt(body.style.width) / 2) - (parseInt(gameArea.style.width) / 2)}px`;
    console.log("gameArea: (", gameArea.style.width, ",", gameArea.style.height, ")");

    squareH = parseInt(gameArea.style.height) / 20;
    squareW = parseInt(gameArea.style.width) / 10;
}

function createSquares() {
    for (let i = 0; i < 20; i++) {
        row = []
        for (let j = 0; j < 10; j++) {
            let div = document.createElement("div")
            div.style.height = `${squareH - 2.2}px`;
            div.style.width = `${squareW - 2.2}px`;
            div.classList.add("squares")
            gameArea.appendChild(div);
            console.log("(", div.style.width, ",", div.style.height, ")");
            row.push(div)
        }
        squaresMetrix.push(row)
    }
}

function resizeSquares() {
    squareH = parseInt(gameArea.style.height) / 20;
    squareW = parseInt(gameArea.style.width) / 10;
    squaresMetrix.forEach(row => {
        row.forEach(div => {
            div.style.height = `${squareH - 2}px`;
            div.style.width = `${squareW - 2}px`;
            div.classList.add("squares")
            gameArea.appendChild(div);
            console.log("(", div.style.width, ",", div.style.height, ")");
        });
    });
}

setup();
createSquares();
const resetSquareOg = document.createElement("resetSquareOg")
resetSquareOg.style.height = `${squareH - 2}px`;
resetSquareOg.style.width = `${squareW - 2}px`;
resetSquareOg.classList.add("squares")
console.log(squaresMetrix);


function visualizerRotations(tetri, x, y, i) {
    let ran = Math.floor(Math.random() * 4 + 1)
    console.log("random#", ran)
    console.log(tetri[0].length)
    console.log(tetri[ran % 4])
    tetri[i % Object.keys(tetri).length].forEach(pair => {
        r = pair[0]
        c = pair[1]
        squaresMetrix[r + x][c + y].classList.add("tetrimino")
    });

}

function clearSquares() {
    document.querySelectorAll(".squares").forEach(t => {
        t.classList.remove(...t.classList);
        t.classList.add("squares")
    });
}

var tetObj = TETRIMINOS[Math.floor(Math.random() * TETRIMINOS.length)];
currentTetrimino = new Tetrimino(tetObj);
looks = currentTetrimino.looks;
console.log(looks)
currentTetrimino.currentCol = 4
for (let i = 0; i < currentTetrimino.looks[0].length; i++) {
    currentTetrimino.looks[0][i][1] += currentTetrimino.currentCol ;
    let r = currentTetrimino.looks[0][i][0]
    let c = currentTetrimino.looks[0][i][1]
    console.log(`start here: (${r},${c})`)
}

looks[0].forEach(pair => {
    r = pair[0]
    c = pair[1]
    squaresMetrix[r][c].classList.add("tetrimino")
    squaresMetrix[r][c].style.background = currentTetrimino.color
});




//timmers
setInterval(()=>{currentTetrimino.moveDown()}, 1000);

// event listeners 

window.addEventListener("resize", () => {
    setup();
    resizeSquares();
})

document.addEventListener("keyup", (event) => {
    event.preventDefault()
    switch (event.key) {
        case "ArrowLeft":
            // Left pressed

            currentTetrimino.moveLeft()
            break;
        case "ArrowRight":
            // Right pressed
            currentTetrimino.moveRight()
            break;

        case " ":
            // Right presse
            console.log("SPACE KEY UP")
            currentTetrimino.rotate()
            break;
    }
});
