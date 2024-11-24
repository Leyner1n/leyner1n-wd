import { generateArticles } from "./data";
import { renderArticleList } from "./article-list";
import {closeModal, openModal} from "./article-modal";

const articleListElement = document.getElementById('app');
// const ARTICLE_COUNT = 5;
const ARTICLE_COUNT = 10;
console.log(1)

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);
