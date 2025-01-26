import { generateArticles } from './data.js';
import { renderArticleList } from './article-list.js';
import { setFilterClickHandler } from './filters.js';
import './article-form-modal.js';
import './article-form.js';
import './main-header.js';
import './sidebar.js';
import './comments.js';
import './user/main.js';

const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 30;

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);
setFilterClickHandler(articles);
