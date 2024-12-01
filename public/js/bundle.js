/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/article-form-modal.js":
/*!***********************************!*\
  !*** ./src/article-form-modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCreateArticleBtnClick: () => (/* binding */ setCreateArticleBtnClick)
/* harmony export */ });
/* harmony import */ var _article_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-modal */ "./src/article-modal.js");


const articleFormModal = document.getElementById('article-form-modal');
const articleFormOpenElement = document.getElementById('create-card');

// articleFormOpenElement.addEventListener('click', function () {
//     articleFormModal.classList.add('open');
//     document.body.classList.add('modal-open');
// })


const openArticleFormModal = () => {
    console.log(1);
    articleFormModal.classList.add('open');
    document.body.classList.add('modal-open');

    articleFormModal.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleFormModal = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');

    articleFormOpenElement.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscKeyDown);
}

const onOverlayClick = (evt) => {
    if (!evt.target.matches('.modal-body')) {
        closeArticleFormModal()
    }
}

const onEscKeyDown = (evt) => {
    if (evt.code === 'Escape') {
        closeArticleFormModal()
    }
}

const setCreateArticleBtnClick = () => {
    articleFormOpenElement.addEventListener('click', openArticleFormModal);
}



/***/ }),

/***/ "./src/article-list.js":
/*!*****************************!*\
  !*** ./src/article-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderArticleList: () => (/* binding */ renderArticleList),
/* harmony export */   renderPhotoList: () => (/* binding */ renderPhotoList)
/* harmony export */ });
/* harmony import */ var _article_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-modal */ "./src/article-modal.js");


const articleTemplate = document.getElementById('article');
const articleTemplateContent = articleTemplate.content;
const articleTemplateElement = articleTemplateContent.querySelector('div');


const  renderPhotoList = (photos, container) => {
    for (const photo of photos) {
        const html = `
            <li class="photo-item">
                <img class="" src="img/photo/${photo}" width="150" height="150" alt="">
            </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

const  renderArticleList = (articles, container) => {
    for (const article of articles) {
        const articleElement = articleTemplateElement.cloneNode(true);
        const photoListElement= articleElement.querySelector('.photo-list');

        articleElement.querySelector('.title').textContent = article.title;
        articleElement.querySelector('.content').textContent = article.content;
        articleElement.querySelector('.created-at').textContent = article.created_at;
        articleElement.querySelector('.username').textContent = article.user.name;
        articleElement.querySelector('.avatar').src = 'img/avatar/' + article.user.avatar_path;
        renderPhotoList(article.photos, photoListElement);

        articleElement.addEventListener('click', function () {
            (0,_article_modal__WEBPACK_IMPORTED_MODULE_0__.openArticleModal)(article)
        });

        container.append(articleElement);
    }
}





/***/ }),

/***/ "./src/article-modal.js":
/*!******************************!*\
  !*** ./src/article-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeArticleModal: () => (/* binding */ closeArticleModal),
/* harmony export */   openArticleModal: () => (/* binding */ openArticleModal)
/* harmony export */ });
/* harmony import */ var _article_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list */ "./src/article-list.js");


const articleModalElement = document.getElementById('article-modal');

const articleModalAvatarElement = articleModalElement.querySelector('.avatar');
const articleModalUsernameElement = articleModalElement.querySelector('.username');
const articleModalCreatedAtElement = articleModalElement.querySelector('.created-at');
const articleModalTitleElement = articleModalElement.querySelector('.title');
const articleModalContentElement = articleModalElement.querySelector('.content');
const photoListElement = articleModalElement.querySelector('.photo-list');

const openArticleModal = (article) => {
    photoListElement.innerHTML = '';
    articleModalAvatarElement.src = 'img/avatar/' + article.user.avatar_path;
    articleModalUsernameElement.textContent = article.user.name;
    articleModalCreatedAtElement.textContent = article.created_at;
    articleModalTitleElement.textContent = article.title;
    articleModalContentElement.textContent = article.content;

    (0,_article_list__WEBPACK_IMPORTED_MODULE_0__.renderPhotoList)(article.photos, photoListElement);

    articleModalElement.classList.add('open');
    document.body.classList.add('modal-open');

    articleModalElement.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleModal = () => {
    articleModalElement.classList.remove('open');
    document.body.classList.remove('modal-open');

    articleModalElement.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscKeyDown);
}

const onOverlayClick = (evt) => {
    if (!evt.target.matches('.modal-body')) {
        closeArticleModal()
    }
}

const onEscKeyDown = (evt) => {
    if (evt.code === 'Escape') {
        closeArticleModal()
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
const MAX_AVATAR_COUNT = 9;
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
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _article_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list.js */ "./src/article-list.js");
/* harmony import */ var _article_form_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-form-modal.js */ "./src/article-form-modal.js");




const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 10;

const articles = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.generateArticles)(ARTICLE_COUNT);
(0,_article_list_js__WEBPACK_IMPORTED_MODULE_1__.renderArticleList)(articles, articleListElement);
(0,_article_form_modal_js__WEBPACK_IMPORTED_MODULE_2__.setCreateArticleBtnClick)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map