import {renderPhotoList} from "./article-list";

const articleModalElement = document.getElementById('article-modal');

const articleModalAvatarElement = articleModalElement.querySelector('.avatar');
const articleModalUsernameElement = articleModalElement.querySelector('.username');
const articleModalCreatedAtElement = articleModalElement.querySelector('.created-at');
const articleModalTitleElement = articleModalElement.querySelector('.title');
const articleModalDescriptionElement = articleModalElement.querySelector('.description');
const photoListElement = articleModalElement.querySelector('.photo-list');
const articleElement = articleModalElement.querySelector('.comments-list');

const renderCommentList = (comments, container) => {
    for (const comment of comments) {
        const html = `
            <li class="photo-item">
                <p>${comment.txt_content}</p>
            </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

const openArticleModal = (article) => {
    photoListElement.innerHTML = '';
    articleElement.innerHTML = '';
    articleModalAvatarElement.src = 'img/avatar/' + article.user.avatar_path;
    articleModalUsernameElement.textContent = article.user.name;
    articleModalCreatedAtElement.textContent = article.created_at;
    articleModalTitleElement.textContent = article.title;
    articleModalDescriptionElement.textContent =article.description;

    renderCommentList(article.comments, articleElement);
    renderPhotoList(article.photos, photoListElement);

    articleModalElement.classList.add('open');
    document.body.classList.add('modal-open');

    articleModalElement.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleModal = () => {
    articleModalElement.classList.remove('open');
    document.body.classList.remove('modal-open');

    articleModalElement.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscKeyDown);
}

const onOverlayClick = (evt) => {
    if (!evt.target.matches('.modal-body')) {
        closeArticleModal()
    }
}

const onEscKeyDown = (evt) => {
    if (evt.code === 'Escape') {
        closeArticleModal()
    }
}

export {
    openArticleModal,
    closeArticleModal,
    renderCommentList
}
