const wrapper = document.getElementById('wrapper');
const topArea = document.getElementById('topArea');
const middleArea = document.getElementById('middleArea');
const bottomArea = document.getElementById('bottomArea');
const plusDiv = document.getElementById('plusDiv');
const plusLogo = document.getElementById('plusLogo');
// const letters = new Set(["a","b","c"]);

console.log(window);
console.log(wrapper.style);

// wrapper.style.width = window.innerWidth;
// wrapper.style.height = window.innerHeight;
document.body.clientWidth = window.innerWidth;
document.body.clientHeight = window.innerHeight;
console.log("new body dimensions: (",document.body.clientHeight, ",", document.body.clientWidth,")");
wrapper.style.height = document.body.clientHeight;
wrapper.style.width = document.body.clientWidth;
topList = [];
tasksList = [];
favoriteTasksList = [];


console.log(window.innerWidth);
console.log(wrapper.style.width);



/** function to resize child based on a give parent/grandparent*/
function setChildWidthHeight(parent, child, percentH, percentW){
    if(parent == window){
        child.style.width = window.innerWidth*percentW;
        // console.log(child.id,topArea.style.width)
        child.style.height = window.innerHeight*percentH;
        console.log("deminsions of ",child.id, "are now: (",child.style.height,",",child.style.width,")");
    }else if(parent == document){
        child.style.width = document.body.clientWidth*percentW;
        // console.log(child.id,topArea.style.width)
        child.style.height = document.body.clientHeight*percentH;
        console.log("deminsions of ",child.id, "are now: (",child.style.height,",",child.style.width,")");
    }
}

function setUp(){

setChildWidthHeight(document, topArea, 0.15, 1);
setChildWidthHeight(document, bottomArea, 0.08, 1);
middleArea.style.height = (document.body.clientHeight -(parseInt(topArea.style.height)+ parseInt(bottomArea.style.height)));
plusDiv.style.top = (parseInt(topArea.style.height) + parseInt(middleArea.style.height))-parseInt(bottomArea.style.height);
plusDiv.style.left = (parseInt(document.body.clientWidth)/2) - 50 ;
console.log("location of ",plusDiv.id, "is now: (",plusDiv.style.left,",",plusDiv.style.top,")");
// plusLogo.style.top = (parseInt(topArea.style.height)) + parseInt(middleArea.style.height);
// plusLogo.style.left = (parseInt(document.body.clientWidth)/2)+500 ;
// plusLogo.style.top = parseInt(plusDiv.style.top)+50;
// plusLogo.style.left = parseInt(plusDiv.style.left)+50;

console.log("location of ",plusLogo.id, "is now: (",plusLogo.style.left,",",plusLogo.style.top,")");

bottomArea.style.gap = document.body.clientWidth-100
}
setUp();








/**Event Listeningers */
window.addEventListener("resize",()=>{
    document.body.clientWidth = window.innerWidth;
    document.body.clientHeight = window.innerHeight;
    console.log("new body dimensions: (",document.body.clientHeight, ",", document.body.clientWidth,")");
    wrapper.style.width = document.body.clientWidth;
    wrapper.style.height = document.body.clientHeight;
    setUp();
//     setChildWidthHeight(document, topArea, 0.15, 1);
//     setChildWidthHeight(document, bottomArea, 0.08, 1);
//     middleArea.style.height = (document.body.clientHeight -(parseInt(topArea.style.height)+ parseInt(bottomArea.style.height)));
//     plusDiv.style.top = (parseInt(topArea.style.height) + parseInt(middleArea.style.height))-parseInt(bottomArea.style.height);
//     plusDiv.style.left = (parseInt(document.body.clientWidth)/2) ;
//     plusLogo.style.top = parseInt(plusDiv.style.top)+50;
// plusLogo.style.left = parseInt(plusDiv.style.left)+50;
//     console.log("location of ",plusDiv.id, "is now: (",plusDiv.style.left,",",plusDiv.style.top,")");

})