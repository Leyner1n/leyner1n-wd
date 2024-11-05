/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/article-list.js":
/*!*****************************!*\
  !*** ./src/article-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderArticleList: () => (/* binding */ renderArticleList)
/* harmony export */ });
const articleTemplate = document.getElementById('article');
const articleTemplateContent = articleTemplate.content;
const articleTemplateElement = articleTemplateContent.querySelector('div');

const  renderPhotoList = (photos, container) => {
    for (const photo of photos) {
        const html = `
            <li class="photo-item">
                <img class="" src="img/photo/${photo}" width="150" alt="">
            </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}
const  renderArticleList = (articles, container) => {
    for (const article of articles) {
        const articleElement = articleTemplateElement.cloneNode(true);
        const photoListElement = articleElement.querySelector('.photo-list');

        articleElement.querySelector('.title').textContent = article.title;
        articleElement.querySelector('.content').textContent = article.content;
        articleElement.querySelector('.created-at').textContent = article.created_at;
        articleElement.querySelector('.username').textContent = article.user.name;
        articleElement.querySelector('.avatar').src = 'img/avatar/' + article.user.avatar_path;
        renderPhotoList(article.photos, photoListElement);

        container.append(articleElement);
    }
}




/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARTICLE_CONTENTS: () => (/* binding */ ARTICLE_CONTENTS),
/* harmony export */   ARTICLE_PHOTOS: () => (/* binding */ ARTICLE_PHOTOS),
/* harmony export */   ARTICLE_TITLES: () => (/* binding */ ARTICLE_TITLES)
/* harmony export */ });
const ARTICLE_CONTENTS = [
    'dima',
    'death',
    'sergey',
    'mickael',
    'solid'
];

const ARTICLE_TITLES = [
    'first',
    'second',
    'third',
    'fourd',
    'fived'
];

const ARTICLE_PHOTOS = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
];




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateArticles: () => (/* binding */ generateArticles)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/const.js");



const MAX_PHOTO_COUNT = 3;
const MAX_AVATAR_COUNT = 3;
const MAX_USER_COUNT = 4;

const generateUser = () => {
    return {
        id: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_USER_COUNT),
        name: 'mr.Death',
        email: '@',
        password: '*****',
        avatar_path: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_AVATAR_COUNT) + '.jpg',
        locale: 'en',
        created_at: '2024-01-01',
    };
};

const usedArticleIds = [];

const generateArticle = (maxArticleId) => {
    let articleId = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, maxArticleId);
    while (usedArticleIds.includes(articleId)) {
        articleId = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, maxArticleId);
    }
    usedArticleIds.push(articleId);

    const photos = [];
    for (let i = 1; i <= (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_PHOTO_COUNT); i++) {
        photos.push((0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.ARTICLE_PHOTOS));
    }

    return {
        id: articleId,
        title: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.ARTICLE_TITLES),
        content: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.ARTICLE_CONTENTS),
        created_at: '2024-01-01',
        user: generateUser(),
        photos: photos
    };
};

const generateArticles = (count) => {
    const articles = [];

    for (let i = 1; i <= count; i++) {
        articles.push(generateArticle(count));
    }

    return articles;
};




/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomArrayElement: () => (/* binding */ getRandomArrayElement),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)
/* harmony export */ });
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomArrayElement = (array) => {
    return array[getRandomInt(0, array.length - 1)];
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _article_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list */ "./src/article-list.js");



const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 5;

const articles = (0,_data__WEBPACK_IMPORTED_MODULE_0__.generateArticles)(ARTICLE_COUNT);
(0,_article_list__WEBPACK_IMPORTED_MODULE_1__.renderArticleList)(articles, articleListElement);

console.log(articles);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map