import {getRandomArrayElement, getRandomInt} from "./util";
import {ARTICLE_CONTENTS, ARTICLE_PHOTOS, ARTICLE_TITLES} from "./const";

const MAX_PHOTO_COUNT = 3;

const generateUser = () => {
    return {
        id: getRandomInt(1, 4),
        email: '@',
        password: '*****',
        avatar_path: './',
        locale: 'en',
        created_at: '2024-01-01',
    };
};

const usedArticleIds = [];

const generateArticle = (maxArticleId) => {
    let articleId = getRandomInt(1, maxArticleId);
    while (usedArticleIds.includes(articleId)) {
        articleId = getRandomInt(1, maxArticleId);
    }
    usedArticleIds.push(articleId);

    const photos = [];
    for (let i = 1; i <= getRandomInt(1, MAX_PHOTO_COUNT); i++) {
        photos.push(getRandomArrayElement(ARTICLE_PHOTOS));
    }

    return {
        id: articleId,
        title: getRandomArrayElement(ARTICLE_TITLES),
        content: getRandomArrayElement(ARTICLE_CONTENTS),
        created_at: '2024-01-01',
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

export {
    generateArticles
}
