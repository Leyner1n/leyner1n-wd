import {openArticleModal} from "./article-modal";

const articleTemplate = document.getElementById('article');
const articleTemplateContent = articleTemplate.content;
const articleTemplateElement = articleTemplateContent.querySelector('div');

const renderPhotoList = (photos, container) => {
    for (const photo of photos) {
        const html = `
            <li class="photo-item">
                <img class="" src="img/photo/${photo}" width="150" height="150" alt="">
            </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

const renderArticleList = (articles, container) => {
    container.innerHTML = '';

    for (const article of articles) {
        const articleElement = articleTemplateElement.cloneNode(true);
        const photoListElement= articleElement.querySelector('.photo-list');

        articleElement.dataset.id = article.id;
        articleElement.querySelector('.title').textContent = article.title;
        articleElement.querySelector('.content').textContent = article.content;
        articleElement.querySelector('.created-at').textContent = article.created_at;
        articleElement.querySelector('.username').textContent = article.user.name;
        articleElement.querySelector('.avatar').src = 'img/avatar/' + article.user.avatar_path;
        renderPhotoList(article.photos, photoListElement);

        container.append(articleElement);
    }

    container.addEventListener('click', function (evt) {
        const articleElement = evt.target.closest('.article');
        const isUser = evt.target.closest('.user');
        if (articleElement && !isUser) {
            const articleId = Number(articleElement.dataset.id);
            const article = articles.find(function (article) {
                return article.id === articleId;
            });
            openArticleModal(article);
        }
    });
}

export {
    renderArticleList,
    renderPhotoList
}
