import { Filter } from './enum.js';
import { renderArticleList } from './article-list.js';

const sortListElement = document.querySelector('.sort-list');
const articleListElement = document.getElementById('app');

const compareArticles = (articleA, articleB) => {
    const dateA = new Date(articleA.created_at);
    const dateB = new Date(articleB.created_at);

    return dateB.getTime() - dateA.getTime();
}

// замыкание
const getFilterClickHandler = (articles) => {
    return (evt) => {
        if (!evt.target.matches('a')) {
            return;
        }

        const filter = evt.target.id.split('-')[2] ?? null;
        if (!Object.values(Filter).includes(filter)) {
            return;
        }

        switch (filter) {
            case Filter.ALL:
                renderArticleList(articles, articleListElement);
                break;
            case Filter.POPULAR:
                renderArticleList(articles, articleListElement);
                break;
            case Filter.NEW:
                renderArticleList(articles.slice().sort(compareArticles), articleListElement);
                break;
        }
    };
}

const setFilterClickHandler = (articles) => {
    sortListElement.addEventListener('click', getFilterClickHandler(articles));
}

export {
    setFilterClickHandler
}
