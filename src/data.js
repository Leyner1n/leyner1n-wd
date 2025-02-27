import { getRandomArrayElement, getRandomInt } from './util.js';
import { Locale, Extention } from './enum.js';
import { ARTICLE_CONTENTS, ARTICLE_TITLES, ARTICLE_DATES, ARTICLE_COMMENTS, ARTICLE_DESCRIPTION } from './const.js';

const MAX_PHOTO_COUNT = 3;
const MAX_AVATAR_COUNT = 9;
const MAX_USER_COUNT = 4;
const MAX_LIKE_COUNT = 50;
const MAX_COMMENT_COUNT = 20;

const getItems = (range, callback, args = []) => {
    const items = [];
    range = range.length === 2 ? getRandomInt(...range) : range[0];

    for (let i = 0; i < range; i++) {
        if (args.length) {
            items.push(callback[0](...callback[1]) + args[0]);
        } else {
            items.push(callback[0](...callback[1] ?? []));
        }
    }

    return items;
};

const generateUser = () => {
    return {
        id: getRandomInt(1, MAX_USER_COUNT),
        name: 'mr.Death',
        email: 'dev@dev.dev',
        password: '123456',
        avatar_path: getRandomInt(1, MAX_AVATAR_COUNT) + Extention.Jpg,
        locale: Locale.English,
        created_at: '2025-01-01',
    };
};

const generateComment = () => {
    return {
        id: getRandomInt(1, MAX_USER_COUNT),
        txt_content: getRandomArrayElement(ARTICLE_COMMENTS),
        user: generateUser(),
        created_at: getRandomArrayElement(ARTICLE_DATES)
    }
}

const generateArticle = function (maxArticleId) {
    // статическая переменная
    if (generateArticle.usedArticleIds === undefined) {
        generateArticle.usedArticleIds = [];
    }

    let articleId = getRandomInt(1, maxArticleId);
    while (generateArticle.usedArticleIds.includes(articleId)) {
        articleId = getRandomInt(1, maxArticleId);
    }

    generateArticle.usedArticleIds.push(articleId);

    return {
        id: articleId,
        title: getRandomArrayElement(ARTICLE_TITLES),
        txt_content: getRandomArrayElement(ARTICLE_CONTENTS),
        description: getRandomArrayElement(ARTICLE_DESCRIPTION),
        likes: getRandomInt(1, MAX_LIKE_COUNT),
        comments: getItems([0, MAX_COMMENT_COUNT], [generateComment]),
        user: generateUser(),
        photos: getItems([1, MAX_PHOTO_COUNT], [getRandomInt, [1, 10]], [Extention.Jpg]),
        created_at: getRandomArrayElement(ARTICLE_DATES)
    };
};

const generateArticles = (count) => {
    return getItems([count], [generateArticle, [count]]);
};

export {
    generateArticles
}
