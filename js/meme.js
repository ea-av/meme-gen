'use strict'

//Global variable here
var gImgs = [];
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
function genObjInArray(id, url, keywords) {
    var img = {id, url, keywords}
    gImgs.push(img);
}

genObjInArray(1, 'img/1-t.jpg', ['wilder', 'funny', 'happy', 'famous', 'cute', 'silly', 'hat', 'bow tie']);
genObjInArray(2, 'img/2-t.jpg', ['sean bean', 'stark','irish', 'celebrity', 'brave', 'cool', 'handsosme']);
genObjInArray(3, 'img/3-t.jpg', ['dicapprio', 'smug', 'in your face', 'toast', 'handsome', 'celebrity', 'famous']);
genObjInArray(4, 'img/4-t.jpg', ['dr. evil', 'funny', 'famous', 'silly', 'british', 'humor', 'austin powers']);
genObjInArray(5, 'img/5-t.jpg', ['batman', 'brave', 'cartoon', 'slap', 'lively', 'strong', 'brave', 'movie']);
genObjInArray(6, 'img/6-t.jpg', ['toy story', 'cute', 'emotional', 'movie', 'cartoon', 'child', 'famous', 'lovable']);
genObjInArray(7, 'img/7-t.jpg', ['ted', 'animle', 'pet', 'cute', 'lovable']);
genObjInArray(8, 'img/8-t.jpg', ['oprah', 'rich', 'emotional', 'famous', 'cute']);
genObjInArray(9, 'img/9-t.jpg', ['cigar', 'angry', 'emotional', 'bad', 'mean']);
genObjInArray(10, 'img/10-t.jpg', ['dog', 'happy', 'lively', 'lovable', 'animle', 'pet']);
genObjInArray(11, 'img/11-t.jpg', ['sad', 'bear', 'lively', 'cute', 'pet', 'lovable']);
genObjInArray(12, 'img/12-t.jpg', ['john goodman', 'happy', 'lively', 'cool', 'movie', 'famous']);
genObjInArray(13, 'img/13-t.jpg', ['granny', 'happy', 'lively', 'funny', 'lovable', 'humor']);
genObjInArray(14, 'img/14-t.jpg', ['seal', 'content', 'lively', 'pet', 'animle', 'lovable', 'cute']);
genObjInArray(15, 'img/15-t.jpg', ['toddler', 'happy', 'lively', 'funny', 'cute']);
genObjInArray(16, 'img/16-t.jpg', ['precious', 'gollum', 'moview', 'ring', 'ugly', 'scary', 'famous']);
genObjInArray(17, 'img/17-t.jpg', ['drunk', 'silly', 'dumb', 'ugly', 'lovable', 'homur']);
genObjInArray(18, 'img/18-t.jpg', ['a team', 'baracos', 'strong', 'brave', 'famous', 'beard']);
genObjInArray(19, 'img/19-t.jpg', ['will farrel', 'clown', 'funny', 'cute', 'lovable']);
genObjInArray(20, 'img/20-t.jpg', ['crying', 'emotional', 'sad', 'tears', 'woman']);
genObjInArray(21, 'img/21-t.jpg', ['cartoon', 'dumb', 'evil', 'movie', 'simpsons']);
genObjInArray(22, 'img/22-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
genObjInArray(23, 'img/23-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable', 'grumpy']);
genObjInArray(24, 'img/24-t.jpg', ['hillary', 'woman', 'politician', 'famous', 'presidential']);
genObjInArray(25, 'img/25-t.jpg', ['woman', 'famous', 'celebrity', 'singer', 'nicki minaj']);
genObjInArray(26, 'img/26-t.jpg', ['cat', 'pet', 'animle', 'cute', 'lovable']);
genObjInArray(27, 'img/27-t.jpg', ['obama', 'politician', 'presidential', 'famous', 'celebrity']);

//===== RENDER OF ENTIRE DATABASE ===== (TODO: should be called by init onload and by dedicated button(s))
renderImgs(gImgs);

//===== RENDERING IMAGES SELECTION SECTION =====

// function renderImgs(imgs) {
//     var strHtml = '';
//     var elImgs = document.querySelector('.imgs-container');
//     for (let i = 0; i < imgs.length; i++) {
//         strHtml += `<div class="img-container">
//                         <img class="animated bounceInUp" id="${imgs[i].id}" src="${imgs[i].url}" onclick="openEditMod(this)" alt="">
//                     </div>`
//     }
//     elImgs.innerHTML = strHtml;
// }


