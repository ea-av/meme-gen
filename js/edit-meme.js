'use strict'

console.log('edit-meme');

function openEditMod(elImg){
    var elEditArea = document.querySelector('.edit-area');
    var elEditAreaImg = document.querySelector('.edit-area-img');
        elEditArea.style.display = 'block';
        console.log(elImg.id);
        console.log(elImg.src);
        elEditAreaImg.src = elImg.src;
        // elEditAreaImg.style.margin = 20 px;
}

function closeEditMod(elImg){
    var elEditArea = document.querySelector('.edit-area');
        elEditArea.style.display = 'none';

}
