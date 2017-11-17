'use strict'

//Global variable here

var gImgs = [];
var gState;

function createImgObj(id, url, keywords) {
    var img = {
    id,
    url,
    keywords
    }
    gImgs.push(img);
}

createImgObj(1, 'img/1-t.jpg', ['crying', 'sad', 'emotional', 'famous', 'cute']);
createImgObj(2, 'img/2-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(3, 'img/3-t.jpg', ['funny', 'clown', 'in your face', 'slap', 'beautiful']);
createImgObj(4, 'img/4-t.jpg', ['crying', 'sad', 'emotional', 'famous', 'cute']);
createImgObj(5, 'img/5-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(6, 'img/6-t.jpg', ['crying', 'sad', 'emotional', 'famous', 'cute']);
createImgObj(7, 'img/7-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
createImgObj(8, 'img/8-t.jpg', ['crying', 'sad', 'emotional', 'famous', 'cute']);
createImgObj(9, 'img/9-t.jpg', ['crying', 'sad', 'emotional', 'famous', 'cute']);
createImgObj(10, 'img/10-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(11, 'img/11-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(12, 'img/12-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(13, 'img/13-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(14, 'img/14-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(15, 'img/15-t.jpg', ['smiling', 'happy', 'lively', 'smug', 'rich']);
createImgObj(16, 'img/16-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
createImgObj(17, 'img/17-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
createImgObj(18, 'img/18-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
createImgObj(19, 'img/19-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
createImgObj(20, 'img/20-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);

renderImgs(gImgs);

function renderImgs(imgs) {
    var strHtml = '';
    var elImgs = document.querySelector('.imgs-container');
    for (let i = 0; i < imgs.length; i++) {
        strHtml += `<div class="img-container">
                        <img id="${gImgs[i].id}" src="img/${gImgs[i].id}-t.jpg" onclick="openEditMod(this)" alt="">
                    </div>`       
    }
    elImgs.innerHTML = strHtml;
}

function filterByKeywords(keywords) {
    var filteredImgs = gImgs.filter(function(img) {
      return keywords.some(function(keyword) {
        return img.keywords.includes(keyword);
      }); 
    });
    renderImgs(filteredImgs); 
    return filteredImgs;
}

// filterByKeywords(['cat'])

function searchOnEnter(ev, textInput) {
    if (ev.code === 'Enter') {
        searchByKeywords(textInput.value);
        textInput.value = '';
        textInput.blur();
    }
}

function searchByKeywords(keywordsStr) {
    var keywords = keywordsStr.split(',');

    keywords = keywords.map(function(keyword) {
        keyword = keyword.trim();
        return keyword.toLowerCase();
    });

    var filteredImgs = filterByKeywords(keywords);
}



