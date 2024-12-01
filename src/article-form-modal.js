const articleFormModal = document.getElementById('article-form-modal');
const articleFormOpenElement = document.getElementById('create-card');

const openArticleFormModal = () => {
    console.log(1);
    articleFormModal.classList.add('open');
    document.body.classList.add('modal-open');

    articleFormModal.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleFormModal = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');

    articleFormOpenElement.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscKeyDown);
}

const onOverlayClick = (evt) => {
    if (!evt.target.matches('.modal-body')) {
        closeArticleFormModal()
    }
}

const onEscKeyDown = (evt) => {
    if (evt.code === 'Escape') {
        closeArticleFormModal()
    }
}

const setCreateArticleBtnClick = () => {
    articleFormOpenElement.addEventListener('click', openArticleFormModal);
}

export {
    setCreateArticleBtnClick
}