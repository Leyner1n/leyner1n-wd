import { generateArticles } from './data.js';
import { renderArticleList } from './article-list.js';
import { setCreateArticleBtnClick } from './article-form-modal.js';
import { addPostFile } from "./article-form-content";
import { executeValidation } from "./article-form-validation";
import { setFormSearchElement } from "./animations/header-animations";
import { setSortList } from "./animations/header-animations";
import { setAsideNavList } from "./animations/aside-animations";

const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 32;

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);
setCreateArticleBtnClick();
addPostFile();
executeValidation();
setFormSearchElement();
setSortList();
setAsideNavList();
