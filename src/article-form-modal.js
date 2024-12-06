const articleFormModal = document.getElementById('article-form-modal');
const articleFormOpenElement = document.getElementById('create-card');
const articleFormCloseBtn = document.getElementById('close-btn');

const openArticleFormModal = () => {
    articleFormModal.classList.add('open');
    document.body.classList.add('modal-open');

    articleFormCloseBtn.addEventListener('click', onCloseBtnClick)
    document.addEventListener('keydown', onEscKeyDown);
}

const closeArticleFormModal = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');


    document.removeEventListener('keydown', onEscKeyDown);
}

const onCloseBtnClick = () => {
    articleFormModal.classList.remove('open');
    document.body.classList.remove('modal-open');
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