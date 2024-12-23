/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations/aside-animations.js":
/*!********************************************!*\
  !*** ./src/animations/aside-animations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAsideNavList: () => (/* binding */ setAsideNavList)
/* harmony export */ });
const homeBtn = document.getElementById('home-btn');
const createBtn = document.getElementById('create-card');
const notifnotificationsBtn = document.getElementById('notifications-btn');
const messageBtn = document.getElementById('message-btn');
const articleFormCloseBtn = document.getElementById('close-btn');

const btnsArray = [
    homeBtn,
    createBtn,
    notifnotificationsBtn,
    messageBtn,
    articleFormCloseBtn
]

const openNavList = (evt) => {
    for (let btn of btnsArray) {
        btn.classList.remove('open');
    }
    if (evt.target === articleFormCloseBtn) {
        homeBtn.classList.add('open');
    } else {
        evt.target.classList.add('open');
    }
}

const setAsideNavList = () => {
    for (let btn of btnsArray) {
        btn.addEventListener('click', openNavList);
    }

}




/***/ }),

/***/ "./src/animations/header-animations.js":
/*!*********************************************!*\
  !*** ./src/animations/header-animations.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFormSearchElement: () => (/* binding */ setFormSearchElement),
/* harmony export */   setSortList: () => (/* binding */ setSortList)
/* harmony export */ });
const formSearchElement = document.getElementById('header-search');
const filterAll = document.getElementById('header-list-all');
const filterPopular = document.getElementById('header-list-popular');
const filterNew = document.getElementById('header-list-new');

const filterList = [
    filterAll,
    filterPopular,
    filterNew
]

const showChoice = () => {
    formSearchElement.classList.add('open');

    document.addEventListener('click', onOverlayClick);
}

const hideChoice = () => {
    formSearchElement.classList.remove('open');

    formSearchElement.removeEventListener('click', onOverlayClick);
}

const onOverlayClick = (evt) => {
    if (!evt.target.matches('.header-search')) {
        hideChoice()
    }
}

const setFormSearchElement = () => {
    formSearchElement.addEventListener('click', showChoice)
}

const openFilter = (evt) => {
    for (let filter of filterList) {
        filter.classList.remove('open');
    }

    evt.target.classList.add('open');
}

const setSortList = () => {
    for (let filter of filterList) {
        filter.addEventListener('click', openFilter);
    }
}




/***/ }),

/***/ "./src/article-form-modal.js":
/*!***********************************!*\
  !*** ./src/article-form-modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCreateArticleBtnClick: () => (/* binding */ setCreateArticleBtnClick)
/* harmony export */ });
const articleFormModal = document.getElementById('article-form-modal');
const articleFormOpenElement = document.getElementById('create-card');
const articleFormCloseBtn = document.getElementById('close-btn');


const homeBtn = document.getElementById('home-btn');
const createBtn = document.getElementById('create-card');
const notifnotificationsBtn = document.getElementById('notifications-btn');
const messageBtn = document.getElementById('message-btn');

const btnsArray = [
    homeBtn,
    createBtn,
    notifnotificationsBtn,
    messageBtn
]

const openArticleFormModal = () => {
    articleFormModal.classList.add('open');
    document.body.classList.add('modal-open');

    homeBtn.addEventListener('click', onCloseBtnClick)
    articleFormCloseBtn.addEventListener('click', onCloseBtnClick)
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleFormModal = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEscKeyDown);
}

const onCloseBtnClick = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');
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

/***/ "./src/article-form-validation.js":
/*!****************************************!*\
  !*** ./src/article-form-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeValidation: () => (/* binding */ executeValidation)
/* harmony export */ });
const addPostBtn = document.getElementById('add-post-btn');
const projectNameElement = document.getElementById('project-name-txt');
const shortDescriptionElement = document.getElementById('short-description-txt');
const descriptionElement = document.getElementById('description-txt');
const repositoryUrlElement = document.getElementById('repository-url');
const hostUrlElement = document.getElementById('host-url');

const PROJECT_NAME_LIMITATION = [2, 30];
const SHORT_DESCRIPTION_LIMITATION = [10, 40];
const DESCRIPTION_LIMITATION = [20, 250];

const executeValidation = () => {
    repositoryUrlElement.addEventListener('input', checkUrl);
    hostUrlElement.addEventListener('input', checkUrl);
    projectNameElement.addEventListener('input', checkProjectName);
    shortDescriptionElement.addEventListener('input', checkshortDescriptionElement);
    descriptionElement.addEventListener('input', checkDescriptionElement);
    addPostBtn.addEventListener('click', validateBeforeClickBtn);
}

