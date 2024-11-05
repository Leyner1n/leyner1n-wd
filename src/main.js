import { generateArticles } from "./data";
import { renderArticleList } from "./article-list";

const articleListElement = document.getElementById('app');
const ARTICLE_COUNT = 5;

const articles = generateArticles(ARTICLE_COUNT);
renderArticleList(articles, articleListElement);

console.log(articles);
