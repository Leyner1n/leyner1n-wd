import { generateArticles } from './data.js';
import { renderArticleList } from './article-list.js';
import { setFilterClickHandler } from './filters.js';
import './article-form-modal.js';
import './article-form-validation.js';
import './animations/header-animations.js';
import './animations/aside-animations.js';

const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 30;

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);
setFilterClickHandler(articles);
