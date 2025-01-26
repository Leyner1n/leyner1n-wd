const articleModalElement = document.getElementById('article-form-modal');
const articleModalCloseElement = articleModalElement.querySelector('#close-btn');
const homeBtnElement = document.getElementById('home-btn');

const openArticleModal = () => {
    articleModalElement.classList.add('open');
    document.body.classList.add('modal-open');

    homeBtnElement.addEventListener('click', closeArticleModal);
    articleModalCloseElement.addEventListener('click', closeArticleModal);
    document.addEventListener('keydown', onModalEscKeydown);
};

const closeArticleModal = () => {
    articleModalElement.classList.remove('open');
    document.body.classList.remove('modal-open');

    homeBtnElement.removeEventListener('click', closeArticleModal);
    articleModalCloseElement.removeEventListener('click', closeArticleModal);
    document.removeEventListener('keydown', onModalEscKeydown);
};

const onModalEscKeydown = (evt) => {
    if (evt.code === 'Escape') {
        closeArticleModal();
    }
};

export {
    openArticleModal
}
