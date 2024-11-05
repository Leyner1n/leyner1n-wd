const articleTemplate = document.getElementById('article');
const articleTemplateContent = articleTemplate.content;
const articleTemplateElement = articleTemplateContent.querySelector('div');

const  renderPhotoList = (photos, container) => {
    for (const photo of photos) {
        const html = `
            <li class="photo-item">
                <img class="" src="img/photo/${photo}" width="150" height="150" alt="">
            </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

const  renderArticleList = (articles, container) => {
    for (const article of articles) {
        const articleElement = articleTemplateElement.cloneNode(true);
        const photoListElement = articleElement.querySelector('.photo-list');

        articleElement.querySelector('.title').textContent = article.title;
        articleElement.querySelector('.content').textContent = article.content;
        articleElement.querySelector('.created-at').textContent = article.created_at;
        articleElement.querySelector('.username').textContent = article.user.name;
        articleElement.querySelector('.avatar').src = 'img/avatar/' + article.user.avatar_path;
        renderPhotoList(article.photos, photoListElement);

        container.append(articleElement);
    }
}

export {
    renderArticleList
}
