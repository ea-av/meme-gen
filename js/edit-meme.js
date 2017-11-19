'use strict'

console.log('edit-meme');
var canvas;
var ctx;
var elTextOnCanvas = document.querySelector('.text-area').innerText;
var xText = 50;
var yText = 100;
var gCurrImg;


function openEditMod(elImg) {
    var elEditArea = document.querySelector('.edit-area');
    var elEditAreaImg = document.querySelector('.edit-area-img');
        elEditArea.style.display = 'flex';
        elEditAreaImg.src = `img/${elImg.id}.jpg`;
        canvas =  document.getElementById('canvas');
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
    gCurrImg =imgSrc;
    var img = new Image();
    img.src = imgSrc;

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 400, 400);

        ctx.font = "50px 'Segoe UI'";
        ctx.fillStyle = 'white';
        ctx.fillText(elTextOnCanvas, xText-400, yText-40);
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




var mousePosition;
var offset = [0,0];
var textArea;
var isDown = false;

textArea = document.querySelector(".text-area");
textArea.style.position = "absolute";
// textArea.style.left = "400px";
// textArea.style.top = "150px";
// textArea.style.width = "350px";
// textArea.style.height = "30px";
// textArea.style.background = "none";
// textArea.style.border = "1px solid black";
// textArea.style.color = "blue";

document.body.appendChild(textArea);

textArea.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        textArea.offsetLeft - e.clientX,
        textArea.offsetTop - e.clientY
    ];
    

}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        textArea.style.left = (mousePosition.x + offset[0]) + 'px';
        textArea.style.top  = (mousePosition.y + offset[1]) + 'px';
        xText = mousePosition.x + offset[0];
        yText = mousePosition.y + offset[1];
        drawOnCanvas(gCurrImg);
    }


}, true);

textArea.addEventListener('keyup', (event)=> {
    var KeyID = event.keyCode;
    console.log (event);
    elTextOnCanvas=document.querySelector('.text-area').innerText;
    drawOnCanvas(gCurrImg);

});