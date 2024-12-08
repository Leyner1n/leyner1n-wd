import { generateArticles } from './data.js';
import { renderArticleList } from './article-list.js';
import { setCreateArticleBtnClick } from './article-form-modal.js';
import { addPostFile } from "./article-form-content";
import { urlValidation } from "./article-form-modal.js";

const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 32;

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);
setCreateArticleBtnClick();
addPostFile();
urlValidation();
