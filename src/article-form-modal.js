const articleFormModal = document.getElementById('article-form-modal');
const articleFormOpenElement = document.getElementById('create-card');
const articleFormCloseBtn = document.getElementById('close-btn');

const repositoryUrlElement = document.getElementById('repository-url');
const hostUrlElement = document.getElementById('host-url');
const addPostBtn = document.getElementById('add-post-btn');

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

const urlValidation = () => {
    repositoryUrlElement.addEventListener('input', checkUrl);
    hostUrlElement.addEventListener('input', checkUrl);
}

const checkUrl = (evt) => {
    let urlError = 'rgb(45, 45, 45)'
    let createPostTheme = 'rgb(8, 101, 41)'

    if (evt.target.validity.typeMismatch) {
        urlError = createPostTheme = '#5e1e1e'
    }

    addPostBtn.setAttribute('style', 'background-color: ' + createPostTheme);
    evt.target.setAttribute('style', 'background-color: ' + urlError);
}

export {
    setCreateArticleBtnClick,
    urlValidation
}
