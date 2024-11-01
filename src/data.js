const generateUser = () => {
    return {
        id: 1,
        email: '@',
        password: '*****',
        avatar_path: './',
        locale: 'en',
        created_at: '2024-01-01',
    }
};

const generateArticle = () => {
    return {
        id: 1, 
        title: 'how we work with that project?', 
        content: 'bla-bla',
        created_at: '2024-01-01',
        user: generateUser(),
        photos: [
            '1.jpeg', 
            '2.jpeg',
            '3.jpeg',
        ]
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
