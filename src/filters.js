import { Filter } from './enum.js';
import { renderArticleList } from './article-list.js';

const sortListElement = document.querySelector('.sort-list');
const articleListElement = document.getElementById('app');

// деструктуризация объекта
const compareArticlesByDate = ({created_at: createdA}, {created_at: createdB}) => {
    const dateA = new Date(createdA);
    const dateB = new Date(createdB);

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
        if (!Object.values(Filter).includes(filter)) {
            return;
        }

        switch (filter) {
            case Filter.ALL:
                renderArticleList(articles, articleListElement);
                break;
            case Filter.POPULAR:
                renderArticleList(articles.slice().sort(compareArticlesByPopularity), articleListElement);
                break;
            case Filter.NEW:
                renderArticleList(articles.slice().sort(compareArticlesByDate), articleListElement);
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