const checkProjectName = (evt) => {
    let error = 'rgb(45, 45, 45)';

    if (evt.target.value.length >  PROJECT_NAME_LIMITATION[1]) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const checkshortDescriptionElement = (evt) => {
    let error = 'rgb(45, 45, 45)';

    if (evt.target.value.length >  SHORT_DESCRIPTION_LIMITATION[1]) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const checkDescriptionElement = (evt)=> {
    let error = 'rgb(45, 45, 45)';


    if (evt.target.value.length >  DESCRIPTION_LIMITATION[1]) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const checkUrl = (evt) => {
    let error = 'rgb(45, 45, 45)';

    if (evt.target.validity.typeMismatch) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const validateBeforeClickBtn = () => {
    const formInformationArray = [
        projectNameElement,
        shortDescriptionElement,
        descriptionElement
    ];
    let colorArray = [
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)'
    ];
    let conditionArray = [
        PROJECT_NAME_LIMITATION[0],
        SHORT_DESCRIPTION_LIMITATION[0],
        DESCRIPTION_LIMITATION[0]
    ];

    let counter = 0;
    for (let info of formInformationArray) {
        if (info.value.length < conditionArray[counter]) {
            colorArray.splice(counter, 1, '#5e1e1e');
        }
        counter += 1
    }

    if (hostUrlElement.value.length === 0) {
        colorArray.splice(3, 1, '#5e1e1e');
    }
    if (repositoryUrlElement.value.length === 0) {
        colorArray.splice(4, 1, '#5e1e1e');
    }

    projectNameElement.setAttribute('style', 'background-color: ' + colorArray[0]);
    shortDescriptionElement.setAttribute('style', 'background-color: ' + colorArray[1]);
    descriptionElement.setAttribute('style', 'background-color: ' + colorArray[2]);
    hostUrlElement.setAttribute('style', 'background-color: ' + colorArray[3]);
    repositoryUrlElement.setAttribute('style', 'background-color: ' + colorArray[4]);
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

const renderPhotoList = (photos, container) => {
    for (const photo of photos) {
        const html = `
            <li class="photo-item">
                <img class="" src="img/photo/${photo}" width="150" height="150" alt="">
            </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

const renderArticleList = (articles, container) => {
    container.innerHTML = '';

    for (const article of articles) {
        const articleElement = articleTemplateElement.cloneNode(true);
        const photoListElement= articleElement.querySelector('.photo-list');

        articleElement.dataset.id = article.id;
        articleElement.querySelector('.title').textContent = article.title;
        articleElement.querySelector('.content').textContent = article.content;
        articleElement.querySelector('.created-at').textContent = article.created_at;
        articleElement.querySelector('.likes').textContent = article.likes;
        articleElement.querySelector('.comments').textContent = article.comments;
        articleElement.querySelector('.username').textContent = article.user.name;
        articleElement.querySelector('.avatar').src = 'img/avatar/' + article.user.avatar_path;
        renderPhotoList(article.photos, photoListElement);

        container.append(articleElement);
    }

    container.addEventListener('click', function (evt) {
        const articleElement = evt.target.closest('.article');
        const isUser = evt.target.closest('.user');
        if (articleElement && !isUser) {
            const articleId = Number(articleElement.dataset.id);
            const article = articles.find(function (article) {
                return article.id === articleId;
            });
            (0,_article_modal__WEBPACK_IMPORTED_MODULE_0__.openArticleModal)(article);
        }
    });
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
/* harmony export */   ARTICLE_DATES: () => (/* binding */ ARTICLE_DATES),
/* harmony export */   ARTICLE_PHOTOS: () => (/* binding */ ARTICLE_PHOTOS),
/* harmony export */   ARTICLE_TITLES: () => (/* binding */ ARTICLE_TITLES)
/* harmony export */ });
const ARTICLE_CONTENTS = [
    'The invisible cat played chess with a talking tree flying bicycles zoomed pas trobots painted the walls with colorful',
    'Flying bicycles zoomed past the sleepy purple giraffe flying bicycles zoomed past robots painted the walls with colorful',
    'Marshmallow clouds floated above the chocolate river valley flying bicycles zoomed past robots painted the walls with colorful',
    'Time-traveling penguins discovered a hidden treasure in Atlantis flying bicycles zoomed past robots painted the walls with colorful',
    'The clock ticked backward while frogs wore tiny hats flying bicycles zoomed past robots painted the walls with colorful',
    'Dancing robots painted the walls with colorful spaghetti sauce flying bicycles zoomed past robots painted the walls with colorful',
    'A magical unicorn juggled oranges under the starry sky flying bicycles zoomed past robots painted the walls with colorful'
];

const ARTICLE_DATES = [
    '2025-01-01',
    '2025-01-7',
    '2025-01-15',
    '2024-12-30',
    '2024-01-21',
    '2024-06-26',
    '2024-07-13',
    '2024-07-16',
    '2024-11-14'
];

const ARTICLE_TITLES = [
    'KoChu!',
    'Furly',
    'Gallery',
    'EcoWave',
    'Quantum',
    'Synergy Consulting Group',
    'Crystal Clear',
    'Webdot',
    'Spectrum',
    'Echo Innovations',
    'Velocity',
    'Bright Future',
    'EcoSphere',
    'Apex Innovations'
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
/* harmony export */   generateArticle: () => (/* binding */ generateArticle),
/* harmony export */   generateArticles: () => (/* binding */ generateArticles)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/const.js");



const MAX_PHOTO_COUNT = 3;
const MAX_AVATAR_COUNT = 9;
const MAX_USER_COUNT = 4;
const MAX_LIKES_COUNT = 50;
const MAX_COMMENTS_COUNT = 34;


const generateUser = () => {
    return {
        id: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_USER_COUNT),
        name: 'mr.Death',
        email: '@',
        password: '*****',
        avatar_path: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_AVATAR_COUNT) + '.jpg',
        locale: 'en',
        created_at: '2025-01-01',
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
        created_at: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.ARTICLE_DATES),
        likes: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_LIKES_COUNT),
        comments: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_COMMENTS_COUNT),
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

/***/ "./src/enum.js":
/*!*********************!*\
  !*** ./src/enum.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter)
/* harmony export */ });
const Filter = {
    ALL: 'all',
    POPULAR: 'popular',
    NEW: 'new'
}




/***/ }),

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFilterClickHandler: () => (/* binding */ setFilterClickHandler)
/* harmony export */ });
/* harmony import */ var _enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum.js */ "./src/enum.js");
/* harmony import */ var _article_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list.js */ "./src/article-list.js");



const sortListElement = document.querySelector('.sort-list');
const articleListElement = document.getElementById('app');

const compareArticlesByDate = (articleA, articleB) => {
    const dateA = new Date(articleA.created_at);
    const dateB = new Date(articleB.created_at);

    return dateB.getTime() - dateA.getTime();
}

const compareArticlesByPopularity = (articleA, articleB) => {
    return (articleB.likes + articleB.comments) - (articleA.likes + articleA.comments)
}

// замыкание
const getFilterClickHandler = (articles) => {
    return (evt) => {
        if (!evt.target.matches('a')) {
            return;
        }

        const filter = evt.target.id.split('-')[2] ?? null;
        if (!Object.values(_enum_js__WEBPACK_IMPORTED_MODULE_0__.Filter).includes(filter)) {
            return;
        }

        switch (filter) {
            case _enum_js__WEBPACK_IMPORTED_MODULE_0__.Filter.ALL:
                (0,_article_list_js__WEBPACK_IMPORTED_MODULE_1__.renderArticleList)(articles, articleListElement);
                break;
            case _enum_js__WEBPACK_IMPORTED_MODULE_0__.Filter.POPULAR:
                (0,_article_list_js__WEBPACK_IMPORTED_MODULE_1__.renderArticleList)(articles.slice().sort(compareArticlesByPopularity), articleListElement);
                break;
            case _enum_js__WEBPACK_IMPORTED_MODULE_0__.Filter.NEW:
                (0,_article_list_js__WEBPACK_IMPORTED_MODULE_1__.renderArticleList)(articles.slice().sort(compareArticlesByDate), articleListElement);
                break;
        }
    };
}

const setFilterClickHandler = (articles) => {
    sortListElement.addEventListener('click', getFilterClickHandler(articles));
}




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
/* harmony import */ var _article_form_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-form-validation.js */ "./src/article-form-validation.js");
/* harmony import */ var _animations_header_animations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/header-animations.js */ "./src/animations/header-animations.js");
/* harmony import */ var _animations_aside_animations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations/aside-animations.js */ "./src/animations/aside-animations.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.js */ "./src/filters.js");









const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 10;

const articles = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.generateArticles)(ARTICLE_COUNT);
(0,_article_list_js__WEBPACK_IMPORTED_MODULE_1__.renderArticleList)(articles, articleListElement);
(0,_filters_js__WEBPACK_IMPORTED_MODULE_6__.setFilterClickHandler)(articles);

(0,_article_form_modal_js__WEBPACK_IMPORTED_MODULE_2__.setCreateArticleBtnClick)();
(0,_article_form_validation_js__WEBPACK_IMPORTED_MODULE_3__.executeValidation)();
(0,_animations_header_animations_js__WEBPACK_IMPORTED_MODULE_4__.setFormSearchElement)();
(0,_animations_header_animations_js__WEBPACK_IMPORTED_MODULE_4__.setSortList)();
(0,_animations_aside_animations_js__WEBPACK_IMPORTED_MODULE_5__.setAsideNavList)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map