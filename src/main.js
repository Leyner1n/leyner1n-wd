import { generateArticles } from './data.js';
import { renderArticleList } from './article-list.js';
import { setCreateArticleBtnClick } from './article-form-modal.js';
import { executeValidation } from './article-form-validation.js';
import { setFormSearchElement } from './animations/header-animations.js';
import { setSortList } from './animations/header-animations.js';
import { setAsideNavList } from './animations/aside-animations.js';
import { setFilterClickHandler } from './filters.js';

const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 10;

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);
setFilterClickHandler(articles);

setCreateArticleBtnClick();
executeValidation();
setFormSearchElement();
setSortList();
setAsideNavList();
