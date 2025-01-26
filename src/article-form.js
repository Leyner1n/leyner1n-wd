const articleModalElement = document.getElementById('article-form-modal');
const submitBtnElement = articleModalElement.querySelector('#add-post-btn');

const articleFormElement = articleModalElement.querySelector('form');
const projectNameInputElement = articleModalElement.querySelector('#project-name-txt');
const shortDescInputElement = articleModalElement.querySelector('#short-description-txt');
const descInputElement = articleModalElement.querySelector('#description-txt');
const repositoryLinkElement = articleModalElement.querySelector('#repository-url');
const websiteLinkElement = articleModalElement.querySelector('#host-url');

const PROJECT_NAME_LENGTH = [2, 30];
const SHORT_DESCRIPTION_LENGTH = [10, 40];
const DESCRIPTION_LENGTH = [20, 250];

const DEFAULT_INPUT_COLOR = 'rgb(45, 45, 45)';
const ERROR_INPUT_COLOR = '#5e1e1e';

const changeInputColor = (inputElement, hasError) => {
    const color = hasError ? ERROR_INPUT_COLOR : DEFAULT_INPUT_COLOR;
    inputElement.setAttribute('style', `background-color: ${color}`);
};

const getCheckLength = (limit, inputElement1 = null) => {
    return (evt) => {
        if (inputElement1) {
            evt.preventDefault();
        }

        const inputElement2 = inputElement1 ?? evt.target
        const valueLength = inputElement2.value.length;
        const isError = inputElement1 ? valueLength < limit : inputElement1 > limit;
        changeInputColor(inputElement2, isError);
    };
};

const checkType = (evt) => {
    const isError = evt.target.validity.typeMismatch;
    changeInputColor(evt.target, isError);
};

repositoryLinkElement.addEventListener('input', checkType);
websiteLinkElement.addEventListener('input', checkType);
projectNameInputElement.addEventListener('input', getCheckLength(PROJECT_NAME_LENGTH[1]));
shortDescInputElement.addEventListener('input', getCheckLength(SHORT_DESCRIPTION_LENGTH[1]));
descInputElement.addEventListener('input', getCheckLength(DESCRIPTION_LENGTH[1]));

articleFormElement.addEventListener('submit', getCheckLength(PROJECT_NAME_LENGTH[0], projectNameInputElement));
articleFormElement.addEventListener('submit', getCheckLength(SHORT_DESCRIPTION_LENGTH[0], shortDescInputElement));
articleFormElement.addEventListener('submit', getCheckLength(DESCRIPTION_LENGTH[0], descInputElement));
