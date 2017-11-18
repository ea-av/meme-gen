'use strict'

//Global variable here
var gImgs=[];
// var gImgs = [
//     {id:1, url:'img/1-t.jpg', keyword:['wilder', 'sad', 'emotional', 'famous', 'cute']},
//     {id:2, url:'img/2-t.jpg', keyword:['sean bean', 'happy', 'lively', 'smug', 'rich']},
//     {id:3, url:'img/3-t.jpg', keyword:['dicapprio', 'clown', 'in your face', 'slap', 'beautiful']},
//     {id:4, url:'img/4-t.jpg', keyword:['dr. evil', 'sad', 'emotional', 'famous', 'cute']},
//     {id:5, url:'img/5-t.jpg', keyword:['batman', 'happy', 'lively', 'smug', 'rich']},
//     {id:6, url:'img/6-t.jpg', keyword:['toy story', 'sad', 'emotional', 'famous', 'cute']},
//     {id:7, url:'img/7-t.jpg', keyword:['ted', 'pet', 'animle', 'cute', 'lovable']},
//     {id:8, url:'img/8-t.jpg', keyword:['oprah', 'sad', 'emotional', 'famous', 'cute']},
//     {id:9, url:'img/9-t.jpg', keyword:['cigar', 'sad', 'emotional', 'famous', 'cute']},
//     {id:10, url:'img/10-t.jpg', keyword:['dog', 'happy', 'lively', 'smug', 'rich']},
//     {id:11, url:'img/11-t.jpg', keyword:['sad', 'bear', 'lively', 'smug', 'rich']},
//     {id:12, url:'img/12-t.jpg', keyword:['john goodman', 'happy', 'lively', 'smug', 'rich']},
//     {id:13, url:'img/13-t.jpg', keyword:['granny', 'happy', 'lively', 'smug', 'rich']},
//     {id:14, url:'img/14-t.jpg', keyword:['seal', 'content', 'lively', 'smug', 'rich']},
//     {id:15, url:'img/15-t.jpg', keyword:['toddler', 'happy', 'lively', 'smug', 'rich']},
//     {id:16, url:'img/16-t.jpg', keyword:['precious', 'gollum', 'animle', 'cute', 'lovable']},
//     {id:17, url:'img/17-t.jpg', keyword:['drunk', 'pet', 'animle', 'cute', 'lovable']},
//     {id:18, url:'img/18-t.jpg', keyword:['a team', 'pet', 'animle', 'cute', 'lovable']},
//     {id:19, url:'img/19-t.jpg', keyword:['will farrel', 'clown', 'animle', 'cute', 'lovable']},
//     {id:20, url:'img/20-t.jpg', keyword:['crying', 'pet', 'animle', 'cute', 'lovable']}
// ];

// ===== DATA STURCTURE =====
function generateImg(id, url, keywords) {
    var img = {
    id,
    url,
    keywords
    }
    gImgs.push(img);
}

generateImg(1, 'img/1-t.jpg', ['wilder', 'sad', 'emotional', 'famous', 'cute']);
generateImg(2, 'img/2-t.jpg', ['sean bean', 'happy', 'lively', 'smug', 'rich']);
generateImg(3, 'img/3-t.jpg', ['dicapprio', 'clown', 'in your face', 'slap', 'beautiful']);
generateImg(4, 'img/4-t.jpg', ['dr. evil', 'sad', 'emotional', 'famous', 'cute']);
generateImg(5, 'img/5-t.jpg', ['batman', 'happy', 'lively', 'smug', 'rich']);
generateImg(6, 'img/6-t.jpg', ['toy story', 'sad', 'emotional', 'famous', 'cute']);
generateImg(7, 'img/7-t.jpg', ['ted', 'pet', 'animle', 'cute', 'lovable']);
generateImg(8, 'img/8-t.jpg', ['oprah', 'sad', 'emotional', 'famous', 'cute']);
generateImg(9, 'img/9-t.jpg', ['cigar', 'sad', 'emotional', 'famous', 'cute']);
generateImg(10, 'img/10-t.jpg', ['dog', 'happy', 'lively', 'smug', 'rich']);
generateImg(11, 'img/11-t.jpg', ['sad', 'bear', 'lively', 'smug', 'rich']);
generateImg(12, 'img/12-t.jpg', ['john goodman', 'happy', 'lively', 'smug', 'rich']);
generateImg(13, 'img/13-t.jpg', ['granny', 'happy', 'lively', 'smug', 'rich']);
generateImg(14, 'img/14-t.jpg', ['seal', 'content', 'lively', 'smug', 'rich']);
generateImg(15, 'img/15-t.jpg', ['toddler', 'happy', 'lively', 'smug', 'rich']);
generateImg(16, 'img/16-t.jpg', ['precious', 'gollum', 'animle', 'cute', 'lovable']);
generateImg(17, 'img/17-t.jpg', ['drunk', 'pet', 'animle', 'cute', 'lovable']);
generateImg(18, 'img/18-t.jpg', ['a team', 'pet', 'animle', 'cute', 'lovable']);
generateImg(19, 'img/19-t.jpg', ['will farrel', 'clown', 'animle', 'cute', 'lovable']);
generateImg(20, 'img/20-t.jpg', ['crying', 'pet', 'animle', 'cute', 'lovable']);

//===== RENDER OF ENTIRE DATABASE ===== (TODO: should be called by init onload and by dedicated button(s))
renderImgs(gImgs);

//===== RENDERING IMAGES SELECTION SECTION =====

function renderImgs(imgs) {
    var strHtml = '';
    var elImgs = document.querySelector('.imgs-container');
    for (let i = 0; i < imgs.length; i++) {
        strHtml += `<div class="img-container">
                        <img id="${imgs[i].id}" src="${imgs[i].url}" onclick="openEditMod(this)" alt="">
                    </div>`       
    }
    elImgs.innerHTML = strHtml;
}

// ===== SEARCH, FILTER AND RENDER SEARCHED IMAGES FOR SELECTION =====

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

function filterByKeywords(keywords) {
    var filteredImgs = gImgs.filter(function(img) {
      return keywords.some(function(keyword) {
        return img.keywords.includes(keyword);
      }); 
    });
    renderImgs(filteredImgs); 
    return filteredImgs;
}

//===== KEYWORDS HEATMAP =====

function countKeywords() {
    var keywordCount = {};
    gImgs.forEach(function(img) {
        img.keywords.forEach(function(keyword) {            
            if (keywordCount[keyword]) {
                keywordCount[keyword]++;
            }
            else {
                keywordCount[keyword] = 1;
            }
        });
    });
    return keywordCount;
}

function renderKeywordsHeatmap () {
    var elHeatmap = document.querySelector(".heatmap-container");
    var strHtml = `<ul class="ADD-some-CLASSES-with-FLEX-options" style="display: flex; flex-wrap: wrap">`; //REMOVE INNER STYLE AND SET IN CSS
    var keywordCount = countKeywords();
    var keyword = '';
    for (keyword in keywordCount) {
        strHtml += `<li>
                       <button onclick="searchByKeywords('${keyword}')" style="font-size: ${0.75 * keywordCount[keyword]}rem">${keyword}</button>
                    </li>`;
    }
    strHtml += `</ul>`;
    elHeatmap.innerHTML = strHtml;
}

// renderKeywordsHeatmap(); // TEMPORARY CALL TO HEATMAP SHOULD BE REPLACED BY MENU ITEMS

