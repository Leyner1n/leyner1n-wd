const articleElement = document.querySelector('#article-modal');

const formWriteArticleComment = articleElement.querySelector('.write-comment');
const formSendBtn = articleElement.querySelector('.send-comment');
const sortCommentElent = articleElement.querySelector('.comment-sorter');

const openFormComment = () => {
    formWriteArticleComment.classList.add('write');
    formSendBtn.classList.add('write');

    document.addEventListener('click', onOverlayClick);
}

const closeFormComment = () => {
    formWriteArticleComment.classList.remove('write');
    formSendBtn.classList.remove('write');

    formWriteArticleComment.removeEventListener('click', onOverlayClick);
}

const onOverlayClick = (evt) => {
    if (!([formWriteArticleComment, formSendBtn].includes(evt.target))) {
        closeFormComment()
    }
}

formWriteArticleComment.addEventListener('click', openFormComment);
