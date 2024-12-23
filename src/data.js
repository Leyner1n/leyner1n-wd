import {getRandomArrayElement, getRandomInt} from "./util";
import {ARTICLE_CONTENTS, ARTICLE_PHOTOS, ARTICLE_TITLES, ARTICLE_DATES} from "./const";

const MAX_PHOTO_COUNT = 3;
const MAX_AVATAR_COUNT = 9;
const MAX_USER_COUNT = 4;
const MAX_LIKES = 50;
const MAX_COMMENTS = 34;


const generateUser = () => {
    return {
        id: getRandomInt(1, MAX_USER_COUNT),
        name: 'mr.Death',
        email: '@',
        password: '*****',
        avatar_path: getRandomInt(1, MAX_AVATAR_COUNT) + '.jpg',
        locale: 'en',
        created_at: '2025-01-01',
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
        created_at: getRandomArrayElement(ARTICLE_DATES),
        likes: getRandomInt(1, MAX_LIKES),
        comments: getRandomInt(1, MAX_COMMENTS),
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
    generateArticle,
    generateArticles
}