function renderImgs(imgs) {
    var elImgArea = document.querySelector('.imgs-container');
    var elEditArea = document.querySelector('.edit-area');
    elEditArea.style.display = 'none';
    elImgArea.style.display = 'flex';
    var strHtml = '';
    var elImgs = document.querySelector('.imgs-container');
    elImgs.innerHTML = strHtml;
    var animateClass = '';
    var animationId = 1
    imgs.forEach(function(el,idx) {
        setTimeout(function() {
            console.log(el);
            if (animationId > 4) animationId = 1;
            if (animationId === 1) animateClass = 'zoomInUp';
            else if (animationId === 2) animateClass = 'bounceInRight';
            else if (animationId === 3) animateClass = 'zoomInDown';
            else animateClass = 'bounceInLeft';
            animationId++;
            console.log(animateClass);
            strHtml = `<div class="img-container">
                        <img class="animated ${animateClass}" id="${imgs[idx].id}" src="${imgs[idx].url}" onclick="openEditMod(this)" alt="">
                       </div>`;
            elImgs.insertAdjacentHTML('beforeend', strHtml);
        }, idx * 30);
    });
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
    keywords = keywords.map(function (keyword) {
        keyword = keyword.trim();
        return keyword.toLowerCase();
    });
    var filteredImgs = filterByKeywords(keywords);
}

function filterByKeywords(keywords) {
    var filteredImgs = gImgs.filter(function (img) {
        return keywords.some(function (keyword) {
            return img.keywords.includes(keyword);
        });
    });
    renderImgs(filteredImgs);
    return filteredImgs;
}

//===== KEYWORDS HEATMAP =====
//===== Need to solve a minor issue with width of border affecting few words. check the margin of the inner box

function countKeywords() {
    var keywordCount = {};
    gImgs.forEach(function (img) {
        img.keywords.forEach(function (keyword) {
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

// function renderKeywordsHeatmap() {
//     var elHeatmap = document.querySelector(".heatmap-container");
//     var strHtml = `<ul class="modal-ul" style="display: flex; flex-wrap: wrap">`; //REMOVE INNER STYLE AND SET IN CSS
//     var keywordCount = countKeywords();
//     var keyword = '';
//     for (keyword in keywordCount) {
//         strHtml += `<li>
//                        <button onclick="searchByKeywords('${keyword}')" style="font-size: ${0.75 * keywordCount[keyword]}rem">${keyword}</button>
//                     </li>`;
//     }
//     strHtml += `</ul>`;
//     elHeatmap.innerHTML = strHtml;
// }

// function renderKeywordsHeatmap() {
//     var elHeatmap = document.querySelector("#keywordsModal");
//     var strHtml = `<ul class="modal-ul" style="display: flex; flex-wrap: wrap">`; //REMOVE INNER STYLE AND SET IN CSS
//     var keywordCount = countKeywords();
//     var keyword = '';
//     for (keyword in keywordCount) {
//         strHtml += `<li>
//                        <button onclick="searchByKeywords('${keyword}')" style="font-size: ${0.75 * keywordCount[keyword]}rem">${keyword}</button>
//                     </li>`;
//     }
//     strHtml += `</ul>`;
//     elHeatmap.innerHTML = strHtml;
// }

function renderKeywordsHeatmap() {
    var elHeatmap = document.querySelector("#keywordsModal");
    var strHtml = `<div class="modal-dialog modal-xl modal-backdrop" role="document">
                   <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                              <ul class="modal-ul" style="display: flex; flex-wrap: wrap">`
    var keywordCount = countKeywords();
    var keyword = '';
    var animateClass = '';
    var animationId = 1;
    for (keyword in keywordCount) {
            if (animationId > 4) animationId = 1;
            if (animationId === 1) animateClass = 'zoomInUp';
            else if (animationId === 2) animateClass = 'bounceInRight';
            else if (animationId === 3) animateClass = 'zoomInDown';
            else animateClass = 'bounceInLeft';
            animationId++;
        strHtml += `<li>
                       <button class="animated ${animateClass}" onclick="searchByKeywords('${keyword}')" style="font-size: ${0.75 * keywordCount[keyword]}rem">${keyword}</button>
                    </li>`;
    }
    strHtml += `</ul>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>`;
    elHeatmap.innerHTML = strHtml;
}



//=========

// strHtml = `
// <div class="modal-dialog" role="document">
// <div class="modal-content">
//     <div class="modal-header">
//     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//     </button>
//     </div>
//     <div class="modal-body">
//     <ul class="modal-ul" style="display: flex; flex-wrap: wrap">
//     </div>
//     <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//     </div>
// </div>
// </div>
// `

//=========


//===== ANIMATIONS =====

// document.querySelector(".arrow").addEventListener("click", function () {
//     document.querySelector(".arrow").classList.add("spin-effect");
//     removeCssAnimationClass();
// });

// function removeCssAnimationClass() {
//     setTimeout(function () {
//         document.querySelector(".arrow").classList.remove("spin-effect");
//     }, 400);
// }

document.querySelector(".arrow").addEventListener("click", function () {
    document.querySelector(".arrow").classList.add("animated", "flipInX");
    removeCssAnimationClass("animated", "flipInX");

});

function removeCssAnimationClass(classA, classB) {
    setTimeout(function () {
        document.querySelector(".arrow").classList.remove(classA, classB);
    }, 400);
}

document.querySelector(".arrow").addEventListener("mouseenter", function () {
    document.querySelector(".arrow").classList.add("animated", "jello");
});

document.querySelector(".arrow").addEventListener("mouseleave", function () {
    document.querySelector(".arrow").classList.remove("animated", "jello");
});