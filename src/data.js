import {getRandomArrayElement, getRandomInt} from "./util";
import {ARTICLE_CONTENTS, ARTICLE_PHOTOS, ARTICLE_TITLES} from "./const";

const generateUser = () => {
    return {
        id: getRandomInt(1, 10),
        email: '@',
        password: '*****',
        avatar_path: './',
        locale: 'en',
        created_at: '2024-01-01',
    };
};

const generateArticle = () => {
    const photos = [];
    for (let i = 1; i <= getRandomInt(1, 3); i ++) {
        photos.push(getRandomArrayElement(ARTICLE_PHOTOS));
    }
    return {
        id: getRandomInt(1, 10),
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
        articles.push(generateArticle());
    }

    return articles;
};

export {
    generateArticles
}
