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
console.log("_____|",mobile,tablet,os)
body = document.body;
squaresMetrix = []

// function is_Mobile() {
//     var check = false;
//     (function(a){
//       if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p1000|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
//         check = true;
//     })(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
//   };

//   function is_Mobile_Tablet(){
//     var check = false;
//     (function(a){
//         if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p1000|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
//             check = true;
//     })(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };


function setup() {
    if (uaData.mobile || !(mobile == 0) || tablet) {
        body.style.width = `${parseInt(screen.width)}px`;
        body.style.height = `${parseInt(screen.height)}px`;
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
            div.style.height = `${squareH - 2}px`;
            div.style.width = `${squareW - 2}px`;
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
createSquares()

console.log(squaresMetrix)

window.addEventListener("resize", () => {
    setup();
    resizeSquares();
})


// console.log("old wrapper dimensions: (",document.body.style.width , ",", document.body.style.height, ")");
// wrapper.style.width = `${parseInt( window.innerWidth)}px`;
// wrapper.style.height = `${parseInt( window.innerHeight)}px`;
// console.log("NEW wrapper dimensions: (",wrapper.style.height, ",", wrapper.style.width,")");
// gameArea.style.width = `${parseInt( window.innerWidth)}px`;
// gameArea.style.height = `${parseInt( window.innerHeight)}px`;
// console.log("NEW wrapper dimensions: (",gameArea.style.height, ",", gameArea.style.width,")");



i_block = {
    0: [[0, 0], [1, 0], [2, 0], [3, 0]],
    1: [[0, 0], [0, 1], [0, 2], [0, 3]]
}

o_block = {
    0: [[0, 0], [0, 1], [1, 0], [1, 1]]
}

t_block = {
    0: [[0, 1], [1, 0], [1, 1], [1, 2]],
    1: [[0, 0], [1, 0], [2, 0], [1, 1]],
    2: [[0, 0], [0, 1], [0, 2], [1, 1]],
    3: [[0, 1], [1, 1], [2, 1], [1, 0]]
}

j_block = {
    0: [[0, 1], [1, 1], [2, 1], [2, 0]],
    1: [[0, 0], [1, 0], [1, 1], [1, 2]],
    2: [[0, 0], [1, 0], [2, 0], [0, 1]],
    3: [[0, 0], [0, 1], [0, 2], [1, 2]]
}

l_block = {
    0: [[0, 0], [1, 0], [2, 0], [2, 1]],
    1: [[0, 0], [0, 1], [0, 2], [1, 0]],
    2: [[0, 0], [0, 1], [1, 1], [2, 1]],
    3: [[1, 0], [1, 1], [1, 2], [0, 2]]
}

s_block = {
    0: [[0, 1], [0, 2], [1, 0], [1, 1]],
    1: [[0, 0], [1, 0], [1, 1], [2, 1]],
}

z_block = {
    0: [[0, 0], [0, 1], [1, 1], [1, 2]],
    1: [[1, 0], [2, 0], [0, 1], [1, 1]],
}

function visualizerRotations(tetri, x, y,i) {
    let ran = Math.floor(Math.random() * 4 + 1)
    console.log("random#", ran)
    console.log(tetri[0].length)
    console.log(tetri[ran % 4])
    
        tetri[i%Object.keys(tetri).length].forEach(pair => {
            r = pair[0]
            c = pair[1]
            squaresMetrix[r + x][c + y].classList.add("tetrimino")

        });
    
}

function clearSquares() {
    document.querySelectorAll(".squares").forEach(t => {
        t.classList.remove("tetrimino")
    });
}
let i = 0;
setInterval(() => {
    clearSquares()
    i++
}, 1000);


setInterval(() => {
    visualizerRotations(l_block, 0, 0,i);
}, 1000);

setInterval(() => {
    visualizerRotations(j_block, 0, 7,i);
}, 1000);

setInterval(() => {
    visualizerRotations(i_block, 6, 0,i);
}, 1000);

setInterval(() => {
    visualizerRotations(t_block, 6, 7,i);
}, 1000);


setInterval(() => {
    visualizerRotations(s_block, 14, 0,i);
}, 1000);

setInterval(() => {
    visualizerRotations(z_block, 14, 7,i);
}, 1000);

setInterval(() => {
    visualizerRotations(o_block, 18, 4,i);
}, 1000);

