import { renderPhotoList } from './article-list.js';

const articleModalElement = document.getElementById('article-modal');

const exitArticleElement = document.getElementById('close-article-btn');
const articleModalAvatarElement = articleModalElement.querySelector('.avatar');
const articleModalUsernameElement = articleModalElement.querySelector('.username');
const articleModalCreatedAtElement = articleModalElement.querySelector('.created-at');
const articleModalTitleElement = articleModalElement.querySelector('.title');
const articleModalDescriptionElement = articleModalElement.querySelector('.description');
const photoListElement = articleModalElement.querySelector('.photo-list');
const articleElement = articleModalElement.querySelector('.comments-list');
const articleCommentCounterelement = articleModalElement.querySelector('.comment-counter')

const renderCommentList = (comments, container) => {
    for (const comment of comments) {
        const html = `
            <li class="photo-item">
                <a>
                    <img class="commentator-avatar" src="img/avatar/${comment.user.avatar_path}" height="45" width="45" alt="">
                </a>
                <div class="comment-txt">
                    <div class="commentator">
                        <a class="info">${comment.user.name}</a>
                        <p class="info">${comment.created_at}</p>
                    </div>
                    <p class="user-comment">${comment.txt_content}</p>
                </div>
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
    articleModalDescriptionElement.textContent = article.description;
    articleCommentCounterelement.textContent = article.comments.length + ' Comments';

    renderCommentList(article.comments, articleElement);
    renderPhotoList(article.photos, photoListElement);

    articleModalElement.classList.add('open');
    document.body.classList.add('modal-open');

    articleModalElement.addEventListener('click', onExitClick);
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleModal = () => {
    articleModalElement.classList.remove('open');
    document.body.classList.remove('modal-open');

    exitArticleElement.removeEventListener('click', onExitClick)
    document.removeEventListener('keydown', onEscKeyDown);
}

const onExitClick = (evt) => {
    if (evt.target === (exitArticleElement)) {
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
}