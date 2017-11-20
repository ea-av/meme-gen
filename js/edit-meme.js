'use strict'

console.log('edit-meme');
var canvas;
var ctx;
var elTextOnCanvas = document.querySelector('.text-area').innerText;
var xText = 0;
var yText = 0;
var gCurrImg;
var gCurrFontStyle = 'Verdana';
var gFontSize = 70;
var gFontColor = 'white'

var mousePosition;
var offset = [0, 0];
var textArea = document.querySelector(".text-area");
var isDown = false;


function openEditMod(elImg) {
    var elImgArea = document.querySelector('.imgs-container');
    var elEditArea = document.querySelector('.edit-area');
    var elEditAreaImg = document.querySelector('.edit-area-img');
    elEditArea.style.display = 'flex';
    elImgArea.style.display = 'none';
    elEditAreaImg.src = `img/${elImg.id}.jpg`;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawOnCanvas(elEditAreaImg.src);
}

function closeEditMod(elImg) {
    var elEditArea = document.querySelector('.edit-area');
    elEditArea.style.display = 'none';
    var elImgArea = document.querySelector('.imgs-container');
    elImgArea.style.display = 'block';

}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawOnCanvas();
}



/**
* Demonstrates how to download a canvas an image with a single
* direct click on a link.
*/
function drawOnCanvas(imgSrc) {
    gCurrImg = imgSrc;
    var img = new Image();
    img.src = imgSrc;

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 400, 400);
        console.log(gFontSize);
        var ctxFontStr = gFontSize + 'px ' + gCurrFontStyle;
        console.log(ctxFontStr);

        ctx.font = ctxFontStr;
        console.log(ctx.font);
        ctx.fillStyle = gFontColor;
        ctx.fillText(elTextOnCanvas, xText -200 , yText - 140, 350);
        ctx.textAlign = "center";
    };
}

/**
* This is the function that will take care of image extracting and
* setting proper filename for the download.
* IMPORTANT: Call it from within a onclick event.
*/
function downloadImg(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}


textArea.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        textArea.offsetLeft - e.clientX,
        textArea.offsetTop - e.clientY
    ];


}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x: event.clientX,
            y: event.clientY

        };
        textArea.style.left = (mousePosition.x + offset[0]) + 'px';
        textArea.style.top = (mousePosition.y + offset[1]) + 'px';
        xText = mousePosition.x + offset[0];
        yText = mousePosition.y + offset[1];
        drawOnCanvas(gCurrImg);
    }


}, true);

// edit the text
textArea.addEventListener('keyup', (event) => {
    var KeyID = event.keyCode;
    console.log(event);
    elTextOnCanvas = document.querySelector('.text-area').innerText;
    drawOnCanvas(gCurrImg);

});


//buutons area:

// set text size 
function setFontSize(elSize) {
    console.log(elSize.value);
    var fontSizeDisplay = document.querySelector('.font-size-display');
    fontSizeDisplay.innerText = elSize.value;
    gFontSize = elSize.value;
    drawOnCanvas(gCurrImg);
}


// set text color
function setFontColor(elColor) {
    elColor.addEventListener("change", updateTextColor, false);
    console.log(elColor.value);
    console.log(gFontColor);
    drawOnCanvas(gCurrImg);
}

function updateTextColor(event) {
    gFontColor = event.target.value;
    drawOnCanvas(gCurrImg);
}